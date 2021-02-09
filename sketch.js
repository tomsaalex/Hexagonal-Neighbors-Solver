
/*
[1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
*/
var este = true;
var grid = [];
var values = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var score = 0;
var maxscore = 0;
var cnt = 0;
var ind1 = 4;
var ind2 = 2;
var numar_pt_random = 2;
var nr_pt_verificare = 0;
function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
  background(255);

  assign();
  Randomize();
  Check_Stuff();
  display_stuff();
  ScoreAndCells();
  if (este) {
  if(score > maxscore){
  	registerGrid();
    maxscore = score;
  }
  } else este = true;
  
 // print(cnt);
}


function display_stuff() {

  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
      grid[i][j].display();
    }
  }
}

function Check_Stuff() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {

      grid[i][j].neighbours(i, j);
      grid[i][j].Check(i, j);
    }
  }


}


function Cell(x, y, w, value, C) {

  this.x = x;
  this.y = y;
  this.w = w;
  this.v = value;
  this.N = [];
  this.c = C;
  this.random = false;

  this.display = function() {
    fill(this.c);
    stroke(0);
    push();
    translate(this.x, this.y);
    beginShape();
    for (var i = 0; i <= 6; i++) {
      vertex(this.w * cos(i * PI / 3 + PI / 6), this.w * sin(i * PI / 3 + PI / 6));

    }
    endShape();
    fill(0);
    text(this.v, 0, 0);
    fill(this.c);
    pop();
  }

  this.neighbours = function(i, j) {
    for (var l = 1; l < this.v; l++) {
      this.N.push(l);
    }

  }

  this.Check = function(i, j) {
    if (i <= Math.floor((values.length / 2) - 1)) {
      if (i - 1 >= 0) {
        if (typeof grid[i - 1][j] != "undefined")
          if (isPresent(this.N, grid[i - 1][j].v)) removeArray(this.N, grid[i - 1][j].v);
      }
      if (i - 1 >= 0) {
        if (typeof grid[i - 1][j - 1] != "undefined")
          if (isPresent(this.N, grid[i - 1][j - 1].v)) removeArray(this.N, grid[i - 1][j - 1].v);
      }
      if (j + 1 < values[i].length) {
        if (typeof grid[i][j + 1] != "undefined")
          if (isPresent(this.N, grid[i][j + 1].v)) removeArray(this.N, grid[i][j + 1].v);
      }

      if (j + 1 < values[i + 1].length) {
        if (typeof grid[i + 1][j + 1] != "undefined")
          if (isPresent(this.N, grid[i + 1][j + 1].v)) removeArray(this.N, grid[i + 1][j + 1].v);
      }

      if (typeof grid[i + 1][j] != "undefined")
        if (isPresent(this.N, grid[i + 1][j].v)) removeArray(this.N, grid[i + 1][j].v);

      if (j - 1 >= 0) {
        if (typeof grid[i][j - 1] != "undefined")
          if (isPresent(this.N, grid[i][j - 1].v)) removeArray(this.N, grid[i][j - 1].v);
      }
    }

    if (i == Math.ceil((values.length / 2) - 1)) {
      if (j - 1 >= 0) {
        if (typeof grid[i][j - 1] != "undefined") {
          if (isPresent(this.N, grid[i][j - 1].v)) removeArray(this.N, grid[i][j - 1].v);
        }
        if (typeof grid[i - 1][j - 1] != "undefined") {
          if (isPresent(this.N, grid[i - 1][j - 1].v)) removeArray(this.N, grid[i - 1][j - 1].v);
        }
        if (typeof grid[i + 1][j - 1] != "undefined") {
          if (isPresent(this.N, grid[i + 1][j - 1].v)) removeArray(this.N, grid[i + 1][j - 1].v);
        }
      }
      if (j + 1 < values[i].length) {
        if (typeof grid[i][j + 1] != "undefined") {
          if (isPresent(this.N, grid[i][j + 1].v)) removeArray(this.N, grid[i][j + 1].v);
        }
        if (typeof grid[i - 1][j] != "undefined") {
          if (isPresent(this.N, grid[i - 1][j].v)) removeArray(this.N, grid[i - 1][j].v);
        }
        if (typeof grid[i + 1][j] != "undefined") {
          if (isPresent(this.N, grid[i + 1][j].v)) removeArray(this.N, grid[i + 1][j].v);
        }
      }
    }
    if (i > Math.ceil((values.length / 2) - 1)) {
      if (j - 1 >= 0) {
        if (typeof grid[i][j - 1] != "undefined") {
          if (isPresent(this.N, grid[i][j - 1].v)) {
            removeArray(this.N, grid[i][j - 1].v);
          }
        }
      }

      if (typeof grid[i - 1][j] != "undefined") {
        if (isPresent(this.N, grid[i - 1][j].v)) {
          removeArray(this.N, grid[i - 1][j].v);
        }
      }
      if (j + 1 < values[i].length)
        if (typeof grid[i - 1][j + 1] != "undefined") {
          if (isPresent(this.N, grid[i - 1][j + 1].v)) removeArray(this.N, grid[i - 1][j + 1].v);
        }
      if (j + 1 < values[i].length) {
        if (typeof grid[i][j + 1] != "undefined") {
          if (isPresent(this.N, grid[i][j + 1].v)) removeArray(this.N, grid[i][j + 1].v);
        }
      }
      if (i + 1 < 0) {
        if (typeof grid[i + 1][j] != "undefined") {
          if (isPresent(this.N, grid[i + 1][j].v)) removeArray(this.N, grid[i + 1][j].v);
        }
      }
      if (i + 1 < values.length && j - 1 > 0) {
        if (typeof grid[i + 1][j - 1] != "undefined") {
          if (isPresent(this.N, grid[i + 1][j - 1].v)) removeArray(this.N, grid[i + 1][j - 1].v);
        }
      }
    }

    if (this.N.length != 0)
      este = false;

  }
}


