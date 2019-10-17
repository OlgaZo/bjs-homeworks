function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
            
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== i) {
            return false;
        }      
    }

    return true;
}

function memoize(fn, limit) {

}

console.log(compareArrays([8, 1, 2], [8, 1, 2]))
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]))