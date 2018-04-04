var p;
var shaneTex;
var chars;
var LaTex=[];
var output;

var operands = ['+', '-', '\\div', '\\times'];

//Note to Self - functions like sin, constants like e and pi need to be handled with care. 

function setup(){
    noCanvas();
    background(200, 0, 100, 50);
    
    createP('');
    
    shaneTex = createElement('textarea', '2+3/4-5');
    inputText = shaneTex.value();
    
    createP('');
    
    startConversion = createButton('Convert')
    
    startConversion.mousePressed(convertShaneTex);
    
    createP('');
    
    output = createElement('textarea', '');
}

function draw(){
}

function convertShaneTex(){
    let s=shaneTex.value();
    convert(s);
}

//variables =[];

function convert(s){
    chars = s.split('');
    
//    parseVariables(chars);
    
    parseNumbers(chars);
    
//    for(i=0 ; i<chars.length ; i++){
//        
//        if(chars[i]=='/'){
////            let numerical = true;
//            for(j=i-1 ; j>=0 ; j--){
//                
//                if(operands.includes(chars[j])){
//                    let num = chars.slice(j+1, i);
//                    num = `\\frac{`+num.join('')
//                    chars.splice(j+1, i-j-1);
//                    chars[j+1] = num;
//                    console.log(chars);
//                    i--;
//                    break;                    
//                }
//            }
//            
//            for(j=i+1 ; j<chars.length ; j++){
//                if(operands.includes(chars[j])){
//                    let denom = chars.splice(i+1, j-i-1);
////                    console.log(denom);
//                }
//            }
//                
//                if(chars[i] == '}{'){
//                    break;
//                }
//                
//                if(chars[i] == '\\frac'){
//                    break;
//                }
//                
//                if(isNaN(chars[i]) ){
//                   numerical = false;
//                   }
//                
//                if()
//        }
//        //Remove EP variables contained in {}'s
//        if(chars[i]=='{'){
//            for(j=i+1; j<chars.length ; j++){
//                if(chars[j]=='}'){
//                    v = chars.slice(i, j+1);
//                    v = '\\var'+v.join('');
//                    chars.splice(i+1, j-i);
//                    chars[i] = v;
//                    console.log(chars);
//                    i--;
//                    break;
//                }
//            }
//        }
//
//        if(chars[i]=='*'){
//            chars[i] = '\\times';
//        }
//
//        if(chars[i]=='÷'){
//            chars[i] = '\\div';
//        }
//
//    }
    let l=chars.join('');
    output.html(l);
}
