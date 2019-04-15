// //var table=document.createElement("table");
// //var tvody=document.createElement("tbody");
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var cw = canvas.width = window.innerWidth,
//   cx = cw / 2;
// var ch = canvas.height = window.innerHeight,
//   cy = ch / 2;

// ctx.fillStyle = "#999";
// var linesNum = 16;
// var linesRy = [];
// var requestId = null;

// function Line(flag) {
//   this.flag = flag;
//   this.a = {};
//   this.b = {};
//   if (flag == "v") {
//     this.a.y = 0;
//     this.b.y = ch;
//     this.a.x = randomIntFromInterval(0, ch);
//     this.b.x = randomIntFromInterval(0, ch);
//   } else if (flag == "h") {
//     this.a.x = 0;
//     this.b.x = cw;
//     this.a.y = randomIntFromInterval(0, cw);
//     this.b.y = randomIntFromInterval(0, cw);
//   }
//   this.va = randomIntFromInterval(25, 100) / 100;
//   this.vb = randomIntFromInterval(25, 100) / 100;

//   this.draw = function() {
//     ctx.strokeStyle = "#8a7be626";
//     ctx.beginPath();
//     ctx.moveTo(this.a.x, this.a.y);
//     ctx.lineTo(this.b.x, this.b.y);
//     ctx.stroke();
//   }

//   this.update = function() {
//     if (this.flag == "v") {
//       this.a.x += this.va;
//       this.b.x += this.vb;
//     } else if (flag == "h") {
//       this.a.y += this.va;
//       this.b.y += this.vb;
//     }

//     this.edges();
//   }

//   this.edges = function() {
//     if (this.flag == "v") {
//       if (this.a.x < 0 || this.a.x > cw) {
//         this.va *= -1;
//       }
//       if (this.b.x < 0 || this.b.x > cw) {
//         this.vb *= -1;
//       }
//     } else if (flag == "h") {
//       if (this.a.y < 0 || this.a.y > ch) {
//         this.va *= -1;
//       }
//       if (this.b.y < 0 || this.b.y > ch) {
//         this.vb *= -1;
//       }
//     }
//   }

// }

// for (var i = 0; i < linesNum; i++) {
//   var flag = i % 2 == 0 ? "h" : "v";
//   var l = new Line(flag);
//   linesRy.push(l);
// }

// function Draw() {
//   requestId = window.requestAnimationFrame(Draw);
//   ctx.clearRect(0, 0, cw, ch);

//   for (var i = 0; i < linesRy.length; i++) {
//     var l = linesRy[i];
//     l.draw();
//     l.update();
//   }
//   for (var i = 0; i < linesRy.length; i++) {
//     var l = linesRy[i];
//     for (var j = i + 1; j < linesRy.length; j++) {
//       var l1 = linesRy[j]
//       Intersect2lines(l, l1);
//     }
//   }
// }

// function Init() {
//   linesRy.length = 0;
//   for (var i = 0; i < linesNum; i++) {
//     var flag = i % 2 == 0 ? "h" : "v";
//     var l = new Line(flag);
//     linesRy.push(l);
//   }

//   if (requestId) {
//     window.cancelAnimationFrame(requestId);
//     requestId = null;
//   }

//   cw = canvas.width = window.innerWidth,
//     cx = cw / 2;
//   ch = canvas.height = window.innerHeight,
//     cy = ch / 2;

//   Draw();
// };

// setTimeout(function() {
//   Init();

//   addEventListener('resize', Init, false);
// }, 15);

// function Intersect2lines(l1, l2) {
//   var p1 = l1.a,
//     p2 = l1.b,
//     p3 = l2.a,
//     p4 = l2.b;
//   var denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
//   var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
//   var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;
//   var x = p1.x + ua * (p2.x - p1.x);
//   var y = p1.y + ua * (p2.y - p1.y);
//   if (ua > 0 && ub > 0) {
//     markPoint({
//       x: x,
//       y: y
//     })
//   }
// }

