# Zariya Academy — UX Specification

## 1. Purpose

The Zariya Academy page is the learning-focused vertical of The Zariya ecosystem.

The first Academy offering is the **Barista Method**.

The page must communicate:

- What Zariya Academy is
- What the Barista Method is
- Who the course is for
- What students will learn
- How admission works
- How to apply
- What happens after applying
- Answers to common questions

The page should feel like a serious, selective learning experience rather than a generic online course landing page.

---

## 2. Primary User Goal

The primary goal of the Academy page is:

> Help a potential student understand the Barista Method and confidently submit an application.

The primary conversion action is:

> Apply to the Barista Method

The application form must therefore remain a major part of the page.

---

## 3. Page Route

The Academy page must be available at:

`/academy`

The page must be implemented using the Next.js App Router.

Route file:

`app/academy/page.tsx`

---

## 4. Page Structure

The Academy page should follow this high-level structure:

1. Academy Hero
2. Course Overview
3. Barista Method / Learning Experience
4. Curriculum
5. Academy Experience
6. Admission Process
7. Application
8. FAQ

The sections should flow naturally from:

> Introduction → Understanding → Learning → Process → Application → Questions

---

# 5. Academy Hero

## Purpose

Immediately communicate that this is Zariya Academy and introduce the Barista Method.

## Required content

Eyebrow:

`Zariya Academy`

Primary heading:

`Barista Method`

Supporting tagline:

`The course that teaches you how to become a barista.`

Supporting description:

`Applications are reviewed personally. We'll call you within 48 hours.`

Primary CTA:

`Apply now`

CTA destination:

`#apply`

## UX requirements

- Hero must be visually distinctive.
- Primary CTA must be immediately visible.
- CTA must have a minimum comfortable touch target.
- Hero must work on mobile, tablet, laptop, desktop and large screens.
- Text must remain readable at all viewport sizes.
- No horizontal overflow.
- The layout must not depend on a fixed viewport height.
- The logo/brand treatment must remain visually consistent with the global Zariya design system.

---

# 6. Course Overview

## Purpose

Explain what the Barista Method actually is and who it is designed for.

## Content

### What this course is

A selective, application-based course in the Barista Method — how to become a barista and do the work properly, from dialling in espresso to running a calm, precise bar during service.

### Who it is for

For aspiring baristas and hospitality newcomers. No prior experience required — just the willingness to be trained, corrected, and to practise until it's second nature.

## Course facts

The page should support displaying the following information:

- Duration
- Format
- Location
- Batch size
- Fee

If the final values are not available yet, the values must remain configurable rather than hard-coded throughout components.

---

# 7. Barista Method

## Purpose

Explain the philosophy or practical approach behind the course.

This section should communicate that the Academy is focused on practical skill development rather than simply providing theoretical information.

The implementation should allow the content to evolve without requiring structural changes to the page.

---

# 8. Curriculum

## Purpose

Show potential applicants what they will learn.

The curriculum should be presented as clear modules rather than a large wall of text.

## Initial modules

### Module 1 — Coffee Fundamentals

Introduction to coffee, the basic concepts behind extraction, and the foundations required before working behind the bar.

### Module 2 — Espresso Technique

Understanding espresso preparation, dialing in, consistency, and technique.

### Module 3 — Milk and Texturing

Milk preparation, steaming, texturing, and producing consistent drinks.

### Module 4 — Bar Workflow and Service

Working efficiently and calmly during service while maintaining consistency and quality.

### Module 5 — Equipment Care

Understanding equipment, cleaning, maintenance, and responsible operation.

### Module 6 — Assessment and Next Steps

Evaluating practical ability and understanding what comes after completing the training.

## UX requirements

- Modules must be easy to scan.
- Each module should have a clear visual hierarchy.
- The layout must adapt to small screens.
- Avoid requiring horizontal scrolling.
- Future modules should be easy to add.

---

# 9. Academy Experience

## Purpose

Give the applicant a better understanding of what participating in the Academy feels like.

The section should reinforce:

- Practical learning
- Guided training
- Correction and feedback
- Repetition and consistency
- Professional bar workflow
- Real-world preparation

