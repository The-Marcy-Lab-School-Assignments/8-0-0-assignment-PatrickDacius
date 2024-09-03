const express = require('express')
const app = express()

const serveFrontPage = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}
const serveTroll = (req, res, next) => {
    res.send('<h1>༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽ you have been trolled</h1>');
}
const serveGreetings = (req, res, next) => {
    const data = [{ greeting: 'English: Hello' }, { greeting: 'Haitian Creole: Bonjour' }, { greeting: 'Albanian: Përshëndetje' }, { greeting: 'Arabic: Marhaba' }, { greeting: 'Bengali: Hyālō' }, {
        greeting: 'Japanese: Konichiwa'
    }]
    res.send(data);
}
const serveFavoriteFoods = (req, res, next) => {
    const data = [{ name: 'Oxtail' }, { name: 'Haitian Legume w/ white rice and chicken' }, { name: 'White Rice w/ Sauce Pwa and griot' }, { name: 'Pizza' }, { name: 'Burgers' }];
    res.send(data);
}


app.get('/', serveFrontPage);
app.get('/about', serveTroll);
app.get('/api/greetings', serveGreetings);
app.get('/api/favoritefoods', serveFavoriteFoods);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 