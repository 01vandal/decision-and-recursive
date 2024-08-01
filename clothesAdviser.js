
function advisor(temp, isRainy) {
    const isHot = temp>30? true: false
    if (isHot && isRainy) return "Ambrella"
    else if (isHot && !isRainy) return "T-shirt"
    else if (!isHot && isRainy) return "Long coat"
    else return "sweaters"
}

console.log(advisor(15, true));
console.log(advisor(40, false));
console.log(advisor(39, true));
console.log(advisor(10, false));

