module.exports = function reverse (n) {
    
    let line = +Math.abs(n).toString();
    let reverseLine = line.split('').reverse().join('');
    return (reverseLine);

}