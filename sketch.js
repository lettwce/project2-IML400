let years = 365*4;


function setup() {
    createCanvas(300, 50);
    frameRate(30);
    textFont('Verdana');


}

function draw() {
    background('white');

    textSize(22);

    fill("#222562");
    textAlign(CENTER);
    text('DAYS LEFT:', 100, 50);
    text(years, 190, 50);


    if (years > 0) {
        years -= 1;
    } else if (years == 0) {
        closeWindow();
        noLoop();

    }

}

function closeWindow() {
    window.close();
    window.open('letter.html', 'MyWindow', 'width=600,height=900');

}

