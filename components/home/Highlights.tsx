import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

/* -------------------------------------------------------------------------- */

/*  Illustrations                                                             */

/*  Brand-colour line art with subtle hover movement and reduced-motion      */

/*  support.                                                                  */

/* -------------------------------------------------------------------------- */

const consultingNodes = [

  [32, 122],

  [78, 96],

  [116, 106],

  [158, 62],

] as const;

function ConsultingArt() {

  return (

    <svg

      viewBox="0 0 240 160"

      fill="none"

      aria-hidden="true"

      className="h-full w-full"

    >

      {/* Axes and guides */}

      <path

        d="M20 140H224M20 140V16"

        stroke="#E7E4DC"

        strokeOpacity="0.4"

      />

      <path

        d="M20 100H224M20 60H224"

        stroke="#E7E4DC"

        strokeOpacity="0.14"

        strokeDasharray="3 6"

      />

      {/* The path to clarity */}

      <path

        d="M32 122L78 96L116 106L158 62L206 34"

        stroke="#DA8F0E"

        strokeWidth="1.5"

        strokeLinecap="round"

        strokeLinejoin="round"

      />

      {/* Waypoints */}

      {consultingNodes.map(([cx, cy]) => (

        <circle

          key={`${cx}-${cy}`}

          cx={cx}

          cy={cy}

          r="4"

          fill="#012745"

          stroke="#E7E4DC"

          strokeOpacity="0.85"

        />

      ))}

      {/* Destination */}

      <g className="origin-center [transform-box:fill-box] transition-transform duration-500 ease-out group-hover:scale-125 motion-reduce:transition-none">

        <circle

          cx="206"

          cy="34"

          r="11"

          stroke="#DA8F0E"

          strokeOpacity="0.5"

        />

        <circle cx="206" cy="34" r="4.5" fill="#DA8F0E" />

      </g>

    </svg>

  );

}

function ArchitectureArt() {

  return (

    <svg

      viewBox="0 0 240 160"

      fill="none"

      aria-hidden="true"

      className="h-full w-full"

    >

      {/* Ground line */}

      <path d="M12 140H228" stroke="#E7E4DC" strokeOpacity="0.55" />

      {/* Low block */}

      <rect

        x="30"

        y="94"

        width="48"

        height="46"

        stroke="#E7E4DC"

        strokeOpacity="0.6"

      />

      <path

        d="M42 108H66M42 122H66"

        stroke="#E7E4DC"

        strokeOpacity="0.3"

      />

      {/* Mid block */}

      <rect

        x="90"

        y="62"

        width="48"

        height="78"

        stroke="#E7E4DC"

        strokeOpacity="0.85"

      />

      <path

        d="M102 78H126M102 94H126M102 110H126"

        stroke="#E7E4DC"

        strokeOpacity="0.35"

      />

      {/* Tall block */}

      <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5 motion-reduce:transition-none">

        <rect

          x="150"

          y="26"

          width="48"

          height="114"

          stroke="#DA8F0E"

          strokeWidth="1.25"

        />

        <path

          d="M162 44H186M162 60H186M162 76H186M162 92H186"

          stroke="#DA8F0E"

          strokeOpacity="0.55"

        />

        <path

          d="M168 140V118H180V140"

          stroke="#DA8F0E"

          strokeOpacity="0.8"

        />

      </g>

      {/* Dimension line */}

      <path

        d="M214 26V140M209 26H219M209 140H219"

        stroke="#E7E4DC"

        strokeOpacity="0.45"

      />

    </svg>

  );

}

