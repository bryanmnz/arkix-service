module.exports = {
    PORT: process.env.PORT || '3000',
    NODE: process.env.NODE_ENV || 'dev',
    CONN_STR: (process.env.NODE_ENV =='dev')?'mongodb://localhost:27017/cafe':'mongodb+srv://arkix:<password>@cluster0-bovde.mongodb.net/test?retryWrites=true&w=majority'
}