// function multiPurposeFunction(action){
//     if (action){
//         console.log(action(3));        
//     }
// }

// function exampleNonAnonymFunction(param){
//     return param*param;
// }

// function frameFunction(){
//     // this function call shows an example,
//     // but it is not using anonym functions
//     multiPurposeFunction(exampleNonAnonymFunction);
//     multiPurposeFunction((param) => {return param * param})
//     // write your code here
// }

// frameFunction();


function multiPurposeFunction(action) {
    if (action) {
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));
    }
}

function frameFunction() {
    // Write your code here
    multiPurposeFunction((param1, param2) => {
        if (!param1) {
            return param2
        }
        else{
            return param1 + ' ' + param2
        }
    })
}

frameFunction();