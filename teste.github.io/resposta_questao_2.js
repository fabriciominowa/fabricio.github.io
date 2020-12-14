
var a = [1,2,3,4,5];
var b = ["JavaScript",">","All"];

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;


hasDuplicates(a);//true
hasDuplicates(b);//false
}