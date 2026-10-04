// Marketplace rules, complaints, IP, acceptable use, business information and contact.
import { legal, TBC } from "./config.mjs";

const ph = (text = TBC) => `<span class="ph">${text}</span>`;
const mail = (addr, subject) =>
  `<a href="mailto:${addr}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}">${addr}</a>`;
const support = (subject) => mail(legal.supportEmail, subject);
const L = (href, text) => `<a href="${href}">${text}</a>`;
const val = (v) => (v === TBC ? ph() : v);
const HOLD = "7 days";

export const rulePages = [
  // ── I. Marketplace Rules & Prohibited Products ─────────────────────────
  {
    slug: "marketplace-rules",
    title: "Marketplace Rules & Prohibited Products",
    description: "Listing standards, seller conduct and the items that cannot be sold on GrowMate.",
    lede: "Rules for everyone who lists, buys or sells on GrowMate. Applicable Philippine laws and regulations also apply in full.",
    sections: [
      { id: "listing", h: "Listing standards", html: `
        <ul>
          <li>List only items you have and can hand to a GrowMate rider.</li>
          <li>Name the plant accurately; do not use a more valuable species name for a different plant.</li>
          <li>Use clear photos of the actual item or representative stock, and state the form (potted, cutting, seedling) and price per unit.</li>
          <li>Keep stock and prices current.</li>
        </ul>` },
      { id: "prohibited", h: "Prohibited items", html: `
        <ul>
          <li>Plants, seeds or animals whose sale is illegal, including protected or endangered wild species collected without permits.</li>
          <li>Regulated plants without the permits the law requires. GrowMate may hold such listings for review or block them.</li>
          <li>Illegal drugs and plants or products intended for producing them.</li>
          <li>Stolen goods, counterfeit goods, and items that infringe someone else's intellectual property.</li>
          <li>Dangerous or unsafe products, including banned pesticides and unlabelled chemicals.</li>
          <li>Anything else the law prohibits from being sold online or delivered.</li>
        </ul>
        <p>This list is not exhaustive. If you are unsure whether an item is allowed, ask ${support("Is this item allowed?")} before listing it.</p>` },
      { id: "conduct", h: "Marketplace conduct", html: `
        <ul>
          <li>No misleading listings, bait pricing or fake discounts.</li>
          <li>No fake reviews, review swapping, or ratings bought or traded.</li>
          <li>No shill or self-buying to manipulate rankings, sales counts or rank points.</li>
          <li>No moving a GrowMate buyer to off-platform payment or delivery.</li>
          <li>No harassment of buyers, sellers or riders.</li>
        </ul>` },
      { id: "enforcement", h: "Enforcement", html: `<p>GrowMate may remove listings, block regulated items, withhold amounts linked to fraud while it is investigated, and suspend or close accounts. Report rule-breaking from the listing or profile in the app, or email ${support("Marketplace rules report")}.</p>` },
    ],
  },

  // ── J. Disputes & Complaints ───────────────────────────────────────────
  {
    slug: "disputes",
    title: "Disputes & Complaints",
    description: "How to raise a problem with an order, a seller, a rider, a payout or another user on GrowMate, and how GrowMate handles it.",
    lede: "How to raise a problem and how GrowMate handles it.",
    sections: [
      { id: "where", h: "Where to start", html: `
        <table>
          <thead><tr><th>Problem</th><th>Where</th></tr></thead>
          <tbody>
            <tr><td>Item damaged, wrong, missing or not as described</td><td>Open a refund request from the order in the app within ${HOLD} of delivery</td></tr>
            <tr><td>A listing or a user breaking the rules</td><td>Use Report on the listing or profile in the app</td></tr>
            <tr><td>Seller payout missing or wrong</td><td>Raise a payout dispute on the payout in Seller Center</td></tr>
            <tr><td>Delivery, rider or cash problem</td><td>Email ${support("Delivery or rider complaint")}</td></tr>
            <tr><td>Copyright or trademark</td><td>See the ${L("/intellectual-property", "Intellectual Property Policy")}</td></tr>
            <tr><td>Privacy</td><td>See the ${L("/privacy#rights", "Privacy Notice")}</td></tr>
            <tr><td>Anything else</td><td>Email ${support("Complaint")}</td></tr>
          </tbody>
        </table>` },
      { id: "include", h: "What to include", html: `
        <ul>
          <li>Your account email and the order reference (shown in the order).</li>
          <li>What happened and when.</li>
          <li>Photos or screenshots, for example of the item, the packaging or the chat.</li>
          <li>What outcome you are asking for.</li>
        </ul>` },
      { id: "process", h: "How GrowMate handles it", html: `
        <ol>
          <li>We acknowledge your complaint and may ask for more information.</li>
          <li>We hear from the other party (for example the seller can respond to a refund request in the app).</li>
          <li>We review order, delivery and cash records, including proof-of-delivery photos.</li>
          <li>We decide and tell both parties the outcome and the reason.</li>
        </ol>
        <p>Target response and resolution times: ${ph()}.</p>` },
      { id: "escalate", h: "If you are not satisfied", html: `<p>Reply to our decision to ask for a second review by ${support("Escalation")}. You may also bring consumer complaints to the Department of Trade and Industry and privacy complaints to the National Privacy Commission.</p>` },
    ],
  },

  // ── K. Intellectual Property ───────────────────────────────────────────
  {
    slug: "intellectual-property",
    title: "Intellectual Property Policy",
    description: "GrowMate's brand and content, the content users upload, and how to report copyright or trademark infringement.",
    lede: "How GrowMate treats its own brand and content, the content users upload, and infringement reports.",
    sections: [
      { id: "ours", h: "GrowMate's brand and content", html: `<p>The GrowMate name and logo, the app and website design, and GrowMate-written content such as care guides belong to GrowMate or its licensors. Trademark registration status: ${ph()}. Do not use them without permission, except to refer to GrowMate truthfully.</p>` },
      { id: "users", h: "Content you upload", html: `<p>You keep ownership of your listing photos, descriptions, garden photos and other content, and give GrowMate the licence described in the ${L("/terms#content", "Terms &amp; Conditions")}. Only upload content you created or have permission to use. Do not copy other sellers' photos or descriptions.</p>` },
      { id: "third-party", h: "Third-party material", html: `<p>Some plant photos in the Plant Library come from third-party sources under their licences.</p>` },
      { id: "report", h: "Reporting infringement", html: `
        <p>Email ${support("IP complaint")} with:</p>
        <ul>
          <li>Your name and contact details, and whether you are the rights owner or authorised to act for them.</li>
          <li>The work or trademark you say is infringed.</li>
          <li>Links to, or the names of, the listings or content involved.</li>
          <li>A statement that the information is accurate and made in good faith.</li>
        </ul>
        <p>GrowMate may remove the content and will tell the user who posted it, who may respond. Repeat infringers may lose their accounts.</p>` },
    ],
  },

  // ── L. Acceptable Use ──────────────────────────────────────────────────
  {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    description: "Behaviour that is not allowed on GrowMate, from fraud and harassment to security attacks and manipulation of reviews or rankings.",
    lede: "What you must not do on GrowMate.",
    sections: [
      { id: "fraud", h: "Fraud and abuse", html: `
        <ul>
          <li>Fraud, scams, fake orders or fake accounts.</li>
          <li>Using someone else's account, identity or ID documents.</li>
          <li>Withholding or misdirecting cash collected on delivery.</li>
          <li>Moving GrowMate transactions off-platform to avoid fees or protections.</li>
        </ul>` },
      { id: "people", h: "Respect for others", html: `
        <ul>
          <li>Harassment, threats, hate speech or sexual content.</li>
          <li>Spam, unsolicited advertising or chain messages.</li>
          <li>Sharing other people's personal data without permission.</li>
        </ul>` },
      { id: "manipulation", h: "Manipulation", html: `
        <ul>
          <li>Fake or incentivised reviews and ratings.</li>
          <li>Gaming rankings, rank points or other rewards, including listing and delisting to collect points.</li>
        </ul>` },
      { id: "security", h: "Security", html: `
        <ul>
          <li>Accessing accounts, data or systems you are not authorised to use.</li>
          <li>Probing, scanning or attacking GrowMate, or interfering with its operation.</li>
          <li>Scraping or bulk-collecting data, or uploading malware.</li>
        </ul>
        <p>If you find a security problem, report it to ${support("Security report")} and do not exploit it.</p>` },
      { id: "enforcement", h: "Enforcement", html: `<p>GrowMate may remove content, limit features, suspend or close accounts, and report illegal activity to the authorities.</p>` },
    ],
  },
];

