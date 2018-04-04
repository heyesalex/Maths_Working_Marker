var t, button1, button2, ans, a;


function setup(){
    var buttonA = createButton('Lex Me!');
    buttonA.mousePressed(lexStringToArray);
    button1 = createButton('Tree Me!');
    button1.mousePressed(toParseTree);
    button2 = createButton('Write Me!');
    button2.mousePressed(WriteTreeAsString);
}

function toParseTree(){  
    
    t = new Tree(arr);
    let n = t.root;
    
    growTree(n);
    
    console.log(t);
}


var count = 0;
var i=0;

//This should contain everything needed to intelligently parse the original string into a tree. 
function growTree(n){
    
    //Clean the nodes data
    n.data = removingOuterParentheses(n.data);
    
    //Parse the node and give it children
    parseUsingBedmas(n);
    
    //Recurse
    for(let i=0 ; i < n.children.length ; i++){
        growTree(n.children[i]);
    }
}

//This rebuilds the nodes into a string, using appropriate brackets etc. To be compared with the saved results I guess? Preferably this is the ""final version", and it's on our side that we have the flexibility, but this needs to be thought through a lot more. 
function WriteTreeAsString(){
    if(typeof(t) == 'undefined'){
        return 'There Is No Tree, Only Do - or Do Not!';
    }
    let n = t.root;
    createP(stringNodesIntoBrackets(n));
}

