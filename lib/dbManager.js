const mongoose = require('mongoose');

//let getConnection = async(strConnection = ) => {
mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log("Database online!");
});
//}

//let closeConnection = () => {
//    mongoose.disconnect();
//}