// calculate the area of the rectangle which overlaps r1 & r2
// rectangles are described [x1, y1, x2, y2]

function areaOverlap(r1, r2) {
  if (!doOverlap(r1, r2)) {
    return 0;
  }

  var x1 = Math.max(r1[0], r2[0]);
  var y1 = Math.max(r1[1], r2[1]);
  var x2 = Math.min(r1[2], r2[2]);
  var y2 = Math.min(r1[3], r2[3]);

  return (Math.abs(x2 - x1) * Math.abs(y2 - y1));
}


// check if two rectangles overlap

function doOverlap(r1, r2) {
  return (r1[0] < r2[2]) && (r2[0] < r1[2]) && (r1[1] < r2[3]) && (r2[1] < r1[3]);
  // r1[x1] < r2[x2]
  // r2[x1] < r1[x2]
  // r1[y1] < r2[y2]
  // r2[y1] < r1[y2]
  // ALL must be true
}


// calculate the total area covered by two rectangles (they might overlap)
// A,B,C,D = x1,y1,x2,y2
function totalArea(A, B, C, D, E, F, G, H) {
  var area = (C - A) * (D - B) + (G - E) * (H - F);

  var x1 = Math.max(A, E);
  var y1 = Math.max(B, F);
  var x2 = Math.min(C, G);
  var y2 = Math.min(D, H);

  if (x1 < x2 && y1 < y2) { // if they intersect
    area -= (x2 - x1) * (y2 - y1);
  }

  return area;
}
