// Builds GrowMate's legal pages into web/<slug>/index.html and refreshes the shared footer
// in web/index.html. Run from the repo root:  node legal-src/build.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { legal } from "./config.mjs";
import { pages } from "./pages.mjs";
import { rolePages } from "./pages-roles.mjs";
import { rulePages, legalHub, contactPage } from "./pages-rules.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const web = path.join(root, "web");
const ORIGIN = "https://www.plantita.online";
const YEAR = 2026;

const docs = [...pages, ...rolePages, ...rulePages];
const mail = (subject) => `mailto:${legal.supportEmail}?subject=${encodeURIComponent(subject)}`;
const esc = (s) => s.replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;").replace(/"/g, "&quot;");

// ── Shared footer (landing page and legal pages) ─────────────────────────
export const footerHtml = `<footer class="site-footer">
      <div class="wrap">
        <div class="site-footer__top">
          <div class="site-footer__brand">
            <a class="brand" href="/">
              <img src="/img/growmate-logo-128.webp" alt="" width="32" height="32" />
              <span>GrowMate</span>
            </a>
            <p>Plant care, home growing and a local plant market for the Philippines. Formerly Plantita.</p>
          </div>
          <nav class="site-footer__cols" aria-label="Footer">
            <div>
              <h2>Shop</h2>
              <ul>
                <li><a href="/#market">Marketplace</a></li>
                <li><a href="/#buying">How buying works</a></li>
                <li><a href="/buyer-terms">Buyer Terms</a></li>
                <li><a href="/returns-refunds">Returns &amp; Refunds</a></li>
                <li><a href="/delivery-cod">Delivery &amp; COD</a></li>
              </ul>
            </div>
            <div>
              <h2>Sell</h2>
              <ul>
                <li><a href="/#sellers">Selling on GrowMate</a></li>
                <li><a href="/seller-agreement">Seller Agreement</a></li>
                <li><a href="/seller-agreement#fees">Seller fees</a></li>
                <li><a href="/marketplace-rules">Seller rules</a></li>
              </ul>
            </div>
            <div>
              <h2>Deliver</h2>
              <ul>
                <li><a href="/rider-agreement">Rider Agreement</a></li>
                <li><a href="/delivery-cod">Delivery Policy</a></li>
              </ul>
            </div>
            <div>
              <h2>Legal</h2>
              <ul>
                <li><a href="/terms">Terms &amp; Conditions</a></li>
                <li><a href="/privacy">Privacy Notice</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
                <li><a href="/marketplace-rules#prohibited">Prohibited products</a></li>
                <li><a href="/acceptable-use">Acceptable Use</a></li>
                <li><a href="/intellectual-property">Intellectual Property</a></li>
                <li><a href="/disputes">Disputes &amp; Complaints</a></li>
              </ul>
            </div>
            <div>
              <h2>Company</h2>
              <ul>
                <li><a href="/#about">About GrowMate</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="/legal">Legal &amp; business info</a></li>
                <li><a href="/contact#report">Report an issue</a></li>
                <li><a href="/contact#privacy">Privacy request</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="site-footer__bottom">
          <p>&copy; ${YEAR} GrowMate. All rights reserved.</p>
          <ul>
            <li><a href="/leafy">Meet Leafy</a></li>
            <li><a href="/games">Plant memory game</a></li>
          </ul>
        </div>
      </div>
    </footer>`;

const head = ({ title, description, slug }) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)} | GrowMate</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${ORIGIN}/${slug}" />
    <meta name="theme-color" content="#f7faf4" />
    <meta property="og:title" content="${esc(title)} | GrowMate" />
    <meta property="og:description" content="${esc(description)}" />
    <link rel="icon" type="image/png" sizes="64x64" href="/img/favicon-64.png" />
    <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Literata:ital,opsz,wght@0,7..72,500..700;1,7..72,400&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/styles.css" />
    <link rel="stylesheet" href="/legal.css" />
  </head>
  <body>
    <a class="skip" href="#main">Skip to content</a>
    <header class="topnav">
      <div class="topnav__inner">
        <a class="brand" href="/" aria-label="GrowMate home">
          <img src="/img/growmate-logo-128.webp" alt="" width="32" height="32" />
          <span>GrowMate</span>
        </a>
        <nav aria-label="Legal">
          <ul class="topnav__links">
            <li><a href="/legal">All policies</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <a class="btn btn--secondary btn--sm topnav__cta" href="/">Back to GrowMate</a>
      </div>
    </header>`;

const tail = `
    ${footerHtml}
    <script>(function(){var d=document.querySelector(".toc details");if(d&&window.matchMedia("(max-width: 900px)").matches)d.open=false;})();</script>
  </body>
