const max_safe = Number .MAX_SAFE_INTEGER; 
const prompt = require("prompt-sync")();

//arithmetic 
var sum_to_n_a = function (n){ 

    if(!Number.isInteger(n)){ 
        return "Input should be an integer"; 
    }

    if(n<0){ 
        let result = (n*(1-n))/2; 
        if(result <max_safe){ 
            return (n*(1-n))/2; //negative n
        }
        else{ 
            return "Result should be less than Number .MAX_SAFE_INTEGER "; 
        }
    }

    else{ 
        let result = (n*(n+1))/2;
        if(result <max_safe){ 
            return (n*(n+1))/2; //positive n 
        }
        else{ 
            return "Result should be less than Number .MAX_SAFE_INTEGER "; 
        }

    }
}

var sum_to_n_b = function (n){ 

    if(!Number.isInteger(n)){ 
        return "Input should be an integer"; 
    }

    let result; 

    if(n<0){ 
       result = (n*(1-n)) / 2; //negative n 
    }
    else{
        result = (n*(n+1)) /2; //positive n 
    }

    if(result <max_safe){ 
        return result; 
    }
    else{ 
        return "Result should be less than Number .MAX_SAFE_INTEGER "; 
    }

}

//looping
var sum_to_n_c = function (n){ 

    if(!Number.isInteger(n)){ 
        return "Input should be an integer"; 
    }

    let result=0; 
    for(let i=1; i<=n; i++){ 
        result+=i; 
        if(result>= max_safe){ 
            return "Result exceeds Number.MAX_SAFE_INTEGER"; 
        }
    }
    return result; 
  
}
/*let userInput_c = prompt ("Enter a number_c: ");
let number_c = parseInt(userInput_c,10)
const result_c = sum_to_n_c(number_c); 
console.log("The sum is : " + result_c); */

let userInput_b = prompt ("Enter a number_b: ");
let number_b = parseInt(userInput_b,10)

const result_b = sum_to_n_b(number_b); 
console.log("The sum is : " + result_b); 

let userInput_a= prompt ("Enter a number_a: ");
let number_a= parseInt(userInput_a,10)

const result_a = sum_to_n_a(number_a); 
console.log("The sum is : " + result_a); 

