// bubbleSort.js

// Opgave 1.2
let bubbleSort = function (yeet) {
    for (let i = yeet.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (yeet[j] > yeet[j + 1]) {
                let temp = yeet[j];
                yeet[j] = yeet[j+1];
                yeet[j+1] = temp;
            }
        }
    }
}
let list1 = [7, 13, 9, 8, 4, 1, 2, 16, 0];
bubbleSort(list1)
console.log(list1.toString()); // => 0,1,2,4,7,8,9,13,16

let list2 = ["y", "g", "b", "a", "k", "j"];
bubbleSort(list2)
console.log(list2.toString()); // => a,b,g,j,k,y

// OPGAVE 1.3
let binaryFind = function (array, target) {
    let left = 0;
    let right = array.length-1;
    let index = -1;

    while (index == -1 && left <= right) {
        let mid = parseInt((left + right) / 2);
        if (array[mid] == target) {
            index = mid;
        } else if (array[mid] > target) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return index;
}

console.log(binaryFind(list1, 4));


let mergeSort = function (l1, l2) {
    let i1 = 0;
    let i2 = 0;
    let arr = []
    while (i1 < l1.length && i2 < l2.length) {

        if (l1[i1] < l2[i2]) {
            arr.push(l1[i1]);
            i1++;
        } else {
            arr.push(l2[i2]);
            i2++;
        }
    }

    let arr2 = i1 < l1.length ? l1 : l2;
    for (let i = i1 < l1.length ? i1 : i2; i < arr2.length; i++) {
        arr.push(arr2[i]);
    }


    return arr;
}

let array1 = [2, 5, 8, 10]
let array2 = [1, 3, 4, 6, 9]
console.log(mergeSort(array2, array1).toString());