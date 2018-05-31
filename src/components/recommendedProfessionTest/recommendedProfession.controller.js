class RecommendedProfessionController {
    constructor($location){
        this.location=$location;
        this.exitToLocation=('/account-page');
        this.modalWindowText=`Вы ответили не на все вопросы! Желаете закончить прохождение теста без получения результатa?`
    }
    getResult(){
        let resultOfRecommendedTest=0;
        let resultsOfTestArray=[];
        for(let i in this) {
            if (typeof(this[i]) === 'number') {
                resultsOfTestArray.push(this[i]);
            }
        }
         if(resultsOfTestArray.length<30){
             this.showModalWindow=true;
             //console.log("don't answer "+[30-resultsOfTestArray.length])
         }
         else{
             resultOfRecommendedTest=resultsOfTestArray.reduce((x,y)=>x+y);
             console.log(resultOfRecommendedTest);
             this.location.path('/account-page');
         }
    }
}

/*резульат теста получаем в resultOfRecommendedTest

От 49 до 60 баллов
Ты хочешь быть безупречным во всем, чего требуешь и от окружающих. Поскольку Тебя интересуют различные знаковые системы (цифры, коды, естественные
и искусственные языки), Ты наверняка сможешь найти себя в профессиях, связанных с созданием документов, анализом и преобразованием текстов.
    Корректор, технический редактор, нотариус, секретарь — вот те специальности, которые Тебе с легкостью удастся освоить в вузе. Также Ты можешь стать
незаменимым сотрудником бухгалтерии, отличным экономистом, демографом, замечательным программистом, картографом или математиком.
    Тебя часто захватывает то, что другим кажется скучным и однообразным. Чертежное дело, работа с бумагами, буквами и расчетами, контроль и анализ —
занятия, в которых Тебе не будет равных среди коллег. Часто люди Твоего типа — прекрасные бизнесмены и руководители. Однако Тебе пора учиться расслабляться,
    постоянное самосовершенствование истощает и не дает ощутить все радости жизни.

От 37 до 48 баллов-строитель
Люди Твоего типа внимательны и собраны. Обычно им подходят профессии, которые требуют превосходной памяти, точных расчетов, совершенного знания документации
 и законов. Юрист, таможенный декларатор, статистик, чертежник, экономист и специалист по компьютерным технологиям — профессии, в которых Ты можешь достичь
 значительных успехов. Однако помни, что соответствующие им сферы деятельности требуют усидчивости, сосредоточенности и способности абстрактно мыслить. Обрати
 внимание и на профессии первого блока (от 49 до 60 баллов), но в Твоем случае работа со знаковыми системами может быть лишь частью другой, основной профессии
 (например, интенсивное использование иностранных языков, ведение документации, расчеты — в работе финансиста, менеджера и журналиста).

 От 25 до 36 баллов-врач
Интерес к знаковым системам у Тебя мало выражен. Однако Ты способен оперативно и тщательно выполнять свои обязанности. К тому же, дисциплина и требовательность
к себе помогут покорить любую вершину, было бы желание. Гибкость и скорость принятия решений способствуют достижению наилучшего результата. Тебе подойдет работа
геолога, мелиоратора, эколога, инженера, гидролога, конструктора, ученого. А еще стоит подумать о профессии ветеринара или агронома. Знаковые системы несколько
«суховаты» для Тебя. Поэтому, выбирая профессию, ориентируйся на собственные увлечения и интересы.

От 13 до 25 баллов-учитель/повар-?
Документы, знаки и расчеты Тебя точно не интересуют. Люди Твоего типа безупречные импровизаторы, умеют активно действовать и быстро принимать решения, нестандартные
 и непредсказуемые, что характерно для представителей творческих профессий. Реклама, дизайн, журналистика и психология — сферы, в которых Ты будешь чувствовать
 себя как рыба в воде. А еще изТебя может выйти безупречный учитель, продюсер или воспитатель.

От 0 до 12 баллов-дизайнер
 Такой нестандартной личности, как Ты, просто необходимо развивать силу воли, выдержку и дисциплинированность, ведь устраиваясь на работу Ты то и дело будеш творить
 то, что «хочется», а не то, чего требует руководство. Работа, предполагающая жесткое выполнения плана и соблюдение сроков, Тебе вряд ли подойдет. Профессии художника,
 фотографа, артиста, скульптора или поэта — из Твоей категории. Подумай также и о специальности дизайнера, режиссера, актера или дирижера.
    */

export default RecommendedProfessionController