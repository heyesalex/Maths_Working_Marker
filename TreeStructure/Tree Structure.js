var initial, n, t, stack, count;

function setup(){
    background(200);
    initial = 100;
    t = new Tree(initial);
    n = t.root;
    stack = [];
    
}

function draw(){

}



function mousePressed(){
    simpleParseTree(n);
    count = 1;
    n = t.root;
    countSubNodes(n);
    console.log(count);

}




function simpleParseTree(n){
    
    if(n.data > 1){
        n1 = new Node(floor(n.data/2))
        n2 = new Node(ceil(n.data/2))
        n.child = [n1, n2];
        for(let i = 0 ; i < n.child.length ; i++){
            n.child[i].parent = n;
        }
        
        for(let i = 0 ; i < n.child.length ; i++){
            simpleParseTree(n.child[i]);
        }        
    }
}


function countSubNodes(n){
    for(let i=0 ; i<n.child.length ; i++){
        count++;
        countSubNodes(n.child[i]);
    }
}


    //    expr = s.split('');
    //    let node = t.root;
    //parseIntoCharacters(expr)//This should "clean" the string into terms we understand. i.e. it should remove external brackets, make each entry a minimal "unit" (latex instruction, variable, number or operation, special strings or functions etc.)
    //    let stack = [];
