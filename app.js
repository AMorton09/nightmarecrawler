/**
 * Created by 1337 on 9/13/2017.
 */
const Nightmare = require('nightmare');
const express = require('express');
const hbs = require('express-handlebars');
const app     = express();
const jquery = require('jquery');

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.listen('3000');

console.log("up and running");