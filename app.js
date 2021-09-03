const { request } = require('express');
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

app.listen(3000, () => console.log(" RRodando, rrodando...") );