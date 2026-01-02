
var mess=document.createElement("h1");

function create(){
      mess.innerHTML = "Your Order confirmed , Thank You";
      document.body.appendChild(mess);
      mess.style.color="green";
      

      setTimeout(function () {
        mess.remove();
    }, 3000);
}

var b= document.getElementsByClassName("btn")[0];

b.addEventListener("click",changecolor);

function changecolor(){
     b.style.color="red";
     b.style.backgroundColor = "white";

     setTimeout(function (){
           b.style.color = "";
        b.style.backgroundColor = "";
        
     },3000);
     setTimeout(function () {
    window.history.back();
}, 10000);
}


