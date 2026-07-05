"use client";

import React, { useActionState } from "react";
import { sendEnquiry, type EnquiryState } from "../../src/app/actions";

const initialState: EnquiryState = { status: "idle", message: "" };

const inputClasses =
  "w-full rounded-lg border border-green1/20 bg-white px-4 py-2.5 text-green1 outline-none transition focus:border-green1 focus:ring-2 focus:ring-green1/30";

const EnquiryForm = () => {
  const [state, formAction, isPending] = useActionState(sendEnquiry, initialState);
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div
        className="flex h-full flex-col items-center justify-center rounded-lg bg-cream p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white">
          ✓
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-green1">Enquiry sent!</h3>
        <p className="text-green1">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-cream shadow-md rounded-lg p-6" noValidate>
      <h3 className="text-2xl font-semibold text-green1 mb-4">Plan Your Trip</h3>
      <p className="text-green1 mb-6">
        Tell us where you&apos;d like to go and we&apos;ll craft the perfect itinerary.
      </p>

      {state.status === "error" && !state.errors && (
        <p className="mb-4 rounded-md bg-red-100 px-4 py-2 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      )}

      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0"
      />

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-green1">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-invalid={!!errors.name}
            className={inputClasses}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-green1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-invalid={!!errors.email}
            className={inputClasses}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="destination" className="mb-1 block text-sm font-medium text-green1">
              Destination
            </label>
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="e.g. Maasai Mara"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="travelDate" className="mb-1 block text-sm font-medium text-green1">
              Travel date
            </label>
            <input id="travelDate" name="travelDate" type="date" className={inputClasses} />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-green1">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            aria-invalid={!!errors.message}
            className={`${inputClasses} resize-y`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-green1 px-6 py-3 font-semibold text-cream transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending…" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;
