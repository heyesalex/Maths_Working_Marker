//Note: Parsing \frac is annoying. I think I'll handle it in the Lexer instead. 

function parseUsingBedmas(node){

    let bracketsStack = [];
    let areWeInsideBrackets = false;
    let operatorsPresent = [];


    //    Collect all the operators not inside brackets, along with their positions    
    for( let i = 0 ; i < node.data.length ; i++){

        //Keep track of brackets with a stack
        if(openBrackets.includes(node.data[i])){
            bracketsStack.push({index: i, operator: node.data[i]});

            areWeInsideBrackets = true;
        }
        
        if(closeBrackets.includes(node.data[i]) && bracketsStack.length !== 0){
            bracketsStack.pop();

            if(bracketsStack.length == 0){
                areWeInsideBrackets = false;
            }
        }

        //If outside brackets, and an operator is found, store it and its position.
        if(allOperators.includes(node.data[i]) && !areWeInsideBrackets){
            operatorsPresent.push({index: i, operator: node.data[i]});
        }
    }
    

    //Call function to find 'first' operator. If none found, splittingOperator=FALSE
    let splittingOperator = findFirstOperatorUsingBEDMAS(operatorsPresent);

    
    if(splittingOperator){

        node1 = new Node(node.data.slice(0, splittingOperator.index));
        node2 = new Node(node.data.slice(splittingOperator.index+1));

        console.log(node1.data);


        if(node1.data.length == 0){
            node1.data = ['0'];
        }

        node.children.push(node1, node2);

        node.data = [splittingOperator.operator];

        for(let i = 0 ; i < node.children.length ; i++){
            node.children[i].parent = node;
        }

        console.log('Parsed at ' + splittingOperator.operator+ ' symbol');
        return node;
    } else {
        //Do other things, like removingOuterParentheses() or search for functions to crack open
        console.log('No Operators Found');
    }
}

//Does what it says on the tin, looping through -, +, * ,/, ^
function findFirstOperatorUsingBEDMAS(arr){

    //Search for - signs    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].operator === '-'){
            return {index:arr[i].index, operator: '-'};
        }
    }

    //Search for + signs
    for(let i = 0 ; i < arr.length ; i++){

        if(arr[i].operator === '+'){
            return {index:arr[i].index, operator: '+'};
        }
    }

    //Search for * signs
    for(let i = 0 ; i < arr.length ; i++){

        if(multSymbols.includes(arr[i].operator)){
            return {index:arr[i].index, operator: '*'};
        }
    }

    for(let i = 0 ; i < arr.length ; i++){

        if(divSymbols.includes(arr[i].operator)){
            return {index:arr[i].index, operator: '/'};
        }
    }

    for(let i = 0 ; i < arr.length ; i++){

        if(arr[i].operator === '^'){
            return {index:arr[i].index, operator: '^'};
        }
    }
    return false;
}