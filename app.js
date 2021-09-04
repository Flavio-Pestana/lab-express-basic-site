const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    response.sendFile(`${__dirname}/views/home-page.html`);
    app.use(express.static('public'));
});

app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/about-page.html`);
    app.use(express.static('public'));
});

app.get('/galery', (request, response) => {
    response.sendFile(`${__dirname}/views/galery-page.html`);
    app.use(express.static('public'));
});

app.get('/work', (request, response) => {
    response.sendFile(`${__dirname}/views/work-page.html`);
    app.use(express.static('public'));
});

app.listen(3000, () => console.log(" RRodando, rrodando...") );