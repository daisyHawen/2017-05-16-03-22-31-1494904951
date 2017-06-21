const digit = require('./numbers.js').numbers
module.exports = function main(number) {
    let input = number.toString();
    const inputArr = input.split("");
    let output = []
    for (let i = 0; i <= inputArr.length; i++) {
        let numDigit = digit[parseInt(inputArr[i])];
        output.push(numDigit);
    }
    let str = myprint(output)
    console.log(str)
    return str;
};
var myprint = (arr) => {
    let newArr = [
        [],
        [],
        []
    ];
    let index = 0;
    while (index < 3) {
        for (let i = 0; i < arr.length - 1; i++) {
            let curArr = arr[i];
            newArr[index].push(curArr[index])
        }
        index += 1;
    }
    let str = "";
    for (var i = 0; i < newArr.length; i++) {
        let temp = newArr[i].join(" ")
        str = str + temp + "\n";
    }
    return str;
}