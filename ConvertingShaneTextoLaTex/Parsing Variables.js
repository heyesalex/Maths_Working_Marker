function parseVariables(array){
    for(i = 0 ; i<array.length ; i++){
    //Remove EP variables contained in {}'s
        if(array[i]=='{'){
            for(j=i+1; j<array.length ; j++){
                if(array[j]=='}'){
                    v = array.slice(i, j+1);
                    v = '\\var'+v.join('');
                    array.splice(i+1, j-i);
                    array[i] = v;
                    console.log(array);
                    i--;
                    break;
                }
            }
        }
    }
}