// Point Remove Prints product catalog.
// Add new items to PRP_PRODUCTS. Faith items should include collection: "faith".
window.PRP_PRODUCTS = [
  {
    category: "shirt",
    catalogCategory: "tshirt",
    collection: "faith",
    name: "It Is Finished T-Shirt",
    image: "images/faith-it-is-finished-tshirt.svg",
    tag: "Faith Line",
    description: "It Is Finished — John 19:30. Clean front design with a small cross and scripture reference.",
    price: "",
    sizes: "",
    colors: "Black, Charcoal, Navy, Dark Olive, Maroon, Sand",
    orderType: "Custom T-Shirt"
  },
  {
    category: "shirt",
    catalogCategory: "tshirt",
    collection: "faith",
    name: "Unashamed T-Shirt",
    image: "images/faith-unashamed-tshirt.jpg",
    tag: "Faith Line",
    description: "Unashamed — Romans 1:16 faith T-shirt with left-chest front and full-back design.",
    price: "",
    sizes: "",
    colors: "Black, Charcoal, Navy, Dark Olive, Maroon, Sand",
    orderType: "Custom T-Shirt"
  },
  {
    category: "shirt",
    catalogCategory: "hoodie",
    collection: "faith",
    name: "Unashamed Hoodie",
    image: "images/faith-unashamed-hoodie.jpg",
    tag: "Faith Line",
    description: "Unashamed — Romans 1:16 faith hoodie with left-chest front and full-back design.",
    price: "",
    sizes: "",
    colors: "Black, Charcoal, Navy, Dark Olive, Maroon, Sand",
    orderType: "Hoodie / Sweatshirt"
  },
  {
    category: "shirt",
    catalogCategory: "tshirt",
    name: "Morrilton Devil Dogs",
    image: "images/11242.png",
    tag: "School & Team",
    description: "Custom school spirit design with front and back artwork.",
    price: "",
    sizes: "",
    colors: "",
    orderType: "Custom T-Shirt"
  },
  {
    category: "shirt",
    catalogCategory: "tshirt",
    name: "Point • Flush • Retrieve",
    image: "images/10759.png",
    tag: "Point Remove Outdoors",
    description: "Bird dog and upland hunting design with a classic outdoors look.",
    price: "",
    sizes: "",
    colors: "",
    orderType: "Custom T-Shirt"
  },
  {
    category: "shirt",
    catalogCategory: "hoodie",
    name: "Built for the Journey Hoodie",
    image: "images/11705.png",
    tag: "Fello",
    description: "Front chest logo with a large back lifestyle design.",
    price: "",
    sizes: "",
    colors: "",
    orderType: "Hoodie / Sweatshirt"
  },
  {
    category: "shirt",
    catalogCategory: "tshirt",
    name: "Florida 2026",
    image: "images/11259.png",
    tag: "Custom Apparel",
    description: "Vacation-style pocket and full-back print.",
    price: "",
    sizes: "",
    colors: "",
    orderType: "Custom T-Shirt"
  },
  {
    category: "shirt",
    catalogCategory: "tshirt",
    name: "Arkansas Spirit Design",
    image: "images/11260.png",
    tag: "Fan & Spirit",
    description: "Bold full-color fan apparel concept.",
    price: "",
    sizes: "",
    colors: "",
    orderType: "Custom T-Shirt"
  },
  {
    category: "shirt",
    catalogCategory: "tshirt",
    name: "Creek Duck",
    image: "images/10760.png",
    tag: "Hunting & Outdoors",
    description: "Waterfowl artwork by Point Remove Outdoors.",
    price: "",
    sizes: "",
    colors: "",
    orderType: "Custom T-Shirt"
  }
];

