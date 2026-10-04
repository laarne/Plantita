// Content for GrowMate's legal pages. Each page: route slug, <title>, meta description,
// lede, and sections ({ id, h, html }). Sections become the table of contents.
// Facts here were checked against the GrowMate app and database on 2026-10-05
// (COD Model A, delivery lifecycle, after-sales cases, seller and rider onboarding).
import { legal, TBC } from "./config.mjs";

const ph = (text = TBC) => `<span class="ph">${text}</span>`;
const mail = (addr, subject) =>
  `<a href="mailto:${addr}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}">${addr}</a>`;
const support = (subject) => mail(legal.supportEmail, subject);
const privacy = (subject) => mail(legal.privacyEmail, subject);
const L = (href, text) => `<a href="${href}">${text}</a>`;
const val = (v) => (v === TBC ? ph() : v);

const FEE = "10%";
const HOLD = "7 days";
const FEE_FORMULA = "₱40 plus ₱6 per estimated road kilometre, with a minimum of ₱50";

export const pages = [
  // ── A. Terms & Conditions ───────────────────────────────────────────────
  {
    slug: "terms",
    title: "Terms & Conditions",
    description: "The terms that govern your use of GrowMate, the plant-care app and cash-on-delivery plant marketplace for the Philippines.",
    lede: `These terms govern your use of GrowMate, including the app, the marketplace and ${legal.website}. Buyers, sellers and riders are also bound by the additional terms for their role.`,
    sections: [
      { id: "about", h: "Who we are", html: `
        <p>GrowMate (formerly ${legal.formerName}) is operated by ${val(legal.legalName)}, ${val(legal.businessAddress)} ("GrowMate", "we", "us"). GrowMate provides plant-care tools (the Plant Library, My Garden, Scan and Discover) and an online marketplace where independent sellers offer plants, seeds and garden supplies to buyers, with delivery by GrowMate riders.</p>
        <p>GrowMate is not the seller of items listed by sellers. Each sale is between the buyer and the seller. GrowMate provides the platform, arranges delivery, collects cash on delivery through its riders and settles amounts due to sellers as described in the ${L("/seller-agreement", "Seller Agreement")}.</p>` },
      { id: "acceptance", h: "Accepting these terms", html: `
        <p>By creating an account or using GrowMate you agree to these terms, the ${L("/privacy", "Privacy Notice")} and the policies linked from this page. If you do not agree, do not use GrowMate.</p>
        <p>The following also apply, depending on how you use GrowMate:</p>
        <ul>
          <li>Buyers: ${L("/buyer-terms", "Buyer Terms")}, ${L("/returns-refunds", "Returns, Refunds &amp; Cancellation")} and ${L("/delivery-cod", "Delivery &amp; COD Policy")}.</li>
          <li>Sellers: ${L("/seller-agreement", "Seller Agreement")} and ${L("/marketplace-rules", "Marketplace Rules")}.</li>
          <li>Riders: ${L("/rider-agreement", "Rider Agreement")}.</li>
          <li>Everyone: ${L("/acceptable-use", "Acceptable Use Policy")}, ${L("/intellectual-property", "Intellectual Property Policy")} and ${L("/disputes", "Disputes &amp; Complaints")}.</li>
        </ul>` },
      { id: "accounts", h: "Your account", html: `
        <p>You sign in with a Google account. You are responsible for activity on your account and for keeping your sign-in secure. Give accurate information, including your name and delivery addresses, and keep it up to date.</p>
        <p>You must be legally able to enter into a binding contract under Philippine law to buy or sell on GrowMate. Minimum age and guardian requirements: ${ph()}.</p>
        <p>You can delete your account from the app's settings. Some records, such as completed orders and money movements, are kept after deletion where the law or legitimate business needs require it (see the ${L("/privacy#retention", "Privacy Notice")}).</p>` },
      { id: "marketplace", h: "How the marketplace works", html: `
        <ul>
          <li>Payment is cash on delivery (COD) only. Online payment is not available.</li>
          <li>Delivery is by GrowMate riders only. Pickup and seller delivery are currently not offered.</li>
          <li>The buyer pays the rider the item price plus the delivery fee when the order arrives.</li>
          <li>GrowMate charges sellers a marketplace fee of ${FEE} of the item price. Buyers do not pay this fee.</li>
        </ul>
        <p>Details are in the ${L("/delivery-cod", "Delivery &amp; COD Policy")}.</p>` },
      { id: "content", h: "Content you post", html: `
        <p>You keep ownership of the photos, descriptions, garden entries, reviews and messages you post. You give GrowMate a non-exclusive, royalty-free licence to host, display, reproduce and adapt that content to operate and promote the service, for as long as it is on GrowMate and for a reasonable time after removal. You confirm you have the right to post it. See the ${L("/intellectual-property", "Intellectual Property Policy")}.</p>` },
      { id: "plant-info", h: "Plant information and AI features", html: `
        <p>Plant identification (Scan), care guides, weather-based tips and the Leafy assistant are informational. They can be wrong. GrowMate does not guarantee a plant's identity, legality, health diagnosis or treatment outcome. Regulated-plant checks on listings help GrowMate review listings but do not replace a seller's own legal obligations.</p>` },
      { id: "conduct", h: "Rules of conduct", html: `
        <p>Follow the ${L("/acceptable-use", "Acceptable Use Policy")} and the ${L("/marketplace-rules", "Marketplace Rules")}. Do not arrange payment outside GrowMate for items found on GrowMate.</p>` },
      { id: "suspension", h: "Suspension and termination", html: `
        <p>GrowMate may remove content, limit features, or suspend or close accounts that break these terms or the law, or that put other users at risk. Where reasonable we will tell you why and how to respond. You may stop using GrowMate at any time.</p>` },
      { id: "liability", h: "Limits of our responsibility", html: `
        <p>GrowMate is provided as it is and as available. To the extent the law allows, GrowMate is not responsible for the acts of sellers, buyers or third parties, for losses caused by events outside our reasonable control, or for indirect or consequential losses. Nothing in these terms limits rights you have under Philippine law that cannot be limited by contract, including your rights as a consumer under the Consumer Act of the Philippines (Republic Act No. 7394) and the Internet Transactions Act of 2023 (Republic Act No. 11967).</p>
        <p>Liability cap and indemnity wording: ${ph()}.</p>` },
      { id: "disputes", h: "Disputes", html: `
        <p>If something goes wrong, use the steps in ${L("/disputes", "Disputes &amp; Complaints")} first. These terms are governed by the laws of the Republic of the Philippines. Venue for court proceedings: ${val(legal.governingVenue)}.</p>` },
      { id: "changes", h: "Changes to these terms", html: `
        <p>We may update these terms. The date at the top shows the latest version. For material changes we will give notice in the app or by email before they take effect.</p>` },
      { id: "contact", h: "Contact", html: `<p>Questions about these terms: ${support("Terms & Conditions")}.</p>` },
    ],
  },

  // ── B. Privacy Notice ───────────────────────────────────────────────────
  {
    slug: "privacy",
    title: "Privacy Notice",
    description: "How GrowMate collects, uses, shares and protects personal data, and how to exercise your rights under the Data Privacy Act of 2012.",
    lede: "This notice explains what personal data GrowMate collects, why, who receives it and what rights you have under the Data Privacy Act of 2012 (Republic Act No. 10173).",
    sections: [
      { id: "controller", h: "Who is responsible", html: `
        <p>The personal information controller is ${val(legal.legalName)}, ${val(legal.businessAddress)}.</p>
        <p>Data Protection Officer: ${val(legal.dpo)}. Until a DPO contact is published, send privacy requests to ${privacy("Privacy request")}.</p>` },
      { id: "collect", h: "What we collect", html: `
        <h3>Account and profile</h3>
        <ul>
          <li>From Google Sign-In: your name, email address and profile photo.</li>
          <li>Profile details you add, such as a display name, photo, cover photo and garden name.</li>
        </ul>
        <h3>Addresses and location</h3>
        <ul>
          <li>Delivery and pickup addresses you save, including map coordinates, barangay and city.</li>
          <li>Your device's location, only if you allow it, to show local weather, care tips and nearby plants and to fill in addresses.</li>
        </ul>
        <h3>Orders and money</h3>
        <ul>
          <li>Orders, items, prices, delivery fees, order status, cancellations and after-sales requests.</li>
          <li>Cash-on-delivery records: when cash was collected, deposited, paid out to sellers or refunded, and the method and reference used (for example a GCash or bank transfer reference).</li>
        </ul>
        <h3>Sellers</h3>
        <ul>
          <li>Seller application: photos of a government ID (front and back), a selfie with the ID and a selfie with a plant. Government ID photos are sensitive personal information and are used only to verify sellers.</li>
          <li>Listings: photos, descriptions, prices, stock and pickup address, and permit documents for regulated plants where required.</li>
        </ul>
        <h3>Riders</h3>
        <ul>
          <li>Rider account details, approval status, vehicle type and plate number.</li>
          <li>Delivery records: pickup confirmation, cash collection, camera photos taken as proof of delivery, and cash deposits.</li>
          <li>GrowMate does not currently track riders' GPS location.</li>
        </ul>
        <h3>Content and communications</h3>
        <ul>
          <li>Garden entries, plant photos, watering and care notes, public garden content, reviews and ratings.</li>
          <li>Messages with other users and with the Leafy assistant, and photos you scan to identify plants.</li>
          <li>Reports, complaints, after-sales evidence photos and support emails.</li>
        </ul>
        <h3>Technical</h3>
        <ul>
          <li>Push-notification tokens if you allow notifications, and basic device, app and log information needed to run and secure the service.</li>
        </ul>` },
      { id: "use", h: "Why we use it and on what basis", html: `
        <table>
          <thead><tr><th>Purpose</th><th>Basis</th></tr></thead>
          <tbody>
            <tr><td>Create and run your account; provide plant-care features</td><td>Performance of our contract with you</td></tr>
            <tr><td>Process orders, arrange delivery, collect cash on delivery, pay sellers and handle refunds</td><td>Contract; compliance with legal obligations</td></tr>
            <tr><td>Verify sellers (including government ID) and approve riders</td><td>Consent you give when applying; legitimate interest in a safe marketplace; legal obligations</td></tr>
            <tr><td>Weather, nearby plants and address lookup from your device location</td><td>Consent (you can turn location off)</td></tr>
            <tr><td>Review listings for regulated plants; handle reports, disputes and fraud</td><td>Legitimate interest; legal obligations</td></tr>
            <tr><td>Service notices and push notifications</td><td>Contract; consent for push notifications</td></tr>
          </tbody>
        </table>
        <p>GrowMate does not sell personal data and does not use it for third-party advertising.</p>` },
      { id: "share", h: "Who receives your data", html: `
        <ul>
          <li><strong>Other users, as needed for an order.</strong> Sellers receive what they need to prepare an order. Riders receive the pickup and delivery addresses and the details needed to complete the deliveries they accept. Buyers can see the rider's proof-of-delivery photo for their order; sellers cannot.</li>
          <li><strong>The public, for what you make public.</strong> Listings, seller shop details, public gardens and reviews.</li>
          <li><strong>Service providers</strong> who process data for us:
            <ul>
              <li>Supabase: database, sign-in and file storage</li>
              <li>Cloudflare R2: photo storage and delivery</li>
              <li>Google: sign-in, maps, place search and geocoding, weather and AI features (Gemini)</li>
              <li>Groq: AI features</li>
              <li>Pl@ntNet: plant identification from photos</li>
              <li>OpenRouteService: delivery route distance</li>
              <li>Open-Meteo and OpenWeather: weather for a location</li>
              <li>OpenStreetMap: map tiles and address lookup</li>
              <li>Expo: push notifications</li>
              <li>Vercel: hosting for this website</li>
            </ul></li>
          <li><strong>Authorities</strong> when the law requires it, or to protect the rights, property or safety of users and the public.</li>
        </ul>
        <p>Several providers process data outside the Philippines. We use them under terms that require them to protect the data. Data-sharing and outsourcing agreements: ${ph()}.</p>` },
      { id: "retention", h: "How long we keep it", html: `
        <p>We keep personal data only as long as needed for the purposes above. Order, cash and settlement records are kept after an account is deleted because the finance ledger cannot be altered and the law may require us to keep transaction records. Seller verification documents are kept while the seller account is active and for a limited period after. Specific retention periods: ${val(legal.retentionPeriods)}.</p>` },
      { id: "security", h: "How we protect it", html: `
        <p>Access is restricted by account and role using database row-level security. Verification documents are stored privately. Seller pickup PINs are stored hashed. Money moves only through audited, recorded steps. No system is perfectly secure; if a personal data breach is likely to put you at risk, we will notify you and the National Privacy Commission as the law requires.</p>` },
      { id: "rights", h: "Your rights", html: `
        <p>Under the Data Privacy Act you have the right to be informed, to access your data, to object, to have it corrected, erased or blocked, to data portability, to be indemnified for damages, and to file a complaint with the National Privacy Commission.</p>
        <p>To use these rights, email ${privacy("Privacy request")} from your account email. Tell us what you are asking for. We may ask you to confirm your identity. You can delete your account yourself in the app's settings.</p>` },
      { id: "children", h: "Children", html: `<p>GrowMate's marketplace is for people who can legally enter into a contract. Policy for minors using plant-care features: ${ph()}.</p>` },
      { id: "changes", h: "Changes to this notice", html: `<p>We will update this notice when our processing changes. The date at the top shows the latest version. Material changes will be announced in the app.</p>` },
    ],
  },

  // ── C. Cookie Policy ───────────────────────────────────────────────────
  {
    slug: "cookies",
    title: "Cookie Policy",
    description: "What cookies and browser storage GrowMate uses. The website sets no tracking or advertising cookies.",
    lede: "This website does not use analytics, advertising or tracking cookies.",
    sections: [
      { id: "website", h: "On this website", html: `
        <ul>
          <li>The website (${legal.website}) sets no cookies of its own.</li>
          <li>Fonts load from Google Fonts. Your browser contacts Google's servers to download them, which shares your IP address and browser details with Google.</li>
          <li>The site is hosted on Vercel, which processes standard request logs such as IP address to deliver and protect the site.</li>
        </ul>` },
      { id: "app", h: "In the GrowMate web app", html: `
        <ul>
          <li><strong>Sign-in:</strong> your session token is kept in the browser's local storage so you stay signed in. It is essential and is removed when you sign out.</li>
          <li><strong>Preferences and caching:</strong> the app stores settings and cached data (for example the marketplace list and weather) on your device so it loads faster and works offline.</li>
        </ul>
        <p>GrowMate does not use this storage for advertising or cross-site tracking.</p>` },
      { id: "control", h: "Your choices", html: `<p>You can clear cookies and site data in your browser settings. Clearing GrowMate's storage signs you out and removes cached data.</p>` },
      { id: "changes", h: "Changes", html: `<p>If GrowMate adds analytics or other non-essential technologies, this policy will be updated first and, where required, your consent will be asked.</p>` },
    ],
  },
];
