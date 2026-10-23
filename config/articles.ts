export interface ArticleSection {
  title: string;
  content: string[];
}

export interface Article {
  slug: string;
  sheet: string;
  title: string;
  category: "Studio" | "Aayaam" | "Academy";
  type: string;
  date: string;
  isoDate: string;
  readingTime: string;
  source: string;
  description: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
}

export const articles: Article[] = [
  // 1 Studio item (16 Oct 2026)
  {
    slug: "zariya-design-studio-guides-on-bim-standards-and-design",
    sheet: "RD-01",
    title: "Zariya Design Studio: guides on BIM, standards and design",
    category: "Studio",
    type: "Collection",
    date: "16 Oct 2026",
    isoDate: "2026-10-16",
    readingTime: "5 min read",
    source: "https://studio.thezariya.com/",
    description:
      "Straight talk on BIM, human-centred spatial design, clash detection, and building your project twice—once on screen, once on site.",
    keyTakeaways: [
      "Building your project twice eliminates on-site rework and unexpected budget variances.",
      "Human-centred spatial design integrates behavioral psychology directly into technical BIM models.",
      "Clash detection between structural grids and MEP infrastructure pays dividends before construction mobilization.",
      "Digital twins provide operational clarity long after the physical handover.",
    ],
    sections: [
      {
        title: "The Studio Philosophy: Built Twice",
        content: [
          "At Zariya Design Studio, every project is constructed twice: first with mathematical fidelity inside digital parametric space, and subsequently on the physical site.",
          "This methodology ensures that every structural element, duct run, and architectural junction is rigorously tested and coordinated before concrete is poured.",
        ],
      },
      {
        title: "Integration of BIM and Immersive VR",
        content: [
          "By coupling Building Information Modeling with immersive virtual reality environments, stakeholders experience volume, natural light illumination, and spatial ergonomics directly at full scale.",
          "Decisions regarding spatial hierarchy and sightlines are resolved collaboratively during pre-construction, dramatically compressing delivery timelines.",
        ],
      },
    ],
  },

  // 10 Aayaam articles (15 Oct 2026)
  {
    slug: "why-small-firms-should-adopt-bim",
    sheet: "RD-02",
    title: "Why small firms should adopt BIM, and how to get started",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "6 min read",
    source: "https://aayaam.thezariya.com/blog/why-small-firms-should-adopt-bim/",
    description:
      "Five reasons small architecture firms should adopt BIM, and a five-step roadmap: pilot project, software, standards, cloud and scaling.",
    keyTakeaways: [
      "BIM is not exclusive to mega-projects; boutique firms gain significant efficiency advantages.",
      "A focused pilot project prevents organizational disruption and proves immediate ROI.",
      "Adopting shared standard object templates cuts drafting duplication across small teams.",
      "Cloud collaboration unlocks seamless coordination with external structural consultants.",
    ],
    sections: [
      {
        title: "Demystifying BIM for Small Practices",
        content: [
          "Small architecture practices often hesitate to transition to BIM due to perceived licensing costs and learning curves. However, the cost of drawing errors and revisions on site far outweighs initial tooling investments.",
          "BIM enables small teams to deliver documentation packages with the technical depth and coordination rigor typically associated with large multi-disciplinary practices.",
        ],
      },
      {
        title: "The Five-Step Adoption Roadmap",
        content: [
          "1. Select a controlled pilot project with forgiving milestones.",
          "2. Standardize model authoring software and core template libraries.",
          "3. Establish clear layer naming and classification rules aligned with regional standards.",
          "4. Leverage cloud-hosted common data environments for consultant markups.",
          "5. Scale iteratively by documenting lessons learned into studio protocols.",
        ],
      },
    ],
  },
  {
    slug: "vr-ar-psychology-of-space",
    sheet: "RD-03",
    title: "The psychology of space: how VR and AR help architects test human-centred design",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "7 min read",
    source: "https://aayaam.thezariya.com/blog/vr-ar-psychology-of-space/",
    description:
      "How VR and AR let architects test how people feel in a space before it is built: the psychology, the tools and illustrative scenarios.",
    keyTakeaways: [
      "Spatial perception cannot be fully evaluated through two-dimensional orthographic drawings.",
      "Virtual reality allows designers to observe authentic emotional responses to ceiling heights and proportions.",
      "Augmented reality overlays MEP infrastructure and structural tolerances onto live site conditions.",
      "Testing human-centred comfort pre-empts costly post-occupancy modifications.",
    ],
    sections: [
      {
        title: "Beyond 2D Representation",
        content: [
          "Human perception of architecture is dynamic, sensory, and deeply psychological. While floor plans explain programmatic relationships, they fail to communicate psychological compression, openness, or acoustic balance.",
          "By placing clients and users inside fully rendered 1:1 scale virtual environments, designers observe true head movements, natural movement paths, and instinctive reactions to spatial transitions.",
        ],
      },
      {
        title: "Practical Scenarios in the Indian Context",
        content: [
          "From optimizing residential light penetration in dense urban pockets to testing circulation safety in hospitality venues, immersive mockups turn subjective design debates into objective, human-verified decisions.",
        ],
      },
    ],
  },
  {
    slug: "bim-levels-0-to-3-explained",
    sheet: "RD-04",
    title: "The levels of BIM, from Level 0 to Level 3, explained",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "6 min read",
    source: "https://aayaam.thezariya.com/blog/bim-levels-0-to-3-explained/",
    description:
      "What BIM Level 0, 1, 2 and 3 mean, where most firms sit today, and where BIM is heading next: cloud, prefabrication, open data and digital twins.",
    keyTakeaways: [
      "Level 0 represents unmanaged 2D CAD with paper-based information exchange.",
      "Level 1 combines 2D drafting with basic 3D visualizations, lacking integrated parameters.",
      "Level 2 introduces collaborative discipline models with shared data exchange formats.",
      "Level 3 targets full lifecycle integration through centralized, cloud-native open data.",
    ],
    sections: [
      {
        title: "The Evolution of Digital Coordination",
        content: [
          "The maturity levels of Building Information Modeling define the depth of collaboration and digital intelligence embedded within project deliverables.",
          "Understanding where your practice currently operates is the prerequisite for establishing realistic modernization benchmarks and complying with international standards.",
        ],
      },
      {
        title: "Where the Indian Market Stands Today",
        content: [
          "While progressive studios in metropolitan centres operate at Level 2, much of the regional supply chain remains situated between Levels 0 and 1. Bridging this gap through standardized libraries like Aayaam AS 1:2026 is critical for nationwide digital adoption.",
        ],
      },
    ],
  },
  {
    slug: "architect-vs-technologist",
    sheet: "RD-05",
    title: "The architect and the technologist: why digital skills are now essential",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "5 min read",
    source: "https://aayaam.thezariya.com/blog/architect-vs-technologist/",
    description:
      "Digital skills are now core to architecture: BIM, scripting, VR and data. Why the architect of the future is designer and technologist in one.",
    keyTakeaways: [
      "The boundary between spatial designer and computational technologist has permanently dissolved.",
      "Visual scripting (Dynamo, Grasshopper) automates repetitive drafting and verifies code compliance.",
      "Data fluency enables architects to defend design intent with empirical metrics.",
      "Modern studios require polymathic practitioners who move seamlessly from concept sketches to parametric data schemas.",
    ],
    sections: [
      {
        title: "The Convergence of Art and Code",
        content: [
          "Architecture has always stood at the intersection of aesthetic expression and structural science. Today, that scientific pillar is expressed through software architecture, parametric constraints, and structured metadata.",
          "Firms that bifurcate staff into isolated 'designers' and 'production draftsmen' face communication breakdowns and operational latency.",
        ],
      },
      {
        title: "Core Competencies for the Future Practitioner",
        content: [
          "Proficiency in parametric modeling, understanding IFC data hierarchies, basic scripting for automated quantity takeoffs, and real-time visualization literacy are no longer optional specialties—they are foundational design tools.",
        ],
      },
    ],
  },
  {
    slug: "parametric-vs-algorithmic-design",
    sheet: "RD-06",
    title: "Parametric vs algorithmic design: what is the difference, and why it matters",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "6 min read",
    source: "https://aayaam.thezariya.com/blog/parametric-vs-algorithmic-design/",
    description:
      "Parametric design uses defined parameters. Algorithmic design generates form from code. The difference, the uses, and why the hybrid wins.",
    keyTakeaways: [
      "Parametric design establishes geometric relationships governed by explicit variable constraints.",
      "Algorithmic design deploys rule-based computational sequences to generate emergent geometries.",
      "The hybrid approach combines programmatic generative power with rigorous manufacturing boundaries.",
      "Clarity of terminology prevents misalignment between conceptual design and fabrication drawings.",
    ],
    sections: [
      {
        title: "Distinguishing the Two Computational Paradigms",
        content: [
          "Parametric systems rely on equations and constraints: changing a window opening dynamically re-computes sill heights, mullion spacing, and daylight infiltration. The topology remains deterministic.",
          "Algorithmic systems, by contrast, use loops, branching logic, and optimization procedures (such as generative genetic algorithms) to synthesize geometries that the designer may not have consciously conceived beforehand.",
        ],
      },
      {
        title: "Why the Hybrid Approach Delivers Real Value",
        content: [
          "Generative algorithms explore thousands of structural or shading permutations, while parametric constraints ground those solutions in available Indian steel profiles, manufacturing tolerances, and budget caps.",
        ],
      },
    ],
  },
  {
    slug: "iso-19650-explained",
    sheet: "RD-07",
    title: "ISO 19650 explained: the global standard behind BIM",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "8 min read",
    source: "https://aayaam.thezariya.com/blog/iso-19650-explained/",
    description:
      "ISO 19650 is the international standard for managing information in BIM projects. What each part covers and how to implement it.",
    keyTakeaways: [
      "ISO 19650 provides the global governance framework for managing information across the built asset lifecycle.",
      "Part 1 outlines concepts and principles; Part 2 governs project delivery phases.",
      "Standardized Common Data Environments (CDE) enforce WIP, Shared, Published, and Archived document states.",
      "Adoption ensures seamless inter-operability between regional consultants and international project consortia.",
    ],
    sections: [
      {
        title: "The Architecture of ISO 19650",
        content: [
          "Prior to ISO 19650, BIM implementation suffered from fragmented regional specifications. The international standard formalizes definitions, roles (Appointing Party, Lead Appointed Party), and information protocols.",
          "It shifts focus from the 3D geometry itself to the rigorous governance of information exchange, naming conventions, and validation gates.",
        ],
      },
      {
        title: "Implementing ISO 19650 Locally",
        content: [
          "Implementing ISO 19650 does not require expensive enterprise software. It begins with disciplined folder nomenclature, strict revision controls (P01 vs C01), and defined Employer's Information Requirements (EIR).",
        ],
      },
    ],
  },
  {
    slug: "clash-detection-in-bim",
    sheet: "RD-08",
    title: "How clash detection in BIM saves money on site",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "6 min read",
    source: "https://aayaam.thezariya.com/blog/clash-detection-in-bim/",
    description:
      "Clash detection finds conflicts between structure, MEP and architecture before site. Three clash types, a verified 10x ROI case, and how to run it well.",
    keyTakeaways: [
      "Three primary clash categories: Hard clashes (intersecting geometry), Soft clashes (clearance tolerances), and 4D Workflow clashes (scheduling conflicts).",
      "Resolving clashes digitally costs approximately 1/10th of repairing structural conflicts during on-site casting.",
      "Structured clash matrixes prevent coordination fatigue by filtering out non-critical model anomalies.",
      "Disciplined sign-off protocols keep general contractors and specialty subcontractors aligned.",
    ],
    sections: [
      {
        title: "The Anatomy of a Clash",
        content: [
          "A hard clash occurs when a primary HVAC duct punctures a reinforced concrete shear beam. A soft clash occurs when high-voltage cabling lacks adequate maintenance access distance from plumbing lines.",
          "Without automated clash matrixes, these errors are discovered only when mechanical subcontractors arrive on site, causing immediate project stoppages.",
        ],
      },
      {
        title: "Proven Economic Return",
        content: [
          "Case studies across commercial and hospitality construction consistently demonstrate that coordinated BIM models yield over a 10x return on investment through reduced site change orders, lower material waste, and compressed mechanical installation schedules.",
        ],
      },
    ],
  },
  {
    slug: "digital-twins-facility-management",
    sheet: "RD-09",
    title: "Facility management with BIM: how digital twins are changing operations",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "7 min read",
    source: "https://aayaam.thezariya.com/blog/digital-twins-facility-management/",
    description:
      "How digital twins built on BIM move facility management from reactive to predictive: maintenance, energy, space, safety and assets, plus the real challenges.",
    keyTakeaways: [
      "Over 80% of an asset's total lifecycle cost occurs during operational maintenance, not initial design or construction.",
      "Digital twins integrate live IoT sensor streams directly into geometric BIM models.",
      "Operations shift from reactive breakdown repairs to predictive scheduled servicing.",
      "Accurate COBie data transfers eliminate lost manuals and undocumented mechanical modifications.",
    ],
    sections: [
      {
        title: "Bridging the Handover Void",
        content: [
          "Historically, when construction concludes, facility managers receive hundreds of disjointed paper binders and CAD prints that rapidly become obsolete as repairs take place.",
          "An integrated digital twin pairs the as-built geometric model with equipment serial numbers, warranty dates, and real-time power/water metering data.",
        ],
      },
      {
        title: "Real-World Operational Gains",
        content: [
          "Facility teams can locate faulty valves behind finished ceilings immediately, predict compressor failure based on vibration anomalies, and simulate HVAC zoning adjustments to curb commercial energy bills.",
        ],
      },
    ],
  },
  {
    slug: "bim-for-beginners-first-five-steps",
    sheet: "RD-10",
    title: "BIM for beginners: the first five steps to getting started",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "5 min read",
    source: "https://aayaam.thezariya.com/blog/bim-for-beginners-first-five-steps/",
    description:
      "A practical five-step path into BIM: understand it, learn one platform, follow a plan, join the community and apply it to a real project.",
    keyTakeaways: [
      "Step 1: Understand that BIM is an information methodology, not a software license.",
      "Step 2: Commit deeply to mastering one primary modeling platform before diversifying.",
      "Step 3: Define a structured BIM Execution Plan (BEP) with realistic deliverables.",
      "Step 4: Engage with regional professional communities and open-source standard libraries.",
      "Step 5: Apply principles immediately on a live, small-scale pilot rather than theoretical exercises.",
    ],
    sections: [
      {
        title: "The Mindset Shift",
        content: [
          "The greatest hurdle for architects migrating from 2D drafting to BIM is mental: unlearning line-based thinking in favor of object-based modeling with embedded parametric intelligence.",
          "Every element placed on screen must represent a physical product with thickness, material properties, and relationship to adjoining assemblies.",
        ],
      },
      {
        title: "Executing the Pilot Project",
        content: [
          "Choose a residential extension, small retail fitout, or interior renovation. Track drafting hours versus 2D benchmarks, document pain points, and build reusable family libraries to compound firm-wide velocity.",
        ],
      },
    ],
  },
  {
    slug: "bim-101-key-principles",
    sheet: "RD-11",
    title: "BIM 101: the principles every designer and engineer should know",
    category: "Aayaam",
    type: "Article",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    readingTime: "6 min read",
    source: "https://aayaam.thezariya.com/blog/bim-101-key-principles/",
    description:
      "BIM is a way of working, not software. Six principles every architect and engineer should know, from single source of truth to digital twins.",
    keyTakeaways: [
      "Single Source of Truth: All plans, elevations, sections, and schedules synchronize from a unified model.",
      "Level of Development (LOD): From LOD 100 conceptual massing to LOD 400 fabrication-ready geometry.",
      "Interoperability: Open BIM standards (IFC, BCF) safeguard project data against software vendor lock-in.",
      "Parametric Associativity: Changes cascade automatically across all linked drawing sheets.",
    ],
    sections: [
      {
        title: "Core Architectural Principles",
        content: [
          "In traditional workflows, an architect alters a wall location in plan, forgetting to reflect the move in the building section or door schedule. In BIM, drawings are not drawn—they are live views generated from an integrated building database.",
          "Parametric associativity ensures drawing consistency across entire multi-hundred sheet document packages.",
        ],
      },
      {
        title: "Understanding LOD Nuances",
        content: [
          "Over-modeling early in the design cycle causes computational bloat and slows down project iterations. Understanding the progression from LOD 200 schematic approximations to LOD 350 construction interfaces is the hallmark of a mature practitioner.",
        ],
      },
    ],
  },

  // 16 Academy articles (13 Oct 2026)
  {
    slug: "signature-drinks-for-cafes",
    sheet: "RD-12",
    title: "Why Every Café Needs Signature Drinks (& How to Create One That Sells!)",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "5 min read",
    source: "https://academy.thezariya.com/blog/signature-drinks-for-cafes/",
    description:
      "A signature drink gives a café identity, loyalty and margin. Five steps to design one that is distinctive, approachable and profitable.",
    keyTakeaways: [
      "Signature drinks create brand defensibility in saturated specialty coffee markets.",
      "Balance is achieved through structured acidity, sweetness, and tactile mouthfeel contrast.",
      "Costing and preparation ergonomics must be designed for peak morning rush hours.",
      "Approachable flavor bridges guide mainstream consumers into appreciating single-origin coffees.",
    ],
    sections: [
      {
        title: "The Strategic Value of the Signature Beverage",
        content: [
          "While classic espresso and milk drinks provide staple daily volume, signature beverages define a café's personality and generate organic word-of-mouth momentum.",
          "They allow hospitality teams to showcase seasonal regional ingredients while commanding higher gross profit margins than standard lattes.",
        ],
      },
      {
        title: "The Five-Step Formulation Process",
        content: [
          "1. Anchor the beverage around a distinct sensory note already present in your espresso roast.",
          "2. Introduce complementary botanical, citrus, or spice reductions crafted in-house.",
          "3. Design the visual glassware and temperature contrast for tactile engagement.",
          "4. Standardize prep time under 90 seconds to maintain bar flow during rushes.",
          "5. Train front-of-house baristas on concise sensory storytelling.",
        ],
      },
    ],
  },
  {
    slug: "why-baristas-should-learn-cupping",
    sheet: "RD-13",
    title: "Why Every Barista Should Learn Cupping to Improve Brewing & Customer Experience",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "6 min read",
    source: "https://academy.thezariya.com/blog/why-baristas-should-learn-cupping/",
    description:
      "Cupping builds a barista’s palate, sharpens brewing decisions and improves how you talk about coffee. Learn what cupping is and how to start.",
    keyTakeaways: [
      "Cupping eliminates brewing variables to evaluate intrinsic coffee quality and roast uniformity.",
      "A calibrated palate translates subjective taste impressions into actionable dial-in corrections.",
      "Sensory confidence transforms barista customer conversations from pretentious jargon into warm guidance.",
      "Consistent table cupping identifies bag-to-bag defect variations before beans reach the grinder hopper.",
    ],
    sections: [
      {
        title: "The Global Standard of Coffee Evaluation",
        content: [
          "Cupping is the universal protocol utilized by green coffee buyers, roasters, and baristas globally. By standardizing grind size, water ratio, and steeping time without paper filtration, the coffee bean's inherent qualities are laid bare.",
          "For a working barista, cupping removes espresso machine pressure and portafilter variables to teach what the coffee genuinely has to offer.",
        ],
      },
      {
        title: "Translating Cupping Notes to the Bar",
        content: [
          "When a barista identifies black currant acidity or brown sugar sweetness on the cupping table, they know exactly what extraction target to chase on the espresso grinder.",
        ],
      },
    ],
  },
  {
    slug: "first-crack-in-coffee-roasting",
    sheet: "RD-14",
    title: "What Really Happens During the First Crack? The Science and Intuition Behind Coffee Roasting",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "7 min read",
    source: "https://academy.thezariya.com/blog/first-crack-in-coffee-roasting/",
    description:
      "First crack is the moment green coffee becomes roasted coffee. Learn the science behind it and the senses a roaster uses to read it.",
    keyTakeaways: [
      "First crack marks the thermodynamic transition where internal water vapor pressure fractures bean cellular walls.",
      "Endothermic heat absorption rapidly transforms into an exothermic energy release.",
      "The duration and rate of rise (RoR) following first crack dictates the roast development time ratio (DTR).",
      "Auditory, olfactory, and optical sensory indicators validate what roasting probe graphs display.",
    ],
    sections: [
      {
        title: "The Physics of the Crack",
        content: [
          "As green coffee beans absorb convective and conductive heat inside the drum, free and bound moisture vaporizes, expanding internal cell cavities.",
          "Around 196°C to 205°C, pressure exceeds cellular tensile strength, producing an audible acoustic snap akin to popcorn. This is the first crack.",
        ],
      },
      {
        title: "Development Time Management",
        content: [
          "What the roaster executes during the 60 to 120 seconds following first crack determines whether the final cup exhibits bright floral clarity, delicate malic acidity, or baked, hollow flat notes.",
        ],
      },
    ],
  },
  {
    slug: "water-quality-for-coffee",
    sheet: "RD-15",
    title: "Water Quality & Coffee: Why It’s More Important Than You Think",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "6 min read",
    source: "https://academy.thezariya.com/blog/water-quality-for-coffee/",
    description:
      "Coffee is mostly water, and water shapes extraction. Learn which minerals help, why distilled water fails, and how to improve your brewing water.",
    keyTakeaways: [
      "A brewed cup of filter coffee contains over 98.5% water; espresso contains 90% water.",
      "Calcium and magnesium ions actively bond with aromatic flavor compounds during extraction.",
      "Bicarbonate buffer regulates cup acidity: too much yields flat chalkiness; too little yields sour sharpness.",
      "Pure distilled or zero-TDS water extracts inefficiently and leaves cups tasting hollow and bitter.",
    ],
    sections: [
      {
        title: "The Chemistry of Extraction Solvents",
        content: [
          "Water is not a passive liquid; it is the chemical solvent responsible for pulling sugars, lipids, organic acids, and caffeine out of roasted coffee cellular matrices.",
          "Magnesium and calcium ions possess positive electrostatic charges that attract oxygen-rich oxygenated flavor compounds. Without them, extraction cannot occur properly.",
        ],
      },
      {
        title: "Tuning Water in Kolkata",
        content: [
          "Municipal and groundwater supplies across Kolkata often suffer from high mineral hardness and fluctuating bicarbonate counts. Implementing multi-stage filtration with remineralization is essential for consistent cup clarity.",
        ],
      },
    ],
  },
  {
    slug: "balance-and-complexity-in-coffee",
    sheet: "RD-16",
    title: "Understanding Balance & Complexity in Coffee: What Makes a ‘Perfect’ Cup?",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "6 min read",
    source: "https://academy.thezariya.com/blog/balance-and-complexity-in-coffee/",
    description:
      "What makes a perfect cup? Not one answer. An architect’s view of balance, complexity and the lifelong search for a better cup of coffee.",
    keyTakeaways: [
      "Balance is the harmonious structural equilibrium between acidity, sweetness, and gentle bitterness.",
      "Complexity provides dimensional depth: shifting flavor notes as the beverage cools.",
      "An architect's lens reveals that coffee extraction mirrors tectonic structural tension.",
      "Perfection is contextual: the ideal espresso shot adapts to bean origin, processing method, and ambient humidity.",
    ],
    sections: [
      {
        title: "The Architectural Parallels of Taste",
        content: [
          "Just as great architecture balances compression and tension, a memorable cup of coffee balances the brightness of organic fruit acids against caramel sweetness and structural phenolic bitterness.",
          "If one element overpowers the others, the structure collapses into one-dimensional sourness or astringency.",
        ],
      },
      {
        title: "The Dynamic Cooling Curve",
        content: [
          "A complex coffee reveals different flavor layers across temperature bands: from delicate floral aromas at 70°C, to stone fruit sweetness at 55°C, to crisp malic clarity as it reaches room temperature.",
        ],
      },
    ],
  },
  {
    slug: "coffee-extraction-explained",
    sheet: "RD-17",
    title: "The Science of Coffee Extraction: What Makes or Breaks Your Cup?",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "7 min read",
    source: "https://academy.thezariya.com/blog/coffee-extraction-explained/",
    description:
      "Extraction decides whether coffee tastes sour, bitter or balanced. Learn the five variables you control: grind, time, temperature, ratio and water.",
    keyTakeaways: [
      "Extraction yield describes the percentage of coffee mass dissolved into the brewing water.",
      "The Golden Cup standard targets an optimal 18% to 22% total extraction yield.",
      "Extraction occurs in sequential stages: fruit acids first, complex sugars second, heavy plant fibers last.",
      "The 5 controllable variables: grind particle size, contact duration, water temperature, brew ratio, and agitation.",
    ],
    sections: [
      {
        title: "The Chemistry of Extraction Sequence",
        content: [
          "Not all coffee solubles dissolve at the same rate. Organic salts and bright acids dissolve almost instantaneously upon water contact. Caramelized sugars and aromatics extract during the middle phase.",
          "Astringent tannins and harsh bitter polyphenols extract late in the brew cycle. Halting extraction at precisely the right threshold produces balance.",
        ],
      },
      {
        title: "Dialing In with Scientific Discipline",
        content: [
          "At The Zariya Academy, students learn to isolate one variable at a time. If an espresso tastes sour and salty, grind finer or increase brew temperature before arbitrarily changing dose weights.",
        ],
      },
    ],
  },
  {
    slug: "cross-sensory-training-for-coffee",
    sheet: "RD-18",
    title: "The Role of Cross-Sensory Training: How Wine, Chocolate & Whiskey Tasting Can Improve Your Coffee Palate",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "6 min read",
    source: "https://academy.thezariya.com/blog/cross-sensory-training-for-coffee/",
    description:
      "Tasting wine, chocolate and whiskey can sharpen your coffee palate. Learn what each teaches you and how to build a simple sensory routine.",
    keyTakeaways: [
      "Sensory calibration in adjacent culinary crafts broadens vocabulary and olfactory memory.",
      "Wine tasting teaches baristas to differentiate between citric, malic, and lactic acidity.",
      "Single-origin craft chocolate trains tactile mouthfeel perception and bitter-sweet balance.",
      "Whiskey analysis hones perception of oak, smoke, and complex alcohol-carried volatiles.",
    ],
    sections: [
      {
        title: "Expanding the Sensory Memory Bank",
        content: [
          "The human brain identifies flavors through associative pattern matching. If a barista has never tasted dried black currant, bergamot, or stone fruit preserves, they cannot identify those notes in a washed Ethiopian coffee.",
          "Cross-sensory training deliberate exposes students to high-grade wines, single-origin cacao, and spirits to enrich their sensory library.",
        ],
      },
      {
        title: "Building an Accessible Practice",
        content: [
          "Start with simple grocery store blind tastings: taste a green Granny Smith apple alongside a Meyer lemon and plain Greek yogurt to calibrate your palate on malic, citric, and lactic acid structures.",
        ],
      },
    ],
  },
  {
    slug: "acidity-in-coffee",
    sheet: "RD-19",
    title: "The Role of Acidity in Coffee: Bright, Tangy, or Sour?",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "5 min read",
    source: "https://academy.thezariya.com/blog/acidity-in-coffee/",
    description:
      "Acidity is not sourness. Learn where coffee acidity comes from, how altitude, processing, roast and brewing change it, and how to tune it.",
    keyTakeaways: [
      "Acidity provides vitality, sparkle, and fruit clarity; sourness is a defect born of under-extraction.",
      "High altitude cultivation forces slower bean maturation, concentrating rich organic acids.",
      "Washed processing highlights clean citric acidity, while natural processing leans into juicy malic tones.",
      "Roast progression systematically breaks down chlorogenic and citric acids over time.",
    ],
    sections: [
      {
        title: "Reclaiming the Word 'Acidity'",
        content: [
          "Commercial consumers often fear the word 'acidity', associating it with stomach upset or unpleasant sourness. In specialty coffee, acidity is what elevates a brew from dull roasted grain into vibrant tropical fruit and floral complexity.",
          "Distinguishing pleasant effervescence from vinegar-like under-extracted sourness is the first milestone of professional barista training.",
        ],
      },
      {
        title: "Techniques for Tuning Acidity on Bar",
        content: [
          "If an espresso's acidity is uncomfortably sharp, extending yield (from 1:2 to 1:2.2) or slightly raising brew temperature pulls more buffering sugars into the cup to soften the bite.",
        ],
      },
    ],
  },
  {
    slug: "light-medium-dark-roast-guide",
    sheet: "RD-20",
    title: "The Roast Spectrum: Understanding Light, Medium & Dark Roasts",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "6 min read",
    source: "https://academy.thezariya.com/blog/light-medium-dark-roast-guide/",
    description:
      "Light, medium or dark? Learn what each roast level tastes like, who it suits, and how to choose by coffee, brew method and taste.",
    keyTakeaways: [
      "Light roasts highlight origin terroir, organic fruit acids, and delicate floral aromatics.",
      "Medium roasts balance origin character with chocolatey Maillard reaction caramelization.",
      "Dark roasts showcase roaster-induced pyrolysis flavors, body, and smoky bittersweet notes.",
      "Brew methodology dictates ideal roast profile: pour-overs favor lighter roasts; moka pots and milk favor medium-dark.",
    ],
    sections: [
      {
        title: "The Chemistry Across the Spectrum",
        content: [
          "As roasting progresses, heat drives off organic moisture and initiates the Maillard reaction between amino acids and reducing sugars. Cellular structures become increasingly porous.",
          "A light roast preserves origin characteristics of soil and altitude. A dark roast burns off origin notes in favor of pungent roast flavors and rich tactile viscosity.",
        ],
      },
      {
        title: "Choosing for Your Daily Brew",
        content: [
          "There is no moral hierarchy in roast degrees. A thoughtful barista matches the roast profile to the drinker's sensory preference and preferred brewing equipment.",
        ],
      },
    ],
  },
  {
    slug: "perfect-espresso-shot",
    sheet: "RD-21",
    title: "The Perfect Espresso Shot: A Story of What ACTUALLY Matters",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "7 min read",
    source: "https://academy.thezariya.com/blog/perfect-espresso-shot/",
    description:
      "Numbers get you started. Feel finishes the shot. Learn what matters in espresso: grind and flow, tamping, pre-infusion, the stream and taste.",
    keyTakeaways: [
      "Brew recipes (e.g. 18g in, 36g out in 28 seconds) provide baselines, not guarantees.",
      "Puck preparation—distribution, de-clumping, and level tamping—prevents catastrophic channeling.",
      "Gentle pre-infusion saturates the coffee bed, mitigating channeling under 9 bar pressure.",
      "The visual color and viscosity of the flowing mouse-tail stream signals extraction health.",
    ],
    sections: [
      {
        title: "Beyond the Digital Scale",
        content: [
          "Modern espresso culture is obsessed with digital scales and timers. While precision measurement is non-negotiable for repeatability, sensory taste is the ultimate arbiter.",
          "A 28-second shot can taste bitter and dry if channeling occurred, while a 35-second shot might taste extraordinarily sweet and viscous.",
        ],
      },
      {
        title: "The Mechanics of Puck Preparation",
        content: [
          "Water under 9 bars of hydraulic pressure will relentlessly seek the path of least resistance. Using a WDT needle tool to eliminate clumps and applying a perfectly level tamp is the single greatest defense against channeling.",
        ],
      },
    ],
  },
  {
    slug: "fresh-roasted-coffee-guide",
    sheet: "RD-22",
    title: "The Importance of Freshly Roasted Coffee: A Beginner’s Guide",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "5 min read",
    source: "https://academy.thezariya.com/blog/fresh-roasted-coffee-guide/",
    description:
      "Coffee is a fresh product. Learn why roast date matters, how long beans stay at their best, and how to store and buy coffee that tastes alive.",
    keyTakeaways: [
      "Coffee is a perishable agricultural good that oxidizes and stales upon contact with air.",
      "Freshly roasted beans require 3 to 7 days of resting to degas excess carbon dioxide.",
      "Peak flavor occurs between days 7 and 28 post-roast date for most filter and espresso profiles.",
      "Store beans whole in airtight, light-blocking containers at stable room temperature.",
    ],
    sections: [
      {
        title: "The Degassing Window",
        content: [
          "Coffee beans trap significant volumes of carbon dioxide during roasting. Brewing coffee immediately out of the roaster results in violent turbulence and erratic channeling during extraction.",
          "Allowing beans to rest in one-way valve bags allows CO2 to escape while keeping oxygen from entering.",
        ],
      },
      {
        title: "Debunking Coffee Storage Myths",
        content: [
          "Storing opened coffee bags in domestic refrigerators or freezers without professional vacuum seals introduces condensation and accelerates lipid rancidity. Keep beans cool, dark, dry, and sealed.",
        ],
      },
    ],
  },
  {
    slug: "espresso-martini-history-and-variations",
    sheet: "RD-23",
    title: "The Espresso Martini: History, Variations & Modern Twists",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "6 min read",
    source: "https://academy.thezariya.com/blog/espresso-martini-history-and-variations/",
    description:
      "The Espresso Martini was created in London in the 1980s. Learn its history, the classic recipe and six variations, from rum to nitro.",
    keyTakeaways: [
      "Created by visionary bartender Dick Bradsell at Fred's Club in London during the mid-1980s.",
      "A proper dense crema foam head requires freshly pulled hot espresso shaken vigorously with high-density ice.",
      "Balancing bitter coffee crema against craft coffee liqueur sweetness is paramount.",
      "Modern craft variations incorporate aged rums, mezcal smoke, or nitro cold brew tap systems.",
    ],
    sections: [
      {
        title: "Origins of an Iconic Cocktail",
        content: [
          "Legend holds that a future supermodel walked into Fred's Club asking for a drink that would wake her up and energize her evening. Bradsell combined vodka, fresh espresso, coffee liqueur, and sugar syrup.",
          "The cocktail bridged the gap between serious mixology and specialty coffee.",
        ],
      },
      {
        title: "Mastering the Shaking Technique",
        content: [
          "The secret to the velvety dense white foam head on an Espresso Martini is the rapid emulsification of espresso oils with ice during a violent 12-second shake. Strain double through a fine mesh strainer immediately.",
        ],
      },
    ],
  },
  {
    slug: "how-to-differentiate-your-cafe",
    sheet: "RD-24",
    title: "How to Differentiate Your Café in a Saturated Market",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "6 min read",
    source: "https://academy.thezariya.com/blog/how-to-differentiate-your-cafe/",
    description:
      "Most cafés fail because they are forgettable, not because they are bad. Four ideas for building a café that is hard to replace.",
    keyTakeaways: [
      "Competent coffee and trendy aesthetics are baseline table stakes, not differentiators.",
      "Hospitality warmth and personal guest recognition drive true lifetime customer retention.",
      "A signature operational workflow prevents service bottlenecks during peak rush periods.",
      "Curate a distinct point of view on coffee sourcing, interior materiality, and soundscape design.",
    ],
    sections: [
      {
        title: "The Trap of Generic Specialty Culture",
        content: [
          "Across urban centres, dozens of cafés feature identical minimalist white tiles, generic neon signs, and identical menu boards. While clean, they fail to cultivate genuine brand loyalty.",
          "Cafés survive economic headwinds when they become indispensable community living rooms with distinct personalities.",
        ],
      },
    ],
  },
  {
    slug: "brew-better-coffee-at-home",
    sheet: "RD-25",
    title: "How to Brew Better Coffee at Home: What Nobody Tells You",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "6 min read",
    source: "https://academy.thezariya.com/blog/brew-better-coffee-at-home/",
    description:
      "Make café-quality coffee at home. Six practical fixes: fresh beans, the right water, a burr grinder, a scale, brew temperature and patience.",
    keyTakeaways: [
      "Investing in a high-quality conical burr grinder is 10x more important than buying an expensive brewer.",
      "Weighing water and ground coffee on a digital gram scale eliminates guesswork.",
      "Use mineral-balanced water rather than straight tap or pure distilled water.",
      "Master pouring turbulence and agitation to avoid channeling through the paper filter bed.",
    ],
    sections: [
      {
        title: "The Equipment Hierarchy",
        content: [
          "Most home brewers believe the key to better coffee is buying a complex, shiny contraption. In reality, an inexpensive plastic V60 paired with a high-end burr grinder will vastly outperform a luxury brewer fed by a cheap blade grinder.",
          "Uniform particle distribution allows water to extract every coffee ground at an identical rate.",
        ],
      },
    ],
  },
  {
    slug: "caffeine-and-alcohol-wide-awake-drunk",
    sheet: "RD-26",
    title: 'Caffeine & Alcohol: The Science Behind the "Wide Awake, Drunk" Effect',
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "5 min read",
    source: "https://academy.thezariya.com/blog/caffeine-and-alcohol-wide-awake-drunk/",
    description:
      "Caffeine can hide how drunk you feel, but it does not make you sober. Learn what happens when caffeine and alcohol mix, and how to stay safe.",
    keyTakeaways: [
      "Caffeine blocks adenosine receptors, masking alcohol-induced drowsiness without restoring cognitive acuity.",
      "Blood alcohol concentration (BAC) remains completely unaffected by caffeine consumption.",
      "Subjective sobriety increases the likelihood of high-risk behavior and misjudged motor reflexes.",
      "Responsible baristas and bartenders pace coffee cocktails with mandatory hydration protocols.",
    ],
    sections: [
      {
        title: "The Neurochemical Mechanism",
        content: [
          "Alcohol depresses central nervous system function while stimulating dopamine release. Caffeine operates as an adenosine receptor antagonist, temporarily preventing fatigue signals from reaching brain receptors.",
          "The combination creates a cognitive state known as 'wide-awake drunkenness': the individual feels alert and energetic, yet their motor control, reaction speeds, and judgment remain impaired.",
        ],
      },
    ],
  },
  {
    slug: "bitterness-in-coffee",
    sheet: "RD-27",
    title: "Bitterness in Coffee: Is It Always a Bad Thing?",
    category: "Academy",
    type: "Article",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    readingTime: "6 min read",
    source: "https://academy.thezariya.com/blog/bitterness-in-coffee/",
    description:
      "Bitterness is part of coffee, not always a flaw. Learn what causes it, how to tell good bitterness from bad, and how to tune it in your cup.",
    keyTakeaways: [
      "Bitterness provides essential tactile structure, length of finish, and aromatic complexity.",
      "Positive bitterness tastes like dark cacao nibs, grapefruit pith, or amaro digestifs.",
      "Defective bitterness tastes harsh, ash-like, medicinal, and leaves a lingering dry sandpaper mouthfeel.",
      "Over-extraction and excessive brew temperatures are the primary culprits behind negative bitterness.",
    ],
    sections: [
      {
        title: "The Role of Bitterness in Culinary Structure",
        content: [
          "No complex culinary creation exists without bitter components: from the hops in craft ale to endive in salads, bitterness creates a grounding counterpoint to sugar and acid.",
          "In coffee, positive bitterness balances bright origin acids and gives espresso its satisfying, lingering chocolate finish.",
        ],
      },
      {
        title: "Diagnostic Corrections on Bar",
        content: [
          "If a brew leaves a parched, astringent sensation in your throat, you have extracted deep into the bitter tannins. Coarsen your grind size, lower water temperature by 2°C, or shorten brew time.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles;
}
