//            .?????7!~:.          .^^^^^^^^^^^^^:.     :^^^^^^^:         ^^^^^^^^  ^^^^^^^^^^ ^^^^^^^^^^^^^^^^^:                                       
//      ^!!!!7555555555J7:        :!~5###P~!!!7YBBP?.  :!~PB###G:       JBB###?!~ .!!?###B!!~:BB?~^^7###G~^~!Y#5                                       
//       755555Y5YYYYYY5555?:         ?&#&5      Y&#&P.    5YY&#&Y      ^#!G###^      ^###B.  ^#~    ~###G     JG                                       
//       75YYYYYYYYY5YYYYY55Y^        ?&##5      7&#&B.    5Y.G###~    .GJ.B###^      ^###B.  ^?     ~###G.    :?                                       
//   7JJJY5YYYY5YYYYY5YYYYYY5Y.       ?&##5     :P#B5~     5Y !###G.   JG .B###^      ^###B.         ~###G.                                             
//   ?5555YYY5YYYYYYYYYYYYY5Y5~       ?&##G7?J555J~.       5Y  Y&#&J  ^#^ .B###^      ^###B.         ~###G.                                             
//   ?5555YYYYY55YYY5YYYYY5YY5~       ?&##5 ..:7B#GY:      5Y  .B###~ GJ  .B###^      ^###B.         ~###G.                                             
//   7YYYY5YYYYYY55YYYYYYYYY5Y.       ?&##5     ?&#&G.     5Y   !###PJG.  .B###^      ^###B.         ~###G.                                             
//  ....75YYYYYYYYYYYYYYYY5Y^        ?&##5     ~###&!     5Y    Y&###^   .B###^      ^###B.         ~###G.                                             
//       7555555YYYYYYY5555?:         ?&#&5     :###&7     5Y    .G#&?    .B###^      ^###B.         ~###G                                              
//       ~7777?555555555Y7^        .~^Y&#&P^~:   7G##B?~~~^PP^~.  !&P   ^~!B###7^^  ^^7###B~~^    .~^?&##B~~^                                           
//            .JJJJJ?7!^.          :~~~~~~~~~:    .:~~!~~~~~~~~:   ~:   ^~~~~~~~~~ .~~~~~~~~~^    .~~~~~~~~~~          


//======================================================================//
//---------------------------------------------------------------------=//
//                     +INTERACTIVE DRAWING TOOL+                      =//
//                      ------------------------                       =//
//                                                                     =//
//                                                                     =//
//              Angus Logue S3600486                                   =//
//              RMIT UNIVERSITY                                        =//
//                                                                     =//
//              ASSIGNMENT 1, COMPUTATIONAL PROTOTYPING                =//
//              ARCH1477                                               =//
//                                                                     =//
//---------------------------------------------------------------------=//
//======================================================================//
// Tool Variables              //=
/* In this section, the varialbles that the different tools rely on are generated. the XXXPosX/Y variables are used to store the loacation that the mouse it clicked on for the rectangle, ellipse and line tools. this will be explaied in each tool.

the T/F variables for each tool ae used to determine what tool is selected by the use.

the RGB varials are used to store the background rgb values for the scrubber tool. fundtionaly it is identical to the pen, but draws in the color of the background to give the illusion of ereasing content from the screen.

rgb and transperancy are used to deterimne the rgb colours for each shape as well as transperancy, while brushsize is used to determine the size of
the tool brush being used.




*/
//================================
var RectPosX = 0;              //=
var RectposY = 0;              //=       
var EllipseposX = 0;           //=
var Ellipseposy = 0;           //=
var LinePosX = 0;              //=
var LinePosY = 0;              //=
//var TriangleposX = 0;        //=
//var TriangleposY = 0;        //=
var transparency = 0;          //=
//================================
//BRUSH variables              //=
//================================
var pentool = false;           //=
var brushtool = false;         //=
var scrubbertool = false;      //=
var RGBmode = false;           //=
var CanvasColor = false;       //=
var RectangleTool = false;     //=
var EllipseTool = false;       //=
var CircleTool = false;        //=
//var TriangleTool = false;    //=
var SprayTool = false;         //=
var LineTool = false;          //=
let img;                       //=
var EQ = false;                //=
var brushSize = 10;            //=
var ShowTutorial = true;       //=
//================================
//BACKGROUND colour Variables  //=
//================================
var R = 0;                     //=
var G = 0;                     //=
var B = 0;                     //=
//================================
//BRUSH colour Variables       //=
//================================
var r = 0;                     //=
var g = 0;                     //=
var b = 0;                     //=
var transparency = 0;          //=
//====================================
//preload
//====================================
function preload() {
  img = loadImage('brush image.png')        //loads the image for the spray tool.
}


