let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let quadrado = {
    x: 200 - 30, // deixar no centro da imagem precisa fazer ((400/2) - raio da imagem)
    y: 200 - 30,
    raio: 30,
    img: new Image(),
    desenha: function(){
        this.img.src = 'minecraft-1816996_640.png'
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

// animacao de mover a imagem com o ponteiro do mouse
function animacao(){
    ctx.clearRect(0,0,400,400)
    quadrado.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);

    if(x_mouse > 0 + quadrado.raio && x_mouse < 400 - quadrado.raio && y_mouse > 0 + quadrado.raio && y_mouse < 400 - quadrado.raio){
        quadrado.x = x_mouse - quadrado.raio;
        quadrado.y = y_mouse - quadrado.raio;
    }
    else{
        quadrado.x = quadrado.x;
        quadrado.y = quadrado.y;
    }
})