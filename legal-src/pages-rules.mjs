// Marketplace rules, complaints, IP, acceptable use, business information and contact.
import { legal, TBC } from "./config.mjs";

const ph = (text = TBC) => `<span class="ph">${text}</span>`;
const mail = (addr, subject) =>
  `<a href="mailto:${addr}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}">${addr}</a>`;
const support = (subject) => mail(legal.supportEmail, subject);
const privacy = (subject) => mail(legal.privacyEmail, subject);
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

  // ── M. Account Deletion Request ──────────────────────────────────────────
  {
    slug: "delete-account",
    title: "Account Deletion Request",
    description: "How to delete your Plantita account and request erasure of your personal data under the Data Privacy Act of 2012.",
    lede: "Plantita provides two ways to delete your account: immediate in-app deletion through the mobile application, or a public request via web/email if you cannot access the app.",
    sections: [
      {
        id: "identification",
        h: "About Plantita & Account Deletion",
        html: `
        <p><strong>Plantita</strong> (operated as GrowMate) is a botanical companion and community marketplace in the Philippines. We respect your privacy and provide transparent controls to delete your account and personal data at any time, in full compliance with Republic Act No. 10173 (Data Privacy Act of 2012) and Google Play Data Safety requirements.</p>
        <p>Account deletion is permanent. Once completed, your profile, plant care logs, active listings, and associated personal information cannot be recovered.</p>`,
      },
      {
        id: "in-app",
        h: "Method 1: Immediate In-App Deletion (Recommended)",
        html: `
        <p>If you have the Plantita mobile application installed on your device, you can delete your account immediately using authenticated in-app controls:</p>
        <ol>
          <li>Open the <strong>Plantita</strong> app on your Android or iOS device.</li>
          <li>Ensure you are signed in to the account you want to delete.</li>
          <li>Tap the <strong>Profile</strong> tab in the bottom navigation bar.</li>
          <li>Tap the <strong>Settings</strong> icon (drawer/gear) in the top corner to open the Settings menu.</li>
          <li>Scroll to the account section and select <strong>Delete Account</strong>.</li>
          <li>Review the warning dialog and confirm your choice.</li>
        </ol>
        <p><strong>Result:</strong> The application securely executes the authenticated deletion Edge Function. Your active sessions are revoked immediately, your profile is marked deleted, active listings are unpublished, and your credentials are purged.</p>`,
      },
      {
        id: "web-request",
        h: "Method 2: Public Web & Email Deletion Request",
        html: `
        <p>If you have uninstalled the application, lost access to your device, or prefer to request deletion via the web, you may submit an erasure request directly without logging in:</p>
        <p>Send an email to our support team at ${mail(legal.supportEmail, "Account Deletion Request")} with the subject line <strong>Account Deletion Request</strong>.</p>
        <h3>Required Information</h3>
        <p>To identify your account and prevent unauthorized deletions, please include the following details in your message:</p>
        <ul>
          <li><strong>Account Email:</strong> The Google account email address registered with Plantita. (Requests must be sent from or confirmed via this address).</li>
          <li><strong>Display Name / Username:</strong> Your profile name as displayed in the Plantita application.</li>
          <li><strong>Statement of Request:</strong> A clear statement such as: <em>"I request the permanent deletion of my Plantita account and erasure of all associated personal data."</em></li>
          <li><strong>Role Details (if applicable):</strong> If you registered as a seller or rider, please provide your registered shop name or rider full name to expedite verification.</li>
        </ul>
        <p><a class="btn btn--primary btn--sm" href="${mail(legal.supportEmail, "Account Deletion Request")}">Submit Deletion Request by Email</a></p>
        <p><strong>Processing Timeline:</strong> Our privacy and support team will verify your identity and process your deletion request within <strong>30 calendar days</strong>, as stipulated by the Data Privacy Act of 2012. You will receive an email confirmation once the process is complete.</p>`,
      },
      {
        id: "data-scope",
        h: "What Data is Deleted",
        html: `
        <p>Upon processing an account deletion request, the following information is permanently erased or anonymized:</p>
        <ul>
          <li><strong>Account & Profile:</strong> Authentication record, email address, profile photo, display name, username, biography, and garden settings.</li>
          <li><strong>Addresses & Geolocation:</strong> Saved delivery addresses, pickup locations, and device location preferences.</li>
          <li><strong>Botanical Content:</strong> Saved garden plants, scan logs, watering reminders, and personal notes.</li>
          <li><strong>Marketplace Listings:</strong> All active, pending, or draft listings and associated photo uploads.</li>
          <li><strong>Communications:</strong> Direct message drafts, support communications, and AI assistant interaction histories.</li>
        </ul>`,
      },
      {
        id: "retention",
        h: "Exceptions & Legitimate Retention Requirements",
        html: `
        <p>In accordance with Philippine law, account deletion may be delayed or certain limited records retained under the following circumstances:</p>
        <ul>
          <li><strong>Unresolved Orders in Progress:</strong> If you have an active order that is pending confirmation, preparing, or out for delivery with a courier, the account cannot be deleted until the delivery is completed or cancelled.</li>
          <li><strong>Financial Settlements & COD Remittance:</strong> If you are a buyer, seller, or rider with outstanding cash-on-delivery collections, pending remittance deposits, or undisbursed earnings, account deletion is deferred until all balances are fully settled and reconciled.</li>
          <li><strong>Disputes, Returns & Refunds:</strong> If there is an active after-sales complaint or an open refund request under the 7-day buyer protection window, records are retained until the dispute is resolved.</li>
          <li><strong>Statutory Record-Keeping Obligations:</strong> Double-entry financial ledger records, transaction receipts, and payment audit logs must be maintained for the retention periods mandated by the Bureau of Internal Revenue (BIR) and the National Internal Revenue Code (NIRC). These records are securely archived and isolated from operational use.</li>
          <li><strong>Fraud & Security Prevention:</strong> Limited cryptographic hashes or audit trails may be retained where strictly necessary to prevent fraud, enforce platform bans, or defend against legal claims.</li>
        </ul>`,
      },
      {
        id: "privacy-policy",
        h: "Privacy Policy & Contact Information",
        html: `
        <p>For complete details on how Plantita processes personal data, please review our full ${L("/privacy", "Privacy Notice")} and our ${L("/terms", "Terms &amp; Conditions")}.</p>
        <p>If you have any questions or concerns regarding your privacy rights, contact our Data Protection team at ${privacy("Privacy Inquiry")} or write to us at:</p>
        <p><strong>Plantita Support &amp; Privacy Office</strong><br />
        Email: <a href="mailto:${legal.supportEmail}">${legal.supportEmail}</a><br />
        Website: <a href="https://www.plantita.online">https://www.plantita.online</a></p>`,
      },
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
