const express = require(`express`);
const app = express();
const hbs = require(`hbs`);

app.set(`views`, __dirname + `/views`);
app.set(`view engine`, `hbs`);
//lesson express GET method - route params & query string
app.get(`/`, (req, res, next) => {
    res.render(`index`);
});

app.get(`/users/:username`, (req, res) => {
    res.send(req.params);
});


app.get(`/books/:bookid`, (req, res, next) => {
    res.send(req.params);
});

app.get(`/users/:username/books/:booksId`, (req, res, next) => {
    res.send(req.params);
});

app.get(`/search`, (req, res, next) => {
    res.send(req.query);
});

// post method

app.get(`get-user-info`, (req,res,next) => {
    res.render(`user-info-form`);
});

app.listen(3000, () => console.log(`App listening om port 3000!`));