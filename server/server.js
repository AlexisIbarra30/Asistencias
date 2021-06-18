const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public/');

app.use(express.static(publicPath));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log(chalk.bgGreen.black('service required'));
    res.send(path.resolve(publicPath, 'index.html'));
});

app.listen(8008, () => {
    console.log(chalk.bgGreen.black('server is up'));
})