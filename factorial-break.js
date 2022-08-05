let factorial = 1;
let i = 1;
let numero = 10;

while(true){
    factorial *= i;
    i++;
    if( i === numero ){
        break;
    }
}


console.log(factorial);