function isPresent(array, value) {
  for (var p = 0; p < array.length; p++) {
    if (array[p] == value)
      return 1;
  }
}

function removeArray(array, value) {
  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      array2 = array.splice(i, 1);
      i--;
    }

  }

}



function Randomize() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
        values[i][j] = Math.floor(random(1, numar_pt_random+1));
      	grid[i][j].v = values[i][j];
    }
  }

}


function Parse(){
var v = [];
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
    	v.push(values[i][j]);
    }
}
  v[v.length-1]++;
  
  for(var l = 1; l<v.length; l++){
  	if(v[l] > 4) {v[l] = 1; v[l-1]++;}
  }
  var cnt = 0;
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
  		values[i][j] = v[cnt++];  
    }
  }

}
function registerGrid() {
  print(score);
  
  for(var i = 0; i< values.length; i++)
  {
  	print(values[i]);
  }
  
}

function ScoreAndCells() {
  score = 0;
  cnt = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      score += grid[i][j].v;
      cnt++;
    }
  }


}

function assign() {
  for (var i = 0; i < values.length; i++) {
    grid[i] = [];
  }

  var x = 30;
  var y = height / 2;
  var t = Math.floor(values.length / 2);

  var cnt = 1;
  if (t > 0) {
    for (var i = t; i < values.length; i++) {
      //grid[i] = [];
      for (var j = 0; j < values[i].length; j++) {
        grid[i].push(new Cell(x, y, 20, values[i][j], color(255, 255, 255)));
        x += grid[i][j].w * sqrt(3);
      }

      y += 1.5 * grid[i][0].w;
      x = 30;
      x += cnt * (grid[i][0].w * sqrt(3) / 2);
      cnt++;
    }

    x = 30;
    y = height / 2;
    cnt = 1;

    for (var i = t; i >= 0; i--) {
      //grid[i] = [];
      for (var j = 0; j < values[i].length; j++) {
        grid[i].push(new Cell(x, y, 20, values[i][j], color(255, 255, 255)));
        x += grid[i][j].w * sqrt(3);
      }

      y -= 1.5 * grid[i][0].w;
      x = 30;
      x += cnt * (grid[i][0].w * sqrt(3) / 2);
      cnt++;
    }





  }

}