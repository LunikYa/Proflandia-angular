const MongoClient = require('mongodb').MongoClient;
const mongoUrl    = "mongodb://localhost:27017/angular";

var db;

module.exports.connect = () => {
    return new Promise((res, rej) => {
        MongoClient.connect(mongoUrl, (err, client) => 
        
        {
            console.log('connect', client)
            if (err) console.log(err);
            
            db = client.db('angular');
            res(db)
        });
    })
}

module.exports.getDB = function () {
   return db
}
