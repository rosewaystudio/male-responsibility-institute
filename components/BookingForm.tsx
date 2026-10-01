"use client";

import { useActionState } from "react";
import { submitInquiry, type FormState } from "@/app/actions";
import { audienceOptions } from "@/lib/content";

const initialState: FormState = { status: "idle" };

export default function BookingForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const errors = state.fieldErrors ?? {};
  const sent = state.status === "success";

  return (
    <form className="inquiry" action={formAction} noValidate>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="First & last" autoComplete="name"
            required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="organization">Organization</label>
          <input id="organization" name="organization" type="text" placeholder="School, company, foundation…"
            autoComplete="organization" required aria-invalid={!!errors.organization}
            aria-describedby={errors.organization ? "organization-error" : undefined} />
          {errors.organization && <p id="organization-error" className="field-error">{errors.organization}</p>}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@org.org" autoComplete="email"
            required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="(___) ___ · ____" autoComplete="tel" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="eventDetails">Event date &amp; city</label>
          <input id="eventDetails" name="eventDetails" type="text" placeholder="e.g. Oct 12, 2026 · Chicago" />
        </div>
        <div className="field">
          <label htmlFor="audience">Audience type</label>
          <select id="audience" name="audience" defaultValue="">
            <option value="" disabled>Choose one…</option>
            {audienceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Tell us about the engagement</label>
        <textarea id="message" name="message" rows={4}
          placeholder="Audience size, format, topic of interest, budget range, anything else we should know…" />
      </div>

      <button className={`submit${sent ? " is-sent" : ""}`} type="submit" disabled={pending || sent}>
        <span>{sent ? "Inquiry Received" : pending ? "Sending…" : "Submit Inquiry"}</span>
        <span className="serif" style={{ fontSize: 18, letterSpacing: 0 }}>→</span>
      </button>

      <p className={`form-status${state.status === "error" ? " is-error" : " is-success"}`} role="status" aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}
