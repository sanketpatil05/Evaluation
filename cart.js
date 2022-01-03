let arr=JSON.parse(localStorage.getItem("cart_data"));
console.log("cart_data",arr);
let price_arr1=JSON.parse(localStorage.getItem("price_arr"));
console.log("kimat",price_arr1)

let i=0;
dis(arr);
let sum=[];
function dis(arr){
    document.querySelector("#cart_container").innerHTML="";
   arr.map(function(ele,index){
       let   div1=document.createElement("div");
      let   div2=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.strMealThumb;

        let p=document.createElement("h3");
        p.textContent=`Name:${ele.strMeal}`;
       let price=document.createElement("h4")
       price.textContent=`Prize:${price_arr1[i]}`;
     //  sum.push(price_arr1[i]);
       let btn=document.createElement("button");
        btn.textContent="Remove"
        btn.onclick=function(){
            remove(index);
        }
       div2.append(img);
       div1.append(div2,p,price,btn);
       document.querySelector("#cart_container").append(div1);

})
}

let total=price_arr1.reduce(function(ac,dc){
    return ac+dc; 
})
console.log(total);
document.querySelector("#tp").textContent=`Total Price is $-${total}.00`;
 

function  remove(index){
  arr.splice(index,1);
 // console.log(arr);
   //document.querySelector("#cart_container").innerHTML="";
     dis(arr);
     price_arr1.splice(index,1);
     let tl=price_arr1.reduce(function(ac,dc){
    return ac+dc; 
})
// console.log(total);
document.querySelector("#tp").innerHTML="";
document.querySelector("#tp").textContent=`Total Price is $-${tl}.00`;
}