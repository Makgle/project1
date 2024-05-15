float  y = 0;
float speed = random(4,8) ;
float r,g,b;
float count = 0;

void setup(){
  size(600,600);
  textSize(50);
  textAlign(RIGHT);
  r= random(300);
  g= random(300);
  b= random(300);
}

void draw(){
  background(5,175, 232);
  fill(r,g,b);
  noStroke();
  circle( 300,y,100);
  
  y= y+speed ;

   if (y >= height|| y<=0){
     speed = speed*-1;
     count++;
     r=random(300);
     g=random(300);
     b=random(300);
  }
  fill(r,g,b);
  text(count,width/2,150);
}
