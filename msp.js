class MSP{
    constructor(ms1,ms2,colors,lightnings=5)
    {
        this.ms1 = ms1;
        this.ms2 = ms2;
        this.color1 = colors[0];
        this.color2 = random(colors);
        this.showcount = 0;
        this.lighteningCount = lightnings;
        
    }
    show(){

        if (this.ms1.imdead || this.ms2.imdead)
        {
            var dontdonkot=1;
        }
        else{
            this.addLightening(this.lighteningCount);
        }
        this.ms1.show();
        this.ms2.show();

        this.ms1.move();
        this.ms2.move();

        this.showcount +=1;
    }
    kill(){
        this.ms1.kill();
        this.ms2.kill();
    }
    addLightening(howmany)
    {
        var xl1 = this.ms1.x1;
        var yl1 = this.ms1.y1;
        var xl2 = this.ms2.x1;
        var yl2 = this.ms2.y1;
        var scalar1 = this.ms1.scalar;
        var scalar2 = this.ms2.scalar;

        for (let i=0;i<howmany;i++){
            var newx1 = random(xl1,xl1+scalar1);
            var newy1 = random(yl1,yl1+scalar1);
            var newx2 = random(xl2,xl2+scalar2);
            var newy2 = random(yl2,yl2+scalar2);
            
            var newcolor = lerpColor(color(this.color1),color(this.color2),this.showcount%100);
            if (i%2==0){
                stroke(this.ms1.lastcolor);}
            else{
                stroke(255);
            }
            line(newx1,newy1,newx2,newy2);
        }
    }
}