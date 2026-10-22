
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { CallToAction } from "@/components/home/CallToAction";
import { ReadSection } from "@/components/home/ReadSection";

export default function Home() {
  return (
    <>
      {/* Existing homepage hero */}
      <Hero />

      {/* Collective reading room */}
      <ReadSection />

      {/* Existing highlights */}
      <Highlights />

      {/* Final call to action */}
      <CallToAction />
    </>
  );
}
