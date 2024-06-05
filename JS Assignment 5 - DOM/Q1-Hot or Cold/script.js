function displayRandomNumber(){
    let randomNumber = Math.floor(Math.random() * (41)) - 20;
    console.log(randomNumber)
    let userGuesNumber=document.getElementById('userInput').value;
    console.log(userGuesNumber)
    const difference = Math.abs(randomNumber - userGuesNumber);
      if (difference === 0) {
        displayResult("Congratulations! You guessed the correct number!",randomNumber);
      } else if (randomNumber <0) {
        displayResult("Cold",randomNumber);
      } else {
        displayResult("Hot",randomNumber);
      }
    
}
function displayResult(message,randomNumber) {
    document.getElementById("num").innerHTML = `<div>
        <div> RandomNumber : ${randomNumber}</div>
        <div> ${message}</div>

        </div>`

    }