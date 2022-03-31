function sumN(n){
    let num= Number(n.toString().split('').reduce(function(a, b) {return +a + +b;}));


    return num;
               
}

module.exports = sumN;