let butt = document.querySelector("#addtocart");
let info = document.querySelector("#cartinput");
butt.addEventListener("click",()=>{
    let cartlist = info.value;
    console.log(cartlist);
})