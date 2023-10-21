import { BankAccount } from "./BackAccount.js";
import chalk from "chalk";
export class Customer {
    FirstName;
    LastName;
    username;
    UserAge;
    UserContact_Number;
    UserEmail;
    confirmemail;
    Create_User_ID;
    confirm_user_id;
    createuserpin;
    confirmuserpin;
    Bacnk_Account;
    constructor(FirstName, LastName, username, UserAge, UserContact_Number, UserEmail, confirmemail, Create_User_ID, confirm_user_id, createuserpin, confirmuserpin) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.username = username;
        this.UserAge = UserAge;
        this.UserContact_Number = UserContact_Number;
        this.UserEmail = UserEmail;
        this.confirmemail = confirmemail;
        this.Create_User_ID = Create_User_ID;
        this.confirm_user_id = confirm_user_id;
        this.createuserpin = createuserpin;
        this.confirmuserpin = confirmuserpin;
        this.Bacnk_Account = new BankAccount();
    }
}
export function CUSTOMERS_INFO(customer) {
    console.log(`-------------------------------------------------------------`);
    console.log(chalk.bold.hex('#ff0000')(`First Name:                 [${chalk.bold.greenBright(customer.FirstName)}]`));
    console.log(chalk.bold.hex('#ff0000')(`Last Name:                  [${chalk.bold.greenBright(customer.LastName)}]`));
    console.log(chalk.bold.hex('#ff0000')(`Username:                   [${chalk.bold.blackBright(customer.username)}]`));
    console.log(chalk.bold.hex('#ff0000')(`Age:                        [${chalk.bold.yellowBright(customer.UserAge)}]`));
    console.log(chalk.bold.hex('#ff0000')(`Contact Number:             [${chalk.bold.yellowBright(customer.UserContact_Number)}]`));
    console.log(chalk.bold.hex('#ff0000')(`Email:                      [${chalk.bold.hex('#ff8243')(customer.UserEmail)}]`));
    console.log(chalk.bold.hex('#ff0000')(`User ID:                    [${chalk.bold.redBright(customer.Create_User_ID)}]`));
    console.log(chalk.bold.hex('#ff0000')(`User PIN:                   [${chalk.bold.redBright(customer.createuserpin)}]`));
    console.log(chalk.bold.hex('#ff0000')(`Account Balance:            [${chalk.bold.greenBright(customer.Bacnk_Account.Bank_Balance)}]`));
    console.log(chalk.bold.hex('#ff0000')(`Customer Account Number:    [${chalk.bold.yellowBright(customer.Bacnk_Account.Bank_Account_Number)}]`));
    console.log(`-------------------------------------------------------------`);
}
export function ACCOUNT_BALANCE(customer) {
    console.log(`-------------------------------------------------------------`);
    console.log(chalk.bold.magentaBright(`Account Balance:  [RS:${chalk.bold.greenBright(customer.Bacnk_Account.Bank_Balance)}]`));
    console.log(`-------------------------------------------------------------`);
}
