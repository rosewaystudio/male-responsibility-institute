"use client";

import { useActionState } from "react";
import { submitSignup, type FormState } from "@/app/actions";

const initialState: FormState = { status: "idle" };

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(submitSignup, initialState);
  const sent = state.status === "success";

  return (
    <div>
      <form action={formAction} noValidate>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="signup-website">Leave this field empty</label>
          <input id="signup-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <label htmlFor="signup-email" className="sr-only">Email address</label>
        <input id="signup-email" name="email" type="email" placeholder="Your email address" autoComplete="email"
          required aria-describedby="signup-status" />
        <button className="btn btn-gold" type="submit" disabled={pending || sent}>
          <span>{sent ? "Subscribed" : pending ? "Signing up…" : "Sign Up"}</span>
        </button>
      </form>
      <p id="signup-status" className={`form-status${state.status === "error" ? " is-error" : ""}`} role="status" aria-live="polite">
        {state.message}
      </p>
    </div>
  );
}
