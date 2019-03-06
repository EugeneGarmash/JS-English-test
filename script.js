var doc = document,
          startButton = document.querySelector('.main__start-quiz'),
          cardsContainer = document.querySelector('.main__questions'),
          startOverButton = document.querySelector('.main__start-over'),
          getResultsButton = document.querySelector('.main__get-results'),
          resultsPopup = document.querySelector('.modal__results'),
          overlay = document.querySelector('.modal__overlay'),
          resultsClose = document.querySelector('.modal__close');


// функция для создания элементов
function makeElement(tagName, className, text) {
    if (tagName) { var element = document.createElement(tagName); }
    if (className) { element.classList.add(className); }
    if (text) { element.textContent = text; }
  return element;
}

// при нажатии на "Начать", добавляю карточки с нужным содержимым (цвет - random), скрываю начальную кнопку, показываю кнопки результата и "начать сначала". Если текста много - делаю шрифт меньше.
startButton.addEventListener('click', function() {
  for (var i = 0; i < questions.length; i ++) {
    // создаю карточку, даю ей класс и задаю цвет
    var card = makeElement('li', 'main__card', false);
    var cardColor = colors[Math.floor(Math.random() * (colors.length - 1 + 1))];
    card.style.backgroundColor = cardColor;
    // создаю вопрос; если много текста, делаю его лучше
    var cardQuestion = makeElement('h3', false, questions[i][0]);    
    if (questions[i][0].length > 45) {
      cardQuestion.style.fontSize = '1.05rem';
    }
    // создаю список, элементы списка, радиоКнопки и Label'ы
    var list = document.createElement('ul');
    for (var j = 0; j < questions[i][1].length; j ++) {
      var listElem = document.createElement('li');
      var radioLabel = makeElement('label', false, questions[i][1][j]);
      var radioButton = document.createElement('input');
      radioButton.setAttribute('type', 'radio');
      radioButton.setAttribute('name','card' + i);
      radioButton.setAttribute('value', '' + j);
      // помещаю элементы списка их их эллемнты друг в друга, уменьшаю текст, если его много
      radioLabel.appendChild(radioButton);
      listElem.appendChild(radioLabel);
      list.appendChild(listElem);
      if (questions[i][1][j].length > 45) {
        listElem.style.fontSize = '0.9rem';
      }
    }
    // помещаю вопрос и список в card, а card в контейнер,
    card.appendChild(cardQuestion);
    card.appendChild(list);
    cardsContainer.appendChild(card);
  } 
  // убираю кнопку "Начало", показываю кнопки внизу страницы
  startButton.style.display = 'none';
  getResultsButton.style.display = 'flex';
  startOverButton.style.display = 'flex';
});


// при нажатии на "начать сначала" убираю кнопки внизу страницы, стираю карточки и показываю начальную кнопку
startOverButton.addEventListener('click', function() {
  var cardList = cardsContainer.getElementsByClassName('main__card');
  for (var i = cardList.length - 1; i > -1; i --) {
    cardsContainer.removeChild(cardList[i]);
  }
  // также можно очистить карточки вот так: cardsContainer.innerHTML = ''; 
  startButton.style.display = 'flex';
  getResultsButton.style.display = 'none';
  startOverButton.style.display = 'none';
});


// при нажатии на "результаты":
//   - с помощью цикла смотрю отмечен ли нужный радиоБаттон в каждой карточке. Порядковый номер отмеченного радиоБаттона в карточке должен соответствовать значению в массиве с ответами. При правильном ответе увеличивать счётчик на один.
//   - если ответ неправильный, то запоминаю вопрос и ответ
//   - показываю вспдывающее окно: уровень + количество баллов + выводить вопросы, на которые ответил не правильно. 
getResultsButton.addEventListener('click', function() {
  var counter = 0;
  var incorrectAnswers = [];
  var cardList = cardsContainer.getElementsByClassName('main__card');
  
  // проверяю, отмечены ли нужные радиоКнопки 
  for (var i = 0; i < cardList.length; i ++) {
    var inputList = cardList[i].querySelectorAll('input');
    var mistakeQuestion = questions[i][0];
    var mistakeAnswer = questions[i][1][answers[i]];
    if (inputList[answers[i]].checked) {
      counter ++;
    } else {
      incorrectAnswers.push('"' + mistakeQuestion + '" is incorrect. The answer is "' + mistakeAnswer + '".');
    }
  }

  // шаблон для вывода уровня пользователя
  var resultsMessage = makeElement('p', 'modal__message', false);
  switch (true) {
    case (counter <= 7): 
      resultsMessage.textContent = 'You’ve got/scored ' + counter + ' points. You’re a noobie, keep stuyding.';
      break;
    case (counter > 7 && counter < 15): 
      resultsMessage.textContent = 'Your result is ' + counter + ' points. You’re a Junior English developer.';
      break;
    case (counter >= 15 && counter <= 25):
      resultsMessage.textContent = 'You’ve got/scored ' + counter + ' points. God bless you, you’re a Middle English Developer.';
      break;
    case (counter > 25 && counter < 29):
      resultsMessage.textContent = 'You’ve got/scored ' + counter + ' points. Congrats! Senior English Developer is who you are.';
      break;
    default:
      resultsMessage.textContent = 'You’ve got/scored ' + counter + ' points and maaaan I wish I were you. The sky is the limit for you.';
      break;
  }
  resultsPopup.appendChild(resultsMessage);

  // создаю список, добавляю в него неправильные ответы
  var mistakeList = document.createElement('ul');
  mistakeList.style.listStyle = 'disc inside none';
  for (var i = 0; i < incorrectAnswers.length; i ++) {
    var resultsMistake = makeElement('li', false, incorrectAnswers[i]);
    resultsMistake.style.marginBottom = '1%'; 
    mistakeList.appendChild(resultsMistake);
  }
  resultsPopup.appendChild(mistakeList);

  // показываю окно, overlay и кнопку
  resultsPopup.classList.toggle('modal__results--shown');
  overlay.style.display = 'flex';
  resultsClose.style.display = 'inline';
});


// общая функция для закрытия Модального Окна
function closePopup() {
  resultsPopup.classList.toggle('modal__results--shown');
  overlay.style.display = 'none';
  resultsClose.style.display = 'none';
  // удаляю список ошибок, потом список и сообщение
  var mistakeList = resultsPopup.querySelector('ul');  
  var mistakesToDelete = mistakeList.querySelectorAll('li');
  for (var i = mistakesToDelete.length - 1; i > -1; i --) {
    mistakeList.removeChild(mistakesToDelete[i]);
  }
  resultsPopup.removeChild(mistakeList);
  resultsPopup.removeChild(resultsPopup.querySelector('p'));
}

resultsClose.addEventListener('click', function() {
  closePopup();
});
// событие кнопке закрытия можно не задавать, так как она находится вне окна (а клик вне окна будет закрывать окно)
overlay.addEventListener('click', function() {
  closePopup();
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && resultsPopup.classList.contains('modal__results--shown')) {
    evt.preventDefault();
    console.log('aefv');
    closePopup();
  }
});
