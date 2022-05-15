const mongoose = require('mongoose')

URI = ("mongodb+srv://iDuquez:AutonomaChantilly@cluster0.hi0pf.mongodb.net/chantilly?retryWrites=true&w=majority");

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (bd => console.log('Base de datos conectada', bd.connection.name))
.catch(error => console.log(error))

module.exports= mongoose