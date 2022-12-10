# Description

This Website offers functionality to register user for Yoga class. The website contains the form which takes user information and payment details and register them if payment is successful.
Website is developed on MERN stack i.e. React for front-end and Node,Express and MongoDB for Back-end. 

## Dependencies

express : Framework for Back-end development 
```bash
npm i express
```
mongoose : Framework for MongoDB object modelling
```bash
npm i mongoose
```
dotenv : Dotenv is a module that loads environment variables.
```bash
npm i dotenv
```
cors : A node package that enables Cross-origin resource sharing.
```bash
npm i cors
```
## Back-end functionality

The Back-end contains an API for post request of user data to database. The controller receives the data and validates if the user already exist.
If user exist then a error message is send. The payment is done by method **CompletePayment()**
*(Mock function, return true for successful payment)*. If there is some problem in payment an error is generated. If everything goes right the data is stored in MongoDB database and success message returned to front-end.