// ── /legal: business information and the document index ─────────────────
export const legalHub = {
  slug: "legal",
  title: "Legal & Business Information",
  description: "GrowMate's business details and all of its legal documents and policies.",
  lede: "GrowMate's business details and policies in one place.",
  business: [
    ["Brand", legal.brand + ` (formerly ${legal.formerName})`],
    ["Partner", "Department of Agriculture, Republic of the Philippines"],
    ["Recognition", "Winner, Young Farmers Challenge 2026 (Department of Agriculture)"],
    ["Legal business name", val(legal.legalName)],
    ["Business address", val(legal.businessAddress)],
    ["Registration", val(legal.registration)],
    ["DTI / SEC", val(legal.dtiSec)],
    ["BIR", val(legal.bir)],
    ["Customer support", support("Support")],
    ["Privacy contact", mail(legal.privacyEmail, "Privacy request")],
    ["Data Protection Officer", val(legal.dpo)],
    ["Business hours", val(legal.businessHours)],
  ],
};

// ── /contact: help, reports and privacy requests (no backend; email + in-app) ──
export const contactPage = {
  slug: "contact",
  title: "Contact & Report an Issue",
  description: "Contact GrowMate support, report a seller, product, rider or fraud, raise an IP complaint or make a privacy request.",
  lede: `Email ${support("Support")}. Include your account email and, for orders, the order reference.`,
  reports: [
    ["Report a seller", "Report seller", "Seller's shop name, what happened, screenshots."],
    ["Report a product", "Report product", "Listing name or link and why it breaks the rules. You can also use Report on the listing in the app."],
    ["Report a rider", "Report rider", "Order reference, date and what happened."],
    ["Report fraud", "Report fraud", "What happened, amounts involved and any evidence."],
    ["Report a prohibited product", "Report prohibited product", "Listing name and the rule you think it breaks."],
    ["Copyright or trademark complaint", "IP complaint", "See the Intellectual Property Policy for what to include."],
    ["Privacy request or concern", "Privacy request", "Which right you want to use (access, correction, erasure, objection, portability)."],
    ["Other legal or compliance issue", "Legal or compliance issue", "Describe the issue and how to reach you."],
  ],
};
