#! usr/bin/env node

import inquirer from "inquirer";

let myBalance: number = 1000;
let myPin: number = 5949;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter pin: ",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operations",
      type: "list",
      message: "Choose Options: ",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);
  if (operationAnswer.operations === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter amount: ",
      },
    ]);

    myBalance -= amountAns.amount;
    console.log("Your remaining balance is: " + myBalance);
  } else if (operationAnswer.operations === "check balance") {
    console.log("your current balnce is: " + myBalance);
  }
} else {
  console.log("Incorrect pin");
}
