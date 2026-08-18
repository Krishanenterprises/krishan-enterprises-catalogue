const corporateGiftingCategory = categories.find(c => c.id === "corporate-gifting");

if (corporateGiftingCategory) {
  corporateGiftingCategory.subcategories = [
    {num:"01", id:"hand-bags", name:"Hand Bags"},
    {num:"02", id:"digital-gifts", name:"Digital Gifts"},
    {num:"03", id:"coconut-lamps", name:"Coconut Lamps"},
    {num:"04", id:"diary-sets", name:"Diary Sets"},
    {num:"05", id:"corporate-gift-sets", name:"Corporate Gift Sets"}
  ];
}

const handBagNames = [
  "Bloc Sling Bag",
  "Noma Sling Bag",
  "Anglar Crossbody Bag",
  "Tomi Sling Bag",
  "Trigr Duffle Bag",
  "Utility Pro Toiletry Kit",
  "Flexipack Toiletry Kit",
  "TravelMate Black Toiletry Kit",
  "TravelMate Navy Toiletry Kit",
  "Blocr Duffle Bag",
  "Tech Kit Hardshell",
  "Tucsan Duffle Bag",
  "Tucsan Duffle Bag",
  "Exes Messenger Bag",
  "Wander Duffle",
  "Mhawk Backpack",
  "Elite Backpack",
  "Classik Backpack",
  "Swingg Duffle",
  "Kriss Backpack",
  "Quickfire Duffle",
  "Ark Backpack",
  "Slim lines Navy Backpack",
  "Slim lines Black Backpack",
  "Axion Backpack",
  "Kurv Backpack",
  "Gentlemen's Backpack Black",
  "Gentlemen's Backpack Navy",
  "Urban Explorer Backpack",
  "Powerhouse Backpack",
  "Vektor Pro Black Backpack",
  "Vektor Pro Navy Backpack",
  "Transformer Pro Backpack",
  "Transformer Pro Backpack"
];

products.filter(p => p.category === "corporate-gifting" && p.subcategory === "hand-bags").forEach((p, i) => {
  if (handBagNames[i]) p.name = handBagNames[i];
});
