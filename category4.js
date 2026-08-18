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
  "Bloc Sling Bag","Noma Sling Bag","Anglar Crossbody Bag","Tomi Sling Bag","Trigr Duffle Bag","Utility Pro Toiletry Kit","Flexipack Toiletry Kit","TravelMate Black Toiletry Kit","TravelMate Navy Toiletry Kit","Blocr Duffle Bag","Tech Kit Hardshell","Tucsan Duffle Bag","Tucsan Duffle Bag","Exes Messenger Bag","Wander Duffle","Mhawk Backpack","Elite Backpack","Classik Backpack","Swingg Duffle","Kriss Backpack","Quickfire Duffle","Ark Backpack","Slim lines Navy Backpack","Slim lines Black Backpack","Axion Backpack","Kurv Backpack","Gentlemen's Backpack Black","Gentlemen's Backpack Navy","Urban Explorer Backpack","Powerhouse Backpack","Vektor Pro Black Backpack","Vektor Pro Navy Backpack","Transformer Pro Backpack","Transformer Pro Backpack"
];

products.filter(p => p.category === "corporate-gifting" && p.subcategory === "hand-bags").forEach((p, i) => {
  if (handBagNames[i]) p.name = handBagNames[i];
});

const coconutLampProducts = [
  {id:"KE-CL-001",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Artisan Coconut Shell Table Lamp With Hanging Bells",images:["assets/images/coconut-lamps/KE-CL-001.jpg"],specs:{}},
  {id:"KE-CL-002",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Heritage Bamboo & Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-002.jpg"],specs:{}},
  {id:"KE-CL-003",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Terra Glow Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-003.jpg"],specs:{}},
  {id:"KE-CL-004",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Halo Artisan Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-004.jpg"],specs:{}},
  {id:"KE-CL-005",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Tribal Harmony Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-005.jpg"],specs:{}},
  {id:"KE-CL-006",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Tribal Bells Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-006.jpg"],specs:{}},
  {id:"KE-CL-007",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Heritage Tribal Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-007.jpg"],specs:{}},
  {id:"KE-CL-008",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Twin Glow Coconut Shell Lamp Set",images:["assets/images/coconut-lamps/KE-CL-008.jpg"],specs:{}},
  {id:"KE-CL-009",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Nature Glow Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-009.jpg"],specs:{}},
  {id:"KE-CL-010",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Classic Heritage Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-010.jpg"],specs:{}},
  {id:"KE-CL-011",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Tribal Musician Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-011.jpg"],specs:{}},
  {id:"KE-CL-012",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Minimal Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-012.jpg"],specs:{}},
  {id:"KE-CL-013",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Classic Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-013.jpg"],specs:{}},
  {id:"KE-CL-014",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Natural Bamboo Stem Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-014.jpg"],specs:{}},
  {id:"KE-CL-015",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Rustic Bamboo Column Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-015.jpg"],specs:{}},
  {id:"KE-CL-016",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Twin Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-016.jpg"],specs:{}},
  {id:"KE-CL-017",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Bell Accent Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-017.jpg"],specs:{}},
  {id:"KE-CL-018",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Contemporary Vase Base Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-018.jpg"],specs:{}},
  {id:"KE-CL-019",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Ceramic Vase Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-019.jpg"],specs:{}},
  {id:"KE-CL-020",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Warli Art Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-020.jpg"],specs:{}},
  {id:"KE-CL-021",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Orb Ceramic Base Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-021.jpg"],specs:{}},
  {id:"KE-CL-022",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Jute Wrapped Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-022.jpg"],specs:{}},
  {id:"KE-CL-023",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Warli Ceramic Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-023.jpg"],specs:{}},
  {id:"KE-CL-024",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Warli Orb Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-024.jpg"],specs:{}},
  {id:"KE-CL-025",category:"corporate-gifting",subcategory:"coconut-lamps",name:"Bullock Cart Warli Coconut Shell Table Lamp",images:["assets/images/coconut-lamps/KE-CL-025.jpg"],specs:{}}
];

products.push(...coconutLampProducts);
