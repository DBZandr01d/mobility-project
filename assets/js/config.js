// ============================================
// CONFIGURATION — EDIT THIS FILE ONLY
// ============================================

// Solana mint address for the Mobility Project campaign.
// Change it here and every "Support the Project" link updates site-wide.
//
// Not launched yet? Leave this as "SOON" (or any placeholder that is not a real
// mint). The support buttons stay in place but become inert, and the small
// "The campaign opens soon." notes appear beside them. Paste the real mint and
// everything goes live — nothing else to change.
var MINT_ADDRESS = "SOON";

// A real Solana mint is 32-44 base58 characters; anything else is a placeholder.
var MINT_IS_LIVE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(MINT_ADDRESS);

// The campaign URL, built from the mint address above.
var HOW_TO_BUY_URL = "https://pump.fun/coin/" + MINT_ADDRESS;

/**
 * Point every [data-link="how-to-buy"] anchor at the campaign.
 * Called by the router after each view render, so links injected by
 * client-side navigation stay in sync.
 *
 * The page's campaign state also lands on <body data-campaign>, which CSS uses
 * to show `.when-live` or `.when-pending` copy.
 */
window.applyHowToBuyLinks = function (root) {
  document.body.setAttribute("data-campaign", MINT_IS_LIVE ? "live" : "pending");

  var links = (root || document).querySelectorAll('a[data-link="how-to-buy"]');

  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    if (MINT_IS_LIVE) {
      link.href = HOW_TO_BUY_URL;
      link.target = "_blank";
      link.rel = "noopener";
      link.classList.remove("is-pending");
      link.removeAttribute("aria-disabled");
      continue;
    }

    // Placeholder mint: the button keeps its label and its place in the
    // layout, but goes nowhere.
    link.href = "#";
    link.removeAttribute("target");
    link.setAttribute("aria-disabled", "true");
    link.classList.add("is-pending");
  }
};

// A placeholder button must not navigate, even to "#".
document.addEventListener("click", function (e) {
  var link = e.target.closest ? e.target.closest('a[data-link="how-to-buy"]') : null;
  if (link && link.getAttribute("aria-disabled") === "true") e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  window.applyHowToBuyLinks(document);
});
