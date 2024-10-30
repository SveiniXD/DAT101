"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*
Complete the given "if" in the task_3-3.mjs file at part 1, statement so that it matches this: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8).
*/

printOut("Task 1, 2 and 3");
let wakeUpTime = 9;
let catchBus
const busTime = 8;

if (wakeUpTime >= busTime){
  printOut ("You woke up at " + wakeUpTime + " o'clock. You can't catch the bus!")
}
if (wakeUpTime < busTime){
  printOut ("You woke up at " + wakeUpTime + " o'clock You can catch the bus!")
}
if (wakeUpTime > busTime){
  printOut ("You can take the train to school, or you have to use your car.")  
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
let number = -2;

if (number < 0) {
    printOut(number.toString() + " is negative");
} else if (number > 0){
    printOut(number.toString() + " is positive");
} else{
  printOut(number.toString() + " is zero")
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let imageSize = Math.floor(Math.random() * 8) + 1;{
  printOut("The Image Size is:", imageSize, "MP"); 
}
printOut (imageSize.toString());
  

if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}
if (imageSize > 6){
  printOut("Image is too Large")
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

if (imageSize >= 4) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
}
if (imageSize > 6){
printOut("Image is too Large")
}










printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
