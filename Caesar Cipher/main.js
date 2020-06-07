function rot13(str) {
    var solution = "";
    for(var i=0;i<str.length;i++) {
        var ascii = str[i].charCodeAt();
        if(ascii >= 65 && ascii <=77) {
            solution += String.fromCharCode(ascii + 13);
        }
        else if(ascii >= 78 && ascii <= 90) {
            solution += String.fromCharCode(ascii - 13);
        }
        else {
            solution += str[i];
        }
    }
    return solution;
}

console.log(rot13("SERR PBQR PNZC"));