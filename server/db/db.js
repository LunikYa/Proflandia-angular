const MongoClient = require('mongodb').MongoClient;
const mongoUrl    = "mongodb://lunti:0673946522@ds237620.mlab.com:37620/proflandia";

var db;

module.exports.connect = () => {
    return new Promise((res, rej) => {
        MongoClient.connect(mongoUrl, (err, client) => 
        {
            if (err) console.log(err);
                db = client.db('proflandia');
            res(db)
        });
    })
}

module.exports.getDB = function () {
   return db
}
