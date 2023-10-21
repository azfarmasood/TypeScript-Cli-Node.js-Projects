#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import alert from "alert";
import Animation from "chalk-animation";
import figlet from "figlet";


// Animation and Digram Function Start:
// =============================

let Animation1 = ()=> {
    return new Promise((animation)=>{
        setTimeout(animation,5000);
    });
};
let Animationtitle = Animation.rainbow("Lets Start ATM Data: ");
    await Animation1();
    Animationtitle.stop();



console.log(chalk.hex('#336d62')(`
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                          
██                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                          
██                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒    ▒▒▒▒▒▒            ▒▒▒▒    ░░▒▒▒▒▒▒▒▒▒▒    ░░▒▒▒▒                          
██                          ▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒        ▒▒▒▒            ▒▒▒▒    ▒▒▒▒▒▒▒▒▒▒▒▒    ░░▒▒▒▒                          
██                          ▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒    ▒▒▒▒    ▒▒▒▒▒▒  ░░▒▒▒▒▒▒▒▒      ░░▒▒▒▒▒▒      ░░▒▒▒▒                          
██                          ▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒    ▒▒▒▒    ▒▒▒▒▒▒  ░░▒▒▒▒▒▒▒▒          ▒▒        ░░▒▒▒▒                          
██                          ▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒            ▒▒▒▒▒▒  ░░▒▒▒▒▒▒▒▒    ░░▒▒      ▒▒    ░░▒▒▒▒                          
██                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒    ▒▒▒▒    ▒▒▒▒▒▒  ░░▒▒▒▒▒▒▒▒    ▒▒▒▒▒▒▒▒▒▒▒▒    ░░▒▒▒▒                          
██                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒    ▒▒▒▒    ▒▒▒▒▒▒  ░░▒▒▒▒▒▒▒▒    ▒▒▒▒▒▒▒▒▒▒▒▒    ░░▒▒▒▒                          
██                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                          
██                          ▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                          
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░                                  ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░                                  ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ▒▒░░░░░░░░░░░░░░░░░░░░░░░░    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒    ▒▒▒▒░░░░    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒    ▒▒▒▒░░░░    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░    ▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒░░░░    ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░                                  ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░          ▒▒  ▒▒  ▒▒  ░░  ▒▒      ░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░▒▒  ▒▒  ▒▒░░▒▒░░▒▒░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░▒▒  ▒▒  ▒▒  ▒▒  ▒▒░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░  ░░░░░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▓▓▓▓▓▓▓▓░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░  ░░░░░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░                                            
██                          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ░░░░░░░░░░░░░░░░░░                                              
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
██                                                                                                                                  
                            
`))

  
// Animation and Digram Function End:
// =============================

// ATM Start:
// ================================================================

