var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

// rectangles

/* c.fillStyle= 'rgba(255, 45, 0.3, 0.5)';

c.fillRect(100, 100, 100, 100);

c.fillStyle= 'rgba(255, 78, 0.3, 0.4)';

c.fillRect(300, 300, 100, 100);

c.fillStyle= 'rgba(167, 78, 0.3, 0.4)';

c.fillRect(500, 500, 100, 100); */

// lines && triangle

/* c.beginPath();
c.moveTo(100, 300);
c.lineTo(200,100);
c.lineTo(300,300);
c.lineTo(100,300); 
c.strokeStyle = 'yellow';
c.stroke();
 */

/*  for(var i = 0; i < 100; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI*2,false);
    c.strokeStyle =  'blue';
    c.stroke();
} */

var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
var minRadius = 2;
var circleArray = [];
var colorArray = [
    '#00e64d',
    '#5c5c8a',
    '#ffff00',
    '#e60000',
    '#00ff55',
    '#660033',
    '#ffffb3'
];

window.addEventListener('mousemove',
 function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})



window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

 function Circle (x, y ,dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0,  Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill(); 
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity//

      if ( mouse.x - this.x < maxRadius && mouse.x - this.x > -maxRadius
        && mouse.y - this.y < maxRadius && mouse.y - this.y > -maxRadius) {
            this.radius += 1;
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
        this.draw();
    }
}
var circleArray = [];
function init() {
    circleArray = [];
    for (var i = 0; i < 200; i++) {
        var radius  = Math.random() * 3 + 4;
        var x = Math.random() * (innerWidth /* - radius * 2 */)  + radius ;
        var y = Math.random() * (innerHeight /* - radius * 2 */) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y , dx, dy, radius));
    }
    animate();
}

    
   

function animate() {
    requestAnimationFrame(animate);
     c.clearRect(0 , 0 , innerWidth, innerHeight);
     for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
};
init();
/* animate(); */
/* function Triangle (x, y, dx, dy, x1, y1, x2,y2,x3,y3) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.draw = function () {
        c.moveTo(this.x, this.y);
        c.lineTo(this.x1, this.y1);
        c.lineTo(this.x2, this.y2);
        c.lineTo(this.x3, this.y3); 
        c.strokeStyle = 'yellow';
        c.stroke();
    }
    this.update = function() {
        if( this.x > innerWidth) {
            this.dx += this.dx;
        }
        if(this.y > innerHeight) {
            this.dy += this.dy;
        }
        this.dx += this.dx;
        this.dy += this.dy;
    }
}

triangleArray = [];
for (var i = 0; i < array.length; i++) {
    var x = Math.random() * 200;
    var y = Math.random() * 200; 
    var dy =  Math.random() * 2
    var dx =  Math.random() * 2;
    var x1 =  Math.random() * 1;
    var y1 =  Math.random() * 1;
    var x2 =  Math.random() * 2;
    var y2 =  Math.random() * 2;
    var x3 =  Math.random() * 3;
    var y3 =  Math.random() * 3;
    triangleArray.push(new Triangle(x, y, dx, dy, x1, y1, x2, y2, x3,y3));
}

function  animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < triangleArray.length; i++) {
        triangleArray[i].update();        
    }
}
animate(); */
