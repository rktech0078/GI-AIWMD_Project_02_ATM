// import inquirer from "inquirer";
// import inquirer from "inquirer";
// let balance: number = 50000;
// let pinCode: number = 1020;
// // STEP # 01:
// let pinAnswer = await inquirer.prompt([{
//      name: "pin",
//      type: "number",
//      message: "Please Enter Your Correct Pin Code Here: "
// }])
// // STEP # 02:
// if(pinAnswer.pin === pinCode){console.log("Correct Pin Code");
// }else{console.log("Incorrect");
// }
//     let operatorAnswer = await inquirer.prompt([{
//         name: "operator",
//         type: "list",
//         message: "Please Select Your Desirable Option: ",
//         choices: ["Withdraw","Check Balance","Fast Cash"]
//     }]);
// // STEP # 03:
// if(operatorAnswer.operator === "Withdraw"){
//   let amountAnswer = await inquirer.prompt([{
//        name: "amount",
//        type: "number",
//        message: "Enter Your Amount Here: "
//   }])
// if (amountAnswer.amount < balance ){
//     balance -= amountAnswer.amount;
//     console.log("Now Your Balance is " + balance);
// }else{
//         console.log("Insufficient Balance");
// }}
// // STEP # 04:
//    else if(operatorAnswer.operator === "Balance"){console.log("Your Current Balance is " + balance);
//    }
//    else if (operatorAnswer.operator === "Fast Cash"){
//      let Fast = await inquirer.prompt([{
//           name: "fast",
//           type: "list",
//           message: "How much money do you want to withdraw: ",
//           choices: ["1000","5000","10000"]
//      }]);
//  if(Fast.fast === "1000"){
//     balance -= Fast.fast;
//     console.log(`Your remaining balance is ${balance}`);
//  }
//     if(Fast.fast === "5000"){
//     balance -= Fast.fast;
//     console.log(`Your remaining balance is ${balance}`);
//  }
//     if(Fast.fast === "10000"){
//     balance -= Fast.fast;
//     console.log(`Your remaining balance is ${balance}`);
//  }
// }  else {
//    console.log("Invalid Pin Code");
// }
import inquirer from "inquirer";
let myBalance = 1000;
let myPin = 5949;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter pin: "
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin");
    let operationAnswer = await inquirer.prompt([{
            name: "operations",
            type: "list",
            message: "Choose Options: ",
            choices: ["withdraw", "check balance", "fast cash"]
        }]);
    if (operationAnswer.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter amount: "
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAnswer.operations === "check balance") {
        console.log("your current balnce is: " + myBalance);
    }
    else if (operationAnswer.operator === "fast cash") {
        let Fast = await inquirer.prompt([{
                name: "fast",
                type: "list",
                message: "How much money do you want to withdraw: ",
                choices: ["1000", "5000", "10000"]
            }]);
        if (Fast.fast === "1000") {
            myBalance -= Fast.fast;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        if (Fast.fast === "5000") {
            myBalance -= Fast.fast;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        if (Fast.fast === "10000") {
            myBalance -= Fast.fast;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else {
        console.log("Incorrect pin");
    }
}
