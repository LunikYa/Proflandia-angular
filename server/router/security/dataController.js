const clientDb     = require('../../db/db');
const { ObjectId } = require('mongodb');

module.exports.getLessons = async function (ctx) {
    const db = clientDb.getDB();
    
    const lessons = await db.collection('professions').findOne({name: ctx.params.profession}).toArray();

    ctx.response.status = 200;
    ctx.response.body = lessons;
}

module.exports.getProfessions = async function (ctx) {
    const db = clientDb.getDB();

    const professions = await db.collection('professions').find().toArray();

    ctx.response.status = 200;
    ctx.response.body = professions;
}

module.exports.getUser = async function (ctx){
    const db  = clientDb.getDB();
    const userEmail = ctx.params.usermail

    const user  = await db.collection('users').findOne({ email: userEmail });
    
    if (matches) {
        ctx.response.status = 200;
        ctx.response.body   = matches;
    } else {
        ctx.response.status = 200;
        ctx.response.body = user;
    }
}

module.exports.getChoosedProfessions = async function (ctx) {
    console.log('getChoosed')
}