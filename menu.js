get() ;
async function get(){

    try{
     //   let x=https://www.themealdb.com/api/json/v1/1/search.php?f=a
        let url="https://www.themealdb.com/api/json/v1/1/search.php?f=a";
        let url1="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
        let menu= await fetch(url);

        let menu_data= await menu.json();

        console.log(menu_data.meals);
       
        localStorage.setItem("data",JSON.stringify(menu_data.meals));
        appenddata(menu_data.meals);
        
    }
    catch (err){
        console.log("error",err)
    }
}

let arr1=JSON.parse(localStorage.getItem("data"))
console.log("menu_data",arr1);

function appenddata(arr){
    document.querySelector("#container").innerHTML="";

    arr.map(function(ele,index){
    let x=Math.floor((Math.random())*500);
      let   div1=document.createElement("div");
      let   div2=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.strMealThumb;

        let p=document.createElement("h3");
        p.textContent=`Name:${ele.strMeal}`;
       let price=document.createElement("h4")
       price.textContent=`Prize:${x}`;
       let btn=document.createElement("button");
        btn.textContent="Cart"
        btn.onclick=function(){
            addcart(index,x);
        }
       div2.append(img);
       div1.append(div2,p,price,btn);
       document.querySelector("#container").append(div1);
    })
}
let cart_arr=[]; 
let price_arr=[];
function  addcart(index,price){
   price_arr.push(price);
      cart_arr.push(arr1[index]);
  console.log(cart_arr);
      localStorage.setItem("cart_data",JSON.stringify(cart_arr));
      localStorage.setItem("price_arr",JSON.stringify(price_arr));

  }