document.addEventListener('DOMContentLoaded', function() {
    //ready function
    let slowMath = (function() {
        const wait = (delay) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, delay);
            });
        };
    
        function add(a, b) {
            return wait(1000)
            .then(() => {
                return negativeCheck(a, b);
            }).then((shouldResolve) => {
                if (shouldResolve) {
                    return Promise.resolve(+a + +b);
                } else {
                    return Promise.reject(new Error(`Error adding values ${a} and ${b}.`));
                }
            });
        }
    
        function subtract(a, b) {
            return wait(1000)
            .then(() => {
                return negativeCheck(a, b);
            }).then((shouldResolve) => {
                if (shouldResolve) {
                    return Promise.resolve(a - b);
                } else {
                    return Promise.reject(new Error(`Error subtracting values ${a} and ${b}.`));
                }
            });
        }
    
        function multiply(a, b) {
            return wait(1000)
            .then(() => {
                return negativeCheck(a, b);
            }).then((shouldResolve) => {
                if (shouldResolve) {
                    return Promise.resolve(a * b);
                } else {
                    return Promise.reject(new Error(`Error multiplying values ${a} and ${b}.`));
                }
            });
        }
    
        function divide(a, b) {
            return wait(1000)
            .then(() => {
                return negativeCheck(a, b);
            }).then((shouldResolve) => {
                if (+b === 0) {
                    return Promise.reject(new Error('Cannot divide by zero.'));
                } else if (shouldResolve) {
                    return Promise.resolve(a / b);
                } else {
                    return Promise.reject(new Error(`Error dividing ${a} by ${b}.`));
                }
            });
        }
    
        function remainder(a, b) {
            return wait(1000)
            .then(() => {
                return negativeCheck(a, b);
            }).then((shouldResolve) => {
                if (+b === 0) {
                    return Promise.reject(new Error('Cannot divide by zero for remainder.'));
                } else if (shouldResolve) {
                    return Promise.resolve(a % b);
                } else {
                    return Promise.reject(new Error(`Error dividing ${a} by ${b} for remainder.`));
                }
            });
        }
    
        function negativeCheck(a, b) {
            return a > -1 && b > -1;
        }
    
        return { add, subtract, multiply, divide, remainder };
    })();
        slowMath.add( 6, 2 )
        .then ((sum) => {
            console.log(`Sum of 6 and 2 is ${sum}`);
            return slowMath.multiply(sum, 2)    //Multiply by 2
        })  .then ((product) => {
            console.log(`Multiply that result by 2 and you get ${product}`);
            return slowMath.divide(product, 4)  //Divide by 4
        })  .then ((quotient) => {
           console.log(`Divide that  result by 4 and you get ${quotient}`);
            return slowMath.subtract(quotient, 3) //Subtract by 3
        })  .then ((difference) => {
            console.log(`Subtract 3 from that result and you get ${difference}`);
            return slowMath.add(difference, 98) //Add 98
        })  .then ((sum) => {
            console.log(`Add 98 to that result and you get ${sum}`);
            return slowMath.remainder(sum, 2) //Remainder of dividing by 2
        })  .then ((remainder) => {
           console.log(`divide rsult by 2 and get ${remainder}`);
            return slowMath.multiply(remainder, 50) //Multiply by 50
        })  .then ((product) => {
            console.log(`Add 50 to that result to get ${product}`);
            return slowMath.remainder(product, 40) //Remainder of dividing by 40
        })  .then ((remainder) => {
            console.log(`The remainder after dividing the number by 40 is ${remainder}`);
            return slowMath.add(remainder, 32) //Add 32
        })  .then ((sum) => {
           console.log(`Add 32 to the result to get ${sum}`); //print final answer
            console.log(`The final result of these operations is ${sum}!`); //Console log final result
        })
    
            //Add error catch all function
            .catch((err) => {
                console.log('There has been an issue!');
                console.log(err);
            })
    
    $('.gotcha').click(function(){
        console.log('HAHAHAHH I HAVE YOUR INFO')
    })
    
    
    })