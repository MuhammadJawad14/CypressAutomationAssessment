Structure of the Cypress Project
├── cypress
│   ├── e2e
│   │   ├── features/              # Gherkin feature files (.feature)
│   │   ├── step_definitions/      # Step definition files (.ts)
│   │   ├── pages/                 # Page Object files (.ts)
│   │   └── support/               # Commands, hooks, utils
│   ├── selectors/                 # selectors.ts (all locators in one place)
│   └── reports/                   # Test reports
├── cypress.config.ts              # Cypress + Cucumber config
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript config
└── README.md      



## 🚀 Goto the project folder
       Open the terminal and run: npm init -y
       The package.json will be created
## 🚀 Install cypress
       run npm install --save-dev cypress
       
## 🚀 Open cypress
       run npx cypress open

## 🚀 Run the demo: 
Open the terminal and run: npm run cypress:execution


## 🚀 Run the specific feature file in cmd with headless option

npx cypress run --browser chrome --spec "cypress\e2e\features\login.feature"

## 🚀 Run the smoke test cases in cmd with headless option

npm run cypress:run -- chrome --env TAGS="@smoke"

## 🚀 Run All the feature files in cmd with headless option with package

npx cypress  run --browser chrome

 
## 🚀 Run the specific feature file with cmd without headless option

npx cypress run --browser chrome --headed --spec "cypress/e2e/features/login.feature"

# 🚀 Run this command to generate the HTML report 

node cucumber-html-report.js