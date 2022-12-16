
function highlight(el) {
    //el.style.backgroundColor='blue';

    if(el.style.backgroundColor =='white'){ //white turn to yellow
        el.style.backgroundColor='yellow';
    }else{//turn to white
        el.style.backgroundColor='white';
    }
}
  
  function myAlert(){
    alert("I'm clicked!");
  }

  function highlightActor(actor){
    let spans = document.querySelectorAll("#play span");
    for(const mySpan of spans){
        if (actor == mySpan.dataset.actor){//white turn to yellow
            mySpan.style.backgroundColor='yellow';
        }else {//turn to white
            mySpan.style.backgroundColor='white';

    }
    //alert(actor;
}
  }

  let spans = document.querySelectorAll("#play span");
 
console.log(spans);

for(const mySpan of spans){
   // mySpan.addEventListener("click", myAlert);
   //alert(mySpan.dataset.actor);

   mySpan.addEventListener("click", function(ev){
    highlightActor(mySpan.dataset.actor);

   });

}
  
  
  