function lexForLatex(arr){

    for(let i=0 ; i<arr.length; i++){

        //If you find the symbol \ with letters after it, compress to a single string (see parseArrayForWholeNumbers)

        if(arr[i] == '\\'){

            for(let j=i ; j<arr.length ; j++){


                if(!arr[j].match(lettersRegex)){
                    let macro = 
                    arr.splice()
                }

            }

            //For those we do recognise, especially \frac, convert to a standard form (/, * etc)
            //If you find a single \ wiht no text, assume they wanted a fraction /
        }
    }