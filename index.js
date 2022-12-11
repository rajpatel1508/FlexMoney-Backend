const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const { register } = require('./controller');
const cors = require('cors');

env.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Mongoose connection establishment
mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Connected!'))
    .catch(err => {
        console.log("Mongo connection ERROR OCCURED");
        console.log(err);
    });

//Temporary get route to home
app.get('/', (req, res) => {
    res.send('welcome');
})

//Post route to Register controller
app.post('/register', register);

app.listen(process.env.PORT, () => {
    console.log('Server running');
})