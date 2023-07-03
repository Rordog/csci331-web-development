window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   document.getElementById("cInput").oninput = function(){fInput.value = ""}
   document.getElementById("fInput").oninput = function(){cInput.value = ""}
   document.getElementById("convertButton").addEventListener("click", function(){
      if(fInput.value.length != 0){
         if (isNaN(fInput.value) == true){
            document.getElementById("errorMessage").textContent = fInput.value + " is not a number"
         } else{
            document.getElementById("errorMessage").textContent = ""
            cInput.value = convertFtoC(parseFloat(fInput.value))
            if (fInput.value < 32){
               document.getElementById("weatherImage").src = "cold.png"
            } else if (fInput.value > 50){
               document.getElementById("weatherImage").src = "warm.png"
            } else {document.getElementById("weatherImage").src = "cool.png"}
         }  
      } else if(cInput.value.length != 0){
         if (isNaN(cInput.value) == true){
            document.getElementById("errorMessage").textContent = cInput.value + " is not a number"
         } else{
            document.getElementById("errorMessage").textContent = ""
            fInput.value = convertCtoF(parseFloat(cInput.value))
            if (fInput.value < 32){
               document.getElementById("weatherImage").src = "cold.png"
            } else if (fInput.value > 50){
               document.getElementById("weatherImage").src = "warm.png"
            } else {document.getElementById("weatherImage").src = "cool.png"}
         }  
      }
   })
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * (9/5) + 32);
}

function convertFtoC(degreesFahrenheit) {
   return ((degreesFahrenheit - 32) * (5/9));
}
