//Задание 1

function getSolutions(a,b,c){
    let d = b ** 2 - 4 * a * c;
    let x1, x2;
    
    if ( d > 0 ) {
        x1 = (- b + Math.sqrt(d)) / ( 2 * a);
        x2 = (- b - Math.sqrt(d)) / ( 2 * a);
    } else if ( d === 0 ) {
        x1 = (- b + Math.sqrt(d)) / ( 2 * a);
    }

    return {
        D: d,
        roots: [x1,x2]
        }
    }

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    
    if (result.D < 0) 
        console.log('Уравнение не имеет вещественных корней');
    else if (result.D === 0)
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    else 
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
}

//Задание 2

function getAverageMark(arr) {
	let sumMark = 0;
	for (i = 0; i < arr.length; i++) {
		sumMark += arr[i];
	}
return sumMark/arr.length;
}

function getAverageScore(data) {
    let arrAverage = [];
    let averageScore = {};
    
    for (let prop in data) {
        averageScore[prop] = getAverageMark(data[prop]);
        arrAverage.push(getAverageMark(data[prop]));         
    }
    averageScore.average = getAverageMark(arrAverage);
    
    return averageScore;
}



