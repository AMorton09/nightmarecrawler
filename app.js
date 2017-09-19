/**
 * Created by 1337 on 9/13/2017.
 */
const Nightmare = require('nightmare');
const nightmare = Nightmare();
const express = require('express');
const app     = express();
const hbs = require('express-handlebars');
const jquery = require('jquery');


app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



let scrape = (url) => {
    console.log("2...");
    nightmare.goto(url)
        .inject('js', 'node_modules/jquery/dist/jquery.js')
        .wait(2000)
        .evaluate(()=>{
            console.log("3...");
            let name = "";
            $('.prof-ident-name').each(()=>{
                console.log("4...");
                name = $(this).text();
                console.log(name);
            })
            console.log("5...");
    }).catch((err)=>{
        console.log(err);
    })
}


app.get("/", (req, res) => {
    console.log("1...");
    scrape('');
});


app.listen('3000');

console.log("up and running");