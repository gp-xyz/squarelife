class MagicSquare{

    constructor(x1,y1,scalar,colors,snakebit=false){
        this.x1 = x1;
        this.y1 = y1;
        this.scalar = scalar;
        print('colors0 ' + colors[0])
        this.mainColor = colors[0]
        this.colors = colors;
        this.snaklebit = snakebit;
        this.showcount = 0;
        this.lastcolor = this.mainColor;
        this.imdead=false;
 



    }

    show(){
        var myColor = this.mainColor;
        if (this.snaklebit){
            print('SNAKE');
            var newcolor = lerpColor(color(this.lastcolor), color(random(this.colors)),.02);
            myColor = newcolor;



        // ellipse(this.x1+this.scalar/2,this.y1+this.scalar/2,this.scalar,this.scalar);
        rect(this.x1,this.y1,this.scalar,this.scalar);

        }
        else{

        rect(this.x1,this.y1,this.scalar,this.scalar);
        }
        this.lastcolor = myColor;
        fill(myColor);


        if (this.imdead)
        {
            var ccccc = 0;
        }
        else{

        }
        this.showcount++;

    }
    kill(){
        this.imdead=true;
    }
    move(){
        if (this.snaklebit)
        {
            this.x1 += random(-3,3);
        }
        else{

        
        this.x1 += random(-3,3);
        this.y1 += random(-3,3);
        }
    }
}

