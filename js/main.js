const theNumber = 7;
const higher = "Högre!"
const lower = "Lägre!"
let count = 5;



while (count !==0) {
let myGuess = prompt("Guess the number!")
if (myGuess == theNumber) {
  document.getElementById("prompt").innerHTML = "Du fucking vann bror!";
  break;
}
  if (myGuess < theNumber) {
    document.getElementById("prompt").innerHTML = higher;
    count--;
  }
  if (myGuess > theNumber) {
    document.getElementById("prompt").innerHTML = lower;
    count--;
  } 

}






/* function play() {


 console.log(myGuess.value);
 
  if (theNumber == myGuess.value) {

    document.getElementById("prompt").innerHTML = "Du fucking vann bror!";
  }
  else {
    if (myGuess.value < theNumber) {
      document.getElementById("prompt").innerHTML = higher;
    }
    if (myGuess.value > theNumber) {
      document.getElementById("prompt").innerHTML = lower;
    }
  } 
} */





