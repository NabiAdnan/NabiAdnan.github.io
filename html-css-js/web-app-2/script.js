const products = [
    {  name: "product 1", desc:"This is a simple description", price: 800,imgUrl:"https://picsum.photos/id/77/450/300" },
    {  name: "product 2", desc:"This is a simple description", price: 600,imgUrl:"https://picsum.photos/id/77/450/300" },
    {  name: "product 3", desc:"This is a simple description", price: 400,imgUrl:"https://picsum.photos/id/77/450/300" },
    {  name: "product 1", desc:"This is a simple description", price: 800,imgUrl:"https://picsum.photos/id/77/450/300" },
    {  name: "product 2", desc:"This is a simple description", price: 600,imgUrl:"https://picsum.photos/id/77/450/300" },
    {  name: "product 3", desc:"This is a simple description", price: 400,imgUrl:"https://picsum.photos/id/77/450/300" },
    {  name: "product 1", desc:"This is a simple description", price: 800,imgUrl:"https://picsum.photos/id/77/450/300" },
    {  name: "product 2", desc:"This is a simple description", price: 600,imgUrl:"https://picsum.photos/id/77/450/300" },
    {  name: "product 3", desc:"This is a simple description", price: 400,imgUrl:"https://picsum.photos/id/77/450/300" },
];

function showProducts(){
     let str = `<div class="row">`;
  products.map(e=>{
    str = str + `
    <div class="box">
    <img src=${e.imgUrl}/>
    <h3>${e.name}</h3>
    <p>${e.desc}</p>
    <h5>${e.price}</h5>
    <button class="cart-btn">Add to the cart</button>
    </div>
      `
  })
  str = str + `</div>`;
  let root = document.getElementById("root");
  root.innerHTML = str;
}

showProducts();
    