const mongoose = require('mongoose');
const config = require('../config/config');
mongoose.connect(config.CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log("Database online!");
});