function AcademyArt() {

  return (

    <svg

      viewBox="0 0 240 160"

      fill="none"

      aria-hidden="true"

      className="h-full w-full"

    >

      {/* Rings */}

      <circle

        cx="120"

        cy="82"

        r="64"

        stroke="#DA8F0E"

        strokeOpacity="0.7"

      />

      <circle

        cx="120"

        cy="82"

        r="48"

        stroke="#E7E4DC"

        strokeOpacity="0.22"

      />

      {/* Steam */}

      <g

        stroke="#DA8F0E"

        strokeLinecap="round"

        className="transition-transform duration-700 ease-out group-hover:-translate-y-1.5 motion-reduce:transition-none"

      >

        <path d="M106 62c-5-6 5-10 0-17" />

        <path d="M120 60c-5-6 5-10 0-17" />

        <path d="M134 62c-5-6 5-10 0-17" />

      </g>

      {/* Cup */}

      <path

        d="M90 74H150V94C150 108 140 118 126 118H114C100 118 90 108 90 94Z"

        stroke="#E7E4DC"

        strokeOpacity="0.9"

        strokeLinejoin="round"

      />

      <path

        d="M150 80H156C166 80 166 100 156 100H148"

        stroke="#E7E4DC"

        strokeOpacity="0.9"

        strokeLinecap="round"

      />

      {/* Saucer */}

      <path

        d="M80 126H160"

        stroke="#E7E4DC"

        strokeOpacity="0.55"

        strokeLinecap="round"

      />

    </svg>

  );

}

/* -------------------------------------------------------------------------- */

/*  Content                                                                   */

/* -------------------------------------------------------------------------- */

const highlights = [

  {

    number: "01",

    category: "Consulting",

    title: "Clarity for what comes next.",

    description:

      "Thoughtful guidance to help businesses navigate decisions, identify opportunities, and move forward with purpose.",

    href: "/consulting",

    action: "Explore Consulting",

    accent: "#012745",

    background: "#012745",

    categoryColor: "#DA8F0E",

    eyebrow: "Think clearly.",

    Art: ConsultingArt,

  },

  {

    number: "02",

    category: "Architecture",

    title: "Space with intention.",

    description:

      "A considered approach to creating spaces where function, character, and experience come together.",

    href: "/architecture",

    action: "Explore Architecture",

    accent: "#BE2E14",

    background: "#BE2E14",

    categoryColor: "#E7E4DC",

    eyebrow: "Design thoughtfully.",

    Art: ArchitectureArt,

  },

  {

    number: "03",

    category: "Academy",

    title: "Learn the craft. Master the method.",

    description:

      "Discover The Barista Method, the current course at Zariya Academy, with a learning experience centred on practical skills and craft.",

    href: "/academy",

    action: "Explore the Academy",

    accent: "#012745",

    background: "#012745",

    categoryColor: "#DA8F0E",

    eyebrow: "Build your skills.",

    Art: AcademyArt,

  },

] as const;

/* Faint blueprint grid behind each illustration */

const gridBackground =

  "linear-gradient(rgba(231,228,220,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(231,228,220,0.05) 1px, transparent 1px)";

/* -------------------------------------------------------------------------- */

/*  Section                                                                   */

/* -------------------------------------------------------------------------- */