//====================================
//Setup Functions                  //=
//====================================
function setup() {
//-----------------------------------------------------------------------
//canvas setup
//-----------------------------------------------------------------------  
  cnv = createCanvas(windowWidth, windowHeight); //generates a canvas to the size of the window.
  imageMode(CENTER);
  
  noStroke(); //sets up the mousewheel scroll function over the canvas.
   cnv.mouseWheel(changeSize);
//-----------------------------------------------------------------------
//tutorial setup
  
// this section stores the txt used for the tutorial overlay when the app is launched.  
//-----------------------------------------------------------------------  
push();
textAlign(CENTER);
stroke('white');
textSize (70);
text ('Welcome To \nMy Drawing App!', 700,200);
pop();
push();
textAlign(CENTER);
stroke('white');
textSize (40);
text ('please have a look \nat the tool \n instructions before \ngetting started', 700, 450);
pop();
push();
textAlign(CENTER);
stroke('white');
textSize (30);
text ('Press F to enter fullscreen \nPress Spacebar to exit tutorial',700, 700);
pop();
push();
textAlign(LEFT);
noStroke();
fill('black')
textSize (16);
text ('select a tool from this side bar! \n <<<<<<<<<',110, 50);
pop();
push();
textAlign(LEFT);
noStroke();
fill('black')
textSize (16);
text ('NOTE: hold LEFT SHIFT when drawing \na rectagle or ellipse to create \na square or circle! \n <<<<<<<<<',110, 100);
pop();  

push();
textAlign(LEFT);
noStroke();
fill('black')
textSize (16);
text (' Change the brush size by scrolling\n this also shows the current \n color selected \n <<<<<<<<<',110, 220);
pop();
  push();
textAlign(LEFT);
noStroke();
fill('black')
textSize (16);
text (' you can also change the \n brush or shape transperancy here \n <<<<<<<<<',110, 300);
pop();
push();
textAlign(LEFT);
noStroke();
fill('black')
textSize (16);
text (' choose a preset color swatch \n <<<<<<<<<',110, 400);
pop();
  
push();
textAlign(LEFT);
noStroke();
fill('black')
textSize (16);
text (' Or set a custom color \n by pressing the rgb button \n and adjusting it with the RGB sliders \n <<<<<<<<<',110, 600);
pop();
  
push();
textAlign(LEFT);
noStroke();
fill('black')
textSize (16);
text (' select a colour or RGB \nsetting and Hit NEW CANVAS \nto get started \n <<<<<<<<<',110, 730);
pop();
  
//-----------------------------------------------------------------------
//button settup  
// creates, positions and styles the controll buttons.
//-----------------------------------------------------------------------  
  var drawButton = createButton("pen");
  drawButton.mousePressed(pen);
  drawButton.position(4, 20);
  
  var drawButton2 = createButton("brush");
  drawButton2.mousePressed(brush);
  drawButton2.position(4, 50);
  
  var drawButton3 = createButton("scrubber");
  drawButton3.mousePressed(scrubber);
  drawButton3.position(4, 80);
  
  var drawButton4 = createButton("");
  drawButton4.mousePressed(Black);
  drawButton4.position(10, 350);
  drawButton4.size(20, 20);
  drawButton4.style('border-color: #000000');
  drawButton4.style('background-color:#000000');
  
  var drawButton5 = createButton("");
  drawButton5.mousePressed(White);
  drawButton5.position(40, 350);
  drawButton5.size(20, 20);
  drawButton5.style('border-color: #FFFFFF');
  drawButton5.style('background-color:#FFFFFF');
  
  var drawButton6 = createButton("");
  drawButton6.mousePressed(Red);
  drawButton6.position(10, 380);
  drawButton6.size(20, 20);
  drawButton6.style('border-color: #FF0000');
  drawButton6.style('background-color:#ff0000');
  
  var drawButton7 = createButton("");
  drawButton7.mousePressed(Orange);
  drawButton7.position(40, 380);
  drawButton7.size(20, 20);
  drawButton7.style('border-color: #FF7F00');
  drawButton7.style('background-color:#FF7F00');
  
  var drawButton8 = createButton("");
  drawButton8.mousePressed(Yellow);
  drawButton8.position(10, 410);
  drawButton8.size(20, 20);
  drawButton8.style('border-color: #FFFF00');
  drawButton8.style('background-color:#FFFF00');
  
  var drawButton9 = createButton("");
  drawButton9.mousePressed(GreenYellow);
  drawButton9.position(40, 410);
  drawButton9.size(20, 20);
  drawButton9.style('border-color: #7FFF00');
  drawButton9.style('background-color:#7FFF00');
  
  var drawButton10 = createButton("");
  drawButton10.mousePressed(Green);
  drawButton10.position(10, 440);
  drawButton10.size(20, 20);
  drawButton10.style('border-color: #00FF00');
  drawButton10.style('background-color:#00FF00');
  
  var drawButton11 = createButton("");
  drawButton11.mousePressed(GreenCyan);
  drawButton11.position(40, 440);
  drawButton11.size(20, 20);
  drawButton11.style('border-color: #00FF7F');
  drawButton11.style('background-color:#00FF7F');
  
  var drawButton12 = createButton("");
  drawButton12.mousePressed(Cyan);
  drawButton12.position(10, 470);
  drawButton12.size(20, 20);
  drawButton12.style('border-color: #00FFFF');
  drawButton12.style('background-color:#00FFFF');
  
  var drawButton13 = createButton("");
  drawButton13.mousePressed(BlueCyan);
  drawButton13.position(40, 470);
  drawButton13.size(20, 20);
  drawButton13.style('border-color: #007FFF');
  drawButton13.style('background-color:#007FFF');
  
  var drawButton14 = createButton("");
  drawButton14.mousePressed(Blue);
  drawButton14.position(10, 500);
  drawButton14.size(20, 20);
  drawButton14.style('border-color: #0000FF');
  drawButton14.style('background-color:#0000FF');
  
  var drawButton15 = createButton("");
  drawButton15.mousePressed(BlueMagenta);
  drawButton15.position(40, 500);
  drawButton15.size(20, 20);
  drawButton15.style('border-color: #7F00FF');
  drawButton15.style('background-color:#7F00FF');
  
  var drawButton16 = createButton("");
  drawButton16.mousePressed(Magenta);
  drawButton16.position(10, 530);
  drawButton16.size(20, 20);
  drawButton16.style('border-color: #FF00FF');
  drawButton16.style('background-color:#FF00FF');
  
  var drawButton17 = createButton("");
  drawButton17.mousePressed(RedMagenta);
  drawButton17.position(40, 530);
  drawButton17.size(20, 20);
  drawButton17.style('border-color: #FF007F');
  drawButton17.style('background-color:#FF007F');
  
  var drawButton18 = createButton("RGB");
  drawButton18.mousePressed(rgbmode);
  drawButton18.position(2, 560);
  
  var drawButton19 = createButton("New Canvas");
  drawButton19.mousePressed(canvascolor);
  drawButton19.position(4, windowHeight-50);
  
  var drawButton20 = createButton("Rectangle");
  drawButton20.mousePressed(rectangletool);
  drawButton20.position(4, 140);
  
  var drawButton21 = createButton("Ellipse");
  drawButton21.mousePressed(Ellipse);
  drawButton21.position(4, 170);
  
  var drawButton23 = createButton("Line");
  drawButton23.mousePressed(linetool);
  drawButton23.position(47, 20);
  
  var drawButton22 = createButton("spray tool");
  drawButton22.mousePressed(sprayer);
  drawButton22.position(4, 110);
  
 // var drawButton22 = createButton("Triangle");
  //drawButton22.mousePressed(Triangle);
 // drawButton22.position(300, 180);
  
//-----------------------------------------------------------------------  
//Slider setup
//creates, positions and styles the sliders for r g b and transperancy values.
//-----------------------------------------------------------------------
  
sliderr = createSlider(0, 255, 100);
sliderr.position(3, 610);
sliderr.style('width', '80px');

sliderg = createSlider(0, 255, 100);
sliderg.position(3, 630);
sliderg.style('width', '80px');
  
sliderb = createSlider(0, 255, 100);
sliderb.position(3, 650);
sliderb.style('width', '80px');
  
slidertransparency = createSlider(0, 255, 255, 1);
slidertransparency.position(4, 300);
slidertransparency.style('width', '80px');
  
}
//=======================================================================
//tool activation:
//controlled by the tool buttons, sets tool values to t/f to select the desired tool
//=======================================================================
function pen() {
  pentool = true;
  brushtool = false;
  scrubbertool = false;
  CanvasColor = false;
  RectangleTool = false;
  EllipseTool = false
  SprayTool = false;
  LineTool = false;
  print("pen tool");
}
//-----------------------------------------------------------------------
function brush() {
  brushtool = true;
  pentool = false;
  scrubbertool = false;
  CanvasColor = false;
  RectangleTool = false;
  EllipseTool = false;
  SprayTool = false;
  LineTool = false;
  print("brush tool");
}
//-----------------------------------------------------------------------
function scrubber() {
  brushtool = false;
  pentool = false;
  scrubbertool = true;
  CanvasColor = false;
  RectangleTool = false;
  EllipseTool = false;
  SprayTool = false;
  LineTool = false;
  print("scrubber");
}
//-----------------------------------------------------------------------
function rectangletool() {
  brushtool = false;
  pentool = false;
  scrubbertool = false;
  CanvasColor = false;
  RectangleTool = true;
  EllipseTool = false;
  SprayTool = false;
  LineTool = false;
  print("rectangle")
}
//-----------------------------------------------------------------------
function Ellipse() {
  brushtool = false;
  pentool = false;
  scrubbertool = false;
  CanvasColor = false;
  RectangleTool = false;
  EllipseTool = true;
  SprayTool = false;
  LineTool = false;
  print("Ellipse")
}
//-----------------------------------------------------------------------
function sprayer() {
  brushtool = false;
  pentool = false;
  scrubbertool = false;
  CanvasColor = false;
  RectangleTool = false;
  EllipseTool = false;
  SprayTool = true;
    LineTool = false;
  print("spray")
}


