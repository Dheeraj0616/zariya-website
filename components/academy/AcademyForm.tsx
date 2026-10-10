"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  background: string;
  experience: string;
  motivation: string;
  callTime: string;
  consent: boolean;
  website: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  background: "",
  experience: "",
  motivation: "",
  callTime: "",
  consent: false,
  website: "",
};

const inputClasses =
  "mt-2 min-h-12 w-full min-w-0 rounded-sm border border-[#012745]/20 bg-white/70 px-4 py-3 text-sm text-[#012745] placeholder:text-[#012745]/45 outline-none transition-[border-color,box-shadow,background-color] duration-200 focus:border-[#DA8F0E] focus:bg-white focus:ring-2 focus:ring-[#DA8F0E]/25";

const labelClasses = "text-sm font-semibold text-[#012745]";

const selectOptionClasses = "bg-[#E7E4DC] text-[#012745]";

export function AcademyForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  function updateField<K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function validateForm() {
    if (!formData.fullName.trim()) {
      return "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      return "Please enter your email address.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      return "Please enter your phone or WhatsApp number.";
    }

    if (!formData.city.trim()) {
      return "Please enter your city.";
    }

    if (!formData.background.trim()) {
      return "Please select your current background.";
    }

    if (!formData.experience.trim()) {
      return "Please select your prior coffee or barista experience.";
    }

    if (!formData.motivation.trim()) {
      return "Please tell us why you want to join.";
    }

    if (formData.motivation.length > 600) {
      return "Your response must be 600 characters or fewer.";
    }

    if (!formData.consent) {
      return "Please consent to being contacted about your application.";
    }

    return "";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") return;

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    // Honeypot: silently ignore submissions that fill this hidden field.
    if (formData.website) return;

    setError("");
    setStatus("submitting");

    // Backend integration is not connected yet.
    window.setTimeout(() => {
      setStatus("error");
      setError(
        "The application service is not connected yet. Your details have not been submitted. Please contact Zariya directly while online applications are being enabled.",
      );
    }, 400);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-[#012745]/15 bg-white/50 p-6 sm:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BE2E14]">
          Application received
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-[#012745]">
          Thank you for applying.
        </h3>
        <p className="mt-4 text-base leading-7 text-[#012745]/70">
          We&apos;ll review your application personally and get back to you
          within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="min-w-0 space-y-6"
      aria-describedby={status === "error" ? "academy-form-error" : undefined}
    >
      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="academy-website">Website</label>
        <input
          id="academy-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      {/* Full name and email */}
      <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6">
        <div className="min-w-0">
          <label htmlFor="academy-fullName" className={labelClasses}>
            Full name <span className="text-[#BE2E14]">*</span>
          </label>
          <input
            id="academy-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className={inputClasses}
            placeholder="Your full name"
          />
        </div>

        <div className="min-w-0">
          <label htmlFor="academy-email" className={labelClasses}>
            Email <span className="text-[#BE2E14]">*</span>
          </label>
          <input
            id="academy-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Phone and city */}
      <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6">
        <div className="min-w-0">
          <label htmlFor="academy-phone" className={labelClasses}>
            Phone / WhatsApp <span className="text-[#BE2E14]">*</span>
          </label>
          <input
            id="academy-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClasses}
            placeholder="+91 ..."
          />
        </div>

        <div className="min-w-0">
          <label htmlFor="academy-city" className={labelClasses}>
            City <span className="text-[#BE2E14]">*</span>
          </label>
          <input
            id="academy-city"
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            value={formData.city}
            onChange={(event) => updateField("city", event.target.value)}
            className={inputClasses}
            placeholder="Your city"
          />
        </div>
      </div>

      {/* Current background */}
      <div>
        <label htmlFor="academy-background" className={labelClasses}>
          Current background <span className="text-[#BE2E14]">*</span>
        </label>
        <select
          id="academy-background"
          name="background"
          required
          value={formData.background}
          onChange={(event) => updateField("background", event.target.value)}
          className={inputClasses}
        >
          <option value="" className={selectOptionClasses}>
            Select your current background
          </option>
          <option value="Student" className={selectOptionClasses}>
            Student
          </option>
          <option
            value="Working professional"
            className={selectOptionClasses}
          >
            Working professional
          </option>
          <option
            value="Café or hospitality"
            className={selectOptionClasses}
          >
            Café or hospitality
          </option>
          <option value="Other" className={selectOptionClasses}>
            Other
          </option>
        </select>
      </div>

      {/* Prior experience */}
      <div>
        <label htmlFor="academy-experience" className={labelClasses}>
          Prior coffee or barista experience{" "}
          <span className="text-[#BE2E14]">*</span>
        </label>
        <select
          id="academy-experience"
          name="experience"
          required
          value={formData.experience}
          onChange={(event) => updateField("experience", event.target.value)}
          className={inputClasses}
        >
          <option value="" className={selectOptionClasses}>
            Select your experience level
          </option>
          <option value="None" className={selectOptionClasses}>
            None
          </option>
          <option value="Beginner" className={selectOptionClasses}>
            Beginner
          </option>
          <option
            value="Some professional experience"
            className={selectOptionClasses}
          >
            Some professional experience
          </option>
        </select>
      </div>

      {/* Motivation */}
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor="academy-motivation" className={labelClasses}>
            Why do you want to join?{" "}
            <span className="text-[#BE2E14]">*</span>
          </label>
          <span
            aria-live="polite"
            className="shrink-0 text-xs tabular-nums text-[#012745]/50"
          >
            {formData.motivation.length}/600
          </span>
        </div>
        <textarea
          id="academy-motivation"
          name="motivation"
          required
          maxLength={600}
          rows={4}
          value={formData.motivation}
          onChange={(event) => updateField("motivation", event.target.value)}
          className={`${inputClasses} resize-y`}
          placeholder="Tell us why you want to learn the Barista Method."
        />
      </div>

      {/* Preferred call time */}
      <div>
        <label htmlFor="academy-callTime" className={labelClasses}>
          Preferred time for our call{" "}
          <span className="font-normal text-[#012745]/50">(optional)</span>
        </label>
        <select
          id="academy-callTime"
          name="callTime"
          value={formData.callTime}
          onChange={(event) => updateField("callTime", event.target.value)}
          className={inputClasses}
        >
          <option value="" className={selectOptionClasses}>
            Select a preferred time
          </option>
          <option value="Morning" className={selectOptionClasses}>
            Morning
          </option>
          <option value="Afternoon" className={selectOptionClasses}>
            Afternoon
          </option>
          <option value="Evening" className={selectOptionClasses}>
            Evening
          </option>
        </select>
      </div>

      {/* Consent */}
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          required
          checked={formData.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 size-4 shrink-0 accent-[#DA8F0E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-2"
        />
        <span className="text-sm leading-6 text-[#012745]/75">
          I consent to being contacted by Zariya regarding my Academy
          application. <span className="text-[#BE2E14]">*</span>
        </span>
      </label>

      {/* Error */}
      {status === "error" && (
        <div
          id="academy-form-error"
          role="alert"
          className="border border-[#BE2E14]/30 bg-[#BE2E14]/5 p-4 text-sm leading-6 text-[#012745]"
        >
          {error}
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col gap-4 border-t border-[#012745]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[#012745]/60">
          We review every application personally and aim to reply within 48
          hours.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-sm bg-[#BE2E14] px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#a92712] hover:shadow-lg hover:shadow-[#012745]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Checking application..." : "Submit application"}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>

      <p className="text-xs leading-5 text-[#012745]/50">
        * Required fields. Your application is not submitted until the
        application service is connected.
      </p>
    </form>
  );
}
