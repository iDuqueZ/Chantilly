const mongoose = require('mongoose')

URI = ("mongodb://localhost/bdChantilly");

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (bd => console.log('Base de datos conectada', bd.connection.name))
.catch(error => console.log(error))

module.exports= mongoose