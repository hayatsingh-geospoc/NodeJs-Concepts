function removeFirstRepeated(arr) {
    let seenNumbers = {};

    for (let i = 0; i < arr.length; i++) {
        if (!seenNumbers[arr[i]]) {
            seenNumbers[arr[i]] = true;
        } else {
            arr.splice(i, 1);
            break;
        }
    }

    return arr;
}

let arr = [1, 2, 3, 3, 2, 2, 2, 3, 2, 3, 4, 5, 3];
let modifiedArr = removeFirstRepeated(arr);
console.log(modifiedArr);
