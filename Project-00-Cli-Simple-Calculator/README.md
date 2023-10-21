# Getting Started:

## Calculator Application:
This is a simple calculator application created using Typescript , utilizing asynchronous programming and interactive command-line prompts.

## Table of Contents
1. [Description](#description)
2. [Usage](#usage)
3. [Publish Executable to NPM](#NPM)
4. [Publishing](#NPM)
5. [My Project NPM](#Project)

## Description:
This calculator application allows you to perform basic arithmetic calculations using the command line. It features an interactive interface with colorful animations.

## Usage:
1. Navigate to the project directory:
2. Install the dependencies:
3. Run the application:
4. Follow the prompts to enter two numbers and select an arithmetic operation. The result will be displayed on the console.
5. To continue using more options then Press 'Y' or if you want to stop then Press 'N'.

# Publish Executable to NPM:

1. Make a NODE Project by initializing

   ```bash
   npm init
   ```
    ```json
      "main": "Your file name will be created automatically",
    ```

2. Add this in your package.json file
   ```json
     "bin": "index.js",
   ```
    ## OR
    ```json
     "bin": {
        "any-name": "./Your file name.js",
     },
   ```
# Publishing on NPM:
1. First Create your account on npm.
2. then open your code editor terminal and then type npm login.
3. Once you login on npm then start Publishing. you can use the following steps for publishing on npm.

## Step 1:
```publishing:
    You can type npm publish:
    Note: this one only work without @username:
```
## step 2: 
```publishing:
    You can type npm publish --access public
    Note: If you want to publish with @username then you should use the following these commands
```
## My Project NPM:

```MY project NPM:
  npm i @azfarmasood21/cli-project-00-calculator-00
```
## My Project NPX:

```My project NPX:
  npx @azfarmasood21/cli-project-00-calculator-00
```
## Author:
Created by Hafiz Azfar.