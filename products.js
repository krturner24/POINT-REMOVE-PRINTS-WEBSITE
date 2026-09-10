// Point Remove Prints product list.
// To add an item later: upload its photo into /images, then add one product block below.
// category must be "shirt" or "hat".

window.PRP_PRODUCTS = [
  {
    category: "shirt",
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

// Keep the folded-shirts hero from being stretched beyond its source size.
// This makes the current photo look much sharper while preserving the mockup layout.
(() => {
  const style = document.createElement('style');
  style.textContent = `
    .hero-img{
      display:flex !important;
      align-items:center !important;
      justify-content:center !important;
      padding:22px 38px !important;
      background:#e4e0d7 !important;
    }
    .hero-img img{
      width:auto !important;
      height:auto !important;
      max-width:515px !important;
      max-height:650px !important;
      object-fit:contain !important;
      object-position:center center !important;
      filter:contrast(1.04) saturate(1.02);
    }
    @media(max-width:760px){
      .hero-img{
        height:auto !important;
        min-height:0 !important;
        padding:18px 12px 26px !important;
      }
      .hero-img img{
        width:88% !important;
        max-width:515px !important;
        height:auto !important;
      }
    }
  `;
  document.head.appendChild(style);
})();
