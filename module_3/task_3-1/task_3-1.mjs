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
let number = 0;

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

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Photo size = "+ imageSize + " " )

if (imageSize >= 6) {
  printOut("The Image is too large");
} else {
  printOut("The image works fine");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList = ["January", "February", "March", "April", "May", "June","July", "August", "September","October", "November", "December"];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  const monthIndex = monthList.indexOf(monthName)
  const days = daysInMonth[monthIndex];

printOut("Month is " + monthName.toString());
if (monthName.includes("r")){
  printOut("You must take Vitamin D");  
} else {
  printOut("You do not need to take Vitamin D");
}


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(`The month of ${monthName} has ${days} days.`);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList2 = ["January", "February", "March", "April", "May", "June","July", "August", "September","October", "November", "December"];
const daysInMonth2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
  const noOfMonth2 = monthList2.length;
  const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];
  const monthIndex2 = monthList2.indexOf(monthName2);
  const days2 = daysInMonth2[monthIndex2];

  printOut(monthName2.toString());


console.log(monthName2)

if (monthName2 === "Mars" || monthName2 === "May"){
  printOut("The Gallery Is Closed");
} else if (monthIndex2 === 3) {
  printOut("There Is a temporary premises in the building next door");
} else {
  printOut("The art gallery is open"); 
}

printOut(newLine); 
