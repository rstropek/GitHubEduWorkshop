exports.add = function (x, y) {
    return x + y;
}

exports.sub = function (x, y) {
    return x - y;
}

exports.sumOfPositiveNumbers = function (upperLimitInclusive) {
    let result = 0;
    for (let i = 0; i <= upperLimitInclusive; i++) {
        result += i;
    }

    return result;
}
