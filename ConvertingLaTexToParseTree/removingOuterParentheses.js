function removingOuterParentheses(arr){
    var brackets = {
        open: undefined,
        close: undefined,
        stack: [],
        removeOuters: false
    }

    //Check the first character. 
    switch(arr[0]){
        case '(':
            brackets.open = '(';
            brackets.close = ')';
            brackets.removeOuters = true;
            break;
        case '{':
            brackets.open  = '{';
            brackets.close = '}';
            brackets.removeOuters = true;
            break;
        case '[':
            brackets.open  = '[';
            brackets.close = ']';
            brackets.removeOuters = true;
            break;
    }

    //If the first character was an open bracket, we need to start checking.
    if(brackets.open){

        //For each character, keep track of opening and closing brackets using a stack
        for(let i = 0 ; i < arr.length-1 ; i++){

            if(arr[i] == brackets.open){
                brackets.stack.push(arr[i]);
            }
            
            if(arr[i] == brackets.close){
                if(brackets.stack.length!==0 ){
                    brackets.stack.pop();
//                } else {
//                    //If the stack is empty when you reach a closed bracket, there's an unmatched bracket somewhere. Throw an error. 
//                    console.log('Unmatched parentheses');
//                    throw SyntaxError('Unmatched parentheses');
                }
            }

            //If we find the stack is empty before the end, all the brackets are closed - there are no outer brackets to remove. Stop checking!            
            if(brackets.stack.length == 0){
                brackets.removeOuters = false;
                console.log('No outer brackets');
                break;
            }
            
        }
        
        //This all handled unmatched parens, but something else has already done that... do we need it here?
//        if(brackets.stack.length!==0){
//            console.log('Unmatched Parenthesis');
//            throw SyntaxError('Unmatched Parenthesis');
//        }
                
        if(brackets.removeOuters && arr[0] == brackets.open && arr[arr.length-1] == brackets.close){
            arr.pop();
            arr.shift();
            console.log('Outer brackets removed');
        }
    }
    
    return arr;
}