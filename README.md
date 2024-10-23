# Personal Income Expense Tracker API

## Overview
This is a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Technologies Used
- Node.js
- Express.js
- MongoDB (for database)

## Setup and Run Instructions

### Prerequisites
- Node.js v20.14.0
- npm v10.8.2

### Steps to Set Up the Project

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-directory>

Install Dependencies
npm install

Run the Application
node app.js

The server will start at http://localhost:3000



To develop a RESTful API for managing personal financial records using Node.js, Express.js, and MongoDB, I'll break down the development steps to meet the outlined requirements.

1. Project Setup
Initialize the Node.js project:
Create a project folder and navigate into it.
bash
Copy code
mkdir personal-finance-api
cd personal-finance-api
Initialize the project with npm init and install necessary dependencies.
bash
Copy code
npm init -y
npm install express mongoose body-parser dotenv
Optionally, install Nodemon for hot-reloading during development:
bash
Copy code
npm install --save-dev nodemon
Project Structure:
bash
Copy code
personal-finance-api/
│
├── controllers/
│   └── transactionController.js
├── models/
│   └── transaction.js
│   └── category.js
├── routes/
│   └── transactions.js
│   └── categories.js
├── .env
├── app.js
├── package.json
└── README.md

## Postman Screenshots

### Add a Transaction
![Add a Transaction](screenshots/add_transcation (2).png)

### Retrieve All Transactions
![Retrieve All Transactions](screenshots/retrieve_all_transactions.png)

### Retrieve a Transaction by ID
![Retrieve a Transaction](screenshots/retrieve_transcation.png)

### Update a Transaction
![Update a Transaction](screenshots/update_transaction.png)

### Delete a Transaction
![Delete a Transaction](screenshots/delete_transcation.png)

### Retrieve Transaction Summary
![Retrieve Transaction Summary](screenshots/summary.png)
