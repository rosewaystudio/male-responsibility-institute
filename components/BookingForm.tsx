"use client";

import { useActionState } from "react";
import { submitInquiry, type FormState } from "@/app/actions";
import { audienceOptions, book } from "@/lib/content";

const initialState: FormState = { status: "idle" };

export default function BookingForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const errors = state.fieldErrors ?? {};
  const sent = state.status === "success";

  const invalid = (key: keyof typeof errors) => ({
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });
  const error = (key: keyof typeof errors) =>
    errors[key] ? <p id={`${key}-error`} className="field-error">{errors[key]}</p> : null;

  return (
    <form className="inq" action={formAction} noValidate>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="inq-website">Leave this field empty</label>
        <input id="inq-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="row2">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="First & last" autoComplete="name" required {...invalid("name")} />
          {error("name")}
        </div>
        <div className="field">
          <label htmlFor="organization">Organization</label>
          <input id="organization" name="organization" type="text" placeholder="School, company, foundation…"
            autoComplete="organization" required {...invalid("organization")} />
          {error("organization")}
        </div>
      </div>

      <div className="row2">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@org.org" autoComplete="email" required {...invalid("email")} />
          {error("email")}
        </div>
        <div className="field">
          <label htmlFor="eventDetails">Event date &amp; city</label>
          <input id="eventDetails" name="eventDetails" type="text" placeholder="e.g. Mar 12, 2027 · Chicago" />
        </div>
      </div>

      <div className="row2">
        <div className="field">
          <label htmlFor="audience">Audience type</label>
          <select id="audience" name="audience" defaultValue="">
            <option value="" disabled>Choose one…</option>
            {audienceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="attendance">Expected attendance</label>
          <input id="attendance" name="attendance" type="text" inputMode="numeric" placeholder="e.g. 250" />
        </div>
      </div>

      {/* The number-of-books field appears when this is checked (CSS in globals.css). */}
      <label className="check">
        <input type="checkbox" name="bundle" />
        <div>
          <b>Add the Book + Talk bundle</b>
          <span>A copy of <em>{book.title}</em> for every attendee.</span>
        </div>
      </label>
      <div className="field qty">
        <label htmlFor="bookCount">Number of books</label>
        <input id="bookCount" name="bookCount" type="number" min={1} placeholder="e.g. 250" {...invalid("bookCount")} />
        {error("bookCount")}
      </div>

      <div className="field">
        <label htmlFor="message">Tell us about the engagement</label>
        <textarea id="message" name="message" rows={3} placeholder="Format, topic of interest, budget range…" />
      </div>

      <button className={`btn submit${sent ? " is-sent" : ""}`} type="submit" disabled={pending || sent}>
        <span>{sent ? "Inquiry Received" : pending ? "Sending…" : "Submit Inquiry"}</span>
        <span className="arr" aria-hidden="true">→</span>
      </button>

      <p className={`form-status${state.status === "error" ? " is-error" : ""}`} role="status" aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}
