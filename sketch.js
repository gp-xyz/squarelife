var palet1 = ["#d65780","#c9b1bd","#9dd1f1","#f4b860","#aceb98"];
var expalete = ["#f4442e","#fff05a","#690500","#ffd2ac"];
var palet3 = ["#3f7cac","#17c3b2","#ffcb77","#fef9ef","#fe6d73"];
var palet4 = ["#ffcb77","#fef9ef","#fe6d73","#3f7cac","#17c3b2"];
var palet5 = ["#17c3b2","#ffcb77","#fef9ef","#fe6d73","#3f7cac"];
var bnwpal = ["#000000","#ffffff","#000000","#ffffff"];

var msps = [];
var mspcounts = [1,2,4,10,33,100];
var deathbar = 200;
var snakechances = [.05,.15,97];
var x = 3;
var lightnings=[1,12,50];

//scale, scale , distance 
var type_smallpair = [16,16,300];
var type_bigpair = [100,100,300];
var type_lop = [20,80,300];
var type_weeg = [80,20,200];

var pairtypes = [type_bigpair,type_lop,type_smallpair,type_weeg];
var grad1;
var grad2;
var gradspeeds = [16,20,80,100];
function setup() {
  createCanvas(400, 400);
  colorchoice = random([palet3,palet4,palet5,bnwpal])
  grad1 = random(colorchoice);
  grad2 = random(colorchoice);
  background(random(colorchoice));

  var mspcount=random(mspcounts);
  var snakechance = random(snakechances)
  deathbar = int( 1000 / mspcount ) * 4;
  gradspeed = random(gradspeeds);

  for(let i=0;i<mspcount;i++){

    var snakebite = false;
    if (random(1)>(1-snakechance)){
      snakebite=true;
    }

    var fx = random(0,width);
    var fy = random(0,height);
    var myType = random(pairtypes);
    var newsquare1 = new MagicSquare(fx,fy,myType[0],colorchoice,snakebite);
    var newsquare2 = new MagicSquare((fx+myType[2])%width,(fy+myType[2])%height,myType[1],colorchoice,snakebite);
    var newMSP = new MSP(newsquare1,newsquare2,colorchoice,random(lightnings));

    msps.push(newMSP);
  }

  for (let n=0;n<width;n+=gradspeed){
    var newcolor = lerpColor(color(grad1),color(grad2),(n/width));
    fill(newcolor);
    noStroke();
    rect(n,0,width-n,height);
  }
 

}

function draw(){


  if (x%deathbar==0)
  {
    var dedpup = Math.floor(Math.random() * msps.length);
    msps[dedpup].kill();
    x=deathbar;
  }
  else
  {

    
  
  for(let i=0;i<msps.length;i++){
    msps[i].show();
  }
  x++;

}


}