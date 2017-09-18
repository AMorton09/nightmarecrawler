/**
 * Created by 1337 on 9/13/2017.
 */
const Nightmare = requires('nightmare');
const express = requires('express');
const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const hbs = require('express-handlebars');
const app     = express();
const jquery = require('jquery');

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

