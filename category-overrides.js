// Catalogue category updates requested by Krishan Enterprises.
// Category 08 is intentionally hidden because there are no products for it currently.
const hiddenCategoryIds = new Set(["personal-care"]);
const categoryRenames = {
  "home-decor": "LED Candles",
  "kitchen-products": "Tumbler & Copper Bottles"
};

categories.splice(0, categories.length, ...categories
  .filter(c => !hiddenCategoryIds.has(c.id))
  .map(c => ({ ...c, name: categoryRenames[c.id] || c.name })));
