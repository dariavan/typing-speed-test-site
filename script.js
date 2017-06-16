const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const loadAnotherTextButton = document.querySelector("#load");
const theTimer = document.querySelector(".timer");
const anotherText = "This is an another text to test your typing skills. Enjoy!"

var timer = [0,0,0,0];

// Run a standard minute/second/hundredths timer:
function runTimer(){
  let currentTime = timer[0] + ":" + timer[1] +":" + timer[2];
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100)- timer[0]*60);
  timer[2] = Math.floor(timer[3]- (timer[1]*100)- (timer[0]*6000));
}

// Match the text entered with the provided text on the page:
function spellCheck(){
  let textEntered = testArea.value;
  console.log(textEntered);
}

// Start the timer:
function start(){
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength === 0) {
    setInterval(runTimer, 10);
  }
  console.log(textEnteredLength);
}

// Reset everything:
function reset(){
  testArea.value='';
  if (testArea.value.length === 0) {
  timer[0]=0;
  timer[1]=0;
  timer[2]=0;
  timer[3]=0;
  }
}

function loadText(){
  if (document.querySelector("#origin-text p").innerHTML == originText) {
    document.querySelector("#origin-text p").innerHTML = anotherText;
  }else {
      document.querySelector("#origin-text p").innerHTML = originText;
  }
}

resetButton.addEventListener("click", reset, false);
loadAnotherTextButton.addEventListener("click", loadText, false);
// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