(() => {
  const hero = document.querySelector('.hero-img img');
  if (hero) hero.src = 'images/hero-folded-shirts-hq-2.jpg';

  const oldImageCategories = document.querySelector('.categories');
  if (oldImageCategories) oldImageCategories.remove();

  const mockupButton = document.querySelector('.hero-copy .btn');
  if (mockupButton && !document.querySelector('.quick-groups')) {
    const groups = document.createElement('nav');
    groups.className = 'quick-groups';
    groups.setAttribute('aria-label', 'Shop categories');
    groups.innerHTML = `
      <a href="#shop" data-catalog="tshirt">T-Shirts</a>
      <a href="#shop" data-catalog="hoodie">Hoodies</a>
      <a href="#shop" data-catalog="hat">Hats</a>
      <a href="#shop" data-catalog="print">Prints</a>`;
    mockupButton.insertAdjacentElement('afterend', groups);
  }

  const nav = document.querySelector('.nav');
  if (nav && !nav.querySelector('[data-faith-nav]')) {
    const link = document.createElement('a');
    link.href = '#shop';
    link.textContent = 'Faith Line';
    link.dataset.faithNav = 'true';
    nav.insertBefore(link, nav.querySelector('a[href="#about"]') || null);
  }

  const style = document.createElement('style');
  style.textContent = `
    .hero-img{padding:0!important;background:#e4e0d7!important;overflow:hidden!important}
    .hero-img img{width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;object-fit:cover!important;object-position:center top!important;filter:none!important}
    .quick-groups{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;width:100%;max-width:550px;margin-top:18px}
    .quick-groups a{display:flex;align-items:center;justify-content:center;min-height:48px;padding:10px 8px;border:1px solid #777260;background:rgba(255,255,255,.38);color:#2d2a24;font:600 11px Georgia,serif;letter-spacing:.08em;text-transform:uppercase;text-align:center}
    .quick-groups a:hover{background:#4b4d38;color:#fff}.service-icons{margin-top:24px!important}
    .catalog-wrap{max-width:1240px}.catalog-head{margin-bottom:26px}.catalog-tools{display:flex;justify-content:space-between;gap:18px;align-items:center;margin:0 0 14px;flex-wrap:wrap}.catalog-filters{display:flex;gap:8px;flex-wrap:wrap}
    .catalog-filter{border:1px solid #bcb2a4;background:#fff;color:#332f29;padding:11px 15px;font:600 11px Georgia,serif;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.catalog-filter.active,.catalog-filter:hover{background:#4b4d38;color:#fff;border-color:#4b4d38}.faith-filter{border-color:#777260}
    .catalog-search-wrap{min-width:240px;flex:0 1 320px}.catalog-search{width:100%;padding:12px 14px;border:1px solid #bcb2a4;background:#fff;font-size:15px}.catalog-status{color:#746e65;font-size:13px;margin:10px 0 18px}
    .catalog-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.catalog-card{background:#fff;border:1px solid #e4ddd1;display:flex;flex-direction:column;min-width:0}.catalog-card img{width:100%;aspect-ratio:1/1;object-fit:cover;background:#eee9e0}.catalog-info{padding:14px;display:flex;flex-direction:column;gap:7px;flex:1}
    .catalog-kicker{font:700 9px Georgia,serif;letter-spacing:.17em;text-transform:uppercase;color:#74705d}.catalog-card h3{font:400 21px/1.08 Georgia,serif;margin:0}.catalog-card p{font-size:13px;line-height:1.4;color:#6d665f;margin:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.catalog-price{font:600 18px Georgia,serif}.catalog-meta{font-size:12px;color:#645e57}.catalog-card .btn{margin-top:auto;width:100%;padding:12px 10px;font-size:10px}.catalog-empty{grid-column:1/-1;padding:38px 20px;text-align:center;border:1px dashed #c7bdaf;color:#746e65;background:#fff}.catalog-more-wrap{text-align:center;margin-top:26px}.catalog-more{min-width:180px}.catalog-more[hidden]{display:none}
    @media(max-width:980px){.catalog-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
    @media(max-width:760px){.hero-img{height:475px!important;min-height:0!important;padding:0!important}.quick-groups{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:18px}.quick-groups a{min-height:50px;font-size:12px}.catalog-tools{display:block}.catalog-filters{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.catalog-filter:first-child{grid-column:1/-1}.catalog-search-wrap{margin-top:12px;min-width:0}.catalog-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.catalog-info{padding:10px}.catalog-card h3{font-size:17px}.catalog-card p{font-size:11px}.catalog-kicker{font-size:8px}.catalog-card .btn{font-size:9px;padding:11px 7px}}
  `;
  document.head.appendChild(style);
})();

document.addEventListener('click', e => {
  if (!e.target.closest('#menu')) return;
  setTimeout(() => {
    const mobile = document.getElementById('mobileNav');
    if (mobile && !mobile.querySelector('[data-faith-nav]')) {
      const link = document.createElement('a');
      link.href = '#shop';
      link.textContent = 'Faith Line';
      link.dataset.faithNav = 'true';
      const about = mobile.querySelector('a[href="#about"]');
      mobile.insertBefore(link, about || null);
    }
  }, 0);
});