//-----------------------------------------------------------------------
function linetool() {
  pentool = false;
  brushtool = false;
  scrubbertool = false;
  CanvasColor = false;
  RectangleTool = false;
  EllipseTool = false
  SprayTool = false;
  LineTool = true;
  print("line tool");
}


//-----------------------------------------------------------------------
//prints the tutorial txt on scree, generates a background over the txt when the user exits the tutorial with space.

//-----------------------------------------------------------------------
function showtutorial() {
  R = r;
  B = b;
  G = g;
  if (ShowTutorial == false) 
    background (r,g,b )

}
//-----------------------------------------------------------------------
//canvascolour variable stores the color of the canvas when a new canvas is generated, for the scrubber tool to reffer to.
//-----------------------------------------------------------------------

function canvascolor() {
  R = r;
  B = b;
  G = g;
  background (r,g,b )
  
}
//-----------------------------------------------------------------------
//activates rgb mode when the usr selects the rgb button.
//-----------------------------------------------------------------------
function rgbmode() {
  RGBmode = true;
}
//======================================================================
//Toggles the shift key variable on and off, activates fullscreen when F key is pressed.
//======================================================================
function keyPressed() {
  if (keyCode == 16) { //sets EQ, the variable lettign the program know the user wants to draw a square to true when the shift key is down
    EQ = true;
    print('shift');
  }
  
  if (keyCode == 70) {
    let fs = fullscreen();
    fullscreen(!fs);
  } 
if (keyCode == 32) {
  if (ShowTutorial == true); {
  ShowTutorial=false;
  showtutorial();
  print('tutorial left');

  }
}

}