// function markPoint(p) {
//   ctx.beginPath();
//   ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
//   ctx.fillStyle="#9aa8b4";
//   ctx.fill();
// }

// function randomIntFromInterval(mn, mx) {
//   return ~~(Math.random() * (mx - mn + 1) + mn);
// }


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = window.innerWidth,
  cx = cw / 2;
var ch = canvas.height = window.innerHeight,
  cy = ch / 2;

ctx.fillStyle = "#000";
var linesNum = 16;
var linesRy = [];
var requestId = null;

function Line(flag) {
  this.flag = flag;
  this.a = {};
  this.b = {};
  if (flag == "v") {
    this.a.y = 0;
    this.b.y = ch;
    this.a.x = randomIntFromInterval(0, ch);
    this.b.x = randomIntFromInterval(0, ch);
  } else if (flag == "h") {
    this.a.x = 0;
    this.b.x = cw;
    this.a.y = randomIntFromInterval(0, cw);
    this.b.y = randomIntFromInterval(0, cw);
  }
  this.va = randomIntFromInterval(25, 100) / 100;
  this.vb = randomIntFromInterval(25, 100) / 100;

  this.draw = function() {
    ctx.strokeStyle = "rgba(241,238,251,1)";
    ctx.beginPath();
    ctx.moveTo(this.a.x, this.a.y);
    ctx.lineTo(this.b.x, this.b.y);
    ctx.stroke();
  }

  this.update = function() {
    if (this.flag == "v") {
      this.a.x += this.va;
      this.b.x += this.vb;
    } else if (flag == "h") {
      this.a.y += this.va;
      this.b.y += this.vb;
    }

    this.edges();
  }

  this.edges = function() {
    if (this.flag == "v") {
      if (this.a.x < 0 || this.a.x > cw) {
        this.va *= -1;
      }
      if (this.b.x < 0 || this.b.x > cw) {
        this.vb *= -1;
      }
    } else if (flag == "h") {
      if (this.a.y < 0 || this.a.y > ch) {
        this.va *= -1;
      }
      if (this.b.y < 0 || this.b.y > ch) {
        this.vb *= -1;
      }
    }
  }

}

for (var i = 0; i < linesNum; i++) {
  var flag = i % 2 == 0 ? "h" : "v";
  var l = new Line(flag);
  linesRy.push(l);
}

function Draw() {
  requestId = window.requestAnimationFrame(Draw);
  ctx.clearRect(0, 0, cw, ch);

  for (var i = 0; i < linesRy.length; i++) {
    var l = linesRy[i];
    l.draw();
    l.update();
  }
  for (var i = 0; i < linesRy.length; i++) {
    var l = linesRy[i];
    for (var j = i + 1; j < linesRy.length; j++) {
      var l1 = linesRy[j]
      Intersect2lines(l, l1);
    }
  }
}

function Init() {
  linesRy.length = 0;
  for (var i = 0; i < linesNum; i++) {
    var flag = i % 2 == 0 ? "h" : "v";
    var l = new Line(flag);
    linesRy.push(l);
  }

  if (requestId) {
    window.cancelAnimationFrame(requestId);
    requestId = null;
  }

  cw = canvas.width = window.innerWidth,
    cx = cw / 2;
  ch = canvas.height = window.innerHeight,
    cy = ch / 2;

  Draw();
};

setTimeout(function() {
  Init();

  addEventListener('resize', Init, false);
}, 15);

function Intersect2lines(l1, l2) {
  var p1 = l1.a,
    p2 = l1.b,
    p3 = l2.a,
    p4 = l2.b;
  var denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
  var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
  var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;
  var x = p1.x + ua * (p2.x - p1.x);
  var y = p1.y + ua * (p2.y - p1.y);
  if (ua > 0 && ub > 0) {
    markPoint({
      x: x,
      y: y
    })
  }
}

function markPoint(p) {
  ctx.fillStyle="#9aa8b4";
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
  ctx.fill();
}

