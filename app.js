import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"


import {getDatabase , ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appsettings = {
    databaseURL :"https://real-time-database-4a07b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}



const app = initializeApp(appsettings);

const database = getDatabase(app);
const CartListInDB = ref(database , "CartListInDB");


let button = document.querySelector("#addtocart");
let info = document.querySelector("#cartinput");

let fullist = document.getElementById("shopping-list");
button.addEventListener("click",()=>{
    let items = info.value;
    addingliele(items);
    clearinput();

    push(CartListInDB,items);
    console.log(`${items} is updated to fire base`);
})

function clearinput(){
    info.value="";
}

function addingliele(items){
    const li = document.createElement('li');
    li.innerText = items;
    fullist.appendChild(li);
}

onValue(CartListInDB , function(snapshot){
    let listval = Object.values(snapshot.val());
    for(let i =0;i<listval.length; i++){
        console.log(listval[i]);
    }
})