let kind = document.getElementById("kind");
let placeit = document.getElementById("placeit");
let process = document.getElementById("process");
 


process.onclick = function (){
    
const age = Number(placeit.value);


    console.log(age);                   
    console.log(typeof age);            


    if(age >= 18){

        kind.textContent="You are an adult";
    }
    else{
        kind.textContent="You are not an adult";
    }


}