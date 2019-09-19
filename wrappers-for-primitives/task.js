'use srtict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    if (isNaN(Number(percent))) {
        totalAmount = `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (isNaN(Number(amount))) {
        totalAmount = `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    } else if (isNaN(Number(contribution))) {
        totalAmount = `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
    } else {
    let creditPeriod = ( (Number(date.substring(0,4)) - new Date().getFullYear() ) * 12) +  Number(date.substring(5,7)) - new Date().getMonth();
    let creditSum = Number(amount) - Number(contribution);
    let paymentMonth = creditSum * (percent / 1200 + percent  / 1200 / (((1 + percent / 1200) ** creditPeriod) - 1));
    totalAmount = paymentMonth * creditPeriod;  
    }
    
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    greeting = (!!name === false) ? 'Привет, мир! Меня зовут Аноним.' : `Привет, мир! Меня зовут ${name}.`;
    return greeting;    
}