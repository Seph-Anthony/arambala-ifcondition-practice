const inputgrade = document.getElementById("inputgrade");
const btnidentify = document.getElementById("identify");
const result = document.getElementById("result");



btnidentify.onclick = function (){
const convert = Number(inputgrade.value);




    if(convert >= 90){

        result.textContent= "Excellent";
    }
    else if(convert>= 80 && convert<= 89){

        result.textContent = "Good";

    }
    else if (convert >= 70 && convert <= 79){

        result.textContent = "Fair";

    }

    else if(convert == ""){

        result.textContent="Input a number";
    }

    else{

        result.textContent = "Failed";
    }




}

