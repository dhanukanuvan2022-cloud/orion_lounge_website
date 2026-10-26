const WHATSAPP_NUMBER = "94764167993";
const menuItems = [
 {id:"pork-bbq",name:"Pork BBQ",category:"bbq",price:2000,desc:"Tender, juicy pork grilled with Orion's BBQ blend.",icon:"🔥"},
 {id:"beef-bbq",name:"Beef BBQ",category:"bbq",price:2200,desc:"Premium beef grilled for a rich, smoky flavour.",icon:"🔥"},
 {id:"sausages",name:"Sausages (Lingus)",category:"bbq",price:1800,desc:"Smoky sausages, grilled just right.",icon:"♨"},
 {id:"chicken-bbq",name:"Chicken BBQ",category:"bbq",price:1800,desc:"Chicken marinated in signature spices and grilled.",icon:"🍗"},
 {id:"kebab",name:"Kebab",category:"bbq",price:1500,desc:"Seasoned kebab with a smoky finish.",icon:"🍢"},
 {id:"mutton-kebab",name:"Mutton Kebab",category:"bbq",price:2000,desc:"Mutton kebab marinated in aromatic spices.",icon:"🍢"},
 {id:"chicken-okonomiyaki",name:"Chicken Okonomiyaki",category:"japanese",price:2500,desc:"Japanese-style savoury pancake with chicken.",icon:"🥢"},
 {id:"pork-katsu",name:"Pork Katsu",category:"japanese",price:null,desc:"Japanese-style breaded pork cutlet.",icon:"🥢"},
 {id:"chicken-katsu",name:"Chicken Katsu",category:"japanese",price:null,desc:"Japanese-style breaded chicken cutlet.",icon:"🥢"},
 {id:"ebi-furai",name:"Ebi Furai",category:"japanese",price:null,desc:"Japanese-style fried prawns.",icon:"🍤"},
 {id:"japanese-pork-curry",name:"Japanese Pork Curry",category:"japanese",price:3000,desc:"Japanese curry with pork.",icon:"🍛"},
 {id:"japanese-beef-curry",name:"Japanese Beef Curry",category:"japanese",price:3200,desc:"Japanese curry with beef.",icon:"🍛"},
 {id:"japanese-chicken-curry",name:"Japanese Chicken Curry",category:"japanese",price:2700,desc:"Japanese curry with chicken.",icon:"🍛"},
 {id:"japanese-fish-curry",name:"Japanese Fish Curry",category:"japanese",price:3000,desc:"Japanese curry with fish.",icon:"🍛"},
 {id:"japanese-prawn-curry",name:"Japanese Prawn Curry",category:"japanese",price:3200,desc:"Japanese curry with prawns.",icon:"🍤"},
 {id:"pork-ramen",name:"Pork Ramen",category:"japanese",price:2500,desc:"Japanese noodle soup with pork.",icon:"🍜"},
 {id:"veg-tempura",name:"Vegetable Tempura",category:"japanese",price:1400,desc:"Crisp battered vegetables.",icon:"🥦"},
 {id:"tempura-moriawase",name:"Tempura Moriawase",category:"japanese",price:2400,desc:"Assorted tempura.",icon:"🍤"},
 {id:"tempura-ice-cream",name:"Tempura Ice Cream",category:"dessert",price:1500,desc:"A sweet Japanese-inspired dessert.",icon:"🍨"},
 {id:"banana-tempura",name:"Banana Tempura",category:"dessert",price:1500,desc:"Crisp tempura banana.",icon:"🍌"},
 {id:"matcha-ice-cream",name:"Matcha Ice Cream with Azuki",category:"dessert",price:1600,desc:"Matcha ice cream with azuki.",icon:"🍵"},
 {id:"vanilla-ice-cream",name:"Vanilla Ice Cream",category:"dessert",price:1400,desc:"Classic vanilla ice cream.",icon:"🍨"},
 {id:"basmati-rice",name:"Steamed Basmati Rice",category:"rice",price:650,desc:"Steamed basmati rice.",icon:"🍚"},
 {id:"garlic-rice",name:"Garlic Rice",category:"rice",price:1000,desc:"Available with basmati or Japanese rice.",icon:"🍚"},
 {id:"chicken-fried-rice",name:"Chicken Fried Rice",category:"rice",price:1800,desc:"Fried rice with chicken.",icon:"🍛"},
 {id:"seafood-fried-rice",name:"Seafood Fried Rice",category:"seafood",price:2000,desc:"Fried rice with seafood.",icon:"🦐"},
 {id:"vegetable-fried-rice",name:"Vegetable Fried Rice",category:"rice",price:1300,desc:"Fried rice with vegetables.",icon:"🥬"},
 {id:"mixed-grilled-platter",name:"Mixed Grilled Platter",category:"bbq",price:9000,desc:"A platter of mixed grilled favourites.",icon:"🍽"},
 {id:"seafood-platter",name:"Seafood Platter",category:"seafood",price:9800,desc:"Seafood platter for sharing.",icon:"🦞"},
 {id:"pork-rice",name:"Pork Rice / Pork Dish",category:"rice",price:4000,desc:"Menu wording is partially unclear in the supplied image; confirm exact dish with the restaurant.",icon:"🍛"},
 {id:"coconut-shrimp-curry",name:"Coconut Shrimp Curry",category:"seafood",price:2100,desc:"Shrimp curry with coconut.",icon:"🦐"},
 {id:"pork-stew",name:"Pork Stew",category:"rice",price:3250,desc:"Stew as listed on the supplied menu.",icon:"🍲"},
 {id:"beef-stew",name:"Beef Stew",category:"rice",price:3400,desc:"Stew as listed on the supplied menu.",icon:"🍲"},
 {id:"chicken-stew",name:"Chicken Stew",category:"rice",price:2900,desc:"Chicken stew.",icon:"🍲"},
 {id:"fresh-fruit-platter",name:"Fresh Fruit Platter",category:"dessert",price:null,desc:"Fresh fruit selection.",icon:"🍉"},
 {id:"vanilla-fruit-salad",name:"Vanilla Ice Cream with Fruit Salad",category:"dessert",price:null,desc:"Vanilla ice cream and fruit salad.",icon:"🍨"},
 {id:"chocolate-ice-cream",name:"Chocolate Ice Cream",category:"dessert",price:null,desc:"Chocolate ice cream.",icon:"🍫"},
 {id:"caramel-pudding",name:"Caramel Pudding",category:"dessert",price:null,desc:"Caramel pudding.",icon:"🍮"},
 {id:"chocolate-brownie",name:"Chocolate Brownie",category:"dessert",price:null,desc:"Chocolate brownie.",icon:"🍫"},
 {id:"miso-soup",name:"Miso Soup",category:"japanese",price:null,desc:"Ask the team for today's price.",icon:"🍲"},
 {id:"tonjiru",name:"Tonjiru",category:"japanese",price:null,desc:"Ask the team for today's price.",icon:"🍲"},
 {id:"salmon-sashimi",name:"Salmon Sashimi (5 pcs)",category:"seafood",price:null,desc:"Ask the team for today's price.",icon:"🍣"},
 {id:"tuna-sashimi",name:"Tuna Sashimi (5 pcs)",category:"seafood",price:null,desc:"Ask the team for today's price.",icon:"🍣"},
 {id:"california-roll",name:"California Roll (6 pcs)",category:"japanese",price:null,desc:"Ask the team for today's price.",icon:"🍣"},
 {id:"spicy-tuna-roll",name:"Spicy Tuna Roll (6 pcs)",category:"japanese",price:null,desc:"Ask the team for today's price.",icon:"🍣"},
 {id:"spicy-salmon-roll",name:"Spicy Salmon Roll (6 pcs)",category:"japanese",price:null,desc:"Ask the team for today's price.",icon:"🍣"},
 {id:"ebi-nigiri",name:"Ebi Nigiri (2 pcs)",category:"japanese",price:null,desc:"Ask the team for today's price.",icon:"🍣"},
 {id:"grilled-seer-fish",name:"Grilled Seer Fish",category:"seafood",price:null,desc:"Ask the team for today's price.",icon:"🐟"},
 {id:"garlic-butter-shrimp",name:"Garlic Butter Shrimp",category:"seafood",price:null,desc:"Ask the team for today's price.",icon:"🦐"},
 {id:"hot-butter-cuttlefish",name:"Hot Butter Cuttlefish",category:"seafood",price:null,desc:"Ask the team for today's price.",icon:"🦑"}
];
const cart = {};
const lkr = n => "LKR " + Number(n).toLocaleString("en-LK");
const grid = document.getElementById("menuGrid");
function renderMenu(category="all"){
  grid.innerHTML="";
  const list=menuItems.filter(item=>category==="all"||item.category===category);
  list.forEach(item=>{
    const card=document.createElement("article"); card.className="dish-card";
    const price=item.price===null?'<span class="ask-price">Ask for price</span>':`<span class="price">${lkr(item.price)}</span>`;
    card.innerHTML=`<div class="dish-icon" aria-hidden="true">${item.icon}</div><div class="dish-main"><h3>${item.name}</h3><p>${item.desc}</p><div class="dish-bottom">${price}<button class="add-btn" aria-label="Add ${item.name} to order" title="Add to order">+</button></div></div>`;
    card.querySelector(".add-btn").addEventListener("click",()=>{if(!cart[item.id])cart[item.id]={item,qty:0};cart[item.id].qty++;renderCart();});
    grid.appendChild(card);
  });
}
function renderCart(){
 const entries=Object.values(cart).filter(x=>x.qty>0);
 document.getElementById("cartCount").textContent=entries.reduce((sum,x)=>sum+x.qty,0);
 const area=document.getElementById("cartItems");
 if(!entries.length){area.innerHTML='<p class="empty-cart">Your order is waiting for something delicious.</p>';}
 else{
   area.innerHTML="";
   entries.forEach(({item,qty})=>{
     const line=document.createElement("div");line.className="cart-line";
     line.innerHTML=`<div><div>${item.name}</div><strong>${item.price===null?"Price to confirm":lkr(item.price*qty)}</strong></div><div class="cart-controls"><button aria-label="Remove one ${item.name}">−</button><span>${qty}</span><button aria-label="Add one ${item.name}">+</button></div>`;
     const buttons=line.querySelectorAll("button");
     buttons[0].addEventListener("click",()=>{cart[item.id].qty--;if(cart[item.id].qty<=0)delete cart[item.id];renderCart();});
     buttons[1].addEventListener("click",()=>{cart[item.id].qty++;renderCart();});
     area.appendChild(line);
   });
 }
 const knownTotal=entries.reduce((sum,x)=>sum+(x.item.price||0)*x.qty,0);
 const hasUnknown=entries.some(x=>x.item.price===null);
 document.getElementById("cartTotal").textContent=lkr(knownTotal)+(hasUnknown?" + unpriced items":"");
}
document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{
 document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));tab.classList.add("active");renderMenu(tab.dataset.category);
}));
document.getElementById("sendOrder").addEventListener("click",()=>{
 const entries=Object.values(cart).filter(x=>x.qty>0);
 if(!entries.length){alert("Please add at least one item to your order first.");return;}
 const lines=entries.map(({item,qty})=>`• ${item.name} × ${qty} — ${item.price===null?"price to confirm":lkr(item.price*qty)}`);
 const total=entries.reduce((sum,x)=>sum+(x.item.price||0)*x.qty,0);
 const unknown=entries.some(x=>x.item.price===null);
 const name=document.getElementById("customerName").value.trim();
 const note=document.getElementById("orderNote").value.trim();
 let message=`Hello Orion Lounge & Bar! I'd like to enquire/place an order:\n\n${lines.join("\n")}\n\nKnown subtotal: ${lkr(total)}${unknown?"\nSome selected items have no clearly printed price; please confirm their prices.":""}`;
 if(name)message+=`\nName: ${name}`;
 if(note)message+=`\nSpecial instructions: ${note}`;
 message+="\n\nPlease confirm availability, final price, and pickup/delivery options. Thank you!";
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener");
});
const toggle=document.getElementById("menuToggle"), nav=document.getElementById("mainNav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
renderMenu();renderCart();
