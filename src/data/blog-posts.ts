export interface BlogSection {
  id: string;
  heading: string;
  body: string[];
  list?: string[];
  quote?: string;
  subsections?: { id: string; heading: string; body: string[] }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "preventive-maintenance-security-system-vs-liability",
    title:
      "Why Preventive Maintenance Is the Real Difference Between a Security System and a Security Liability",
    excerpt:
      "Most security failures are not equipment failures — they are maintenance failures. Here is why preventive AMC is the single biggest determinant of whether your system works when it matters.",
    category: "Maintenance",
    author: "GuardX360 Engineering Team",
    date: "March 12, 2026",
    readTime: "8 min read",
    metaDescription:
      "Preventive maintenance decides whether a security system performs when it is needed. GuardX360 breaks down what a real AMC covers and why reactive service costs communities more.",
    intro:
      "A security system does not fail on the day of a break-in. It fails months earlier — a lens fogs, a hard drive fills up, a firmware bug drops a camera offline, a backup battery dies. Nobody notices, because nothing dramatic happened. Then something dramatic happens, and the footage is not there.",
    sections: [
      {
        id: "the-quiet-failure-mode",
        heading: "The quiet failure mode nobody plans for",
        body: [
          "Every security system degrades from the moment it is installed. Cameras drift out of focus, storage overwrites older footage, cables corrode at junction boxes, PoE switches overheat in unventilated racks. None of this is dramatic. All of it is predictable.",
          "The industry sells this as a one-time capex — buy the equipment, install it, done. That framing is the root cause of most 'the CCTV was not working' incident reports we see when auditing existing sites.",
        ],
      },
      {
        id: "what-preventive-actually-means",
        heading: "What preventive actually means (and does not mean)",
        body: [
          "Preventive maintenance is not the same as being available to fix things when they break. Reactive service is the default in this industry — you call, someone comes, they replace a part. That is repair, not maintenance.",
          "Preventive means scheduled site visits on a fixed calendar, with a documented checklist, executed whether or not anything appears wrong.",
        ],
        list: [
          "Physical inspection of every camera, barrier, reader and controller",
          "Firmware and DVR/NVR health checks — storage, temperature, error logs",
          "Cable and connector inspection at every termination point",
          "Backup power verification — battery health, UPS runtime, mains switching",
          "Cleaning of housings, lenses, IR arrays and cooling vents",
          "Written report handed to the committee after every visit",
        ],
      },
      {
        id: "the-real-cost-of-reactive",
        heading: "The real cost of running a system reactively",
        body: [
          "The invoice for reactive service looks cheaper. The total cost is not.",
          "A community running its system reactively typically spends more on emergency callouts, urgent hardware replacements, and full-system re-commissioning after neglected downtime than a community on a disciplined AMC — and that is before you count the risk exposure during the periods when the system is silently degraded.",
        ],
      },
      {
        id: "what-to-demand-in-an-amc",
        heading: "What to demand in an AMC contract",
        body: [
          "Not all AMCs are equal. Most 'AMCs' in this industry are pay-per-visit repair contracts dressed up in nicer paperwork. When you evaluate a proposal, look for these terms specifically:",
        ],
        list: [
          "A fixed number of scheduled preventive visits per year — not 'as required'",
          "Written scope of what is covered per visit, per system",
          "SLA on response time for reactive callouts, in hours, in writing",
          "Named engineer or team accountable for your site",
          "Handover of a written report after every visit, filed and dated",
          "Clear inclusion/exclusion list — what parts are covered, what is chargeable",
        ],
      },
      {
        id: "the-committee-question",
        heading: "The one question every committee should ask",
        body: [
          "Before you renew any security AMC, ask the vendor for the last three preventive visit reports for a comparable community they service. If they cannot produce them within a day, they are not doing preventive maintenance — they are doing repairs and calling it an AMC.",
          "This is the single fastest test we know for separating engineering-led vendors from resellers.",
        ],
      },
    ],
  },
  {
    slug: "gated-community-security-2026-residents-expect",
    title:
      "Gated Community Security in 2026: What Residents Actually Expect vs. What Most Systems Deliver",
    excerpt:
      "There is a growing gap between what residents assume a modern security system does and what the installed hardware in most communities can actually deliver. Here is where the gap is widest.",
    category: "Gated Communities",
    author: "GuardX360 Engineering Team",
    date: "February 27, 2026",
    readTime: "9 min read",
    metaDescription:
      "Residents in 2026 expect visitor logs, ANPR entry, working cameras and audit trails. Most gated community systems still cannot deliver the basics. GuardX360 breaks down the gap.",
    intro:
      "Ten years ago, a boom barrier and eight analog cameras were a competent security posture for a mid-sized gated community. In 2026, the same setup fails almost every expectation residents now bring — because those expectations have quietly moved on, and the installed base largely has not.",
    sections: [
      {
        id: "the-expectation-shift",
        heading: "The expectation shift residents rarely articulate",
        body: [
          "Residents do not walk into an AGM asking for ANPR cameras or role-based access control. They ask why the guard cannot tell them who visited flat 402 last Tuesday, or why the CCTV footage of a parking dent is unreadable, or why the same vendor's cab was allowed in three times without a phone call.",
          "Every one of those complaints is a specification gap, not a staffing gap.",
        ],
      },
      {
        id: "what-residents-now-assume",
        heading: "What residents now assume the system does",
        body: [
          "Based on assessments across dozens of Hyderabad communities, residents assume — without ever being told — that the system already does these things:",
        ],
        list: [
          "Every visitor entry is logged with photo, phone, host flat, and timestamp",
          "Every vehicle entering the community is captured with a readable number plate",
          "CCTV footage is retrievable within minutes, not 'we will check with the vendor'",
          "Staff and vendor entries are on a different access rule than residents",
          "The committee can pull a monthly incident report without help",
          "The system keeps working during power cuts and monsoon weather",
        ],
      },
      {
        id: "what-installed-systems-deliver",
        heading: "What the installed base actually delivers",
        body: [
          "In the communities we audit, four out of six of those assumptions typically fail on day one of the assessment. Not because the residents are unreasonable — because the system was designed to a 2015 spec and never modernised.",
          "The most common gaps are: no ANPR at the main gate, no structured visitor database (just a paper register), CCTV storage rotated after 5–7 days instead of 30, and no defined SOP for who can access footage or when.",
        ],
      },
      {
        id: "closing-the-gap",
        heading: "Closing the gap without ripping out the system",
        body: [
          "The good news: closing this gap almost never requires a full replacement. Most communities can move from the 2015 posture to the 2026 posture through targeted upgrades — ANPR at the main gate, a visitor management layer over existing hardware, storage extension, and a written access-control SOP.",
          "The starting point is an honest assessment of what is installed, what works, and what is missing — not a proposal from a vendor with equipment to sell.",
        ],
      },
    ],
  },
  {
    slug: "industrial-site-security-designing-for-uptime",
    title:
      "Industrial Site Security: Designing for Uptime, Not Just Detection",
    excerpt:
      "On an industrial site, a security system that is offline for 40 minutes is a bigger risk than one that missed a single alert. Here is how uptime-first design changes the specification.",
    category: "Industrial",
    author: "GuardX360 Engineering Team",
    date: "February 8, 2026",
    readTime: "10 min read",
    metaDescription:
      "Industrial security systems fail on uptime, not detection. GuardX360 explains how redundancy, power design and preventive service change the specification for critical sites.",
    intro:
      "For a residential community, a two-hour CCTV outage is inconvenient. For a mining site, a fuel depot, or a critical logistics yard, the same two hours is a compliance breach, an insurance exposure, and a shift-worth of unmonitored activity across a perimeter measured in kilometres. Industrial security is not gated community security scaled up — it is a different design problem.",
    sections: [
      {
        id: "why-uptime-is-the-real-kpi",
        heading: "Why uptime is the real KPI",
        body: [
          "In residential specs, the marketing metric is resolution — 4K, 8MP, 'sees a number plate at 40 metres'. In industrial specs, the metric that actually matters is what percentage of the year every camera, controller and barrier is fully functional and recording.",
          "A perfect 8MP camera that is offline 3% of the year is worse, on an industrial site, than a 2MP camera that is offline 0.1% of the year. Downtime is the failure mode. Design starts there.",
        ],
      },
      {
        id: "power-first-design",
        heading: "Power-first design",
        body: [
          "Every industrial security specification we produce starts with the power layer, not the camera layer. If the site loses mains at 2 AM and the DG takes 90 seconds to cut in, every PoE switch reboots, every NVR fsck's its disks, and every controller renegotiates with its readers. That is a 5–8 minute blackout window recurring every time the mains blip.",
        ],
        list: [
          "Dedicated UPS on every PoE switch and NVR — sized for DG changeover, not runtime",
          "Battery-backed access controllers at each critical door and gate",
          "Surge protection at every entry point from the site power ring",
          "Redundant power feeds to central rack from two distribution boards where possible",
        ],
      },
      {
        id: "redundancy-that-matters",
        heading: "Redundancy that actually earns its cost",
        body: [
          "Not every camera on an industrial site needs a hot spare. But the ones covering the primary gate, the fuel bay, the weighbridge, and the material despatch door do. The design principle is simple: identify the frames that would be catch-all evidence in a dispute, and make sure the failure of any single camera, cable or switch does not leave that frame blind.",
        ],
      },
      {
        id: "operational-discipline",
        heading: "Operational discipline is half the system",
        body: [
          "The most technically sound industrial system will still fail without operational discipline: shift handover checklists, a documented SOP for footage retrieval, monthly access audits, quarterly cable inspection, and a named engineer accountable for the site.",
          "For critical sites, we recommend a fortnightly preventive visit rather than the monthly cadence typical for residential AMCs — the failure cost is too high to accept the wider inspection window.",
        ],
      },
      {
        id: "designing-for-the-audit",
        heading: "Design for the audit, not just the incident",
        body: [
          "Industrial sites are audited — by insurers, by regulators, by internal EHS teams, and occasionally by law enforcement. A security system that cannot produce a signed, dated preventive maintenance log for the last twelve months is a system that will not survive an audit, regardless of how much footage it holds.",
          "Design the paperwork with the same seriousness as the hardware. On critical sites, the documentation is the system.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
