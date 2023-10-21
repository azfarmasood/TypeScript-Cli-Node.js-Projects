#! /usr/bin/env node
import Currency_Exchange from "./Currencys/Currencys.js";
import inquirer from "inquirer";
import axios from "axios";
import alert from "alert";
import figlet from "figlet";
import chalk from "chalk";
import Animation from "chalk-animation";
async function CurrencyConvertions() {
    let Animation1 = () => {
        return new Promise((animation) => {
            setTimeout(animation, 5000);
        });
    };
    let Animationtitle = Animation.rainbow("Starting Your Currency Conversion:");
    await Animation1();
    Animationtitle.stop();
    let Title1 = figlet.textSync("Currency Convertor !", {
        font: "Slant"
    });
    console.log(chalk.bold(chalk.redBright(Title1)));
    let Animation2 = () => {
        return new Promise((animation) => {
            setTimeout(animation, 5000);
        });
    };
    let Animationtitle1 = Animation.rainbow("Start Converting Your Currency: ");
    await Animation2();
    Animationtitle1.stop();
    console.log(chalk.bold(chalk.greenBright(`
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠶⠶⢶⠶⢿⣽⠉⢻⢦⣄⣠⢶⠛⢿⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣄⠀⠈⠓⠲⠃⠀⢸⡀⠀⠀⠨⠽⠿⠿⣋⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢧⡄⠀⠈⠀⠀⢸⠇⠀⠀⠀⠀⣠⡾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡄⢠⠀⠀⠀⠀⣤⡄⢀⡼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡞⣆⢲⠀⠀⣿⢣⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣷⣾⣿⣿⣿⣿⡿⣗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⢿⡿⠿⣿⠿⢻⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠋⡼⠁⠀⠛⢛⣾⣏⢿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠃⠈⠁⠀⠀⠀⠘⣿⡇⠈⢿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠿⠁⠀⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠈⠳⡈⠻⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠃⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⡷⠀⠀⠀⠀⠀⠀⢀⣠⠜⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣴⠟⠀⠀⠀⠀⠀⠀⠀⢀⣠⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠈⠥⠂⣀⡝⣧⡀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣠⡟⠁⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠊⣡⠔⠈⢻⣆⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣰⠟⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⡿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣦⠀⠀⠀⠰⢖⣉⠖⢹⣦⠀⠀⠀⠀
    ⠀⠀⠀⣸⠏⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡏⠀⣿⣿⣿⡇⠀⠈⢻⣿⣿⣿⡇⠀⠀⠀⣋⡤⠖⠁⡘⣧⠀⠀⠀
    ⠀⠀⣰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣧⡀⣿⣿⣿⡇⠀⠀⠈⠿⣿⡿⠇⠀⠀⠀⢁⡠⠔⢋⣥⠼⣷⡀⠀
    ⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣧⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢩⠤⠒⢉⡤⠖⠹⣇⠀
    ⠀⣸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠔⠊⢁⡤⠖⠉⢻⡄
    ⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⡿⠿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠠⠴⠊⣁⡤⠖⠃⡸⣷
    ⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠈⠹⣿⣿⣿⣇⠀⠀⠀⠠⠔⠋⣁⡤⠖⠋⡀⣿
    ⣼⠇⠀⣄⠀⠀⠀⠀⠀⠀⠀⣰⣾⣷⣆⠀⠀⠀⣿⣿⣿⡇⠀⠀⢠⣿⣿⣿⡏⠀⠀⣀⠤⠒⠋⣁⡤⠖⢋⠀⣿
    ⣿⠀⠀⢻⣄⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣧⡀⠀⣿⣿⣿⡇⢀⣴⣿⣿⣿⡿⠃⠀⠀⠀⠤⠒⠋⣡⡤⠒⠉⠀⣿
    ⢻⡆⠀⣴⠈⠁⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⢠⠴⠚⢉⣀⠤⠚⠁⢸⠏
    ⠘⣧⠀⠹⣄⣀⢲⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⠀⠀⣀⡠⠶⠚⠉⣀⡠⠖⢠⡟⠀
    ⠀⠸⣧⡀⢀⡀⠉⠷⠤⠀⠀⠀⠀⠀⠀⠀⠈⠉⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⣁⡠⠤⠚⠋⣁⠀⣠⡿⠁⠀
    ⠀⠀⠈⠻⣮⣣⣀⡀⢹⣀⢀⠀⠀⠀⠀⠀⠀⠀⠻⣿⡿⠃⠀⠀⠀⠀⠀⠀⠒⢋⣩⡤⠔⠚⠉⣡⣼⠋⠀⠀⠀
    ⠀⠀⠀⠀⠈⠛⠶⣤⣄⡉⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠉⣁⣤⢴⣶⡶⠋⠁⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠶⠶⣤⣄⣀⣀⣀⣀⠀⠀⠀⠀⢀⣀⣀⣀⣤⣼⡿⠷⠟⠋⠁⠀⠀⠀`)));
    console.log("");
    const Currency_Exchanger = await inquirer.prompt([
        {
            message: chalk.bold(chalk.hex('#008744')("Select Your Currency To Convert")),
            type: "list",
            name: "ConvertCurrency",
            choices: Currency_Exchange,
        },
        {
            message: chalk.bold(chalk.hex('#008744')("Select Your Convertion Currency")),
            type: "list",
            name: "ConvertionCurrency",
            choices: Currency_Exchange,
        },
        {
            message: chalk.bold(chalk.hex('#ccff66')("Enter Your Convertion Amount")),
            type: "number",
            name: "ConvertionAmount",
        },
    ]);
    const { ConvertCurrency, ConvertionCurrency, ConvertionAmount } = Currency_Exchanger;
    const API_KEY_Data = `https://v6.exchangerate-api.com/v6/0ce23c0056f4be96e118a0b1/latest/${ConvertCurrency}`;
    const CurrencyConverting = await axios.get(API_KEY_Data);
    const CurrencyAmount = CurrencyConverting.data;
    let LatestRates = CurrencyAmount.conversion_rates;
    let ConvertedRates = LatestRates[ConvertionCurrency];
    let convertedAmount = ConvertionAmount * ConvertedRates;
    if (CurrencyAmount.result === "success") {
        if (ConvertedRates !== undefined) {
            console.log(chalk.bold(chalk.blueBright(`${chalk.bold(chalk.hex('#417c42')(ConvertionAmount))} ${chalk.bold(chalk.hex('#9400d3')(ConvertCurrency))} To ${chalk.bold(chalk.hex('#9400d3')(ConvertionCurrency))} = (${chalk.bold(chalk.hex('#417c42')(convertedAmount))}) `)));
            alert(`Your Converted Currency Result is: ${convertedAmount}`);
        }
        else {
            console.log(chalk.bold(chalk.redBright("Please Put The Valid Number:")));
            alert("Please Put The Valid Currency");
        }
    }
    else {
        console.log(chalk.bold(chalk.redBright("Invalid Currency Please Choose a Valid Curreny:")));
        alert("Invalid Currency Please Choose a Valid Curreny:");
    }
}
CurrencyConvertions();
