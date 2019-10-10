function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь

    let birthDate = new Date(birthday.slice(0,4), birthday.slice(5,7)-1, birthday.slice(8,10));
    let age = (Date.now() - +birthDate) / ((31536000000*3+31622400000)/4);

    return (age > 18);
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь

    const sound = animal.sound;

    if (animal === undefined)
        return null;
    else 
        return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    
    let sumMarks = 0;
	for (i = 0; i < marks.length; i++) {
		sumMarks += +marks[i];
    }
    
    return Math.round(sumMarks/marks.length);
}