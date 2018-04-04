function lexStringToTokenArray(string){
    console.log("Lexing");   
    
    var arr = [];    
    
    arr = string.split('');
    
    arr = lexArrayForNumbers(arr);
    
    return arr;
}