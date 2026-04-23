window.GEDData = window.GEDData || {};

window.GEDData.orderAccessRegistry = {
  sellerName: "The Bald Dude Co.",
  productName: "GED Prep Hub",
  supportEmail: "info@thebalddude.co",
  instructions:
    "Use the same email address used at checkout and the Gumroad order ID shown on your receipt.",
  activeOrders: [
    // Paste objects from order-helper.html here.
    // Example:
    // { id: "owner-test-order", hash: "paste-generated-hash-here", note: "Owner test access" }
  ],
  revokedOrderHashes: [
    // Paste hashes here to revoke access later.
    // A revoked hash will fail even if it still appears in activeOrders.
  ]
};
