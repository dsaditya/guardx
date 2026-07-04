export type ResourceType = "Checklist" | "Guide";

export interface ResourceSection {
  heading: string;
  items?: string[];
  paragraphs?: string[];
}

export interface Resource {
  slug: string;
  title: string;
  type: ResourceType;
  group: "audits" | "gated" | "industrial";
  description: string;
  metaDescription: string;
  intro: string;
  sections: ResourceSection[];
}

export const groups = [
  {
    id: "audits" as const,
    title: "Site Security Audits & Assessments",
    subtitle: "Structured tools to benchmark and evaluate an existing security posture.",
  },
  {
    id: "gated" as const,
    title: "Gated Community Security Planning",
    subtitle: "Practical planning resources for RWA committees and facility managers.",
  },
  {
    id: "industrial" as const,
    title: "Industrial & Critical Site Preparedness",
    subtitle: "Specifications and readiness guides for high-uptime environments.",
  },
];

export const resources: Resource[] = [
  {
    slug: "gated-community-security-audit-checklist",
    title: "Gated Community Security System Audit Checklist",
    type: "Checklist",
    group: "audits",
    description:
      "A committee-friendly checklist to evaluate the current state of your community's security infrastructure across surveillance, access control, perimeter and maintenance.",
    metaDescription:
      "Free audit checklist for gated community security systems — CCTV, access control, perimeter, power and AMC coverage. Built by GuardX360 engineers.",
    intro:
      "Use this checklist during a walk-through of your community with the current security vendor or committee. Any item marked 'No' is a candidate for the next assessment or upgrade cycle.",
    sections: [
      {
        heading: "1. CCTV & Surveillance",
        items: [
          "Every main entry, exit, and lift lobby has a working camera with visible live feed",
          "Recorded footage of at least the last 30 days is retrievable within 15 minutes",
          "Camera lenses, housings and IR arrays have been cleaned in the last 90 days",
          "NVR/DVR storage, temperature and error logs have a written monthly check",
          "There is a named person authorised to pull footage, with a written SOP",
        ],
      },
      {
        heading: "2. Vehicle Access & Boom Barriers",
        items: [
          "All boom barriers open and close smoothly, without manual override",
          "ANPR or UHF is installed at the main gate (or a plan exists to add it)",
          "Visitor vehicle entries are recorded with number plate, host flat and timestamp",
          "Backup battery on the barrier holds through a full power cut",
        ],
      },
      {
        heading: "3. People Access & Visitor Management",
        items: [
          "Resident, staff and vendor entries are on separate access rules",
          "Visitor logs are digital, retrievable, and include photo + phone",
          "Staff and vendor lists are reviewed and pruned at least every quarter",
          "There is a documented process for revoking access on move-out or termination",
        ],
      },
      {
        heading: "4. Perimeter & Emergency",
        items: [
          "Perimeter wall/fence has no dark zones invisible to any camera at night",
          "Emergency exits are alarmed and monitored, not just chained",
          "There is a written SOP for a fire, intrusion or medical alert",
        ],
      },
      {
        heading: "5. Power, Networking & Uptime",
        items: [
          "Every PoE switch and NVR is on UPS backup",
          "DG changeover has been tested against the security system in the last year",
          "Central rack is ventilated, dust-controlled and physically secured",
        ],
      },
      {
        heading: "6. Maintenance & Documentation",
        items: [
          "There is an active AMC with a defined number of preventive visits per year",
          "The last three preventive visit reports are on file with the committee",
          "An 'as-built' drawing exists showing every camera, cable and controller",
          "The committee knows the SLA in hours for a reactive callout",
        ],
      },
    ],
  },
  {
    slug: "industrial-site-security-buyers-guide",
    title:
      "Industrial Site Security Buyer's Guide: What to Ask Before You Sign a Contract",
    type: "Guide",
    group: "industrial",
    description:
      "A procurement-ready guide for plant managers, EHS heads and admin teams evaluating security vendors for industrial, warehousing or critical infrastructure sites.",
    metaDescription:
      "Buyer's guide for industrial security systems — power design, redundancy, uptime SLAs, and AMC scope. What to ask vendors before you sign.",
    intro:
      "Industrial security is a different specification problem from residential. This guide is structured as questions to put to any shortlisted vendor before contracting. Their answers — or the absence of them — will tell you far more than a glossy proposal.",
    sections: [
      {
        heading: "1. Design & Specification",
        paragraphs: [
          "Ask the vendor to walk you through their proposed design starting from the power layer, not the camera layer. If they open with megapixels, they are optimising for the wrong KPI.",
        ],
        items: [
          "What is the specified uptime target for the system, in percent per year?",
          "Which cameras are designated critical, and what is their redundancy plan?",
          "How is DG changeover handled at every switch, NVR and controller?",
          "Are surge protection and lightning protection included in the BOQ?",
        ],
      },
      {
        heading: "2. Installation & Handover",
        items: [
          "What documentation is delivered at handover — as-built drawings, IP schedule, credentials?",
          "Who signs off on the commissioning report, and against which acceptance tests?",
          "Is a written SOP for footage retrieval, access provisioning and incident response part of the handover?",
        ],
      },
      {
        heading: "3. Maintenance & SLA",
        items: [
          "How many scheduled preventive visits per year are included in the AMC?",
          "What is the response time SLA for a reactive callout, in hours, in writing?",
          "Is there a named engineer accountable for this site?",
          "What parts are covered under AMC vs. chargeable, in a written inclusion/exclusion list?",
        ],
      },
      {
        heading: "4. References & Track Record",
        items: [
          "Can the vendor produce the last three preventive visit reports for a comparable site?",
          "Can they name at least two industrial references at similar scale in the region?",
          "What has been their longest running AMC on a single industrial site, in years?",
        ],
      },
      {
        heading: "5. Commercial",
        paragraphs: [
          "The lowest quote is almost never the lowest total cost. Compare on capex + 5-year AMC + expected reactive callouts, not just the installation figure. Ask for a fixed AMC escalation clause so year-three does not double.",
        ],
      },
    ],
  },
  {
    slug: "preventive-maintenance-checklist-security-systems",
    title: "Preventive Maintenance Checklist for Security Systems",
    type: "Checklist",
    group: "audits",
    description:
      "The exact site-visit checklist GuardX360 engineers use during scheduled preventive AMC visits. Use it to hold your existing vendor to a real standard.",
    metaDescription:
      "The preventive maintenance checklist GuardX360 engineers use during scheduled AMC visits — CCTV, access control, power and network health.",
    intro:
      "This is a working checklist, not a sales document. Every item on it is what an engineer should physically verify during a scheduled preventive visit to a security system — residential or industrial. Attach it to your AMC and require it back, signed, after every visit.",
    sections: [
      {
        heading: "CCTV & Recording",
        items: [
          "Physical inspection of every camera — housing, cable gland, mount rigidity",
          "Lens cleaning, IR array cleaning, dome polish where required",
          "Focus and field-of-view verified against original commissioning frame",
          "NVR/DVR — disk health, SMART logs, free-space threshold, event log review",
          "Recording integrity — random playback of a 24-hour window per channel",
          "Firmware version recorded; updated if a security patch is available",
        ],
      },
      {
        heading: "Access Control",
        items: [
          "Every reader tested with a live credential — resident, staff and vendor class",
          "Door contacts and REX buttons verified for correct state",
          "Controller battery voltage measured and logged",
          "Access database exported and archived",
          "Stale users (>90 days inactive) flagged to committee/admin",
        ],
      },
      {
        heading: "Boom Barriers & Vehicle Access",
        items: [
          "Barrier arm — balance, mounting bolts, spring tension",
          "Loop detector / RFID / ANPR tested with a live vehicle",
          "Manual override key/tool tested and left in the guard cabin location",
          "Backup battery load-tested; replaced if below spec",
        ],
      },
      {
        heading: "Power, Network & Rack",
        items: [
          "Every UPS — battery load test, runtime measurement, log recorded",
          "PoE switches — temperature, error counter, port link status per channel",
          "Central rack — cleaning, cable dressing, label verification",
          "Earthing continuity checked at rack and at outdoor equipment",
        ],
      },
      {
        heading: "Documentation & Handover",
        items: [
          "As-built drawing updated for any change since last visit",
          "Written visit report signed by engineer and site representative",
          "Open issues logged with priority and target closure date",
          "Next scheduled visit date confirmed with client",
        ],
      },
    ],
  },
];

export const getResource = (slug: string) => resources.find((r) => r.slug === slug);
