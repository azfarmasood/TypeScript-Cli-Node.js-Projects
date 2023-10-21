import inquirer from "inquirer";
import Table from "cli-table";
import chalk from "chalk";
import ora from "ora"
import { createSpinner } from "nanospinner";
import { Customer } from "./Customer.js";

    const sleep = () => new Promise((SetAnimation) => setTimeout(SetAnimation,5000))

export class BankAccount {
    Bank_Account_Number: number;
    Bank_Balance:number;
    Transection_History: {Type: "Cash Withdraw" | "Deposit Cash", Amount:number, Date:string,Fee:number}[] =[];
    constructor(){
        this.Bank_Account_Number = Math.floor(Math.random() * (9 * (Math.pow(10, 10)))) + (Math.pow(10, 10));
        this.Bank_Balance= Math.floor(Math.random()*500000);
        this.Transection_History = [];
    };

    CASH_WITHDRAW(Amount:number){
        let Serial_Number = String(new Date()).lastIndexOf(":") +3;
        let Dates = String(new Date()).slice(0,Serial_Number);
        const fee = Math.floor(Math.random()*600)+5;
        if(this.Bank_Balance >= Amount + fee){
            this.Bank_Balance -= Amount + fee;
            this.Transection_History.push({Type: "Cash Withdraw", Amount: Amount, Date: Dates, Fee: fee});
        }
    }

    CASH_DEPOSIT(Amount: number){
        let Serial_Number = String(new Date()).lastIndexOf(":") +3;
        let Dates = String(new Date()).slice(0,Serial_Number);
        const fee = Math.floor(Math.random() * 800) + 10;
        this.Bank_Balance += Amount - fee;
        this.Transection_History.push({Type: 'Deposit Cash',Amount: Amount, Date: Dates, Fee: fee });
    }

}

export async function CASH_WITHDRAW(customer:Customer) {
    let spinner = createSpinner();
    let ifAmountwrong = false;
    while(!ifAmountwrong){
        const { Amount }: { Amount:number } = await inquirer.prompt([
            {
                message: chalk.bold.greenBright("Enter Your Amount You want to Withdraw: "),
                name: "Amount",
                type: "number"
            }
        ]);

        if(Amount > 0){
            if(Amount <= customer.Bacnk_Account.Bank_Balance){
                ifAmountwrong = true;
                customer.Bacnk_Account.CASH_WITHDRAW(Amount);
                console.log(`---------------------------------------------------------------------------------------`);
                console.log(chalk.bold.greenBright(`Your withdraw Amount: [RS: ${Amount}]`));
                console.log(chalk.bold.greenBright(`Your Balance is Updated: [RS: ${customer.Bacnk_Account.Bank_Balance}]`));
                let ora1 = ora(chalk.bold.greenBright('Chicking Your Transection limit:'.toUpperCase())).start();
                ora1.color = "yellow"
                await sleep();
                ora1.clear();
                ora1.stop();
                let ora2 = ora(chalk.bold.greenBright('Processing Your Transection Please Wait:'.toUpperCase())).start();
                ora2.color = "yellow"
                await sleep();
                ora2.clear();
                ora2.stop();
                console.log(`---------------------------------------------------------------------------------------`);
                ora2.succeed(chalk.bold.bgGreenBright(`Your Transection Successfull`));
                console.log(`---------------------------------------------------------------------------------------`);
                console.log(`---------------------------------------------------------------------------------------`);
                console.log(chalk.bold.redBright(`Transaction Fee: [RS: -${customer.Bacnk_Account.Transection_History.slice(-1)[0].Fee}]`));
                console.log(`---------------------------------------------------------------------------------------`);
                return;
            }
            else {
                let ora1 = ora(chalk.bold.greenBright('Chicking Your Transection limit:'.toUpperCase())).start();
                ora1.color = "yellow"
                await sleep();
                ora1.clear();
                ora1.stop();
                spinner.error({text: chalk.bold.bgRedBright(`You do not have Enough Balance to withdraw Enough Amount Please Try Again.`)});
                return;
            }    
        }
        else{
            console.log(chalk.bold.redBright(`Please Enter The Correct Amount  : [RS: ${customer.Bacnk_Account.Bank_Balance}]`));
            return;
        }
    }
}

export async function DEPOSIT_CASH(customer: Customer){
    let ifdepositAmountiswrong = false;
    while(!ifdepositAmountiswrong){
        const { DepositAmount }: { DepositAmount:number } = await inquirer.prompt([
            {   
               message: chalk.bold.greenBright("Enter Your Deposit Amount:"),
               name: "DepositAmount",
               type: "number"
            }
        ]);

        if(DepositAmount > 0){
            let ora2 = ora(chalk.bold.greenBright('Processing Your Transection Please Wait:'.toUpperCase())).start();
                ora2.color = "yellow"
                await sleep();
                ora2.clear();
                ora2.stop();
            console.log(`---------------------------------------------------------------------------------------`);
            console.log(chalk.bold.greenBright(`Your Deposit Amount: [RS: ${DepositAmount}]`));
            console.log(chalk.bold.greenBright(`Your Balance is Updated: [RS: ${customer.Bacnk_Account.Bank_Balance}]`));
            console.log(`---------------------------------------------------------------------------------------`);
            ifdepositAmountiswrong = true;
            customer.Bacnk_Account.CASH_DEPOSIT(DepositAmount);
            console.log(`---------------------------------------------------------------------------------------`);
            ora2.succeed(chalk.bold.bgGreenBright(`Your Transaction Successfull`));
            console.log(`---------------------------------------------------------------------------------------`);
            console.log(`---------------------------------------------------------------------------------------`);
            console.log(chalk.bold.redBright(`Transaction Fee: [RS: -${customer.Bacnk_Account.Transection_History.slice(-1)[0].Fee}]`));
            console.log(`---------------------------------------------------------------------------------------`);
        }
        else {
            console.log(chalk.bold.redBright(`Please Enter The Correct Deposit Amount`));
            return;
        }
    }
}

export function TRANSECTION_HISTORY(customer:Customer){
    if(customer.Bacnk_Account.Transection_History.length){
        console.log(`----------------------------------------------------------------`);
        console.log(chalk.bold.greenBright(`Your Transaction History:`));
        console.log(`----------------------------------------------------------------`);
        let table = new Table({
            head: ['S.No:', 'Type:', 'Amount:', 'Date:', 'Transection Fee:']
        });

        customer.Bacnk_Account.Transection_History.forEach((transection,SNo) => {
            table.push([chalk.bold.greenBright((SNo+1).toString()), chalk.bold.yellowBright(transection.Type), chalk.bold.greenBright(`RS: ${transection.Amount}`), chalk.bold.magentaBright(`Date: ${transection.Date}`), chalk.bold.redBright(`RS: -${transection.Fee}`)]);
        });

        console.log(table.toString());
    }
    else{
        console.log(chalk.bold.redBright(`No Transaction Available`));
    }
}