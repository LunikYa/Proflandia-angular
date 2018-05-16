module.exports = async () => {
    const db = require('./db').getDB();
    const fs = require('fs');
    
    // const file = JSON.parse(fs.readFileSync('./data/....json', 'utf8'));

    const users     = db.collection('users');

    users.insertMany([
        {
            email: 'vasya@com.ua',
            name: 'vasya',
            surname: 'Alex',
            password: '123456'
        },
        {
            email: 'masha@com.ua',
            name: 'masha',
            surname: 'masha',
            password: '123456'
        }
    ])
}