This section should complement the curriculum rather than repeat it.

---

# 10. Admission Process

## Purpose

Remove uncertainty around the application process.

The admission process should be represented as a simple sequence.

## Steps

### 01 — Apply

Submit the Academy application.

### 02 — We review

The application is reviewed personally.

### 03 — We call you within 48 hours

A member of the Zariya team contacts the applicant.

### 04 — You're in — or we tell you honestly

The applicant receives a clear outcome.

## UX requirements

- The sequence must be understandable without reading large paragraphs.
- Numbered steps should have strong visual hierarchy.
- The layout must work vertically on mobile.
- The process should naturally lead into the application section.

---

# 11. Application Section

## Purpose

Provide the primary conversion point.

Section anchor:

`#apply`

The section should clearly communicate:

- This is the Barista Method application.
- Applications are personally reviewed.
- Applicants will be contacted within 48 hours.

## Required heading

`Apply to the Barista Method`

## Supporting message

`Tell us who you are and why coffee. We read every application and call within 48 hours.`

---

# 12. Academy Application Form

The form is an important part of the final Academy page.

The final implementation must preserve the UX and field structure of the existing Zariya Academy demo.

## Required fields

### Full name

Required.

### Email

Required.

### Phone / WhatsApp

Required.

### City

Required.

### Current background

Required.

### Prior coffee or barista experience

Required.

### Why do you want to join?

Required.

Maximum length:

600 characters.

The interface should display a live character counter.

Example:

`0 / 600`

The counter must update as the user types.

### Preferred time for our call

Optional.

### Consent to be contacted

Required.

The applicant must explicitly consent to being contacted.

### Honeypot field

A hidden `website` field must exist as an anti-spam mechanism.

The field must not be visible to normal users.

---

# 13. Form UX

The form must support the following states.

## Default

All fields available for input.

## Validation error

Invalid or missing required fields must receive clear feedback.

Errors must be understandable and accessible.

## Submitting

While the form is being submitted:

- Prevent duplicate submissions.
- Disable the submission action.
- Display:

`Submitting…`

## Success

Display:

`Application received.`

The success state should communicate that the application was successfully received.

A reference identifier may be displayed.

The user should also be reminded:

`We review every application personally and reply within 48 hours.`

## Error

If submission fails:

- Display a clear error message.
- Keep the user's entered information where possible.
- Allow the user to try again.

---

# 14. Form Responsive Behaviour

The form must be fully responsive.

## Small screens

Fields should generally stack vertically.

The form must fit comfortably within the viewport without horizontal scrolling.

## Medium and larger screens

Related fields may be arranged in a two-column layout where appropriate.

The motivation field should remain full width.

The consent section and submission controls must remain easy to understand.

## Touch

All interactive controls must have comfortable touch targets.

## Keyboard

The complete form must be usable with keyboard navigation.

## Accessibility

The form must provide:

- Proper labels
- Visible focus states
- Accessible error messages
- Appropriate input types
- Appropriate autocomplete attributes where useful
- Semantic grouping where appropriate
- Accessible consent control
- No information conveyed by colour alone

---

# 15. Backend Boundary

The previous Academy demo used a backend implementation.

That backend must NOT be copied into the new Zariya website.

The final Academy frontend must remain independent of the old backend architecture.

The form UI, validation behaviour and user experience may be preserved.

The backend/submission mechanism will be implemented separately using the new Zariya architecture.

Do not import:

- Convex backend code
- Convex actions
- Old authentication logic
- Old checkout logic
- Old customer-management logic
- Old analytics implementation

---

# 16. FAQ

The FAQ section should answer common questions about the Barista Method.

Initial questions:

1. How much does the course cost?
2. Do I need prior barista experience?
3. When and where does the batch take place?
4. Will I receive a certificate?
5. What happens after I apply?
6. Will Zariya offer more courses in the future?

The FAQ should use an accessible expandable/accordion interaction.

Only one or multiple items may be open depending on the final UX decision, but the interaction must remain keyboard accessible.

---

# 17. Visual Direction

The Academy page must use the current Zariya design system.

## Primary palette

Navy:

`#012745`

Red:

