'use strict';

const repeatString = (string, times) => {
  let accumulator = "";
  for(let i = 0; i < times; ++i){
    accumulator += string;
  }
  return accumulator;
};

const paddingCount = 5;
const middlePadding = repeatString("-", paddingCount);
const bottomPadding = repeatString("_", paddingCount);
const bottomLeftCorner = "|_";
const topLeftCorner = "┌";
const side = "│";
const circleEdge = "x";
const verticalHorizontalRatio = 3;
const newline = require("os").EOL;

Math.floor = function (n) {
  let bottom = bottomLeftCorner + bottomPadding + n + bottomPadding;
  let wall = "";

  for (var i = 0; i < (bottom.length/verticalHorizontalRatio); i++) {
    wall += side + newline;
  }

  return wall + bottom;
}

Math.ceil = function (n) {
  let top = topLeftCorner + middlePadding + n + middlePadding;
  let wall = "";

  for (let i = 0; i < (top.length/verticalHorizontalRatio); i++) {
    wall += newline + side;
  }

  return top + wall;
}

Math.round = function (n) {
  let radius = paddingCount + parseInt(n.toString().length/2)+1;

  let a = new Array(radius * 2 + 1);
  for (let i = 0; i < a.length; i++) {
    a[i] = new Array(radius * 2 + 1);
  }

  // Fill array with spaces
  for (let x = 0; x < a.length; x++) {
    for (let y = 0; y < a[x].length; y++) {
      a[x][y] = ' ';
    }
  }

  let x = radius;
  let y = 0;
  let radiusError = 1 - x;

  // Drawing offset
  let o = radius;

  while (x >= y) {
    a[x+o][y+o] = circleEdge;
    a[y+o][x+o] = circleEdge;
    a[-x+o][y+o] = circleEdge;
    a[-y+o][x+o] = circleEdge;
    a[-x+o][-y+o] = circleEdge;
    a[-y+o][-x+o] = circleEdge;
    a[x+o][-y+o] = circleEdge;
    a[y+o][-x+o] = circleEdge;
    y++;
    if (radiusError <= 0) {
      radiusError += 2 * y + 1;
    } else {
      x--;
      radiusError += 2 * (y - x + 1);
    }
  }

  let nStr = n.toString();
  let nX = parseInt(a.length / 2) - parseInt(nStr.length / 2);
  let nY = parseInt(a[nX].length / 2);
  for (let i = 0; i < nStr.length; i++) {
    a[nX][nY] = nStr[i];
    nX++;
  }

  let str = "";
  for (let y=0; y < a.length; y++) {
    for (let x=0; x < a[y].length; x++) {
      str += a[x][y] + " ";
    }

    str += newline;
  }

  return str;
}