export function Highlights() {

  return (

    <section

      id="highlights"

      aria-labelledby="highlights-heading"

      className="bg-zariya-cream text-zariya-navy"

    >

      <div className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 xl:px-14">

        {/* Editorial introduction */}

        <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <ScrollReveal direction="up" distance={32} duration={900}>

          <div>

            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-zariya-navy sm:text-xs">

              A closer look at Zariya

            </p>

            <h2

              id="highlights-heading"

              className="mt-5 max-w-3xl font-anton text-[clamp(2.8rem,5.5vw,5rem)] uppercase leading-[1.02] tracking-wide"

            >

              Three disciplines.

              <span className="block text-zariya-red">One direction.</span>

            </h2>

          </div>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={26} delay={150} duration={900}>

          <div className="max-w-xl lg:justify-self-end">

            <p className="font-sans text-base leading-7 text-zariya-navy/75 sm:text-lg sm:leading-8">

              Different perspectives. Distinct areas of expertise. One

              connected vision bringing consulting, architecture, and learning

              together.

            </p>

            <div className="mt-6 flex items-center gap-3">

              <span

                aria-hidden="true"

                className="h-px w-10 bg-zariya-gold"

              />

              <span className="font-cinzel text-xs uppercase tracking-[0.16em] text-zariya-navy/80">

                Discover the Zariya difference

              </span>

            </div>

          </div>
          </ScrollReveal>

        </div>

        {/* Division panels: each card is one click target */}

        <div className="mt-12 grid items-stretch gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">

          {highlights.map((item, index) => (
            <ScrollReveal
              key={item.number}
              direction="up"
              distance={30}
              delay={index * 140}
              duration={850}
              className="h-full"
            >
            <article

              className="group relative flex h-full min-w-0 flex-col overflow-hidden border border-zariya-navy/10 bg-[#F4F1EB] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-zariya-gold/60 hover:shadow-[0_18px_40px_rgba(1,39,69,0.10)] focus-within:border-zariya-gold motion-reduce:transition-none"

            >

              {/* Illustration panel */}

              <div

                className="relative flex h-[290px] shrink-0 items-center justify-center overflow-hidden px-6 pb-8 pt-14 sm:h-[330px] sm:px-8"

                style={{

                  backgroundColor: item.background,

                  backgroundImage: gridBackground,

                  backgroundSize: "32px 32px",

                }}

              >

                {/* Warm light from the top-right corner */}

                <span

                  aria-hidden="true"

                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%\_8%,rgba(218,143,14,0.20),transparent_55%)]"

                />

                {/* Inner frame */}

                <span

                  aria-hidden="true"

                  className="pointer-events-none absolute inset-3 border border-zariya-cream/10 transition-colors duration-300 group-hover:border-zariya-gold/40 motion-reduce:transition-none"

                />

                <span

                  className="absolute left-6 top-6 z-10 font-cinzel text-xs font-semibold uppercase tracking-[0.18em] sm:left-8 sm:top-8"

                  style={{ color: item.categoryColor }}

                >

                  {item.category}

                </span>

                <div className="relative z-10 aspect-[3/2] w-full max-w-[270px]">

                  <item.Art />

                </div>

                <span

                  aria-hidden="true"

                  className="absolute bottom-0 left-0 z-10 h-1 w-full origin-left scale-x-0 bg-zariya-gold transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"

                />

              </div>

              {/* Division description */}

              <div className="flex flex-1 flex-col p-6 sm:p-8">

                <div className="flex items-center gap-3">

                  <span

                    aria-hidden="true"

                    className="h-px w-7"

                    style={{ backgroundColor: item.accent }}

                  />

                  <p

                    className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs"

                    style={{ color: item.accent }}

                  >

                    {item.eyebrow}

                  </p>

                </div>

                <h3 className="mt-5 max-w-sm font-cinzel text-xl font-semibold leading-snug sm:text-2xl">

                  {item.title}

                </h3>

                <p className="mt-3 font-sans text-sm leading-7 text-zariya-navy/75 sm:text-base">

                  {item.description}

                </p>

                <div className="mt-auto pt-7">

                  <div className="mb-5 h-px w-full bg-zariya-navy/10" />

                  <Link

                    href={item.href}

                    className="inline-flex min-h-11 items-center gap-3 font-cinzel text-xs font-semibold tracking-wide text-zariya-navy transition-colors duration-200 after:absolute after:inset-0 hover:text-zariya-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zariya-gold focus-visible:ring-offset-4"

                  >

                    {item.action}

                    <span

                      aria-hidden="true"

                      className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"

                    >

                      →

                    </span>

                  </Link>

                </div>

              </div>

            </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing statement only — the main CTA follows this section */}
        <ScrollReveal direction="up" distance={20} delay={100} duration={800}>

        <div className="mt-12 flex items-center gap-4 border-t border-zariya-navy/15 pt-8 sm:mt-16">

          <span

            aria-hidden="true"

            className="h-px w-10 shrink-0 bg-zariya-gold"

          />

          <p className="font-sans text-sm leading-6 text-zariya-navy/75">

            Three disciplines. Individual purpose. A shared vision.

          </p>

        </div>
        </ScrollReveal>

      </div>

    </section>

  );

}
