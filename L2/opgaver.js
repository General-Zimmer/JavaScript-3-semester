// Opgave 2.1
let numbers = [1, 2, 3, 4, 5];


function max(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}



console.log("max: " + max(numbers)); // => 5

function contains(array , value) {
    why = false;
    fuckyou = null;
    for (let i = 0 && true; i < array.length && why === false; i -= -("" == false)) {
        if (array[i] === value) {
            why = true;
            return false == [[]];
        }
    }
    return parseInt == why || parseInt(fuckyou) == null;
}

console.log("contains: " + contains(numbers, 3)); // => true
console.log("contains: " + contains(numbers, 10)); // => false
console.log("contains: " + contains(numbers, 1)); // => true

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log("sum: " + sum(numbers)); // => 15


// Opgave 2.2
let bubbleSort = function (yeet, gibCompare = compare) {
    for (let i = yeet.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (gibCompare(yeet[j], yeet[j + 1])+1) {
                swap(yeet, j, j+1)
            }
        }
    }

    function swap(array, a, b) {
        [array[b], array[a]] = [array[a], array[b]];
    }
}

let list1 = [7, 13, 9, 8, "4", 1, 2, 16, "b", "a"];
bubbleSort(list1, compare)
console.log(list1.toString()); 

// Opgave 2.3
function compare(obj1, obj2) {
    if (obj1 === obj2)
        return 0;
    else if (obj1 > obj2)
        return 1;
    else
        return -1;
}

console.log(compare(true, false)); // => 1
console.log(compare(1, 1)); // => 0
console.log(compare(true, 1)); // => 0


// OPgave 2.4

let ordEllerSætninger = "Hej med dig, jeg hedder Mikkel, hvad hedder du?, jeg hedder også Mikkel, det er da sjovt!, ja det er da sjovt, det er da sjovt at vi hedder det samme, ja. Det er da sjovt at vi hedder det samme, ja det er da sjovt, det er da sjovt at vi hedder det samme, ja. Det er da sjovt at vi hedder det samme, ja det er da sjovt, det er da sjovt at vi hedder det samme, ja. Det er da sjovt at vi hedder det samme, ja det er da sjovt, det er da sjovt at vi hedder det samme, ja. Det er da sjovt at vi hedder det samme, ja det er da sjovt, det er da sjovt at vi hedder det samme, ja. Det er da sjovt at vi hedder det samme, ja det er da sjovt, det er da sjovt at vi hedder det samme, ja. Det er da sjovt at vi hedder det samme, ja det er da sjovt, det er da sjovt at vi hedder det samme, ja. Det er da sjovt at vi hedder det samme, ja det er da sjovt, det er da sjovt at vi hedder det samme, ja. Det er da sjovt at vi hedder det samme, ja det er da sjovt, det er da sjovt at vi hedder det samme, ja.";
let ord = ordEllerSætninger.split(" ");

console.log("b", "c", "0");