interface ATMtype{
    User_ID: string & number,
    PIN: number,
    Account: string,
    Transection: string,
    Amount:number & string,
    CustomAmount: number,
    BillPayment: string,
    BillPaymentAmount: number,
    DepositAccount: string,
    DepositAmount: number,
    ATMcard: string
};


    // ATM PROMPT START:
    // ================================



 async function ATMSYSTEM(){
    let Animation2 = Animation.rainbow("Start Your ATM User Data:");
    await Animation1();
    Animation2.stop();

    let Text2 = figlet.textSync("Welcome to ATM !",{
        font:"Slant",
        });
    
    console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));
    let userpin = 1234;

    let validarray = ["5541", "1111", "3123","1315","1178"];

    let restart =true;

    let balance = Math.floor(Math.random() * 500000);

    while (restart){

    let ATM:ATMtype = await inquirer.prompt([
        {
            type: "input",
            name: "ATMcard",
            message: chalk.hex('#336d62')("Please Insert Your ATM Card To Continue: [Press Enter to continue...]"),
            validate:((ATM_Card)=>{
              if (ATM_Card === "") {
                return true;
              } else {
                return chalk.redBright("Only Allow Here Insert Your ATM-CARD Please:" , chalk.hex('#9e1b32')("(Press Enter to continue...)"));
              }
            }),
        },
        {
            message: chalk.magentaBright("Enter Your User ID: "),
            type: "input",
            name: "User_ID",
            validate: ((User_id)=>{
                if(validarray.includes(User_id)){
                    return true;
                }
                else {
                    return chalk.redBright(`Please Enter a Valid User_ID: Your Valid User_ID is: `,chalk.hex('#9e1b32')(`["5541", "1111", "3123","1315","1178"];`));
                }
            }),
        },
        {
            message: chalk.magentaBright("Enter Your Valid 4 Digit PIN: "),
            type: "password",
            name: "PIN",
            mask: "*",
            validate: (password) => {
                let pin = Number(password);
                if (pin === userpin) {
                    return true;
                } else {
                    return chalk.redBright("Please Enter a Valid Pin: Your Valid User_PIN is:", chalk.hex('#9e1b32') (`(1234);`));
                }
            },
        },

        {
            message: chalk.magentaBright("Select Your Account"),
            type: "list",
            name: "Account",
            choices: [
                {name: chalk.hex('#9e1b32')("Current Account:"), value: "Current Account"},
                {name: chalk.hex('#9e1b32')("Saving Account:"), value: "Saving Account"},
            ],
        },

        {
            message: chalk.magentaBright("Select Your Transection:"),
            type: "list",
            name: "Transection",
            choices:[
                {name: chalk.hex('#9e1b32')("Normal Withdrawl Cash:"), value: "Normal Withdrawl Cash"},
                {name: chalk.hex('#9e1b32')("Fast Withdrawl Cash:"), value: "Fast Withdrawl Cash"},
                {name: chalk.hex('#9e1b32')("Billing Cash:"), value: "Billing Cash"},
                {name: chalk.hex('#9e1b32')("Balance Inquiry:"), value: "Balance Inquiry" },
                {name: chalk.hex('#9e1b32')("Deposit Amount:"), value: "Deposit Amount" },

            ],
            when(ATM){
                return ATM.Account;
            },
        },

        {
            message: chalk.magentaBright("Select Your Bill Payment:"),
            type: "list",
            name: "BillPayment",
            choices: [
                {name: chalk.hex('#9e1b32')("Telephone Bill:"), value: "Telephone Bill"},
                {name: chalk.hex('#9e1b32')("Electric Bill:"), value: "Electric Bill"},
                {name: chalk.hex('#9e1b32')("Gas Bill:"), value: "Gas Bill"},
            ],
            when(ATM){
                return ATM.Transection == "Billing Cash";
            }
        },

        {
            message: chalk.magentaBright(`Select Your Amount: Your Current Balance is: (${chalk.hex('#97e6b3')(balance)})`),
            type: "list",
            name: "Amount",
            choices: [
                {name: chalk.hex('#97e6b3')(`500$:`), value: 500},
                {name: chalk.hex('#97e6b3')(`1000$:`), value: 1000},
                {name: chalk.hex('#97e6b3')(`5000$:`), value: 5000},
                {name: chalk.hex('#97e6b3')(`10000$:`), value: 10000},
                {name: chalk.hex('#97e6b3')(`15000$:`), value: 15000},
                {name: chalk.hex('#97e6b3')(`20000$:`), value: 20000},
                {name: chalk.hex('#97e6b3')(`30000$:`), value: 30000},
                {name: chalk.hex('#9e1b32')("Custom Amount:"), value: "Custom Amount"},
            ],
            when(ATM){
                return ATM.Transection == "Fast Withdrawl Cash" || ATM.Transection == "Normal Withdrawl Cash";
            },
        },

        {
            message: chalk.magentaBright(`Enter Custom Amount: Your Current Balance is: (${chalk.hex('#97e6b3')(balance)})`),
            type: "number",
            name: "CustomAmount",
            when(ATM){
                return ATM.Amount == "Custom Amount";
            } 
        },

        {
            message: chalk.magentaBright("Enter Your Amount:"),
            type: "number",
            name: "BillPaymentAmount",
            when(ATM){
                return ATM.BillPayment == "Telephone Bill" || ATM.BillPayment == "Electric Bill" || ATM.BillPayment == "Gas Bill";
            } 
        },

        {
            message: chalk.magentaBright("Enter the Deposit Amount:" ),
            type: "list",
            name: "DepositAccount",
            choices: [
                {name: chalk.hex('#9e1b32')("Current Account:"), value: "Current Account"},
                {name: chalk.hex('#9e1b32')("Saving Account:"), value: "Saving Account"},
            ],
            when(ATM){
                return  ATM.Transection == "Deposit Amount";
            }
        },

        {
            message: chalk.magentaBright(`Enter the Deposit Amount: Your Current Amount is: (${chalk.hex('#97e6b3')(balance)})`),
            type: "number",
            name: "DepositAmount",
            when(ATM) {
                return ATM.Transection == "Deposit Amount";
            }
        },

    ]);
    
    // ATM PROMPT END:
    // ================================

    
    const Ihavebalance = ATM.CustomAmount || ATM.Amount || ATM.BillPaymentAmount;
    let depositaccount = ATM.DepositAccount;
    let depositamount = ATM.DepositAmount;
    const remainingBalance = balance - Ihavebalance;
    let conditionMet = false;

    // Prompt Code functions working with If else condition start:
    // ================================================================

    if (ATM.User_ID && ATM.PIN) {

        if (ATM.Transection === "Balance Inquiry") {
            console.log(chalk.magentaBright(`Your Current Amount is: (${chalk.hex('#97e6b3')(balance)})`));
            conditionMet = true;
        } 
        
        else if (ATM.Transection === "Billing Cash") {
            if (balance >= Ihavebalance && Ihavebalance <= 500000) {
                console.log(chalk.yellowBright(`You Paid: (${chalk.hex('#97e6b3')(Ihavebalance)}) for (${chalk.hex('#9e1b32')(ATM.BillPayment)})`));
                console.log(chalk.magentaBright(`Your Remaining Balance is: (${chalk.hex('#97e6b3')(remainingBalance)})`));
                conditionMet = true;
            }
        } 
        
        else if (ATM.Amount == "Custom Amount") {
            if (balance >= Ihavebalance && Ihavebalance <= 500000) {
                console.log(chalk.yellowBright(`You Withdraw Custom Amount: (${chalk.hex('#97e6b3')(Ihavebalance)})`));
                console.log(chalk.magentaBright(`Your Remaining Balance is: (${chalk.hex('#97e6b3')(remainingBalance)})`));
                conditionMet = true;
            }
        } 
        
        else if (ATM.Transection === "Deposit Amount") {
            if (depositamount > 0) {
                console.log(chalk.yellowBright(`You have deposited The Balance: (${chalk.hex('#97e6b3')(depositamount)}) Into your (${chalk.hex('#9e1b32')(depositaccount)})`));
                console.log(chalk.magentaBright(`Your Current balance is Updated: (${chalk.hex('#97e6b3')(balance)})`));
                conditionMet = true;
            }
        } 
        
        else if (balance > Ihavebalance) { 
                console.log(chalk.yellowBright(`You have withdrawn: (${chalk.hex('#97e6b3')(Ihavebalance)})`));
                console.log(chalk.magentaBright(`Your Remaining Balance is: (${chalk.hex('#97e6b3')(remainingBalance)})`));
                conditionMet = true;
        }


    } 



    // check statement weather is true or false start
    // ================================================================

    if (!conditionMet) {
        console.log(chalk.redBright(`Insufficient Balance: (${chalk.hex('#97e6b3')(balance)})`));
        alert("Insufficient Balance:");
    }
    else if (!ATM.User_ID && !ATM.PIN) {
        console.log(chalk.redBright("Invalid User_ID OR User_PIN:"));
        alert("Please valid your User_ID OR User_PIN:");
    }

     // check statement weather is true or false End:
    // ================================================================

    // Prompt Code functions working with If else condition End:
    // ================================================================
  


    const restartatm = await inquirer.prompt({
        message: chalk.hex('#336d62')("Do you Want to continue your transaction ? If You want to continue Press 'Y': If not Press 'N':"),
        type: "input",
        name: "restartyouratm",

    });
    if (restartatm.restartyouratm != "Y" && restartatm.restartyouratm != "y" && restartatm.restartyouratm != "yes" && restartatm.restartyouratm != "Yes" && restartatm.restartyouratm != "YES"){
        restart = false;
    }
    }
    }

    ATMSYSTEM();
    
    // ATM END:
// ================================================================