function keyReleased() {
  if (keyCode == 16) { // sets EQ to false whenthe shift key is released. this ensures the EQ variable is only set to true when the shift key is down,
    EQ = false;        //having it set only on the key press or rlease prevents the EQ=true condition being repeated continuously by the shift key 
    print('off');
  }
}
//=======================================================================
//Preset Colour Functions:
//these functions set r g b values for a number of preset colours. clicking any colour swatch deactivates the rgb sliders so they do not interfere.
//=======================================================================   
function Black() {
  r = 0;
  g = 0;
  b = 0;
  RGBmode = false;
  print("black")
}

function White() {
  r = 255;
  g = 255;
  b = 255;
  RGBmode = false;
  print("white")
}
function Red() {
  r = 255;
  g = 0;
  b = 0;
  RGBmode = false;
  print("red")
}

function Orange() {
  r = 255;
  g = 127;
  b = 0;
  RGBmode = false;
  print("Orange")
}

function Yellow() {
  r = 255;
  g = 255;
  b = 0;
  RGBmode = false;
  print("Yellow")
}

function GreenYellow() {
  r = 127;
  g = 255;
  b = 0;
  RGBmode = false;
  print("GreenYellow")
}
  
function Green() {
  r = 0;
  g = 255;
  b = 0;
  RGBmode = false;
  print("Green")
}

