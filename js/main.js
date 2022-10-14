// Lägger till event-listener på knappen med ID: btn
document.getElementById("btn").addEventListener("click", play);

//funktion för att skriva ut resultatet.
function play() {
  //Sparar användarens siffra(som är en string) i en variabel
  let userInput = document.getElementById("playerInput");
  //Omvandlar stringen till en siffra
  let userNumber = parseInt(userInput.value);
  //OM siffran är under 50 - skriv ut ny text i paragraf-taggen med ID: prompt.
  if (userNumber < 50) {
    document.getElementById("prompt").innerHTML = " Det var ett lågt nummer!";
  }
  //OM siffran är över 50 - skriv ut text i paragraf-taggen med ID: prompt.
  if (userNumber > 50) {
    document.getElementById("prompt").innerHTML = " Det var ett högt nummer!";
  }
    //OM siffran är exakt 50 - skriv ut text i paragraf-taggen med ID: prompt.
  if (userNumber === 50) {
    document.getElementById("prompt").innerHTML = " Det var ett lagom stort nummer!";
  }

}
