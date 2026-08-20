// Category 02 — LED Candles / Diya catalogue
const ledCandleProducts = [
  ["KE-LC-001","Premium Diya"],
  ["KE-LC-002","LED Pillar Candles"],
  ["KE-LC-003","Crystal Candles - Gold"],
  ["KE-LC-004","Box LED Candles"],
  ["KE-LC-005","White Wax LED Candle"],
  ["KE-LC-006","Floating LED Candles - Set"],
  ["KE-LC-007","Button LED Candles"],
  ["KE-LC-008","Floating LED Candle"],
  ["KE-LC-009","Heart Shape LED Candle"],
  ["KE-LC-010","Shadow Diya"],
  ["KE-LC-011","Water Sensor Diya"],
  ["KE-LC-012","Chinese Diya"],
  ["KE-LC-013","White Light Diya"],
  ["KE-LC-014","Diya with Stand"],
  ["KE-LC-015","LED Diya"],
  ["KE-LC-016","Water Sensor Diya - Pack"],
  ["KE-LC-017","RGB LED Candle"],
  ["KE-LC-018","Crystal Candles - White"],
  ["KE-LC-019","Orange LED Candle"],
  ["KE-LC-020","Flameless LED Candle Set"]
].map(([id,name]) => ({
  id,
  category:"home-decor",
  name,
  images:[`assets/images/led-candles/${id}.jpg`],
  specs:{Type:"LED Candle / Diya"}
}));
products.push(...ledCandleProducts);
