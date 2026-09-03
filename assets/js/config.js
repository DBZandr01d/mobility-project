// ============================================
// CONFIGURATION — EDIT THIS FILE ONLY
// ============================================

// Solana mint address for The Mobility Project campaign.
// Change it here and every "Buy on pump.fun" link updates site-wide.
//
// Not launched yet? Leave this as "SOON" (or any placeholder that is not a real
// mint) and every buy button turns into an inert "Coming soon" chip instead of
// linking to a dead pump.fun page. Paste the real mint and they go live again —
// nothing else to change.
var MINT_ADDRESS = "SOON";

// A real Solana mint is 32-44 base58 characters; anything shorter is treated as
// a placeholder.
var MINT_IS_LIVE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(MINT_ADDRESS);

// pump.fun campaign URL, built from the mint address above.
var HOW_TO_BUY_URL = "https://pump.fun/coin/" + MINT_ADDRESS;

// Shown on the buy buttons while the campaign has not launched.
var PENDING_LABEL = "Coming soon";

/**
 * Point every [data-link="how-to-buy"] anchor at the campaign.
 * Called by the router after each view render, so links injected by
 * client-side navigation stay in sync.
 */
window.applyHowToBuyLinks = function (root) {
  var scope = root || document;
  var links = scope.querySelectorAll('a[data-link="how-to-buy"]');

  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    if (MINT_IS_LIVE) {
      link.href = HOW_TO_BUY_URL;
      link.target = "_blank";
      link.rel = "noopener";
      link.classList.remove("is-pending");
      link.removeAttribute("aria-disabled");
      setLinkLabel(link, link.getAttribute("data-label") || link.textContent.trim());
      continue;
    }

    // Placeholder mint: keep the button visible but make it go nowhere.
    if (!link.hasAttribute("data-label")) {
      link.setAttribute("data-label", link.textContent.trim());
    }
    link.href = "#";
    link.removeAttribute("target");
    link.setAttribute("aria-disabled", "true");
    link.classList.add("is-pending");
    setLinkLabel(link, PENDING_LABEL);
  }
};

/**
 * Replace only the button's text, leaving any leading <svg> icon in place.
 */
function setLinkLabel(link, text) {
  for (var i = link.childNodes.length - 1; i >= 0; i--) {
    var node = link.childNodes[i];
    if (node.nodeType === 3 && node.nodeValue.trim()) {
      node.nodeValue = (i > 0 ? " " : "") + text;
      return;
    }
  }
  link.appendChild(document.createTextNode(text));
}

// A placeholder button must not navigate, even to "#".
document.addEventListener("click", function (e) {
  var link = e.target.closest ? e.target.closest('a[data-link="how-to-buy"]') : null;
  if (link && link.getAttribute("aria-disabled") === "true") e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  window.applyHowToBuyLinks(document);
});
