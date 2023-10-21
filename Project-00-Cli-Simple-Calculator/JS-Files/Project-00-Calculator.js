#! /usr/bin/env node
import Addition from "./Sub Calculator Function/Addition.js";
import Subtraction from "./Sub Calculator Function/Subtraction.js";
import Multiply from "./Sub Calculator Function/Multiply.js";
import Divide from "./Sub Calculator Function/Divide.js";
import inquirer from "inquirer";
import alert from "alert";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
// Type 1 Normal Calculator Start:
// ================================================
// Animation and Digram Start:
// =============================
let Animationstart = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Calculator() {
    console.log("");
    let animationtile = chalkAnimation.rainbow("STARTING YOUR CALCULATOR:");
    await Animationstart();
    animationtile.stop();
    let Text = figlet.textSync("Calculator !", {
        font: "Big",
    });
    console.log(chalk.greenBright(Text));
    // Animation and Digram End:
    // ============================
    // CALCULATOR START:
    // =================
    let animationtile1 = chalkAnimation.rainbow("START YOUR CALCULATION:");
    await Animationstart();
    animationtile1.stop();
    console.log("");
    do {
        const Calculator = await inquirer.prompt([
            {
                message: chalk.red("Enter Your First Number:"),
                type: "number",
                name: "Number1",
            },
            {
                message: chalk.red("Enter Your Second Number:"),
                type: "number",
                name: "Number2",
            },
            {
                message: chalk.yellowBright("Choose Your Operator:"),
                type: "list",
                name: "Operator",
                choices: [
                    { name: chalk.magenta("Addition:"), value: "Addition" },
                    { name: chalk.magenta("Subtraction:"), value: "Subtraction" },
                    { name: chalk.magenta("Multiply:"), value: "Multiply" },
                    { name: chalk.magenta("Divide:"), value: "Divide" },
                ],
            },
        ]);
        let { Number1, Number2, Operator } = Calculator;
        let result;
        if (!isNaN(Number1) && !isNaN(Number2)) {
            if (Operator == "Addition") {
                result = Addition(Number1, Number2);
            }
            else if (Operator == "Subtraction") {
                result = Subtraction(Number1, Number2);
            }
            else if (Operator == "Multiply") {
                result = Multiply(Number1, Number2);
            }
            else if (Operator == "Divide") {
                result = Divide(Number1, Number2);
            }
            if (result !== undefined) {
                console.log(chalk.yellowBright(` 
                _____________________
               |  _________________  |
               | |${chalk.magenta(Operator)}: => ${chalk.greenBright(result)}
               | |_________________| |
               |  ___ ___ ___   ___  |
               | | 7 | 8 | 9 | | + | |
               | |___|___|___| |___| |
               | | 4 | 5 | 6 | | - | |
               | |___|___|___| |___| |
               | | 1 | 2 | 3 | | x | |
               | |___|___|___| |___| |
               | | . | 0 | = | | / | |
               | |___|___|___| |___| |
               |_____________________|
               `));
                alert(`Your Correct Answer is => ${result}`);
            }
            const restart = await inquirer.prompt([
                {
                    message: chalk.italic.greenBright("Do you want to Continue ? Press 'Y' if you want to stop Press 'N'"),
                    type: "input",
                    name: "restart",
                },
            ]);
            if (restart.restart !== 'Y' && restart.restart !== 'y' && restart.restart !== 'Yes' && restart.restart !== 'yes') {
                break;
            }
        }
        else {
            alert("PLS PUT THE CORRECT NUMBER!");
            console.log(chalk.redBright("PLS PUT THE CORRECT NUMBER!"));
        }
    } while (true);
}
Calculator();
// CALCULATOR END:
// ===================
// ================================================================
// Type 1 Normal Calculator End:
