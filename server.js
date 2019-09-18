const config = require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./lib/dbManager');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/user.route'));

app.listen(config.PORT, () => {
    console.log(`Listening port ${config.PORT}`);
});