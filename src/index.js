module.exports = function reverse (n) {
    let newLine = +Math.abs(n);
    return newLine.toString().split('').reverse().join('');
}