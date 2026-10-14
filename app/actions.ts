"use server";

import { deliverInquiry, deliverSignup, type Inquiry } from "@/lib/delivery";
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
  // Honeypot: people never see or fill this field; bots usually do.
  if (field(data, "website")) return { status: "success", message: "Inquiry received." };

  const inquiry: Inquiry = {
    name: field(data, "name"),
    organization: field(data, "organization"),
    email: field(data, "email"),
    eventDetails: field(data, "eventDetails"),
    audience: field(data, "audience"),
    attendance: field(data, "attendance"),
    bundle: data.get("bundle") === "on",
    bookCount: field(data, "bookCount"),
    message: field(data, "message"),
  };

  const fieldErrors: FormState["fieldErrors"] = {};
  if (!inquiry.name) fieldErrors.name = "Enter your name.";
  if (!inquiry.organization) fieldErrors.organization = "Enter your organization.";
  if (!EMAIL_RE.test(inquiry.email)) fieldErrors.email = "Enter a valid email address.";
  if (inquiry.bundle && inquiry.bookCount && !/^[1-9]\d*$/.test(inquiry.bookCount)) {
    fieldErrors.bookCount = "Enter a whole number of books.";
  }
  if (!inquiry.bundle) inquiry.bookCount = "";
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors };
  }

  const result = await deliverInquiry(inquiry);
  if (result.delivered) {
    return { status: "success", message: "Inquiry received. Expect a reply within two business days." };
  }
  return {
    status: "error",
    message: `Online booking isn't accepting requests yet. Email ${site.contact.email} directly.`,
  };
}

export async function submitSignup(_prev: FormState, data: FormData): Promise<FormState> {
  if (field(data, "website")) return { status: "success", message: "You're on the list." };
  const email = field(data, "email");
  if (!EMAIL_RE.test(email)) return { status: "error", message: "Enter a valid email address." };

  const result = await deliverSignup(email);
  if (result.delivered) return { status: "success", message: "You're on the list." };
  return { status: "error", message: "Email sign-up isn't open yet. Check back soon." };
}
