module.exports = async () => {
    const db = require('./db').getDB();
    const fs = require('fs');
    
    // const file = JSON.parse(fs.readFileSync('./data/....json', 'utf8'));
    const professions = db.collection('professions');
    const lessons     = db.collection('lessons');
    const questions   = db.collection('questions');
    const users       = db.collection('users');

    const professionsArr = ['designer', 'teacher', 'builder', 'doctor', 'cook'];
    // const lessonsArr = [{name: 'name', professionId: '', content: '', }]
    // const questionsArr = [{question: 'How are u ?', correctAnswer: 'human', variants: ['dog', 'phone', 'telepuzik'], lessonId: ''}]
    
    for(let i = 0; i < professionsArr.length; i++) {
        const cursor = await professions.insertOne({
            name: professionsArr[i],
            numberLessons: 5
        })
        const cursorLessons = await lessons.insertOne(
            {
                name: 'name',
                level: i+1,
                professionId: cursor.ops[0]._id,
                content: 'Content Content Content Content Content Content Content'
            })
        questions.insertOne(
            {
                question: 'How are u ?', 
                correctAnswer: 'human', 
                variants: ['dog', 'phone', 'telepuzik'], 
                lessonId: cursorLessons.ops[0]._id
            })
    }    
    
    users.insertMany([
        {
            email: 'vasya@com.ua',
            name: 'vasya',
            surname: 'Alex',
            sex: 'male',
            password: '123456',
            avatar: '',
            professions: []
        },
        {
            email: 'masha@com.ua',
            name: 'masha',
            surname: 'masha',
            sex: 'female',
            password: '123456',
            avatar: '',
            professions: []
        }
    ])
}
