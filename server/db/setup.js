module.exports = async () => {
    const db = require('./db').getDB();
    const fs = require('fs');
    
    // const file = JSON.parse(fs.readFileSync('./data/....json', 'utf8'));
    const professions = db.collection('professions');
    const lessons     = db.collection('lessons');
    const questions   = db.collection('questions');
    const users       = db.collection('users');

    const professionsArr = [
        {name: 'designer', rus: 'дизайнер', numberLessons: 12},
        {name: 'teacher', rus: 'учитель', numberLessons: 12},
        {name: 'builder', rus: 'строитель', numberLessons: 12},
        {name: 'doctor', rus: 'доктор', numberLessons: 12},
        {name: 'cook', rus: 'повар', numberLessons: 12}
    ]
    // const lessonsArr = [{name: 'name', professionId: '', content: '', }]
    // const questionsArr = [{question: 'How are u ?', correctAnswer: 'human', variants: ['dog', 'phone', 'telepuzik'], lessonId: ''}]
    
    for(let i = 0; i < professionsArr.length; i++) {
        const cursor = await professions.insertOne({
            name: professionsArr[i].name,
            rus: professionsArr[i].rus,
            numberLessons: professionsArr[i].numberLessons
        })
        for(let j = 0; j < 5; j++) {
            const cursorLessons = await lessons.insertOne(
                {
                    name: 'name' + j+1,
                    level: j+1,
                    profession: professionsArr[i].name,
                    content: 'Content Content Content Content Content Content Content'
                })
            questions.insertMany([
                {
                    question: 'How are u ?', 
                    correctAnswer: 'human', 
                    variants: ['dog', 'phone', 'telepuzik'], 
                    lessonId: cursorLessons.ops[0]._id,
                    number: 1
                },
                {
                    question: 'What are u doing?', 
                    correctAnswer: 'pelmeni', 
                    variants: ['tort', 'blin', 'pelmeni'], 
                    lessonId: cursorLessons.ops[0]._id,
                    number: 2
                },
                {
                    question: 'How are u ?', 
                    correctAnswer: 'human', 
                    variants: ['dog', 'phone', 'telepuzik'], 
                    lessonId: cursorLessons.ops[0]._id,
                    number: 3
                },
                {
                    question: 'How are u ?', 
                    correctAnswer: 'human', 
                    variants: ['dog', 'phone', 'telepuzik'], 
                    lessonId: cursorLessons.ops[0]._id,
                    number: 4
                }
            ])
        }
        
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