function GreenCyan() {
  r = 0;
  g = 255;
  b = 127;
  RGBmode = false;
  print("GreenCyan")
}

function Cyan() {
  r = 0;
  g = 255;
  b = 255;
  RGBmode = false;
  print("Cyan")
}

function BlueCyan() {
  r = 0;
  g = 127;
  b = 255;
  RGBmode = false;
  print("BlueCyan")
}

function Blue() {
  r = 0;
  g = 0;
  b = 255;
  RGBmode = false;
  print("Blue")
}

function BlueMagenta() {
  r = 127;
  g = 0;
  b = 255;
  RGBmode = false;
  print("BlueMagenta")
}

function Magenta() {
  r = 255;
  g = 0;
  b = 255;
  RGBmode = false;
  print("Magenta")
}

function RedMagenta() {
  r = 255;
  g = 0;
  b = 127;
  RGBmode = false;
  print("RedMagenta")
}



//=======================================================================
//Mouse Dragged Functions:

//used to controll the brush function
//=======================================================================
function mouseDragged() {
  
//-----------------------------------------------------------------------
//Brush Tool:
//-----------------------------------------------------------------------  
  if (brushtool) {
    if (mouseX > 100) {
    fill(r, g, b, transparency);
    ellipse(mouseX, mouseY, brushSize, brushSize);
    }
  }
}



//-----------------------------------------------------------------------
//Brush Tool:
//-----------------------------------------------------------------------  

