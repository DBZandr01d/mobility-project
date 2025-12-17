// ============================================
// CONFIGURATION FILE - EASY TO UPDATE
// ============================================

// Solana Mint Address - Update this value to change across all pages
const MINT_ADDRESS = "DW6juSeATy3CX7Xx5h2FsiFLhPfPfo8rSBx4Dg17pump";

// Pump.fun URL with mint address
const HOW_TO_BUY_URL = `https://pump.fun/coin/${MINT_ADDRESS}`;

// Apply the URL to all "How to Buy" links when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const howToBuyLinks = document.querySelectorAll('a[data-link="how-to-buy"]');
  howToBuyLinks.forEach((link) => {
    link.href = HOW_TO_BUY_URL;
    link.target = "_blank";
  });
});