window.addEventListener('DOMContentLoaded', () => {
  const shop = document.getElementById('shop');
  if (!shop) return;

  const products = Array.isArray(window.PRP_PRODUCTS) ? window.PRP_PRODUCTS : [];
  const esc = v => String(v ?? '').replace(/[&<>'\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[c]));
  const labels = {all:'All',tshirt:'T-Shirts',hoodie:'Hoodies',hat:'Hats',print:'Prints',faith:'Faith Line'};
  const productCategory = p => p.catalogCategory || (p.category === 'hat' ? 'hat' : /hood/i.test(p.name || '') ? 'hoodie' : 'tshirt');
  const isFaith = p => p.collection === 'faith' || p.line === 'faith' || /\b(faith|christian|jesus|scripture|bible|romans|john)\b/i.test([p.tag,p.description].filter(Boolean).join(' '));

  shop.innerHTML = `
    <div class="wrap catalog-wrap">
      <div class="section-head catalog-head"><div class="eyebrow">Point Remove Prints</div><h2>Catalog</h2><p class="subtext">Browse our designs by category. Tap any item to request it, and we’ll confirm garment, size, color and final price.</p></div>
      <div class="catalog-tools"><div class="catalog-filters" role="group" aria-label="Catalog categories">
        <button type="button" class="catalog-filter active" data-filter="all">All</button><button type="button" class="catalog-filter" data-filter="tshirt">T-Shirts</button><button type="button" class="catalog-filter" data-filter="hoodie">Hoodies</button><button type="button" class="catalog-filter" data-filter="hat">Hats</button><button type="button" class="catalog-filter" data-filter="print">Prints</button><button type="button" class="catalog-filter faith-filter" data-filter="faith">Faith Line</button>
      </div><div class="catalog-search-wrap"><input id="catalog-search" class="catalog-search" type="search" placeholder="Search designs..." aria-label="Search catalog"></div></div>
      <div class="catalog-status"><span id="catalog-count"></span></div><div class="catalog-grid" id="catalog-grid"></div><div class="catalog-more-wrap"><button type="button" id="catalog-more" class="btn catalog-more">Load More</button></div>
    </div>`;

  const grid = document.getElementById('catalog-grid');
  const count = document.getElementById('catalog-count');
  const more = document.getElementById('catalog-more');
  const search = document.getElementById('catalog-search');
  const filters = [...document.querySelectorAll('.catalog-filter')];
  let active = 'all';
  let shown = 12;

  function matchingProducts(){
    const q = (search.value || '').trim().toLowerCase();
    return products.filter(p => {
      const cat = productCategory(p);
      if (active === 'faith' && !isFaith(p)) return false;
      if (active !== 'all' && active !== 'faith' && cat !== active) return false;
      if (!q) return true;
      return [p.name,p.tag,p.description,p.colors,p.sizes].some(v => String(v || '').toLowerCase().includes(q));
    });
  }

  function card(p){
    const cat = productCategory(p);
    const kicker = isFaith(p) ? 'Faith Line' : (labels[cat] || p.tag || 'Custom Apparel');
    return `<article class="catalog-card"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"><div class="catalog-info"><div class="catalog-kicker">${esc(kicker)}</div><h3>${esc(p.name)}</h3>${p.price ? `<div class="catalog-price">${esc(p.price)}</div>` : ''}${p.description ? `<p>${esc(p.description)}</p>` : ''}${p.sizes ? `<div class="catalog-meta"><b>Sizes:</b> ${esc(p.sizes)}</div>` : ''}${p.colors ? `<div class="catalog-meta"><b>Colors:</b> ${esc(p.colors)}</div>` : ''}<button class="btn order-design" data-design="${esc(p.name)}" data-type="${esc(p.orderType || '')}">Request This Item</button></div></article>`;
  }

  function renderCatalog(reset=false){
    if (reset) shown = 12;
    const matches = matchingProducts();
    const visible = matches.slice(0, shown);
    count.textContent = `${matches.length} ${matches.length === 1 ? 'item' : 'items'}${active !== 'all' ? ` in ${labels[active]}` : ''}`;
    grid.innerHTML = visible.length ? visible.map(card).join('') : `<div class="catalog-empty">No ${active === 'all' ? 'catalog items' : labels[active].toLowerCase()} listed yet. New items can be added anytime.</div>`;
    more.hidden = shown >= matches.length;
  }

  function setFilter(wanted){
    const target = filters.find(b => b.dataset.filter === wanted);
    if (target) target.click();
  }

  filters.forEach(btn => btn.addEventListener('click', () => {
    active = btn.dataset.filter || 'all';
    filters.forEach(b => b.classList.toggle('active', b === btn));
    renderCatalog(true);
  }));
  search.addEventListener('input', () => renderCatalog(true));
  more.addEventListener('click', () => { shown += 12; renderCatalog(false); });
  document.querySelectorAll('.quick-groups [data-catalog]').forEach(link => link.addEventListener('click', () => setFilter(link.dataset.catalog)));
  document.addEventListener('click', e => {
    const faithLink = e.target.closest('[data-faith-nav]');
    if (faithLink) setTimeout(() => setFilter('faith'), 0);
  });

  renderCatalog(true);
});
