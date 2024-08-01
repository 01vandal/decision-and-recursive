
function isLeap(year) {
    if (year%4===0 && year%100!==0) return true
    if (year%400===0) return true
    return false
}



console.log(isLeap(2004));
console.log(isLeap(1904));
console.log(isLeap(1900));
console.log(isLeap(2000));


