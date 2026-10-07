import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="verticals"
        aria-labelledby="verticals-heading"
        className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8"
      >
        <h2 id="verticals-heading" className="text-3xl font-semibold">
          The Zariya Ecosystem
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Consulting, Architecture, and Academy — three verticals connected
          through one Zariya experience.
        </p>
      </section>
    </>
  );
}