function parseNumbers(array){
    for(i = 0 ; i<array.length ; i++){
    //Remove EP variables contained in {}'s
        if(!isNaN(array[i]) || array[i].includes('\\var')){
            for(j=i+1; j<array.length ; j++){
                if(isNaN(chars[i]) && !array[i].includes('\\var')){
                    v = array.splice(i, j-i-1);
                    array.splice(i, 0, v);
                    console.log(array);
                    break;
                }                
            }
        }
    }
}