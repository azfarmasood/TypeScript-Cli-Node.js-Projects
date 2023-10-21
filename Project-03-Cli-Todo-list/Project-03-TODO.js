#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import Animation from "chalk-animation";
import alert from "alert";
import figlet from "figlet";
;
async function TODOLIST() {
    let Animation0 = () => {
        return new Promise((Animation1) => {
            setTimeout(Animation1, 5000);
        });
    };
    let Animationtitle1 = Animation.rainbow("Starting Your TODO Work!");
    await Animation0();
    Animationtitle1.stop();
    let Text2 = figlet.textSync("Welcome to TODO List !", {
        font: "Slant",
    });
    console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));
    let Animation1 = () => {
        return new Promise((Animation1) => {
            setTimeout(Animation1, 5000);
        });
    };
    let Animationtitle2 = Animation.rainbow("Starting Your TODO List:");
    await Animation1();
    Animationtitle2.stop();
    const taskList = [];
    let addingmore = true;
    while (addingmore) {
        const TODO = await inquirer.prompt([
            {
                message: chalk.bold(chalk.hex('#7b5037')("Select Your TODO List: ")),
                name: "something",
                type: "list",
                choices: [
                    { name: chalk.bold(chalk.greenBright("ADD TASK:")), value: "Add Task" },
                    { name: chalk.bold(chalk.greenBright("REPLACE TASK:")), value: "Replace Task" },
                    { name: chalk.bold(chalk.greenBright("MARK TASK:")), value: "Mark Task as Completed" },
                    { name: chalk.bold(chalk.greenBright("DELETE TASK:")), value: "Delete Task" },
                    { name: chalk.bold(chalk.greenBright("LIST TASK:")), value: "List Tasks" },
                    { name: chalk.bold(chalk.redBright("Exit:")), value: "Exit" },
                ],
            },
            {
                message: chalk.bold(chalk.hex('#9e1b32')("Enter The Mark Task You have Completed:")),
                name: "MarkingTask",
                type: "input",
                when(ListingTodo) {
                    return ListingTodo.something === "Mark Task as Completed";
                },
                validate: (Markingtaskss) => {
                    if (Markingtaskss.trim() === '' || isNaN(Number(Markingtaskss))) {
                        return true;
                    }
                    else {
                        return "Please Enter A Valid Discription (Numbers Are Not Allowed Here):";
                    }
                    ;
                }
            },
            {
                message: chalk.bold(chalk.hex('#9e1b32')("Enter the task You Want To Delet:")),
                name: "DeletingTask",
                type: "input",
                when(ListingTodo) {
                    return ListingTodo.something === "Delete Task";
                }
            },
            {
                message: chalk.bold(chalk.hex('#9e1b32')("Press Enter To Check Your List Task:")),
                name: "ListTask",
                type: "input",
                when(ListingTodo) {
                    return ListingTodo.something === "List Tasks";
                },
                validate: ((validationoflisttask) => {
                    if (validationoflisttask === "") {
                        return true;
                    }
                    else {
                        return chalk.bold(chalk.redBright("You can only check List Here Please: (Press Enter To Check Your List Here):"));
                    }
                }),
            },
        ]);
        const { something, MarkingTask, DeletingTask } = TODO;
        let MarkTask = true;
        let DeleatedTask = false;
        if (TODO.something === "Add Task") {
            let continuesaddingtasks = true;
            while (continuesaddingtasks) {
                const taskaddings = await inquirer.prompt([
                    {
                        message: chalk.bold(chalk.hex('#9e1b32')("Add Your Task Here: ")),
                        name: "TaskAdding",
                        type: "input",
                        validate(Validationaddtask) {
                            if (typeof Validationaddtask !== 'string' || Validationaddtask.trim() === '' || !isNaN(Number(Validationaddtask))) {
                                return chalk.bold(chalk.redBright("Please Enter Your Description: (Numbers are Not Allowed Here) Pass Only 'string' here:"));
                            }
                            return true;
                        }
                    },
                    {
                        message: chalk.bold(chalk.hex('#048399')("Do You Want To Continue Adding More Tasks Here:")),
                        name: "Continiousaddingtask",
                        type: "list",
                        choices: [
                            { name: chalk.bold(chalk.greenBright("Yes")), value: "Yes" },
                            { name: chalk.bold(chalk.redBright("No")), value: "No" },
                        ],
                    },
                ]);
                if (taskaddings.Continiousaddingtask !== "Yes") {
                    continuesaddingtasks = false;
                }
                if (taskaddings.TaskAdding) {
                    if (taskList.includes(taskaddings.TaskAdding)) {
                        console.log(chalk.bold(chalk.bold(chalk.redBright("Warning: Task With the same name not Allowed:"))));
                    }
                    else {
                        taskList.push(taskaddings.TaskAdding);
                    }
                }
            }
        }
        else if (TODO.something === "Replace Task") {
            let continuesreplace = true;
            while (continuesreplace) {
                const ReplaceTask = await inquirer.prompt([
                    {
                        message: chalk.bold(chalk.hex('#9e1b32')("Add The Previously Added Task Here: ")),
                        name: "ReplacingTask",
                        type: "input",
                        validate: (replacevalidation) => {
                            if (replacevalidation.trim() === '' || isNaN(Number(replacevalidation))) {
                                return true;
                            }
                            else {
                                return chalk.bold(chalk.redBright("Please Enter A Valid Input: (Numbers Are Not Allowed): "));
                            }
                        }
                    },
                    {
                        message: chalk.bold(chalk.hex('#9e1b32')("Add New Task Name Here: ")),
                        name: "replacetaskname",
                        type: "input",
                        validate: (replacevalidation) => {
                            if (replacevalidation.trim() === '' || isNaN(Number(replacevalidation))) {
                                return true;
                            }
                            else {
                                return chalk.bold(chalk.redBright("Please Enter A Valid Input: (Numbers Are Not Allowed): "));
                            }
                        }
                    },
                    {
                        message: chalk.bold(chalk.hex('#9e1b32')("Do You Want To Continue Replacing Your Task: ")),
                        name: "Replacingcontinues",
                        type: "list",
                        choices: [
                            { name: chalk.bold(chalk.greenBright("Yes")), value: "Yes" },
                            { name: chalk.bold(chalk.redBright("No")), value: "No" },
                        ],
                    }
                ]);
                const { ReplacingTask, replacetaskname, } = ReplaceTask;
                let TaskReplaced = false;
                for (let tasklistreplacings = 0; tasklistreplacings < taskList.length; tasklistreplacings++) {
                    if (taskList[tasklistreplacings] === ReplacingTask) {
                        taskList[tasklistreplacings] = replacetaskname;
                        console.log(chalk.bold(chalk.hex('#26a894')(`Your Task Successfully Replaced: (${ReplacingTask} => ${replacetaskname})`)));
                        TaskReplaced = true;
                        break;
                    }
                }
                ;
                if (ReplaceTask.Replacingcontinues !== "Yes") {
                    continuesreplace = false;
                }
                if (!TaskReplaced) {
                    console.log(chalk.bold(chalk.redBright(`Your Replace Task Not Found: (${ReplacingTask})`)));
                    alert("Cannot add your Replacing Task:");
                }
                ;
            }
            ;
        }
        else if (something === "Mark Task as Completed") {
            if (MarkingTask) {
                taskList.forEach((CheckingTask, markingtask) => {
                    if (CheckingTask === MarkingTask) {
                        taskList[markingtask] = chalk.redBright(`[x] ${CheckingTask}`);
                        console.log(chalk.bold(chalk.hex('#26a894')(`Your Task Successfully Marked: (${MarkingTask})`)));
                        MarkTask = false;
                    }
                });
                if (MarkTask) {
                    console.log(chalk.bold(chalk.redBright(`Cannot Find Your Task: (${MarkingTask})`)));
                    alert("Could not find any MarkingTask!");
                }
            }
        }
        else if (something === "Delete Task") {
            if (DeletingTask) {
                taskList.forEach((CheckTask, TaskDeleted) => {
                    if (CheckTask === DeletingTask) {
                        taskList.splice(TaskDeleted, 1);
                        console.log(chalk.bold(chalk.hex('#26a894')(`Your Task Success Fully Deleted: (${DeletingTask})`)));
                        DeleatedTask = true;
                    }
                });
                if (!DeleatedTask) {
                    console.log(chalk.bold(chalk.redBright(`Cannot Find Any Delet Task: (${DeletingTask})`)));
                    alert("Could Not Find Any Deleted Task Yet:");
                }
            }
        }
        else if (something === "List Tasks") {
            if (taskList.length === 0) {
                console.log(chalk.bold(chalk.redBright("Could Not Find Any Task Yet:")));
                alert("Could not find any tasks List:");
            }
            else {
                console.log("Your Added Task List:");
                taskList.forEach((TaskList, listing) => {
                    console.log(chalk.bold(chalk.hex('#26a894')(`${listing + 1}). (${TaskList})`)));
                });
            }
        }
        if (something === "Exit") {
            const ContinueORExit = await inquirer.prompt([
                {
                    message: chalk.bold(chalk.hex('#048399')("Are You Sure You Want To Exit:")),
                    name: "addmore",
                    type: "list",
                    choices: [
                        { name: chalk.bold(chalk.redBright("Yes")), value: "Yes" },
                        { name: chalk.bold(chalk.greenBright("No")), value: "No" },
                    ],
                },
            ]);
            if (ContinueORExit.addmore !== "No") {
                addingmore = false;
            }
            ;
        }
        ;
    }
    ;
}
;
TODOLIST();
