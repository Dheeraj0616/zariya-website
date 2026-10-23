import type { Metadata } from "next";
import {
  seo,
  courseJsonLd,
  faqJsonLd,
} from "@/config/academy-content";
import { AcademyAdmission } from "@/components/academy/AcademyAdmission";
import { AcademyApplication } from "@/components/academy/AcademyApplication";
import { AcademyCurriculum } from "@/components/academy/AcademyCurriculum";
import { AcademyExperience } from "@/components/academy/AcademyExperience";
import { AcademyFAQ } from "@/components/academy/AcademyFAQ";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyOverview } from "@/components/academy/AcademyOverview";
import { AcademyLab } from "@/components/academy/AcademyLab";
import { BrewLab } from "@/components/academy/BrewLab";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: "https://www.thezariya.com/academy",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "https://www.thezariya.com/academy",
    locale: seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export default function AcademyPage() {
  const courseSchema = courseJsonLd("https://www.thezariya.com");
  const faqSchema = faqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AcademyHero />
      <AcademyOverview />
      <BrewLab />
      <AcademyCurriculum />
      <AcademyExperience />
      <AcademyAdmission />
      <AcademyLab />
      <AcademyFAQ />
      <AcademyApplication />
    </>
  );
}
