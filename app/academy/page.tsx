
import { AcademyAdmission } from "@/components/academy/AcademyAdmission";
import { AcademyApplication } from "@/components/academy/AcademyApplication";
import { AcademyCurriculum } from "@/components/academy/AcademyCurriculum";
import { AcademyExperience } from "@/components/academy/AcademyExperience";
import { AcademyFAQ } from "@/components/academy/AcademyFAQ";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyOverview } from "@/components/academy/AcademyOverview";
import { AcademyLab } from "@/components/academy/AcademyLab";
import { BrewLab } from "@/components/academy/BrewLab";

export default function AcademyPage() {
  return (
    <>
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