</html>
`;

const docMeta = `<p class="doc__meta">Last updated: <time>${legal.lastUpdated}</time></p>`;

function renderDoc(d) {
  const toc = d.sections.map((s) => `<li><a href="#${s.id}">${s.h}</a></li>`).join("\n              ");
  const body = d.sections.map((s) => `
          <section class="doc__section" id="${s.id}" aria-labelledby="${s.id}-h">
            <h2 id="${s.id}-h">${s.h}</h2>
            ${s.html.trim()}
          </section>`).join("\n");
  return `${head(d)}
    <main id="main" class="legal">
      <div class="wrap legal__layout">
        <aside class="toc" aria-label="On this page">
          <details open>
            <summary>On this page</summary>
            <ol>
              ${toc}
            </ol>
          </details>
        </aside>
        <article class="doc">
          <p class="doc__crumb"><a href="/legal">Legal</a></p>
          <h1>${d.title}</h1>
          ${docMeta}
          <p class="doc__lede">${d.lede}</p>
${body}
        </article>
      </div>
    </main>${tail}`;
}

function renderHub(h) {
  const rows = h.business.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("\n              ");
  const list = docs.map((d) => `<li><a href="/${d.slug}"><strong>${d.title}</strong><span>${d.description}</span></a></li>`).join("\n              ");
  return `${head(h)}
    <main id="main" class="legal">
      <div class="wrap legal__narrow">
        <h1>${h.title}</h1>
        ${docMeta}
        <p class="doc__lede">${h.lede}</p>
        <section aria-labelledby="biz-h">
          <h2 id="biz-h">Business information</h2>
          <dl class="facts">
              ${rows}
          </dl>
        </section>
        <section aria-labelledby="docs-h">
          <h2 id="docs-h">Policies</h2>
          <ul class="doclist">
              ${list}
          </ul>
        </section>
      </div>
    </main>${tail}`;
}

function renderContact(c) {
  const items = c.reports.map(([label, subject, hint]) =>
    `<li><a href="${mail(subject)}"><strong>${label}</strong><span>${hint}</span></a></li>`).join("\n              ");
  return `${head(c)}
    <main id="main" class="legal">
      <div class="wrap legal__narrow">
        <h1>${c.title}</h1>
        <p class="doc__lede">${c.lede}</p>
        <section aria-labelledby="help-h">
          <h2 id="help-h">Help with an order</h2>
          <p>Most order problems are fastest to solve in the app: open the order to cancel it (before a rider is assigned) or request a refund (within 7 days of delivery). See <a href="/returns-refunds">Returns, Refunds &amp; Cancellation</a> and <a href="/disputes">Disputes &amp; Complaints</a>.</p>
        </section>
        <section id="report" aria-labelledby="report-h">
          <h2 id="report-h">Report an issue</h2>
          <p>In the app, use Report on a listing or profile. You can also email us; each link below opens an email with the right subject.</p>
          <ul class="doclist">
              ${items}
          </ul>
        </section>
        <section id="privacy" aria-labelledby="privacy-h">
          <h2 id="privacy-h">Privacy requests</h2>
          <p>To access, correct, delete or object to the use of your personal data, email <a href="${mail("Privacy request")}">${legal.privacyEmail}</a> from your account email. You can also delete your account in the app's settings. See the <a href="/privacy#rights">Privacy Notice</a>.</p>
        </section>
      </div>
    </main>${tail}`;
}

function write(slug, html) {
  const dir = path.join(web, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

for (const d of docs) write(d.slug, renderDoc(d));
write(legalHub.slug, renderHub(legalHub));
write(contactPage.slug, renderContact(contactPage));

// Refresh the landing page footer.
const indexPath = path.join(web, "index.html");
let index = fs.readFileSync(indexPath, "utf8");
const start = index.search(/<footer class="(site-)?footer">/);
const end = index.indexOf("</footer>", start) + "</footer>".length;
if (start < 0 || end < start) throw new Error("landing page footer not found");
index = index.slice(0, start) + footerHtml + index.slice(end);
fs.writeFileSync(indexPath, index);

console.log(`built ${docs.length} documents + /legal + /contact; landing footer updated`);
