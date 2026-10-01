// Where booking inquiries go is NOT decided yet. This is the one place to wire it up.
// Until then: in development, inquiries are logged to the terminal; in production,
// the form tells the visitor it isn't accepting submissions and shows the direct email,
// so no inquiry is ever silently lost.

export type Inquiry = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  eventDetails: string;
  audience: string;
  message: string;
};

export type DeliveryResult = { delivered: true } | { delivered: false; reason: "not-configured" | "failed" };

export async function deliverInquiry(inquiry: Inquiry): Promise<DeliveryResult> {
  // TODO: replace this block once a destination is chosen. Options:
  //  - Email via Resend:   await resend.emails.send({ to: ..., subject: ..., text: format(inquiry) })
  //  - Formspree:          await fetch(process.env.FORMSPREE_ENDPOINT!, { method: "POST", ... })
  //  - Airtable + email:   create a record, then send a notification
  // Return { delivered: false, reason: "failed" } if the provider call throws.

  if (process.env.NODE_ENV === "development") {
    console.log("[booking inquiry — dev only, not delivered]", inquiry);
    return { delivered: true };
  }
  return { delivered: false, reason: "not-configured" };
}
