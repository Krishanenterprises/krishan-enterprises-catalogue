const categoryGrid = document.getElementById("categoryGrid");
const catalogueArea = document.getElementById("catalogueArea");
const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");

function imageFallback(img){
  img.onerror = () => { img.onerror = null; img.src = "placeholder.svg"; };
}

function renderCategories(){
  categoryGrid.innerHTML = categories.map(c => {
    const count = products.filter(p => p.category === c.id).length;
    return `<article class="category-card" style="background-image:url('${c.image}')" onclick="openCategory('${c.id}')">
      <div class="category-content"><div class="category-num">${c.num}</div><div class="category-name">${c.name}<span class="category-count">${count ? count+" products" : "Coming soon"}</span></div></div>
    </article>`;
  }).join("");
}

function openCategory(id){
  const c = categories.find(x => x.id === id);
  if(!c) return;
  if(c.subcategories){
    const cards = c.subcategories.map(s => {
      const count = products.filter(p => p.category === id && p.subcategory === s.id).length;
      return `<article class="subcategory-card" onclick="openSubcategory('${id}','${s.id}')">
        <div class="subcategory-num">${s.num}</div><div class="subcategory-name">${s.name}</div>
        <div class="subcategory-count">${count ? count+" products" : "Coming soon"}</div><div class="subcategory-arrow">›</div>
      </article>`;
    }).join("");
    catalogueArea.innerHTML = `<section class="catalog-section" id="${id}"><div class="catalog-head"><div class="eyebrow">SECTION ${c.num}</div><h2>${c.name}</h2><p>${c.description}</p></div><div class="subcategory-grid">${cards}</div></section>`;
  } else renderProductSection(id, null);
  document.getElementById(id).scrollIntoView({behavior:"smooth", block:"start"});
}

function openSubcategory(categoryId, subcategoryId){
  renderProductSection(categoryId, subcategoryId);
  document.getElementById(categoryId).scrollIntoView({behavior:"smooth", block:"start"});
}

function renderProductSection(categoryId, subcategoryId){
  const c = categories.find(x => x.id === categoryId); if(!c) return;
  const sub = c.subcategories ? c.subcategories.find(x => x.id === subcategoryId) : null;
  const list = products.filter(p => p.category === categoryId && (!subcategoryId || p.subcategory === subcategoryId));
  const title = sub ? sub.name : c.name;
  const searchHandler = subcategoryId ? `filterProducts('${categoryId}', this.value, '${subcategoryId}')` : `filterProducts('${categoryId}', this.value)`;
  catalogueArea.innerHTML = `<section class="catalog-section" id="${categoryId}"><div class="catalog-head"><div class="eyebrow">SECTION ${c.num}${sub ? " · " + sub.num : ""}</div><h2>${title}</h2><p>${sub ? "Explore our wholesale " + sub.name.toLowerCase() + " collection." : c.description}</p><input class="search" id="search-${categoryId}" placeholder="Search this category..." oninput="${searchHandler}"></div><div class="product-list" id="list-${categoryId}">${productRows(list)}</div></section>`;
}

function filterProducts(categoryId, query, subcategoryId=null){
  const list = products.filter(p => p.category === categoryId && (!subcategoryId || p.subcategory === subcategoryId) && (p.name + " " + p.id).toLowerCase().includes(query.toLowerCase()));
  document.getElementById("list-"+categoryId).innerHTML = productRows(list);
}

function productRows(list){
  if(!list.length) return `<div class="empty">No products found.</div>`;
  return list.map(p => `<article class="product-row" onclick="openProduct('${p.id}')"><img class="product-thumb" src="${p.images[0]}" alt="${p.name}" onerror="imageFallback(this)"><div><div class="product-name">${p.name}<span class="product-code">${p.id}</span></div></div><div class="arrow">›</div></article>`).join("");
}

function openProduct(id){
  const p = products.find(x => x.id === id); if(!p) return;
  const imgs = p.images.map(src => `<img src="${src}" alt="${p.name}" onerror="imageFallback(this)">`).join("");
  const specs = Object.entries(p.specs || {}).filter(([k,v]) => v).map(([k,v]) => `<div class="spec"><span>${k}</span><span>${v}</span></div>`).join("");
  const waText = encodeURIComponent(`Hello Krishan Enterprises, I am interested in ${p.name} (${p.id}). Please share wholesale details.`);
  modalContent.innerHTML = `<div class="modal-images">${imgs}</div><div class="modal-code">${p.id}</div><h3 class="modal-title">${p.name}</h3><div class="specs">${specs}</div><a class="whatsapp" href="https://wa.me/918130892107?text=${waText}" target="_blank" rel="noopener">WhatsApp Enquiry</a>`;
  productModal.classList.add("open"); productModal.setAttribute("aria-hidden","false"); document.body.classList.add("modal-open");
}

function closeModal(){ productModal.classList.remove("open"); productModal.setAttribute("aria-hidden","true"); document.body.classList.remove("modal-open"); }
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });
document.getElementById("productCount").textContent = products.length;
renderCategories();
