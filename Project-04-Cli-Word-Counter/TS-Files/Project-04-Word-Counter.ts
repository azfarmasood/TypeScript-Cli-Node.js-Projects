#! /usr/bin/env node
import inquirer from "inquirer";
import Cli_Table from "cli-table";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner, } from "nanospinner";
import { TOTAL_WORDS_COUNTERS, TOTAL_LETTER_COUNTERS, TOTAL_NUMBER_COUNTERS, TOTAL_CHARACTER_COUNTERS, TOTAL_UNIQUE_WORDS_COUNTERS, TOTAL_UNIQUE_LETTER_COUNTERS, TOTAL_SERIAL_NUMBER } from "./Word-Counter-Functions/Word_Counts.js";

    const color1 = chalk.bold.redBright;
    const color2 = chalk.bold.blueBright;
    const color3 = chalk.bold.magenta;
    const color4 = chalk.bold.yellowBright;
    const color5 = chalk.bold.greenBright;
    const color6 = chalk.bold.hex('#ffa500');
    const color7 = chalk.bold.hex('#BA3511');
    const color8 = chalk.bold.hex('#565387');

    class UNIQUE {
        Start_Words_Counter: string;
        Discription: string;
        Restart_Word_Counter: string;

            constructor(startwordcounter:string,discription:string,restartwordcounter:string){
            this.Start_Words_Counter = startwordcounter;
            this.Discription = discription;
            this.Restart_Word_Counter = restartwordcounter;
        }

    }

    let Animation0 = ()=> {
        return new Promise((Animation1)=>{
            setTimeout(Animation1,5000);
        });
    };

    let Animationtitle1 = chalkanimation.rainbow("Starting Your Word Counter:");
    await Animation0();
    Animationtitle1.stop();

    let Text2 = figlet.textSync("Word Counter !",{
        font:"Slant",
        });
    
        console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));

    const Startspinner = async () => {
        let spinner = createSpinner(color1(`********************************************************
  ************** ${color3(`STARTING YOUR WORD COUNTER`)} **************
  ********************************************************`));
        spinner.start();
        await new Promise((Animation) => setTimeout(Animation, 5000));
        spinner.stop();
        console.clear();
      };

   async function Title(Title1: string){
       await Startspinner();
        console.log(color5("---------------------------------------------------------------------"));
        console.log(color5("---------------------------------------------------------------------"));
        console.log(color5(`<<---------------->> ${color1(`WELCOME TO ${Title1}`)} <<---------------->>`));
        console.log(color5("---------------------------------------------------------------------"));
        console.log(color5("---------------------------------------------------------------------"));
    }

    const AskQuestion = async () => {
    const { Start_Words_Counter }: UNIQUE = await inquirer.prompt([
        {
            message: color6("Do You Want To Start Your Word Counting App ?"),
            name: "Start_Words_Counter",
            type: "list",
            choices:[
                {name: color5("Yes"), value: "Yes"},
                {name: color1("No"), value: "No"},
            ],
        }
    ]);
    return Start_Words_Counter;
    }
    const askquestions = await AskQuestion();

    async function Start_Words_Counting(){
        if (askquestions === "Yes"){
            let Title1;
            Title1 = "Word Counter App".toUpperCase();
          await Title(Title1)

            const { Discription }:UNIQUE= await inquirer.prompt([
                {
                    message: color5("Enter Your Text Discription Here: "),
                    name: "Discription",
                    type: "input",
                },
            ]);
            const Tabelspinner = async () => {
                const Text = Discription;
                let spinner = createSpinner(color2(`********************************************************
  ************** ${color3(`LISTING YOUR COUNTS...`)} ******************
  ********************************************************`));
                spinner.start();
                await new Promise((Animation) => setTimeout(Animation, 5000));
                spinner.stop();
                console.clear();
                let Table = new Cli_Table();
            Table.push([color1("S.No:"), color1("Discription:"), color1("Counters:")]);
            let SerialnumberCounter = 1;
            
            Table.push([color4(TOTAL_SERIAL_NUMBER(SerialnumberCounter)), color5("Total Words Counts:"), color7(TOTAL_WORDS_COUNTERS(Text))]);
            SerialnumberCounter++;
            Table.push([color4(TOTAL_SERIAL_NUMBER(SerialnumberCounter)), color2("Total Letter Counts:"), color7(TOTAL_LETTER_COUNTERS(Text))]);
            SerialnumberCounter++;
            Table.push([color4(TOTAL_SERIAL_NUMBER(SerialnumberCounter)), color4("Total Number Counts:"), color7(TOTAL_NUMBER_COUNTERS(Text))]);
            SerialnumberCounter++;
            Table.push([color4(TOTAL_SERIAL_NUMBER(SerialnumberCounter)), color1("Total Character Counts:"), color7(TOTAL_CHARACTER_COUNTERS(Text))]);
            SerialnumberCounter++;
            Table.push([color4(TOTAL_SERIAL_NUMBER(SerialnumberCounter)), color8("Total Unique Words Counts:"), color7(TOTAL_UNIQUE_WORDS_COUNTERS(Text))]);
            SerialnumberCounter++;
            Table.push([color4(TOTAL_SERIAL_NUMBER(SerialnumberCounter)), color3("Total Unique Letter Counts:"), color7(TOTAL_UNIQUE_LETTER_COUNTERS(Text))]);
            SerialnumberCounter++;
            
            let newtable = Table;

            console.log(newtable.toString());
              };
             await Tabelspinner();

        }
        else {
            const Exitspinner = async () => {
                let spinner = createSpinner(color1(`********************************************************
  ************** ${color7(`EXITING YOUR WORD COUNTER `)}***************
  ********************************************************`));
                spinner.start();
                await new Promise((Animation) => setTimeout(Animation, 5000));
                spinner.stop();
                console.clear();
              };
              await Exitspinner();
              process.exit();
        };


        async function Restart() {
            let flag = false;
            const { Restart_Word_Counter } = await inquirer.prompt([
                {
                    message: color7("Do You Want to Restart Your Word Counter App ?"),
                    name:"Restart_Word_Counter",
                    type: "list",
                    choices: [
                        {name: color5("Yes"), value: "Yes"},
                        {name: color1("No"), value: "No"},
                    ],
                },
            ]);

            if (Restart_Word_Counter === "Yes"){
                flag= true;
                await Start_Words_Counting();
            }
            else {
                flag = false;

      let spinner = createSpinner(color1(`********************************************************
  ************** ${color7(`EXITING YOUR WORD COUNTER`)} ***************
  ********************************************************`));
                    spinner.start();
                    await new Promise((Animation) => setTimeout(Animation, 5000));
                    spinner.stop();
                    console.clear();
                  
                  console.log(color7("-------------------------------------------------------------------------------"));
                  console.log(color7("-------------------------------------------------------------------------------"));
                  console.log(color7(`<<---------------->> THANKS FOR USING OUR WORD COUNTER APP <<---------------->>`));
                  console.log(color7("-------------------------------------------------------------------------------"));
                  console.log(color7("-------------------------------------------------------------------------------"));
            }
        }

        await Restart();

    }

    Start_Words_Counting();