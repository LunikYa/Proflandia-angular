module.exports = async () => {
    const db = require('./db').getDB();
    const fs = require('fs');
    
    // const file = JSON.parse(fs.readFileSync('./data/....json', 'utf8'));
    const professions = db.collection('professions');
    const lessons     = db.collection('lessons');
    const questions   = db.collection('questions');
    const users       = db.collection('users');

    const professionsArr = [
        {name: 'designer', rus: 'дизайнер', numberLessons: 10},
        {name: 'teacher', rus: 'учитель', numberLessons: 10},
        {name: 'builder', rus: 'строитель', numberLessons: 10},
        {name: 'doctor', rus: 'доктор', numberLessons: 10},
        {name: 'cook', rus: 'повар', numberLessons: 10}
    ]
    const lessonsArr = [{name: 'name', professionId: '', content: '', }]
    // const questionsArr = [{question: 'How are u ?', correctAnswer: 'human', variants: ['dog', 'phone', 'telepuzik'], lessonId: ''}]
    
    for(let i = 0; i < professionsArr.length; i++) {
        let description = ''
        if (professionsArr[i].name === 'designer'){
            description = 'Дизайнер — творец окружающего мира. Он стремится охватить все сферы жизни современного человека, причем его интересует не только внешний вид (оболочка) предметов, но и их внутренняя суть и функциональная взаимосвязь.'
        } else if (professionsArr[i].name === 'cook') {
            description = 'Повар — это специалист по приготовлению пищи. Хорошего повара иногда называют волшебником, ведь он может из самых обычных продуктов приготовить настоящий шедевр, который доставит радость и наслаждение людям.'
        } else if (professionsArr[i].name === 'doctor') {
            description = 'Врач – это одна из самых необходимых профессий. Ведь это специалисты, которые владеют знаниями и навыками, используя которые диагностируют, лечат и контролируют течение различных заболеваний людей'
        } else if (professionsArr[i].name === 'builder') {
            description = 'Строитель – специалист, занимающийся возведением инженерных конструкций любого типа. Например дома, мосты или железнодорожные пути. Практически все, что мы видим вокруг, строители перенесли с чертежа в реальность.'
        } else if (professionsArr[i].name === 'teacher') {
            description = 'Профессия учителя - одна из самых древних профессий на Земле. Для каждого человека, на любом этапе его существования необходим человек, который мог бы объяснить ту или иную проблему, ситуацию или просто событие.'
        } else {
            description = 'description is emty'
        }
        const cursor = await professions.insertOne({
            name: professionsArr[i].name,
            rus: professionsArr[i].rus,
            numberLessons: professionsArr[i].numberLessons,
            description: description
        })
        for(let j = 0; j < 10; j++) {
            const cursorLessons = await lessons.insertOne(
                {
                    name: 'name',
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
                },
                {
                    question: 'How are u ?', 
                    correctAnswer: 'human', 
                    variants: ['dog', 'phone', 'telepuzik'], 
                    lessonId: cursorLessons.ops[0]._id,
                    number: 5
                }
            ])
        }
        
    }
}
