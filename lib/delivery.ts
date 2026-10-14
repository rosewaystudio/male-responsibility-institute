// Where form submissions go is NOT decided yet. These two functions are the only places to wire it up.
// Until then: in development, submissions print to the terminal. In production, each form tells the
// visitor it isn't open yet (the booking form points to the direct email), so nothing is silently lost.

export type Inquiry = {
  name: string;
  organization: string;
  email: string;
  eventDetails: string;
  audience: string;
  attendance: string;
  bundle: boolean;
  bookCount: string;
  message: string;
};

export type DeliveryResult = { delivered: true } | { delivered: false; reason: "not-configured" | "failed" };

export async function deliverInquiry(inquiry: Inquiry): Promise<DeliveryResult> {
  // TODO: send the inquiry once a destination is chosen. Options:
  //  - Email via Resend:  await resend.emails.send({ to: ..., subject: ..., text: ... })
  //  - Formspree:         await fetch(process.env.FORMSPREE_ENDPOINT!, { method: "POST", ... })
  //  - Airtable + email:  create a record, then send a notification
  // Return { delivered: false, reason: "failed" } if the provider call throws.
  if (process.env.NODE_ENV === "development") {
    console.log("[booking inquiry — dev only, not delivered]", inquiry);
    return { delivered: true };
  }
  return { delivered: false, reason: "not-configured" };
}

export async function deliverSignup(email: string): Promise<DeliveryResult> {
  // TODO: add the address to the mailing list once a tool is chosen
  // (Mailchimp, Kit, Buttondown, Beehiiv…). Most offer a one-call "add subscriber" API.
  if (process.env.NODE_ENV === "development") {
    console.log("[email sign-up — dev only, not delivered]", email);
    return { delivered: true };
  }
  return { delivered: false, reason: "not-configured" };
}