function randomIntFromInterval(mn, mx) {
  return ~~(Math.random() * (mx - mn + 1) + mn);
}

// 'use strict';

// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var Circle = function () {
//    function Circle(x, y) {
//         _classCallCheck(this, Circle);

//         this.x = x;
//         this.y = y;
//         this.r = Math.random() * 10;
//         this._mx = Math.random();
//         this._my = Math.random();
//     }

//    _createClass(Circle, [{
//         key: 'drawCircle',
//         value: function drawCircle(ctx) {
//             ctx.beginPath();
//             //arc() ����ʹ��һ�����ĵ�Ͱ뾶��Ϊһ�������ĵ�ǰ��·������һ������
//             ctx.arc(this.x, this.y, this.r, 0, 360);
//             ctx.closePath();
//             ctx.fillStyle = 'rgba(204, 204, 204, 0.3)';
//             ctx.fill();
//         }
//     }, {
//         key: 'drawLine',
//         value: function drawLine(ctx, _circle) {
//             var dx = this.x - _circle.x;
//             var dy = this.y - _circle.y;
//             var d = Math.sqrt(dx * dx + dy * dy);
//             if (d < 150) {
//                 ctx.beginPath();

//                 ctx.moveTo(this.x, this.y); //��ʼ��
//                 ctx.lineTo(_circle.x, _circle.y); //�յ�
//                 ctx.closePath();
//                 ctx.strokeStyle = 'rgba(204, 204, 204, 0.3)';
//                 ctx.stroke();
//             }
//         }


//     }, {
//         key: 'move',
//         value: function move(w, h) {
//             this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx;
//             this._my = this.y < h && this.y > 0 ? this._my : -this._my;
//             this.x += this._mx / 2;
//             this.y += this._my / 2;
//         }
//     }]);

//     return Circle;
// }();



// var currentCirle = function (_Circle) {
//     _inherits(currentCirle, _Circle);

//     function currentCirle(x, y) {
//         _classCallCheck(this, currentCirle);

//         return _possibleConstructorReturn(this, (currentCirle.__proto__ || Object.getPrototypeOf(currentCirle)).call(this, x, y));
//     }

//     _createClass(currentCirle, [{
//         key: 'drawCircle',
//         value: function drawCircle(ctx) {
//             ctx.beginPath();

//             //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
//             this.r = 8;
//             ctx.arc(this.x, this.y, this.r, 0, 360);
//             ctx.closePath();
//             //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
//             ctx.fillStyle = 'rgba(255, 77, 54, 0)';
//             ctx.fill();
//         }
//     }]);

//     return currentCirle;
// }(Circle);


// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var w = canvas.width = canvas.offsetWidth;
// var h = canvas.height = canvas.offsetHeight;
// var circles = [];
// var current_circle = new currentCirle(0, 0);

// var draw = function draw() {
//     ctx.clearRect(0, 0, w, h);
//     for (var i = 0; i < circles.length; i++) {
//         circles[i].move(w, h);
//         circles[i].drawCircle(ctx);
//         for (var j = i + 1; j < circles.length; j++) {
//             circles[i].drawLine(ctx, circles[j]);
//         }
//     }
//     if (current_circle.x) {
//         current_circle.drawCircle(ctx);
//         for (var k = 1; k < circles.length; k++) {
//             current_circle.drawLine(ctx, circles[k]);
//         }
//     }
//     requestAnimationFrame(draw);
// };

// var init = function init(num) {
//     for (var i = 0; i < num; i++) {
//         circles.push(new Circle(Math.random() * w, Math.random() * h));
//     }
//     draw();
// };
// window.addEventListener('load', init(60));
// window.onmousemove = function (e) {
//     e = e || window.event;
//     current_circle.x = e.clientX;
//     current_circle.y = e.clientY;
// };
// window.onmouseout = function () {
//     current_circle.x = null;
//     current_circle.y = null;
// };