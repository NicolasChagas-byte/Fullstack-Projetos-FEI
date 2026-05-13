let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//Retangulo cinza
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'grey';
ctx.fillRect(0,300,400,100);
ctx.strokeRect(0,300,400,100);
ctx.closePath();

//Casa Marrom
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#964B00';
ctx.strokeStyle = '#964B00';
ctx.fillRect(150,200,90,100);
ctx.strokeRect(150,200,90,100);
ctx.closePath();

//Telhado da Casa
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'tomato';
ctx.strokeStyle = 'tomato';
ctx.moveTo(150,200);
ctx.lineTo(240,200);
ctx.lineTo(195,150);
ctx.lineTo(150,200);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Janelas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'skyblue';
ctx.strokeStyle = 'skyblue';
ctx.fillRect(160,220,30,30);
ctx.strokeRect(160,220,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'lightblue';
ctx.strokeStyle = 'lightblue';
ctx.fillRect(200,220,30,30);
ctx.strokeRect(200,220,30,30);
ctx.closePath();

//Porta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#654321';
ctx.strokeStyle = '#654321';
ctx.fillRect(190,251,10,50);
ctx.strokeRect(190,251,10,50);
ctx.closePath();

//Sol
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(300,100,40,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Árvore Direita
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#964B00';
ctx.strokeStyle = '#964B00';
ctx.fillRect(333,290,15,60);
ctx.strokeRect(333,290,15,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(340,290,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Árvore Esquerda
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#964B00';
ctx.strokeStyle = '#964B00';
ctx.fillRect(50,240,15,60);
ctx.strokeRect(50,240,15,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(57,240,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Merda Azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'cornflowerblue';
ctx.strokeStyle = 'cornflowerblue';
ctx.fillRect(0,300,40,200);
ctx.strokeRect(0,300,40,200);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'cornflowerblue';
ctx.strokeStyle = 'cornflowerblue';
ctx.fillRect(0,360,150,40);
ctx.strokeRect(0,360,150,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'cornflowerblue';
ctx.strokeStyle = 'cornflowerblue';
ctx.moveTo(0,300);
ctx.arc(0,300,40,1.5*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'cornflowerblue';
ctx.strokeStyle = 'cornflowerblue';
ctx.moveTo(150,400);
ctx.arc(150,400,40,1.5*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();