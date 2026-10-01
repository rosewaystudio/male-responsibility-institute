"use server";

import { deliverInquiry, type Inquiry } from "@/lib/inquiry";
import { site } from "@/lib/content";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof Inquiry, string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 5000;

function field(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === "string" ? value.trim().slice(0, MAX_LEN) : "";
}

export async function submitInquiry(_prev: FormState, data: FormData): Promise<FormState> {
  // Honeypot: real people never see or fill this field.
  if (field(data, "website")) return { status: "success", message: "Inquiry received." };

  const inquiry: Inquiry = {
    name: field(data, "name"),
    organization: field(data, "organization"),
    email: field(data, "email"),
    phone: field(data, "phone"),
    eventDetails: field(data, "eventDetails"),
    audience: field(data, "audience"),
    message: field(data, "message"),
  };

  const fieldErrors: FormState["fieldErrors"] = {};
  if (!inquiry.name) fieldErrors.name = "Enter your name.";
  if (!inquiry.organization) fieldErrors.organization = "Enter your organization.";
  if (!EMAIL_RE.test(inquiry.email)) fieldErrors.email = "Enter a valid email address.";
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors };
  }

  const result = await deliverInquiry(inquiry);
  if (result.delivered) {
    return {
      status: "success",
      message: "Inquiry received. Expect a reply within two business days.",
    };
  }
  return {
    status: "error",
    message: `Online booking isn't accepting requests yet. Email ${site.contact.email} directly.`,
  };
}
