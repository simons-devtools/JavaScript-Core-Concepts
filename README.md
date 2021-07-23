# JavaScript-Core-Concepts
This is my private repository. Becouse it has been 'JavaScript &amp; React core concept'...

# Most important syntex in JavaScript:
01. Variable declearation----- (let, const);
02. Condition----- (if, else);
03. Array and Object----- (number, string);
04. Loop----- (for-loop, while-loop);
05. Function-----(normal, arrow);


# Most important (Array, Object) Core methods:
01. Map-----(array into object OR [{...}, {...}, {...}] ) OR Get property and return;
02. Foreach-----(array into object OR [{...}, {...}, {...}] ) OR Get property and console.log;
03. Filter-----(choose item, removed item);
04. Find-----(find out the special array OR object properties);

@ Extra JS Array Methods:
----------------------------
05. reduce()
06. includes()
07. push()
08. pop()
09. length()
10. indexOf()

@ NOTE:
-----------
01. Array and Object Destructuring and (Array in Three Dots);
02. JS Shortcut Ternary-----(Variable Name = Condition ? True value : False value);
03. API AND JSON-----(Api-Featch, Convert-Structure = Json to Object and Object to Json = [[ console.log(JSON.stringify(objectName)) && myData = JSON.stringify(objectName)) ]];


# Fetch JSON Localstorage object keys values: (Set && get)
01. Featch '03' WEB-API and create DOM website;
02. Set Object/JSON Local-Storage (keys && values) = { VariableName = Object.keys(objectName) };
03. Get Object/JSON Local-Storage (keys && values) = { VariableName = Object.values(objectName) };
04. Array in Object Name = [{id: 01, name: 'theMealdb = https://www.themealdb.com/api.php', categories: 'Food Images'}, // {id: 02, name: 'pixabay = https://pixabay.com/api/docs/', categories: 'Images && Videos'}, // {id: 03, name = 'theMealdb: https://www.themealdb.com/api.php', categories: 'Name'}]; 

<!-- TABLE OF CONTENTS -->

## Node.js/new apps setup table

- [Update Node](#update-node)
  - [Windows](#windows)
  - [Mac](#mac)
- [Install and Update Yarn](#install-and-update-yarn)
  - [Windows](#on-windows)
  - [Mac](#on-mac)
- [VS Code Editor Setup](#vs-code-editor-setup)
  - [Extensions](#extensions)
  - [Settings](#settings)
  - [Set Line Breaks](#set-line-breaks)
- [Linting Setup](#linting-setup)
  - [Install Dev Dependencies](#install-dev-dependencies)
  - [Setup Linting Configuration file](#setup-linting-configuration-file)
- [Contact](#contact)

<!-- UPDATE NODE -->

## Update Node

Please follow the below instructions to update node in your machine:

### Windows

1. Update npm
   ```sh
   npm install npm@latest -g
   ```
2. Clear npm cache
   ```sh
   npm cache clean -f
   ```
3. Install n
   ```sh
   npm install -g n
   ```
4. Update node to latest version
   ```sh
   n latest
   ```

### Mac

1. With Homebrew
   ```sh
   brew update
   brew upgrade node
   ```

<!-- INSTALL & UPDATE YARN -->

## Install and Update yarn

Please follow the below instructions to install or update yarn in your machine.

### On Windows

1. Install yarn
   ```sh
   npm install -g yarn
   ```
2. Update yarn
   ```sh
   yarn set version latest
   ```

### On Mac

1. Install yarn
   ```sh
   brew install yarn
   ```
2. Update yarn
   ```sh
   brew update
   brew upgrade yarn
   ```

<!-- EDITOR SETUP -->

## VS Code Editor Setup

In order to follow along the tutorial series, I recommend you to use Visual Studio Code Editor and install & apply the below extensions and settings.

### Extensions

Install the below extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

### Settings

Go to your Visual Stuido Code `settings.json` file and add the below settings there:

```json
// config related to code formatting
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": null
},
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.organizeImports": true
},
"eslint.alwaysShowStatus": true
```

### Set Line Breaks

Make sure in your VS Code Editor, "LF" is selected as line feed instead of CRLF (Carriage return and line feed). To do that, just click LF/CRLF in bottom right corner of editor, click it and change it to "LF". If you dont do that, you will get errors in my setup.

<img src="images/line-feed.jpg" alt="Line Feed" width="700">

<!-- LINTING SETUP -->

## Linting Setup

In order to lint and format your code automatically according to popular airbnb style guide, I recommend you to follow the instructions as described in video. References are as below.

### Install Dev Dependencies

```sh
yarn add -D eslint prettier
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

### Setup Linting Configuration file

Create a `.eslintrc.json` file in the project root and enter the below contents:

```json
{
  "extends": ["prettier", "airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "env": {
    "commonjs": true,
    "node": true
  },
  "rules": {
    "no-console": 0,
    "indent": 0,
    "linebreak-style": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true
      }
    ]
  },
  "plugins": ["prettier"]
}
```
