function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here


}

function draw() {
    // your "draw loop" code goes here

    for (var x1 = -2160; x1 <= 2160; x1 = x1+25) {
        push();
        translate(width/2, height/2);
        fill(random(0,255), random(0,255), random(0,255), random(0, 80));
        rotate(x1);
        triangle(width / 2, height / 2, 60, 40, 40, 80);
        pop();
    }

    for (var x1 = -2160; x1 <= 2160; x1 = x1+25) {
        push();
        translate(width/2, height/2);
        fill(random(0,255), random(0,255), random(0,255), random(0, 80));
        rotate(x1);
        ellipse(width / 3, height / 3, 620, 400);
        pop();
    }

    for (var x = 1; x < 1000; x = x+1) {
        drawShape(x, x);
    }



}

function drawShape(x, y) {
    push();
    // translate(width/2, height/2);
    rotate(x1);
    rect(x, y, 50, 50);
    pop();

}