function mousePressed() {
  if (brushtool) {
    if (mouseX > 100) {
    noStroke();
    fill(r, g, b, transparency);
    ellipse(mouseX, mouseY, brushSize, brushSize);
    }
    }
}
//-----------------------------------------------------------------------
//Rectangle Tool:
//the rectangle, ellipse and line tools work on the same logic. 
//-----------------------------------------------------------------------
function mouseReleased() {
  if (mouseX > 100) { //ensures the rectangle cannor be drawn on the menu bar after the button is pressed, x=0 to 100 is the hitbox for the menu bar 
  if (RectPosX > 0) { //                     if the mouse is pressed while the rectangle tool is selected, RectPosX/Y store this position for the start                                              corner of the rectangle
  if (EQ == true) {            //condition for drawing a square rather than a rectangle, keeps sides even, justified along the shortest axis
  if (mouseX-RectPosX < mouseY-RectPosY) {          
    noStroke();
    fill(r,g,b, transparency);
    rect(RectPosX,RectPosY,mouseX-RectPosX,mouseX-RectPosX);            //subtracts the mouse press position from the current mouse possition.
    print('drawn');                                                     //this draws a rectangle between the position it was pressed and relased
    RectPosX = 0;                                                       
    RectPosY = 0;                                                       // the variables are then reset to so new values can be stored.
    RectangleTool = true;                                               //resets rectangle tool to true, so subsequent shapes can be drawn.
    print('reset')                                                      // print funtion was used by me to debug the code and make sure it was flowing 
  } else {                                                              // correctly.
    noStroke();
    fill(r,g,b, transparency);
    rect(RectPosX,RectPosY,mouseY-RectPosY,mouseY-RectPosY);             //Else functions are used to determine how the shape is drawin under different 
    print('drawn');                                                      // mouse and eq conditions
    RectPosX = 0;
    RectPosY = 0;
    RectangleTool = true;
    print('reset')
  }
  } else {
    noStroke();
    fill(r,g,b, transparency);
    rect(RectPosX,RectPosY,mouseX-RectPosX,mouseY-RectPosY);
    print('drawn');
    RectPosX = 0;
    RectPosY = 0;
    RectangleTool = true;
    print('reset')
  }
}
  }
  
//-----------------------------------------------------------------------
//ellipse and line tools
//-----------------------------------------------------------------------

  if (mouseX > 100) {                                                                         //these funtion the same way as the rectangle tool
  if (EllipseposX > 0) {                                                                      //the only exception is that 'corners' mode for the
  if (EQ == true) {                                                                           //ellipse does not funtion correctly, often giving 
  if (mouseX-EllipseposX < mouseY-EllipseposY) {                                              //negative values and drawing it in the incorrect position
    noStroke();                                                                               // this is fixed by justifying it to center on the mouse.
    fill(r,g,b, transparency);
    ellipse(EllipseposX, EllipseposY, (mouseX-EllipseposX) * 2, (mouseX-EllipseposX) * 2);       
    print('drawn');
    EllipseposX = 0;
    EllipseposY = 0;
    EllipseTool = true;
    print('reset')
  } else {
    noStroke();
    fill(r,g,b, transparency);
    ellipse(EllipseposX, EllipseposY, (mouseY-EllipseposY) * 2, (mouseY-EllipseposY) * 2);
    print('drawn');
    EllipseposX = 0;
    EllipseposY = 0;
    EllipseTool = true;
    print('reset')
  }
  } else {
    noStroke();
    fill(r,g,b, transparency);
    ellipse(EllipseposX, EllipseposY, (mouseX-EllipseposX) * 2, (mouseY-EllipseposY) * 2);
    print('drawn');
    EllipseposX = 0;
    EllipseposY = 0;
    EllipseTool = true;
    print('reset')
  }
}
  }

//-----------------------------------------------------------------------
//line tool
//-----------------------------------------------------------------------

  
  if (mouseX > 100) {
  if (LinePosX > 0) {                             //uses the same logic as the Rectangle tool, but has no EQ funtion.
    push();
    stroke(r,g,b, transparency);
    strokeWeight(brushSize);
    fill(r,g,b, transparency);
    line(LinePosX,LinePosY,mouseX,mouseY);
    print('drawn');
    LinePosX = 0;
    LinePosY = 0;
    LineTool = true;
    print('reset')
    pop();
  

  
  }


}
}
//=======================================================================
//Draw functions:
//=======================================================================

