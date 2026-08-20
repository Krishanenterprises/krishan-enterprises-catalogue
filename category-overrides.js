// Catalogue category updates requested by Krishan Enterprises.
// Personal Care is intentionally hidden because there are no products for it currently.
const hiddenCategoryIds = new Set(["personal-care"]);
const categoryRenames = {
  "home-decor": "LED Candles",
  "kitchen-products": "Tumbler & Copper Bottles"
};
const categoryBannerImages = {
  "home-decor": "assets/images/category-banners/cat-led-candles.jpg",
  "corporate-gifting": "assets/images/category-banners/cat-corporate-gifting.jpg",
  "kitchen-products": "assets/images/category-banners/cat-tumbler-copper-bottles.jpg"
};

// Hide the unused category, apply requested names/banners, then renumber
// the remaining visible catalogue sequentially from 01 to 09.
categories.splice(0, categories.length, ...categories
  .filter(c => !hiddenCategoryIds.has(c.id))
  .map(c => ({
    ...c,
    name: categoryRenames[c.id] || c.name,
    image: categoryBannerImages[c.id] || c.image
  }))
  .map((c, index) => ({ ...c, num: String(index + 1).padStart(2, "0") })));
