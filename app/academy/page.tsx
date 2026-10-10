import { AcademyAdmission } from "@/components/academy/AcademyAdmission";
import { AcademyApplication } from "@/components/academy/AcademyApplication";
import { AcademyCurriculum } from "@/components/academy/AcademyCurriculum";
import { AcademyExperience } from "@/components/academy/AcademyExperience";
import { AcademyFAQ } from "@/components/academy/AcademyFAQ";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyOverview } from "@/components/academy/AcademyOverview";
import { BaristaMethod } from "@/components/academy/BaristaMethod";
import { AcademyCTA } from "@/components/academy/AcademyCTA";

export default function AcademyPage() {
  return (

<>
  <AcademyHero />
  <AcademyOverview />
  <BaristaMethod />
  <AcademyCurriculum />
  <AcademyExperience />
  <AcademyAdmission />
  <AcademyFAQ />
  <AcademyCTA />
  <AcademyApplication />
</>

  );
}