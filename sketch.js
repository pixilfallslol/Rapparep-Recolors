var W_W = 1920;
var W_H = 1080;

var imgs = ["https://i.imgur.com/9kOaC1a.png","https://i.imgur.com/n9bL0tz.png","https://i.imgur.com/VVwGFOm.png","https://i.imgur.com/yVvxA6T.png","https://i.imgur.com/zJ1uG9h.png","https://i.imgur.com/v3lzrxW.png"];

var layers = [];
var colors = [];

function preload(){
  for(let i = 0; i < imgs.length; i++){
    layers[i] = loadImage(imgs[i]);
  }
}

function setup(){
  for(let i = 0; i < imgs.length; i++){
    colors[i] = color(random(255),random(255),random(255));
  }
  let CANVAS = createCanvas(W_W, W_H);
}

function draw(){
  background(0xff);
  drawLayers();
  drawBase();
}

function drawLayers(){
  for(let i = 1; i < layers.length; i++){
    tint(colors[i]);
    image(layers[i],0,0);
  }
  noTint();
}

function drawBase(){
  image(layers[0],0,0);
}

function mousePressed(){
  for(let i = 0; i < imgs.length; i++){
    colors[i] = color(random(255),random(255),random(255));
  }
}
