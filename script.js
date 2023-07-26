function revealMessage() {
    document.querySelector('.message').style.display = 'block';
    createBalloons(30);
}

function createBalloons(numberOfBalloons) {
    let i = 0;
    while (i < numberOfBalloons) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = randomColor();
        balloon.style.animationDuration = Math.random() * 2 + 3 + "s";
        balloon.style.animationName = (Math.random() > 0.5) ? 'balloons-right' : 'balloons-left';
        document.body.appendChild(balloon);
        i++;
    }
}

function randomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100) + '%';
    const l = Math.floor(Math.random() * 100) + '%';
    return `hsl(${h}, ${s}, ${l})`;
}
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Feliz Cumpleaños Dafne! Te quiero mucho!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Dame Besitos')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Porfi</strong>')
    .pauseFor(2500)
    .start();




