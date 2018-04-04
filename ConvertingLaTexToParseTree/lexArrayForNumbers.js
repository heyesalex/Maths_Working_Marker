//This function should take an array, and collect any digits into numbers. e.g. [1, 2, +, 3] should become [12, +, 3]. 


function lexArrayForNumbers(arr){

    console.log("Lexing for Numbers");

    var length = arr.length;

    for(let i=0 ; i<length ; i++){

        if((arr[i] == "." && arr[i+1] && arr[i+1].match(/[0-9]/)) || arr[i].match(/[0-9]/)){

            console.log("Number Found at index "+i);

            var type = "Integer";
            var matchToHere = i; 

            //In case someone writes .25//
            if(arr[i] == "." && arr[i+1].match(/[0-9]/)){ 
                arr.splice(i, 0, "0");
                length = arr.length;
                console.log("Inserted leading zero to decimal");
            }
            ////


            //Search for the right place to end the number//
            for(let j=i+1 ; j<length ; j++){

                //Allowed one decimal point in a number - change type and skip to next digit
                if(arr[j] == "." && type == "Integer" && arr[j+1] && arr[j+1].match(/[0-9]/)){
                    type = "Decimal";
                    continue;
                }

                if(!arr[j].match(/[0-9]/)){
                    console.log("End of number found at "+j);
                    matchToHere = j-1;
                    break;
                }

                if(j == length-1 && arr[j].match(/[0-9]/)){
                    console.log("End of array found");
                    matchToHere = j;
                    break;
                }
            }

            var foundNumber = arr.splice(i, matchToHere - i + 1);
            foundNumber = foundNumber.join('');
            let token = new Token(type, foundNumber);
            arr.splice(i, 0, token);
            length = arr.length;
            i=i+1;
            console.log(arr);
        }
    }
    return arr;
}