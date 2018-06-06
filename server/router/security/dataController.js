const clientDb     = require('../../db/db');
const { ObjectId } = require('mongodb');

module.exports.getLessons = async function (ctx) {
    const db = clientDb.getDB();

    const lessons = await db.collection('lessons').find({profession: ctx.params.profession}).toArray();

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
                for(let i = 0; i < user.professions; i++) {
                    if(user.professions[i] === request.profession) {
                        ctx.response.status = 201;
                        ctx.response.body   = {status: 'Profession already added'};
                        return
                    }
                }
                user.professions.push({profession: matches, currentLevel: 1})
                await db.collection('users').save(user)
                ctx.response.status = 200;
                ctx.response.body   = {status: 'All ok', user: user};
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

module.exports.putRecomendedProfession = async function (ctx) {
    const db       = clientDb.getDB();
    const request  = ctx.request.body; 

    if(request) {
        const user = await db.collection('users').findOne({ email: request.email });
        if(user) {
            user.recomendedProfession = request.profession;
            await db.collection('users').save(user)
            ctx.response.status = 200;
            ctx.response.body   = {status: 'All ok', user: user};
        } else {
            ctx.response.status = 404;
            ctx.response.body = {error: 'User is not defined'};
        }
    } else {
        ctx.response.status = 404;
        ctx.response.body = {error: 'Bad request object, please put it in request'};
    }
}

module.exports.putLevelUp = async function (ctx) {
    const db       = clientDb.getDB();
    const request  = ctx.request.body; 
    // {email: email, profession: 'designer'
    if(request) {
        const user = await db.collection('users').findOne({ email: request.email });
        if(user) {
            for(let i = 0; i < user.professions.length; i++) {
                if(user.professions[i].profession.name === request.profession) {
                    user.professions[i].currentLevel= user.professions[i].currentLevel + 1;
                }   
            }            
            await db.collection('users').save(user)
            ctx.response.status = 200;
            ctx.response.body   = {status: 'All ok', user: user};
        } else {
            ctx.response.status = 404;
            ctx.response.body = {error: 'User is not defined'};
        }
    } else {
        ctx.response.status = 404;
        ctx.response.body = {error: 'Bad request object, please put it in request'};
    }
}