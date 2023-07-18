const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path')

app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({ extended: true }));

// Correct the typo in setting the view engine
app.set("view engine", "ejs"); // <-- Fix the typo here
app.set("views", path.join(__dirname, "views")); // Set the 'views' folder path

app.use('/css', express.static(path.resolve(__dirname, 'asset/css')));
app.use('/img', express.static(path.resolve(__dirname, 'asset/img')));
app.use('/js', express.static(path.resolve(__dirname, 'asset/js')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/add-user', (req, res) => {
    res.render('add_user');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
