const clientDb     = require('../../db/db');
const { ObjectId } = require('mongodb');

module.exports.getLessons = async function (ctx) {
    const db = clientDb.getDB();

    const lessons = await db.collection('lessons').find({profession: ctx.params.profession}).toArray();
    console.log('params', ctx.params.profession, 'result', lessons)
    ctx.response.status = 200;
    ctx.response.body   = lessons;
}

module.exports.getProfessions = async function (ctx) {
    const db = clientDb.getDB();

    const professions = await db.collection('professions').find().toArray();

    ctx.response.status = 200;
    ctx.response.body = professions;
}

module.exports.getUser = async function (ctx){
    const db = clientDb.getDB();
    const userEmail = ctx.params.useremail
    
    const user  = await db.collection('users').findOne({ email: userEmail });
    
    if (user) {
        ctx.response.status = 200;
        ctx.response.body   = user;
    } else {
        ctx.response.status = 201;
        ctx.response.body ='User with this email ot found';
    }
}

module.exports.getChoosedProfessions = async function (ctx) {
    ctx.response.status   = 200;
    ctx.response.body = [
                        {profession: 'designer', currentLevel: 2}, 
                        {profession: 'cook', currentLevel: 5}, 
                        {profession: 'teacher', currentLevel: finished}
                    ];
}

module.exports.getQuestions = async function (ctx) {
    const db = clientDb.getDB();
    const lessonId = ctx.params.lessonId;
    var questions
    
    try {
        questions = await db.collection('questions').find({ lessonId: ObjectId(lessonId)}).toArray()
    } catch (error){
        ctx.response.status = 404;
        ctx.response.body = {error: 'Invalid id'};
    }
    
    if(questions) {
        ctx.response.status = 200;
        ctx.response.body = questions;
    } else {
        ctx.response.status = 404;
        ctx.response.body = {error: 'Questions not found'};
    }
}

module.exports.putProfession = async function (ctx) {
    const db       = clientDb.getDB();
    const request  = ctx.request.body; 

    if(request) {
        const matches  = await db.collection('professions').findOne({ name: request.profession });
        if(matches) {
            const user = await db.collection('users').findOne({ email: request.email });
            if(user) {
                user.professions.push({profession: request.profession, currentLevel: 1})
                await db.collection('users').save(user)
                ctx.response.status = 200;
                ctx.response.body   = {status: 'All ok', user: request.email};
            } else {
                ctx.response.status = 404;
                ctx.response.body = {error: 'User is not defined'};
            }
        } else {
            ctx.response.status = 404;
            ctx.response.body = {error: 'Profession is not defined'};
        }
    } else {
        ctx.response.status = 404;
        ctx.response.body = {error: 'Bad request object, please put it in request'};
    }
}