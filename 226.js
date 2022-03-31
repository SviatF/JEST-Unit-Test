function MassN(m,n){
    let i =1;
    mass=[];
    while(i<(m*n)){
        if(m % i === 0&&n%i === 0){
            mass.push(i);
        }
        i++;
    }
    
    return mass;
}

module.exports = MassN;