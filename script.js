const categoryGrid = document.getElementById("categoryGrid");
const catalogueArea = document.getElementById("catalogueArea");
const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");

function imageFallback(img){
  img.onerror = () => {
    img.onerror = null;
    img.src = "placeholder.svg";
  };
}

function renderCategories(){
  categoryGrid.innerHTML = categories.map(c => {
    const count = products.filter(p => p.category === c.id).length;
    return `<article class="category-card" style="background-image:url('${c.image}')"
      onclick="openCategory('${c.id}')">
      <div class="category-content">
        <div class="category-num">${c.num}</div>
        <div class="category-name">${c.name}<span class="category-count">${count ? count+" products" : "Coming soon"}</span></div>
      </div>
    </article>`;
  }).join("");
}

function openCategory(id){
  const c = categories.find(x => x.id === id);
  if(!c) return;
  const list = products.filter(p => p.category === id);
  catalogueArea.innerHTML = `
    <section class="catalog-section" id="${id}">
      <div class="catalog-head">
        <div class="eyebrow">SECTION ${c.num}</div>
        <h2>${c.name}</h2>
        <p>${c.description}</p>
        <input class="search" id="search-${id}" placeholder="Search this category..." oninput="filterProducts('${id}', this.value)">
      </div>
      <div class="product-list" id="list-${id}">${productRows(list)}</div>
    </section>`;
  document.getElementById(id).scrollIntoView({behavior:"smooth", block:"start"});
}

function filterProducts(categoryId, query){
  const list = products.filter(p => p.category === categoryId &&
    (p.name + " " + p.id).toLowerCase().includes(query.toLowerCase()));
  document.getElementById("list-"+categoryId).innerHTML = productRows(list);
}

function productRows(list){
  if(!list.length) return `<div class="empty">No products found.</div>`;
  return list.map(p => `
    <article class="product-row" onclick="openProduct('${p.id}')">
      <img class="product-thumb" src="${p.images[0]}" alt="${p.name}" onerror="imageFallback(this)">
      <div>
        <div class="product-name">${p.name}<span class="product-code">${p.id}</span></div>
      </div>
      <div class="arrow">›</div>
    </article>`).join("");
}

function openProduct(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  const imgs = p.images.map(src => `<img src="${src}" alt="${p.name}" onerror="imageFallback(this)">`).join("");
  const specs = Object.entries(p.specs || {}).filter(([k,v]) => v).map(([k,v]) =>
    `<div class="spec"><span>${k}</span><span>${v}</span></div>`).join("");
  const waText = encodeURIComponent(`Hello Krishan Enterprises, I am interested in ${p.name} (${p.id}). Please share wholesale details.`);
  modalContent.innerHTML = `
    <div class="modal-images">${imgs}</div>
    <div class="modal-code">${p.id}</div>
    <h3 class="modal-title">${p.name}</h3>
    <div class="specs">${specs}</div>
    <a class="whatsapp" href="https://wa.me/918130892107?text=${waText}" target="_blank" rel="noopener">WhatsApp Enquiry</a>`;
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeModal(){
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeModal();
});

document.getElementById("productCount").textContent = products.length;
renderCategories();
