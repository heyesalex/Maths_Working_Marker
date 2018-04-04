class Division{
    
    constructor(x, y, length, weight, col, text, textSpacing){
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.length = length;
        this.col = col;
        this.textSpacing = textSpacing;
        this.highlight = false;
        
        if(!text){
            this.text = '';
        } else {
            this.text = text;
        }
    }
    
    showLine(){
        strokeWeight(this.weight);
        stroke(this.col.R, this.col.G, this.col.B);
        line(this.x, this.y-(this.length/2), this.x, this.y+(this.length/2));
    }
    
    showText(){
        
        if(this.highlight){
            strokeWeight(3);
            stroke(0, 153, 0);
        } else {
            strokeWeight(1);
            stroke(0);
        }        
        text(this.text, this.x, this.y-this.length/2-this.textSpacing);
    }
    
}