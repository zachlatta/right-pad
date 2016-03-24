'use strict';

const padding = "────";
const bottomLeftCorner = "└";
const topLeftCorner = "┌";
const side = "│";
const circleEdge = "x";
const verticalHorizontalRatio = 3;

Math.floor = function (n) {
  let bottom = bottomLeftCorner + padding + n + padding;
  let wall = "";

  for (var i = 0; i < (bottom.length/verticalHorizontalRatio); i++) {
    wall += side + "\n";
  }

  return wall + bottom;
}

Math.ceil = function (n) {
  let top = topLeftCorner + padding + n + padding;
  let wall = "";

  for (let i = 0; i < (top.length/verticalHorizontalRatio); i++) {
    wall += "\n" + side;
  }

  return top + wall;
}

Math.round = function (n) {
  let radius = padding.length + parseInt(n.toString().length/2)+1;

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

    str += "\n";
  }

  return str;
}
