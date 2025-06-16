//revese the string

function reverseString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[str.length - 1 - i];
    }
    return result;
}

let str = reverseString("Hello");
console.log(str);
