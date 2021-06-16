/*
Нечайно удалил файлы по миллионеру, когда пушил калькулятор и рандом, думал что удалю из гита, а удалил с компа.
Пришлость заново делать, буду еще доделывать логику подсказок и путь по лестнице заработанных тугриков
*/


let question1 = {
    ques: 'Как называют манекенщицу супер-класса?',
    A: 'Топ-модель',
    B: 'Тяп-модель',
    C: 'Поп-модель',
    D: 'Ляп-модель',
    right: 'Топ-модель'
}

let question2 = {
    ques: 'Кто вырос в джунглях среди диких зверей?',
    A: 'Колобок',
    B: 'Маугли',
    C: 'Бэтмен',
    D: 'Чарльз Дарвин',
    right: 'Маугли'
}

let question3 = {
    ques: 'Как называлась детская развлекательная программа, популярная в прошлые годы?',
    A: 'АБВГДейка',
    B: 'ЁКЛМНейка',
    C: 'ЁПРСТейка',
    D: 'ЁЖЗИКейка',
    right: 'АБВГДейка'
}

let question4 = {
    ques: 'Как звали невесту Эдмона Дантеса, будущего графа Монте-Кристо?',
    A: 'Мерседес',
    B: 'Тойота',
    C: ' Хонда',
    D: 'Лада',
    right: 'Мерседес'
}

let question5 = {
    ques: 'Какой цвет получается при смешении синего и красного?',
    A: 'Коричневый',
    B: 'Фиолетовый',
    C: 'Зелёный',
    D: ' Голубой',
    right: 'Фиолетовый'
}

let question6 = {
    ques: 'Из какого мяса традиционно готовится начинка для чебуреков?',
    A: 'Баранина',
    B: 'Свинина',
    C: 'Телятина',
    D: 'Конина',
    right: 'Баранина'
}

let question7 = {
    ques: 'Какой народ придумал танец чардаш?',
    A: 'Венгры',
    B: 'Румыны',
    C: 'Чехи',
    D: 'Молдаване',
    right: 'Венгры'
}

let question8 = {
    ques: 'Изучение соединений какого элемента является основой органической химии?',
    A: 'Кислород',
    B: 'Углерод',
    C: 'Азот',
    D: 'Кремний',
    right: 'Углерод'
}

let question9 = {
    ques: 'Кто открыл тайну трёх карт графине из «Пиковой дамы» А. С. Пушкина?',
    A: 'Казанова',
    B: 'Калиостро',
    C: 'Сен-Жермен',
    D: 'Томас Воган',
    right: 'Сен-Жермен'
}

let question10 = {
    ques: 'Кто из этих философов в 1864 году написал музыку на стихи А.С. Пушкина «Заклинание» и «Зимний вечер»?',
    A: 'Юнг',
    B: 'Гегель',
    C: 'Ницше',
    D: 'Шопенгауэр',
    right: 'Ницше'
}

let question11 = {
    ques: 'Как называлась детская развлекательная программа, популярная в прошлые годы?',
    A: 'Кувейт',
    B: 'Иран',
    C: 'Ирак',
    D: 'Азербайджан',
    right: 'Азербайджан'
}

let question12 = {
    ques: 'Сколько раз в сутки подзаводят куранты Спасской башни Кремля?',
    A: 'Один',
    B: 'Два',
    C: 'Три',
    D: 'Четыре',
    right: 'Два'
}

let question13 = {
    ques: 'С какой буквы начинаются слова, опубликованные в 16-м томе последнего издания Большой советской энциклопедии?',
    A: 'М',
    B: 'Н',
    C: 'О',
    D: 'П',
    right: 'М'
}

let question14 = {
    ques: 'Кто 1-м получил Нобелевскую премию по литературе?',
    A: 'Романист',
    B: 'Драматург',
    C: 'Поэт',
    D: 'Эссеист',
    right: 'Поэт'
}

let question15 = {
    ques: 'Кто из перечисленных был пажом во времена Екатерины II?',
    A: 'Д.И. Фонвизин',
    B: 'Г.Р. Державин',
    C: 'А.Н. Радищев',
    D: ' Н.М. Карамзин',
    right: 'А.Н. Радищев'
}


let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15]

let question = document.querySelector('.question')
let answerA = document.querySelector('.answerA')
let answerB = document.querySelector('.answerB')
let answerC = document.querySelector('.answerC')
let answerD = document.querySelector('.answerD')

let score = document.querySelector('.score')
let helpFifty = document.querySelector('.fifty')

let scoreCounter = 0
function questionRender(i) {
    question.innerHTML = 'Question: ' + questions[i].ques
    answerA.innerHTML = 'A: ' + questions[i].A
    answerB.innerHTML = 'B: ' + questions[i].B
    answerC.innerHTML = 'C: ' + questions[i].C
    answerD.innerHTML = 'D: ' + questions[i].D



}

document.querySelectorAll('.answer').forEach((button) => {
    button.addEventListener('click', onButtonClick)
})

function onButtonClick(e) {
    if (e.target.innerHTML.indexOf(questions[0].right) > -1) {
        scoreCounter += 100
        score.innerHTML = scoreCounter
        questions.shift(0)
        return questionRender(0)
    } else if (e.target.innerHTML.indexOf(questions[0].right) === -1) {
        location.reload()
        alert('Неправильный ответ, попробуй сначала')
    }
}

questionRender(0)