function draw() {
  


  
  
  
//-----------------------------------------------------------------------  
//Transparancy:
//-----------------------------------------------------------------------  
  transparency = slidertransparency.value();  //adjusts transperancy using the assigned slider
  

//-----------------------------------------------------------------------
//GUI drawing functions:
//-----------------------------------------------------------------------
  push();
  noStroke();
  fill(66,66,66);
  rect(0, 0, 100, windowHeight);             //draws the menu bar to the whole window height.
  pop();
  
//-----------------------------------------------------------------------  
//
//-----------------------------------------------------------------------
  
push();
  noStroke();
  rectMode(CENTER);                                       
  fill(r,g,b,transparency);                //generates the colour swatch square
  rect(40,250,55,55);
  pop();
  
  push();
  stroke(255,255,255);
  strokeWeight(1);                           //generates the brush size circle.
  fill(r,g,b,transparency);
  circle(40,250,brushSize);
  pop();
  
//-----------------------------------------------------------------------  
//this section draws the GUI txt for the tool labeles.
//-----------------------------------------------------------------------
  
  
  push();
  textAlign(CENTER);
  stroke(160,160,160)
  strokeWeight(1)                          
  fill(160,160,160);
  textSize (15);
  text ('TOOLS:', 30, 15);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(160,160,160)
  strokeWeight(1)
  fill(160,160,160);
  textSize (10);
  text ('TRANSPERANCY:', 48, 295);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(160,160,160)
  strokeWeight(1)
  fill(160,160,160);
  textSize (14);
  text ('SWATCHES:', 48, 340);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(160,160,160)
  strokeWeight(1)
  fill(160,160,160);
  textSize (13);
  text ('BRUSH SIZE:', 44, 215);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(255,255,255)
  strokeWeight(1)
  fill(255,255,255);
  textSize (20);
  text (brushSize, 81, 255);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(255,255,255)
  strokeWeight(1)
  fill(255,255,255);
  textSize (14);
  text (r,84, 575);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(255,255,255)
  strokeWeight(1)
  fill(255,255,255);
  textSize (14);
  text ('R:',62, 575);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(255,255,255)
  strokeWeight(1)
  fill(255,255,255);
  textSize (14);
  text (g, 84, 590);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(255,255,255)
  strokeWeight(1)
  fill(255,255,255);
  textSize (14);
  text ('G:',62, 590);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(255,255,255)
  strokeWeight(1)
  fill(255,255,255);
  textSize (14);
  text (b, 84, 605);
  pop();
  
  push();
  textAlign(CENTER);
  stroke(255,255,255)
  strokeWeight(1)
  fill(255,255,255);
  textSize (14);
  text ('B:',62, 605);
  pop();
  
  
  
  
//-----------------------------------------------------------------------
//Pen Tool:
//-----------------------------------------------------------------------  
  if (mouseIsPressed) {
    if (pentool == true) {
      if (mouseY > 30) {
      stroke(r, g, b, transparency);                             
      strokeWeight(brushSize);
      line(mouseX, mouseY, pmouseX, pmouseY);
      }
      }                                                   //activates the pen and scrubber tools, assigning them the correct
  }                                                       // rgb values, transperancy and brush size using the brushSize variable
  if (mouseIsPressed) {
    if (scrubbertool == true) {
      if (mouseY > 30) {
      stroke(R, G, B);
      strokeWeight(brushSize);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}
  if (mouseIsPressed) {
    if (SprayTool == true) {
      if (mouseY > 30) {
      push();                                                      //spray tool relies on an image file being randomly rotated and drawn 
      translate(mouseX,mouseY);                                    // the original png is white and a tint is applied to change it to the correct color
      rotate(random (0,360));                                      
      tint(r,g,b);
      image(img,0,0,brushSize,brushSize)                           //brushsize is used to scale the image to match the brush size
      pop();
      }
  }
}

if (LineTool == true) {
  if (mouseX > 100) {    
  if (mouseIsPressed) {
         LinePosX=mouseX;
        LinePosY=mouseY;
         LineTool=false;
        print('LinePosX')
    
      }
  }
}
  
  
  
  
  
//-----------------------------------------------------------------------
//RGB controlls:
//-----------------------------------------------------------------------   
  
if (RGBmode == true) {
  r = sliderr.value();                   //sets the rgb vakues to the corresponding sliders if rgb mode is activated.
  g = sliderg.value();
  b = sliderb.value();
}

if (RectangleTool) {
  if (mouseX > 100) {    
  if (mouseIsPressed) {                                //if the rectangle, ellipse or line tool is activated and the mouse it pressed over the canvas,
         RectPosX=mouseX;                              // the RectPosX or other position variable stores the position it was pressed to determine where
        RectPosY=mouseY;                               // the shape will be drawn from.
         RectangleTool=false;
        print('RectPosX')
    
      }
  }
}
if (EllipseTool) {
  if (mouseX > 100) {    
  if (mouseIsPressed) {
         EllipseposX=mouseX;
         EllipseposY=mouseY;
         EllipseTool=false;
        print('EllipseposX')
    
      }


}
}
}
//=======================================================================
//adjust brush size on scroll over canvas:
//=======================================================================
function changeSize(event) {
  if (event.deltaY > 0) {                           //changes the variable brushSize when the mouse is scrolled, this is set to a maximum of 50.
    if (brushSize < 50) {
    brushSize = brushSize + 1;
    }
    } else {
    if (brushSize > 1) {
    brushSize = brushSize - 1;
    }
    }
    
}
