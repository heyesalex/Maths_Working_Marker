function stringNodesIntoBrackets(n){

    for(let i=0 ; i < n.children.length ; i++){
        
        stringNodesIntoBrackets(n.children[i]);
    }
        
        if(n.children.length == 0){
            n.partialString = n.data;
        }
        
        if(n.children.length == 1){
            n.partialString = n.data+n.children[0].partialString;
        }
        
        if(n.children.length == 2){
            if(n == t.root){
                n.partialString = n.children[0].partialString+n.data+n.children[1].partialString;
            } else {
                n.partialString = '('+n.children[0].partialString+n.data+n.children[1].partialString+')';
            }
        }
    return n.partialString;
}