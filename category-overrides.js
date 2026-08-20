// Catalogue category updates requested by Krishan Enterprises.
// Personal Care and Decorative Boxes are intentionally hidden/removed.
const hiddenCategoryIds = new Set(["personal-care", "decorative-boxes"]);
const categoryRenames = {
  "home-decor": "LED Candles",
  "kitchen-products": "Tumbler & Copper Bottles"
};
const categoryBannerImages = {
  "home-decor": "assets/images/category-banners/cat-led-candles.jpg",
  "corporate-gifting": "assets/images/category-banners/cat-corporate-gifting.jpg",
  "kitchen-products": "assets/images/category-banners/cat-tumbler-copper-bottles.jpg"
};

// Hide unused categories, apply requested names/banners, then renumber
// the remaining visible catalogue sequentially from 01 to 08.
categories.splice(0, categories.length, ...categories
  .filter(c => !hiddenCategoryIds.has(c.id))
  .map(c => ({
    ...c,
    name: categoryRenames[c.id] || c.name,
    image: categoryBannerImages[c.id] || c.image
  }))
  .map((c, index) => ({ ...c, num: String(index + 1).padStart(2, "0") })));
