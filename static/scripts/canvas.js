const canvas = document.getElementById("field");
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colorArray = ['#4c00ff', '#004ea7'];

function Circle(x, y, dx, dy, radius){
    this.x  = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill()
    }
    
    this.update = function(){
        if (this.x + this.radius > window.innerWidth  || this.x - this.radius < 0) {
            this.dx = - this.dx;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = - this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}

const circleArray = [];

for (let i = 0; i < 5; i++) {
    const radius = 220;
    const x = Math.random() * (window.innerWidth - radius * 2) + radius;
    const y = Math.random() * (window.innerHeight - radius * 2) + radius;
    const dy = (Math.random() - 0.5) * 8;
    const dx = (Math.random() - 0.5) * 8;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){
    requestAnimationFrame(animate);
    // clearCanvas
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    // update circles
    for (let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
        circleArray[i].draw();
    }
}

requestAnimationFrame(animate);