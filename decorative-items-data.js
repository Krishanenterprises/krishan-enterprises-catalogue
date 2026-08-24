// Decorative Items catalogue products
const decorativeItems = [
  ["KE-DI-001","Home Glow Decorative Light","01_Home_Glow_Decorative_Light.png","Handmade illuminated decor","Warm LED glow"],
  ["KE-DI-002","Happy Diwali Festive Glow Light","02_Festive_Diwali_Glow_Light.png","Handmade festive decor","Warm LED glow"],
  ["KE-DI-003","Sanvi Personalized Name Light","03_Sanvi_Personalized_Name_Light.png","Personalized name decor","Warm LED glow"],
  ["KE-DI-004","Krishna Personalized Name Light","04_Krishna_Personalized_Name_Light.png","Personalized name decor","Warm LED glow"],
  ["KE-DI-005","Pihu Personalized Name Light","05_Pihu_Personalized_Name_Light.png","Personalized name decor","Warm LED glow"],
  ["KE-DI-006","Happy Raksha Bandhan Festive Light","06_Raksha_Bandhan_Festive_Light.png","Handmade festive decor","Warm LED glow"],
  ["KE-DI-007","Ganesh Ji Divine Idol Lamp","07_Ganesh_Ji_Divine_Idol_Lamp.png","Resin decorative showpiece","LED base"],
  ["KE-DI-008","Lord Shiva Divine Crystal Pyramid","08_Lord_Shiva_Divine_Crystal_Pyramid.png","Resin crystal pyramid","Decorative showpiece"],
  ["KE-DI-009","Floral Resin Pyramid Showpiece","09_Floral_Resin_Pyramid_Showpiece.png","Resin with floral accents","Decorative showpiece"],
  ["KE-DI-010","Auspicious Resin Rakhi Plate","10_Auspicious_Resin_Rakhi_Plate.png","Handmade resin plate","Festive gifting"],
  ["KE-DI-011","Personalized Resin Alphabet B","11_Personalized_Resin_Alphabet_B.png","Floral resin alphabet","Personalized decor"],
  ["KE-DI-012","Personalized Resin Alphabet M","12_Personalized_Resin_Alphabet_M.png","Floral resin alphabet","Personalized decor"],
  ["KE-DI-013","Goddess Lakshmi Crystal Pyramid","13_Goddess_Lakshmi_Crystal_Pyramid.png","Resin crystal pyramid","Divine decor"],
  ["KE-DI-014","Lord Krishna Crystal Pyramid","14_Lord_Krishna_Crystal_Pyramid.png","Resin crystal pyramid","Divine decor"],
  ["KE-DI-015","Lord Hanuman Crystal Pyramid","15_Lord_Hanuman_Crystal_Pyramid.png","Resin crystal pyramid","Divine decor"],
  ["KE-DI-016","Goddess Durga Crystal Pyramid","16_Goddess_Durga_Crystal_Pyramid.png","Resin crystal pyramid","Divine decor"]
];

decorativeItems.forEach(([id,name,file,material,style]) => {
  products.push({
    id,
    category:"decorative-items",
    name,
    images:[`assets/images/decorative-items/${file}`],
    specs:{Material:material,Style:style,Use:"Home Decor & Gifting",Availability:"Bulk / Wholesale Enquiry"}
  });
});