`#BE2E14`

Gold:

`#DA8F0E`

Warm Off-White:

`#E7E4DC`

These are the current source-of-truth brand colours.

Do not reintroduce the previous Zariya colour palette.

---

# 18. Design Principles

The Academy page should feel:

- Premium
- Human
- Precise
- Confident
- Practical
- Editorial
- Modern
- Professional

Avoid:

- Generic SaaS appearance
- Excessive gradients
- Excessive glassmorphism
- Overuse of rounded cards
- Visual clutter
- Huge amounts of unnecessary animation
- Template-like course landing page aesthetics

The page should feel like a real Zariya Academy experience.

---

# 19. Responsive Requirement

Responsiveness is a hard requirement.

The page must work across:

- Small mobile phones
- Large mobile phones
- Tablets
- Small laptops
- Standard laptops
- Desktop monitors
- Ultrawide displays
- 2K displays
- 4K displays

The implementation must account for:

- Different viewport widths
- Different viewport heights
- Touch interaction
- Keyboard navigation
- Text scaling
- Long content
- Short content
- Orientation changes
- Reduced-motion preferences

No component should assume a single screen size.

---

# 20. Accessibility Requirement

Target:

WCAG 2.1 Level AA.

The implementation should include:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus indicators
- Accessible form labels
- Accessible validation
- Sufficient colour contrast
- Meaningful link/button labels
- Reduced-motion support
- Accessible accordions
- Appropriate ARIA only where necessary

Do not use ARIA as a replacement for semantic HTML.

---

# 21. Component Architecture

The Academy page should be composed from independent components.

Planned components:

- `AcademyHero`
- `AcademyOverview`
- `BaristaMethod`
- `AcademyCurriculum`
- `AcademyExperience`
- `AcademyAdmission`
- `AcademyApplication`
- `AcademyForm`
- `AcademyFAQ`

The route should compose these components rather than containing the entire page implementation in one file.

---

# 22. Content Architecture

Academy content should be centralized where practical.

Planned configuration file:

`config/academy.ts`

The configuration should contain content/data such as:

- Hero content
- Course facts
- Curriculum modules
- Admission steps
- FAQ entries
- Application-related copy

Components should primarily be responsible for presentation and interaction.

---

# 23. Brand Asset

The current temporary Zariya logo is located at:

`public/assets/brand/zariya-logo.jpg`

The implementation must reference the logo through the existing brand architecture.

Do not redraw the logo.

Do not modify the logo.

The final higher-quality logo may replace the current asset later without requiring component rewrites.

---

# 24. Old Demo Reference

The existing Zariya demo may be used as a reference for:

- Academy information architecture
- Application form UX
- Form fields
- Form states
- Responsive behaviour
- General interaction patterns

However, the new implementation must NOT be a direct clone.

The new Academy page must use the current Zariya design system and architecture.

The old demo backend must not be reused.

---

# 25. Implementation Rule

The Academy page must be implemented incrementally.

Do not build the entire page in a single component.

Do not introduce unnecessary dependencies.

Before adding a dependency, determine whether the requirement can be implemented using existing Next.js, React, TypeScript, Tailwind CSS, or existing project utilities.

Every major implementation stage must be validated with:

`corepack.cmd pnpm exec tsc --noEmit`

and:

`corepack.cmd pnpm exec eslint .`

A production build should be performed before the Academy phase is considered complete.

---

# 26. Definition of Done

The Academy page is considered complete only when:

- `/academy` works.
- All required sections are present.
- The Barista Method is clearly explained.
- Curriculum is represented clearly.
- Admission process is understandable.
- Application form contains all required fields.
- Form validation works.
- Character counter works.
- Loading state works.
- Success state works.
- Error state works.
- Honeypot exists.
- Backend is independent of the old demo backend.
- FAQ is accessible.
- Mobile layout works.
- Tablet layout works.
- Desktop layout works.
- Large-screen layout works.
- Keyboard navigation works.
- Focus states are visible.
- Reduced-motion behaviour is respected.
- No horizontal overflow exists.
- TypeScript passes.
- ESLint passes.
- Production build passes.
- The page follows the current Zariya colour system.