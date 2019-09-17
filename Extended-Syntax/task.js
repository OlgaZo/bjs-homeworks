"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let d = b ** 2 - 4 * a * c;
    let x1, x2;
    let x = [];
    
    if ( d > 0 ) {
      x1 = (- b + Math.sqrt(d)) / ( 2 * a);
      x2 = (- b - Math.sqrt(d)) / ( 2 * a);
      x = [x1, x2];
    } else if ( d === 0 ) {
      x1 = (- b + Math.sqrt(d)) / ( 2 * a);
      x = [x1];
    } else {
      x = [];
    }

    return [x];       
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    
    if (marks.length > 5) {
      console.log(`Количество оценок ${marks.length}, введите не более 5 оценок`);
      marks = marks.slice(0, 5);
    } 

    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
      sumMarks += marks[i];
    }

    return sumMarks / marks.length;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result;

    if (age > 18) {
      result = 'Не желаете ли олд-фэшн, ' + name;
    } else {
      result ='Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
    }

    console.log(result);
    return result;
}
