'use strict';

// Восстановить порядок книг

const booksList = document.querySelectorAll('.book');

booksList[0].before(booksList[1]);
booksList[3].before(booksList[4]);
booksList[5].after(booksList[2]);

// Заменить картинку заднего фона на другую из папки image

const body = document.body;
body.style.backgroundImage ='url(./image/closed_book.jpg)';

// Исправить заголовок в книге 3

const secondHeaderList = document.querySelectorAll('a');

secondHeaderList[2].innerHTML = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы

const adv = document.querySelector('.adv');

adv.remove();

// Восстановить порядок глав во второй и пятой книге

const liListOfBook2 = booksList[0].querySelectorAll('li');

liListOfBook2[3].after(liListOfBook2[6]);
liListOfBook2[6].after(liListOfBook2[8]);
liListOfBook2[9].after(liListOfBook2[2]);

const liListOfBook5 = booksList[5].querySelectorAll('li');

liListOfBook5[4].after(liListOfBook5[2]);
liListOfBook5[1].after(liListOfBook5[9]);
liListOfBook5[7].after(liListOfBook5[5]);

// В шестой книге добавить главу

const liListOfBook6 = booksList[2].querySelectorAll('li');

liListOfBook6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');