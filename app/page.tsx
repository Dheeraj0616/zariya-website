
import { Hero } from "@/components/home/Hero";
import { VentureRegister } from "@/components/home/VentureRegister";
import { Highlights } from "@/components/home/Highlights";
import { ReadSection } from "@/components/home/ReadSection";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <VentureRegister />
      <Highlights />
      <ReadSection />
      <CallToAction />
    </>
  );
}
