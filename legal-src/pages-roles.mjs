// Role agreements and order policies. Mechanics checked against the GrowMate database
// (update_order_status_secure, apply_order_cancellation, submit_order_after_sales_case,
// resolve_order_after_sales_case, COD Model A settlement, delivery lifecycle) on 2026-10-05.
import { legal, TBC } from "./config.mjs";

const ph = (text = TBC) => `<span class="ph">${text}</span>`;
const mail = (addr, subject) =>
  `<a href="mailto:${addr}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}">${addr}</a>`;
const support = (subject) => mail(legal.supportEmail, subject);
const L = (href, text) => `<a href="${href}">${text}</a>`;
const val = (v) => (v === TBC ? ph() : v);

const FEE = "10%";
const HOLD = "7 days";
const FEE_FORMULA = "₱40 plus ₱6 per estimated road kilometre, with a minimum of ₱50";

export const rolePages = [
  // ── D. Buyer Terms ─────────────────────────────────────────────────────
  {
    slug: "buyer-terms",
    title: "Buyer Terms",
    description: "Terms for buying plants, seeds and garden supplies on GrowMate with cash on delivery.",
    lede: `These terms apply when you buy on GrowMate. They add to the ${L("/terms", "Terms &amp; Conditions")}.`,
    sections: [
      { id: "seller", h: "Who you buy from", html: `<p>Items are sold by independent sellers. The seller is responsible for the item, its description and its condition. GrowMate runs the platform, arranges delivery and handles cash on delivery and refunds as described below.</p>` },
      { id: "listings", h: "Listings and prices", html: `
        <p>Listings show the price, unit (for example per pot or per tray), stock and the seller's location. Photos and descriptions come from the seller. Plant identification shown on a listing is informational.</p>
        <p>The price you pay is the item price plus the delivery fee, both shown at checkout before you confirm. Buyers pay no marketplace fee.</p>` },
      { id: "ordering", h: "Placing an order", html: `
        <p>When you confirm checkout, GrowMate creates the order with the price and delivery fee locked in. The seller then accepts or declines it. An order is not confirmed until the seller accepts it.</p>` },
      { id: "cod", h: "Cash on delivery", html: `
        <ul>
          <li>Pay the rider in cash when the order arrives: the item price plus the delivery fee.</li>
          <li>Only pay the GrowMate rider assigned to your order. Never pay a seller or anyone else outside the app for a GrowMate order.</li>
          <li>The rider takes a photo as proof of delivery. You can see it in your order.</li>
        </ul>` },
      { id: "cancel", h: "Cancelling", html: `<p>You can cancel while the order is pending or accepted and before a rider has been assigned. After a rider is assigned or has picked up the item, you cannot cancel; see ${L("/returns-refunds", "Returns, Refunds &amp; Cancellation")}.</p>` },
      { id: "problems", h: "If something is wrong", html: `<p>You can open a request in the app within ${HOLD} of delivery. See ${L("/returns-refunds", "Returns, Refunds &amp; Cancellation")}.</p>` },
      { id: "duties", h: "Your responsibilities", html: `
        <ul>
          <li>Give a correct delivery address and be reachable when the rider arrives.</li>
          <li>Have the exact amount ready if you can.</li>
          <li>Do not place orders you do not intend to accept. Repeated refused or failed deliveries may lead to account limits.</li>
          <li>Leave honest reviews based on your own purchase.</li>
        </ul>` },
      { id: "rights", h: "Your rights", html: `<p>Nothing in these terms limits your rights under the Consumer Act of the Philippines (Republic Act No. 7394), the Internet Transactions Act of 2023 (Republic Act No. 11967) or other consumer protection law.</p>` },
    ],
  },

  // ── E. Seller Agreement ────────────────────────────────────────────────
  {
    slug: "seller-agreement",
    title: "Seller Agreement",
    description: "The agreement between GrowMate and sellers: verification, listings, orders, the 10% marketplace fee, cash-on-delivery settlement and payouts.",
    lede: `This agreement applies to anyone who sells on GrowMate. It adds to the ${L("/terms", "Terms &amp; Conditions")} and the ${L("/marketplace-rules", "Marketplace Rules")}.`,
    sections: [
      { id: "eligibility", h: "Becoming a seller", html: `
        <p>To sell, submit a seller application in the app with photos of a valid government ID (front and back), a selfie holding the ID and a selfie with a plant. GrowMate reviews applications and may approve or reject them. Approved sellers show a verified badge.</p>
        <p>Business registration, permits and tax registration requirements for sellers: ${ph()}.</p>` },
      { id: "account", h: "Your seller account", html: `<p>Keep your shop details, pickup address and stock accurate. You are responsible for everything done through your seller account. GrowMate may suspend a seller account; suspended sellers cannot accept or complete orders.</p>` },
      { id: "listings", h: "Listings", html: `
        <ul>
          <li>Describe each item truthfully: what it is, its size or form (for example potted, rooted cutting, seedling), its condition and its price per unit.</li>
          <li>Use your own photos of the actual item or representative stock you hold.</li>
          <li>Keep stock counts correct and pause listings you cannot fulfil.</li>
          <li>Do not list prohibited or illegal items (see ${L("/marketplace-rules", "Marketplace Rules")}).</li>
        </ul>
        <p>GrowMate checks listing photos and may hold regulated plants for review or block them. Regulated plants may need a permit document before they go live. These checks do not replace your own duty to follow the law.</p>` },
      { id: "orders", h: "Accepting and preparing orders", html: `
        <ol>
          <li>Accept or decline each new order promptly. You may decline (cancel) an order only while it is pending.</li>
          <li>Prepare the item securely for transport.</li>
          <li>Hand it to the assigned GrowMate rider at your pickup address. The rider must enter your pickup PIN, which you can see in the app, before taking it. Do not share your PIN with anyone else.</li>
        </ol>` },
      { id: "fees", h: "Marketplace fee", html: `
        <p>GrowMate charges a marketplace fee of <strong>${FEE} of the item price</strong> (the order subtotal, not including the delivery fee) on each completed order. It is deducted from the amount GrowMate pays you. The delivery fee is paid by the buyer and goes to the rider; it is not deducted from your share.</p>
        <p>Example: for a ₱1,000 order, you receive ₱900 and GrowMate keeps ₱100. Fees may change with notice before they apply to new orders.</p>` },
      { id: "settlement", h: "Cash on delivery and payouts", html: `
        <ol>
          <li>The buyer pays the rider in cash on delivery.</li>
          <li>The rider keeps the delivery fee and deposits the item price with GrowMate.</li>
          <li>Your share (the item price minus the ${FEE} fee) is held for ${HOLD} after delivery, the period in which the buyer can ask for a refund.</li>
          <li>After the hold, GrowMate pays you once and records the payout reference in your Seller Center. You can confirm the payout or raise a payout dispute in the app.</li>
        </ol>
        <p>Riders never pay sellers directly. Do not accept cash or transfers from buyers or riders for GrowMate orders. Payout methods and schedule: ${ph()}.</p>` },
      { id: "refunds", h: "Returns and refunds", html: `
        <p>Buyers can open a request within ${HOLD} of delivery, before you are paid. You can respond with your side in the app. GrowMate decides the outcome. If a refund is approved, the buyer gets the item price back and your share and the fee for that order are reversed. See ${L("/returns-refunds", "Returns, Refunds &amp; Cancellation")}.</p>
        <p>If a delivery fails after pickup, the item is returned to you and you confirm receipt in the app.</p>` },
      { id: "taxes", h: "Taxes and receipts", html: `<p>You are responsible for your own taxes and for issuing receipts or invoices where the law requires. GrowMate's tax treatment of the marketplace fee and any withholding: ${ph()}.</p>` },
      { id: "conduct", h: "Prohibited conduct", html: `<p>Misleading listings, fake reviews, taking orders off-platform, shill buying, selling prohibited items and abusing buyers or riders are not allowed. See ${L("/marketplace-rules", "Marketplace Rules")} and ${L("/acceptable-use", "Acceptable Use")}.</p>` },
      { id: "ip", h: "Your content", html: `<p>You confirm you own or may use the photos and text you post. See the ${L("/intellectual-property", "Intellectual Property Policy")}.</p>` },
      { id: "termination", h: "Suspension and termination", html: `<p>GrowMate may pause listings or suspend your seller account for breaches of this agreement, safety concerns or legal reasons. Amounts already due to you for delivered, unrefunded orders remain payable, subject to any open dispute. You may stop selling at any time after completing open orders.</p>` },
      { id: "indemnity", h: "Responsibility and indemnity", html: `<p>You are responsible for the items you sell and the claims they cause. Indemnity and liability wording: ${ph()}.</p>` },
      { id: "disputes", h: "Disputes", html: `<p>See ${L("/disputes", "Disputes &amp; Complaints")}.</p>` },
    ],
  },

  // ── F. Rider Agreement ─────────────────────────────────────────────────
  {
    slug: "rider-agreement",
    title: "Rider / Delivery Partner Agreement",
    description: "The agreement for GrowMate riders: approval, pickup with the seller PIN, cash on delivery, proof of delivery, cash deposits and earnings.",
    lede: "This agreement applies to riders who deliver GrowMate orders using the GrowMate rider app.",
    sections: [
      { id: "engagement", h: "Your relationship with GrowMate", html: `<p>Engagement model (for example independent delivery partner), insurance and statutory contributions: ${val(legal.riderEngagementModel)}.</p>` },
      { id: "eligibility", h: "Becoming a rider", html: `<p>Riders sign in to the rider app and are approved by GrowMate. You must give accurate details, including your vehicle type and plate number, and hold the licences your vehicle requires by law. GrowMate may approve, reject or suspend rider accounts.</p>` },
      { id: "jobs", h: "Accepting deliveries", html: `<p>Accept only deliveries you can complete. You may cancel a job before pickup; it is then released to other riders. After pickup or cash collection you cannot cancel; if the delivery cannot be completed, mark it as a failed delivery.</p>` },
      { id: "pickup", h: "Pickup", html: `<p>At the seller's pickup address, ask the seller for the pickup PIN and enter it in the app. Do not take the item without a valid PIN. Too many wrong attempts lock the PIN for 15 minutes.</p>` },
      { id: "delivery", h: "Delivery and proof", html: `
        <ol>
          <li>Deliver the item to the buyer's address.</li>
          <li>Collect the cash amount shown in the app (item price plus delivery fee) and confirm in the app that you collected it.</li>
          <li>Take a photo with the in-app camera as proof of delivery, then complete the delivery.</li>
        </ol>
        <p>There is no buyer one-time code; the cash confirmation and camera photo complete the delivery.</p>` },
      { id: "cash", h: "Cash handling and deposits", html: `
        <ul>
          <li>Keep the delivery fee; it is your earning for that trip.</li>
          <li>Deposit the item price with GrowMate and declare the deposit in the app. GrowMate confirms deposits. Deposit methods, deadlines and locations: ${ph()}.</li>
          <li>Never hand cash to the seller and never keep the item price.</li>
        </ul>` },
      { id: "earnings", h: "Earnings", html: `<p>The delivery fee is ${FEE_FORMULA}, calculated from the distance between pickup and delivery. It is earned only on completed deliveries. Failed deliveries earn nothing.</p>` },
      { id: "failed", h: "Failed deliveries and returns", html: `<p>If the buyer cannot be reached or refuses the item, mark the delivery as failed. The item goes back to the seller. Any cash you collected for that order must be deposited in full so GrowMate can refund the buyer.</p>` },
      { id: "loss", h: "Lost or damaged items", html: `<p>Handle items with care. Responsibility for items lost or damaged while in your custody: ${ph()}.</p>` },
      { id: "location", h: "Location", html: `<p>The rider app does not currently track your GPS location. You receive pickup and delivery addresses for the jobs you accept.</p>` },
      { id: "conduct", h: "Conduct and safety", html: `<p>Follow traffic laws, be courteous to buyers and sellers, and never ask for payment outside the app. Report safety incidents to ${support("Rider safety incident")}.</p>` },
      { id: "termination", h: "Suspension and termination", html: `<p>GrowMate may suspend riders for cash shortfalls, fraud, unsafe conduct or repeated failed deliveries. Cash held for GrowMate must still be deposited.</p>` },
      { id: "disputes", h: "Disputes", html: `<p>See ${L("/disputes", "Disputes &amp; Complaints")}.</p>` },
    ],
  },

  // ── G. Returns, Refunds & Cancellation ─────────────────────────────────
  {
    slug: "returns-refunds",
    title: "Returns, Refunds & Cancellation",
    description: "When GrowMate orders can be cancelled, how to request a refund within 7 days of delivery, and what happens with failed deliveries.",
    lede: "How cancellations, refund requests and failed deliveries work for cash-on-delivery orders.",
    sections: [
      { id: "buyer-cancel", h: "Cancellation by the buyer", html: `<p>You can cancel while the order is pending or accepted and before a rider has been assigned. Because payment is cash on delivery, nothing is charged when you cancel.</p>` },
      { id: "seller-cancel", h: "Cancellation by the seller", html: `<p>A seller can decline an order while it is pending. GrowMate can cancel orders, for example for fraud or safety. Cancelled orders return the stock to the listing.</p>` },
      { id: "no-cancel", h: "When an order cannot be cancelled", html: `<p>Once a rider has been assigned, has picked up the item or has delivered it, the order cannot be cancelled. If something then goes wrong, use a refund request or the failed-delivery process below.</p>` },
      { id: "requests", h: "Refund requests", html: `
        <p>Within <strong>${HOLD} of delivery</strong>, open a request from the order in the app. Choose Refund only, Return &amp; refund, or Replacement, explain the problem and add photos.</p>
        <ul>
          <li>Requests can only be opened for delivered orders, one active request per order.</li>
          <li>The seller can respond in the app. GrowMate reviews the evidence and approves or rejects the request.</li>
          <li>GrowMate resolves approved requests with a refund. Replacements are not currently arranged through GrowMate.</li>
        </ul>` },
      { id: "refunds", h: "What is refunded", html: `<p>An approved refund returns the item price. The delivery fee is not refunded because the delivery was completed. GrowMate pays refunds by GCash, bank transfer or cash and records the reference. Refund processing time: ${ph()}.</p>` },
      { id: "after-window", h: "After 7 days", html: `<p>After the ${HOLD} window, or once the seller has been paid, refunds can no longer be requested in the app. Contact ${support("Order issue after 7 days")}; your rights under consumer law still apply.</p>` },
      { id: "examples", h: "Common problems", html: `
        <ul>
          <li><strong>Damaged, dead or wrong item:</strong> request a refund within ${HOLD} with photos.</li>
          <li><strong>Item missing from the delivery:</strong> request a refund within ${HOLD} and describe what is missing.</li>
          <li><strong>Not as described:</strong> request a refund with photos that show the difference.</li>
        </ul>` },
      { id: "failed", h: "Failed deliveries", html: `<p>If a delivery fails (for example the buyer cannot be reached), the item goes back to the seller. If cash was already collected, the full amount paid, including the delivery fee, is returned to the buyer. The order is cancelled once the item is back and any cash is refunded.</p>` },
      { id: "non-refundable", h: "Not covered", html: `<p>Normal plant changes after delivery due to care or environment, buyer's change of mind after delivery, and claims without supporting information may be rejected, where the law allows. Final list: ${ph()}.</p>` },
      { id: "disputes", h: "If you disagree", html: `<p>See ${L("/disputes", "Disputes &amp; Complaints")}.</p>` },
    ],
  },

  // ── H. Delivery & COD ──────────────────────────────────────────────────
  {
    slug: "delivery-cod",
    title: "Delivery & COD Policy",
    description: "How GrowMate rider delivery and cash on delivery work: the route, the delivery fee formula, proof of delivery and failed deliveries.",
    lede: "GrowMate orders are delivered by GrowMate riders and paid in cash on delivery.",
    sections: [
      { id: "route", h: "The delivery route", html: `
        <ol>
          <li>The seller accepts the order.</li>
          <li>A GrowMate rider accepts the delivery and goes to the seller.</li>
          <li>The seller gives the rider the pickup PIN; the rider enters it and takes the item.</li>
          <li>The rider brings the item to the buyer, collects the cash and confirms it in the app.</li>
          <li>The rider takes a proof-of-delivery photo with the in-app camera and completes the delivery.</li>
        </ol>` },
      { id: "fee", h: "Delivery fee", html: `<p>The delivery fee is ${FEE_FORMULA}. Road distance is estimated as 1.25 times the straight-line distance between pickup and delivery. The exact fee is shown at checkout before you confirm. The buyer pays it to the rider, and the rider keeps it.</p>` },
      { id: "cod", h: "Cash on delivery", html: `<p>COD is the only payment method. The buyer pays the item price plus the delivery fee to the rider. The rider deposits the item price with GrowMate. GrowMate pays the seller their share after a ${HOLD} hold. Riders never pay sellers directly.</p>` },
      { id: "methods", h: "Delivery methods", html: `<p>GrowMate rider delivery is currently the only option. Pickup and seller delivery are not offered.</p>` },
      { id: "failed", h: "Failed deliveries", html: `<p>If the buyer cannot be reached or refuses the item, the rider marks the delivery as failed and the item returns to the seller, who confirms receipt. Cash collected is refunded to the buyer in full. Riders earn nothing for failed deliveries.</p>` },
      { id: "duties", h: "Responsibilities", html: `
        <ul>
          <li><strong>Buyers:</strong> correct address, reachable on delivery, cash ready.</li>
          <li><strong>Sellers:</strong> item packed and ready, pickup PIN given only to the assigned rider.</li>
          <li><strong>Riders:</strong> verify the PIN, collect the shown amount, take the proof photo, deposit the item price.</li>
        </ul>` },
      { id: "tracking", h: "Tracking", html: `<p>You can follow each order's status in the app. Live GPS tracking and arrival estimates are not currently available.</p>` },
    ],
  },
];
