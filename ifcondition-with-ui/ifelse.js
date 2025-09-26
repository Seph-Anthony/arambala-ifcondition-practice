const whatnumber = document.getElementById("output");
const placeithere = document.getElementById("placeithere");
const identify = document.getElementById("identify");

identify.onclick = function (){

const answer = Number(placeithere.value);

let total = answer % 2;


if(total == 0){
    whatnumber.textContent = "The number is Even";
}
else {
    whatnumber.textContent = "The number is odd";
}
}