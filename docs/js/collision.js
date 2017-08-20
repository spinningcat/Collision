var overlaps = function (a, b) { var r1x1 = a.left, r1x2 = a.left + a.width, r1y1 = a.top, r1y2 = a.top + a.height,  r2x1 = b.left, r2x2 = b.left + b.width, r2y1 = b.top, r2y2 = b.top + b.height; return (r1x2 >= r2x1) && (r1y2 >= r2y1) && (r1x1 <= r2x2) && (r1y1 <= r2y2) };

 var a = { top:50, left:50, width:  150, height: 150}; var b = { top :100, left: 100, width: 200, height: 200}; alert(overlaps(a, b));
 
 var a = { top:50, left:50, width:  150, height: 150}; var b = { top :400, left: 400, width: 200, height: 200}; alert(overlaps(a, b));
