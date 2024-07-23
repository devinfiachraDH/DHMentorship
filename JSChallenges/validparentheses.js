// function validParentheses(string) {

//     let brackets = {
//     "{" : 0,
//     "}" : 0,
//     "(" : 0,
//     ")" : 0,
//     "[" : 0,
//     "]" : 0,
// }

//     for (let i = 0; i < string.length; i++){
//         if (brackets[string[i]] !== undefined)
//         {
//             brackets[string[i]] += 1;
//         }
//     }


//     return Object.values(brackets).every()
// }

function validParentheses(string){

    let stack = [];

    let opening = ["{", "[", "("];
    let closing = ["}", "]", ")"];

    for (let i = 0; i < string.length; i++){
        if (opening.includes(string[i]))
        {
            stack.push(string[i]);
        }

        if (closing.includes(string[i]))
        {
            lastInStack = stack[stack.length - 1];
            
            if (opening.indexOf(lastInStack) === closing.indexOf(string[i]))
            {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;

}

console.log(validParentheses("([])(])()()([)]"))