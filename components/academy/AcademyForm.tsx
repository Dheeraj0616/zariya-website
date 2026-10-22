
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  contact,
  enquiryOptions,
  type EnquiryValues,
  buildWhatsAppUrl,
} from "@/config/academy-content";

type FormData = {
  name: string;
  phone: string;
  city: string;
  interest: string;
  goal: string;
  experience: string;
};

const initialFormData: FormData = {
  name: "",
  phone: "",
  city: "",
  interest: enquiryOptions.interest[0],
  goal: "",
  experience: "",
};

const inputClasses =
  "mt-2 min-h-12 w-full min-w-0 border border-[#012745]/25 bg-white/70 px-4 py-3 text-sm text-[#012745] placeholder:text-[#012745]/45 outline-none transition-colors focus:border-[#DA8F0E] focus:bg-white focus:ring-2 focus:ring-[#DA8F0E]/25";

const labelClasses = "text-sm font-semibold text-[#012745]";
const optionClasses = "bg-[#E7E4DC] text-[#012745]";

export function AcademyForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [error, setError] = useState("");

  function updateField<K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) {
    setFormData((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  function validateForm() {
    if (!formData.name.trim()) return "Please enter your name.";

    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) {
      return "Please enter a valid WhatsApp number, including the country code.";
    }

    if (!formData.interest) return "Please select what you're interested in.";
    if (!formData.goal.trim()) return "Please tell us what you want to achieve.";
    if (formData.goal.trim().length > 500) {
      return "Please keep your goal to 500 characters or fewer.";
    }

    if (!formData.experience) {
      return "Please select your current experience level.";
    }

    if (!contact.whatsappNumber) {
      return "The Academy WhatsApp number is not configured. Please contact the site administrator.";
    }

    return "";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const values: EnquiryValues = {
      name: formData.name.trim(),
      city: formData.city.trim(),
      interest: formData.interest,
      goal: formData.goal.trim(),
      experience: formData.experience,
    };

    const url = buildWhatsAppUrl(values);

    // Open synchronously from the submit interaction.
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fallbackHref = contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}`
    : undefined;

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-0 space-y-6"
      aria-describedby={error ? "academy-form-error" : "academy-form-privacy"}
    >
      <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6">
        <div className="min-w-0">
          <label htmlFor="academy-name" className={labelClasses}>
            Your name <span className="text-[#BE2E14]">*</span>
          </label>
          <input
            id="academy-name"
            name="name"
            autoComplete="name"
            type="text"
            maxLength={100}
            required
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClasses}
            placeholder="Your full name"
          />
        </div>

        <div className="min-w-0">
          <label htmlFor="academy-phone" className={labelClasses}>
            WhatsApp number <span className="text-[#BE2E14]">*</span>
          </label>
          <input
            id="academy-phone"
            name="phone"
            autoComplete="tel"
            type="tel"
            maxLength={25}
            required
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClasses}
            placeholder="+91 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="academy-city" className={labelClasses}>
          City <span className="font-normal text-[#012745]/55">(optional)</span>
        </label>
        <input
          id="academy-city"
          name="city"
          autoComplete="address-level2"
          type="text"
          maxLength={100}
          value={formData.city}
          onChange={(event) => updateField("city", event.target.value)}
          className={inputClasses}
          placeholder="Which city are you from?"
        />
      </div>

      <div>
        <label htmlFor="academy-interest" className={labelClasses}>
          What are you interested in?{" "}
          <span className="text-[#BE2E14]">*</span>
        </label>
        <select
          id="academy-interest"
          name="interest"
          required
          value={formData.interest}
          onChange={(event) => updateField("interest", event.target.value)}
          className={inputClasses}
        >
          {enquiryOptions.interest.map((option) => (
            <option key={option} value={option} className={optionClasses}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="academy-goal" className={labelClasses}>
          What do you want to achieve?{" "}
          <span className="text-[#BE2E14]">*</span>
        </label>
        <textarea
          id="academy-goal"
          name="goal"
          required
          maxLength={500}
          rows={4}
          value={formData.goal}
          onChange={(event) => updateField("goal", event.target.value)}
          className={`${inputClasses} resize-y`}
          placeholder="Tell us your goal, experience, or any questions you have."
        />
        <p className="mt-1 text-right font-mono text-[10px] text-[#012745]/50">
          {formData.goal.length}/500
        </p>
      </div>

      <div>
        <label htmlFor="academy-experience" className={labelClasses}>
          Your experience <span className="text-[#BE2E14]">*</span>
        </label>
        <select
          id="academy-experience"
          name="experience"
          required
          value={formData.experience}
          onChange={(event) => updateField("experience", event.target.value)}
          className={inputClasses}
        >
          <option value="" className={optionClasses}>
            Select your experience
          </option>
          {enquiryOptions.experience.map((option) => (
            <option key={option} value={option} className={optionClasses}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <div
          id="academy-form-error"
          role="alert"
          className="border border-[#BE2E14]/40 bg-[#BE2E14]/5 p-4 text-sm leading-6 text-[#012745]"
        >
          {error}
        </div>
      )}

      <div className="border-t border-[#012745]/20 pt-5">
        <button
          type="submit"
          className="group inline-flex min-h-12 w-full items-center justify-center gap-3 border border-[#BE2E14] bg-[#BE2E14] px-6 py-3 text-sm font-semibold text-[#E7E4DC] transition-colors hover:bg-[#9F2612] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA8F0E] focus-visible:ring-offset-2 sm:w-auto"
        >
          Send on WhatsApp
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>

        <p
          id="academy-form-privacy"
          className="mt-4 text-xs leading-5 text-[#012745]/65"
        >
          Your details are used to prepare an enquiry message. Nothing is sent
          automatically; review the message and tap Send in WhatsApp.
        </p>

        {fallbackHref && (
          <p className="mt-3 text-xs leading-5 text-[#012745]/65">
            WhatsApp not opening?{" "}
            <a
              href={fallbackHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#BE2E14] underline underline-offset-4 hover:text-[#012745] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE2E14]"
            >
              Open the Academy chat directly
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
