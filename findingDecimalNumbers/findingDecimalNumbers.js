var margin = 20;
var textSpacing = 20;
var largeHeight = 50;
var largeWeight = 5;
var Black = {
    R: 0,
    G: 0,
    B: 0
};

var unitsArray = [];
var divisionsTotal = 10;
var tenthsArray = [];
var hundredthsArray = [];
var thousandthsArray = [];



function setup(){
    createCanvas(400, 200);
    textSize(24);
    textAlign(CENTER);
    
    
    var numberLineLength = width-2*margin;
    let spacing = numberLineLength/divisionsTotal;

    for(let i = 0 ; i < divisionsTotal ; i++){
        
        let d = new Division(margin+i*spacing, height/2, largeHeight, largeWeight, Black, i.toString(), textSpacing);
        unitsArray.push(d);
    }

    
    
}

function draw(){
    background(200,200,230);
        
    push();
    strokeWeight(10);
    stroke(100, 0, 0);
    line(0, height/2, width, height/2);
    pop();
    
    
    for(i = 0 ; i < unitsArray.length ; i++){
        unitsArray[i].showLine();
        unitsArray[i].showText();
    }
    
}


function mousePressed(){
    
    for(i = 0 ; i<unitsArray.length ; i++){
        unitsArray.x = unitsArray.x + 1;
        
    }
    
}


