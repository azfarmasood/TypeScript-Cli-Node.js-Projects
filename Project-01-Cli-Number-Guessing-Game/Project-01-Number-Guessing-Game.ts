#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import alert from "alert";
import Animation from "chalk-animation";
import figlet from "figlet";

interface GuessGame {
  Difficulty: string;
  Guessinggame: number;
  restart: string,
}

// Animation Function Start:
// =============================

    let Animation1 = ()=> {
      return new Promise((animation)=>{
          setTimeout(animation,5000);
      });
  };
// Animation Function End:
// =============================

// Title Animation And Figlet Start:
// ================================================================

let Animationtitle = Animation.rainbow("Lets Start Number Guessing Game: ");
    await Animation1();
    Animationtitle.stop();

    let Text2 = figlet.textSync("Welcome Number Guessing Game !",{
      font:"Big",
      });
  
      console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));

// ============================================================   
// Title Animation And Figlet End:



// Number Guessing Game Start:
// ================================================================

async function NumberGuessingGame() {

  let Animationtitle = Animation.rainbow("Start Your Game:");
    await Animation1();
    Animationtitle.stop();

  let restartplaying = true;
  while (restartplaying) {
    const numberguessinggame: GuessGame = await inquirer.prompt([
      {
        message: chalk.yellowBright("Choose Your Difficulty:"),
        type: "list",
        name: "Difficulty",
        choices: [
          { name: chalk.magenta("Easy [maxattempts: - 20] - [max range: - 40]: "), value: "Easy" },
          { name: chalk.magenta("Medium [maxattempts: - 15] - [max range: - 60]: "), value: "Medium" },
          { name: chalk.magenta("Hard [maxattempts - 10] - [max range: - 100]: "), value: "Hard" },
        ],
      },
    ]);

    let { Difficulty, Guessinggame } = numberguessinggame;

    let maxAttempts;
    let rangeMinimum;
    let rangeMaximum;

    if (Difficulty === "Easy") {
      maxAttempts = 20;
      rangeMinimum = 1;
      rangeMaximum = 40;
    } else if (Difficulty === "Medium") {
      maxAttempts = 15;
      rangeMinimum = 1;
      rangeMaximum = 60;
    } else if (Difficulty === "Hard") {
      maxAttempts = 10;
      rangeMinimum = 1;
      rangeMaximum = 100;
    } else {
      console.log("Unknown Difficulty");
      return;
    }

    let attempts = 0;
    let randomnumbers = Math.floor(Math.random() * (rangeMaximum - rangeMinimum + 1) + rangeMinimum);

    while (attempts < maxAttempts) {
      let tip = "";
      const guess = Number(Guessinggame);

      if (guess === randomnumbers) {

        console.log(chalk.yellowBright(`You Won! The Game: in ${attempts} attempts:`));
        alert("You Won! Game Over!");
        break;

      } 
      else if (guess < randomnumbers) {
        if (randomnumbers % 2 === 0) {
          tip = "Tip: The Number is even";
        } else {
          tip = "Tip: The Number is odd";
        }
        console.log(chalk.blueBright(`Too Low! Attempts remaining: ${(maxAttempts - attempts)}`));
      } 
      else if (guess > randomnumbers) {
        if (randomnumbers % 2 === 0) {
          tip = "Tip: The Number is even";
        } else {
          tip = "Tip: The Number is odd";
        }
        console.log(chalk.redBright(`Too High! Attempts remaining: ${(maxAttempts - attempts)}`));   
      }


      attempts++;
      const Guessgame:GuessGame = await inquirer.prompt([
        {
          message: chalk.greenBright("Enter Your Guess Number:"),
          type: "input",
          name: "Guessinggame",
          validate: (validation) => {
            if (validation == "" ) {
                alert("Please enter a valid Number:");
                return chalk.redBright("Please enter a valid Number : ")  
            }
            return true;
        },
        },
      ]);
      Guessinggame = Guessgame.Guessinggame;
      if (tip) {
        console.log(chalk.yellowBright(tip));
      }
    }

    if (attempts === maxAttempts) {
      console.log(chalk.redBright(`You Lose! Game Over! The Correct Number Was: ${randomnumbers}`));
      alert("You Lost! The Game!");
    }

    const restartGame = await inquirer.prompt([
      {
        message: chalk.yellowBright("Do you want to restart your game?: Press 'Y' or if not Press 'N' to exit"),
        type: "input",
        name: "restart",
      },
    ]);

    if (restartGame.restart !== "y" && restartGame.restart !== "yes" && restartGame.restart !== "YES" && restartGame.restart !== "Y" && restartGame.restart !== "Yes") {
      break;
    }
  }
}

NumberGuessingGame();

// ================================================================
// Number Guessing Game End: