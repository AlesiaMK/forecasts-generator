/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
const currentForecast = document.querySelector('.current-forecast')
const forecasts = document.querySelector('.forecasts');
const button = document.querySelector('.forecast-btn');
const cardTemplate = document.querySelector('#forecast-item');

function generate(min, max) {
    return Math.round(Math.random() * (max - min)) + min;

};

function generatePrediction() {
    switch (generate(1, 4)) {
        case 1:
            return "Ты сразу будешь понимать JS";
        case 2:
            return "Ты будешь есть и не толстеть";
        case 3:
            return "Ты отправишься в кругосветное путешествие";
        case 4:
            return "Тебя ждет каждый месяц прибавка к зарплате";
    };
};

button.addEventListener('click', function() {
    let prd = generatePrediction();
    currentForecast.querySelector('h1').textContent = prd;
    let prc = `Вероятность: ${generate(0, 100)} %`;
    currentForecast.querySelector('p').textContent = prc;

    function makeNewForecast(title, value) {
        const newPrediction = cardTemplate.content.cloneNode(true);
        newPrediction.querySelector('h3').textContent = title;
        newPrediction.querySelector('p').textContent = value;
        return newPrediction
    };
    const newCard = makeNewForecast(prd, prc);
    forecasts.prepend(newCard)

})