// Central configuration for GrowMate's legal pages.
// Edit values here, then run `node legal-src/build.mjs` to regenerate web/<route>/index.html.
//
// INTERNAL NOTE (do not publish): these documents require review and approval by
// qualified Philippine legal counsel before public launch. See LEGAL_README.md.

export const TBC = "[TO BE COMPLETED BY GROWMATE]";

export const legal = {
  // Date the documents were last edited. Change it whenever a document changes.
  lastUpdated: "5 October 2026",

  brand: "GrowMate",
  formerName: "Plantita",
  website: "plantita.online",

  // Existing support contact, already shown in the app (SettingsDrawer).
  supportEmail: "support@growmate.online",
  // No separate privacy mailbox exists yet; privacy requests use the support address.
  privacyEmail: "support@growmate.online",

  // Business identity: unknown, never invent. Leave as TBC until GrowMate provides them.
  legalName: TBC,
  businessAddress: TBC,
  registration: TBC,
  dtiSec: TBC,
  bir: TBC,
  dpo: TBC,
  businessHours: TBC,
  governingVenue: TBC,
  riderEngagementModel: TBC,
  retentionPeriods: TBC,
};
