window.addEventListener('load', init, false);

function init() {
  let canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  let context = canvas.getContext('2d');

  //dibujar reloj
  //horilla negra
  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = 'black';
  context.arc(300, 280, 188, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();
  context.closePath();
  //La cara
  context.beginPath();
  context.strokeStyle = 'grey';
  context.fillStyle = 'grey';
  context.arc(300, 280, 170, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();
  context.closePath();
  //ojos
  context.beginPath();
  context.strokeStyle = 'white';
  context.fillStyle = 'white';
  context.arc(220, 220, 50, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = 'white';
  context.fillStyle = 'white';
  context.arc(380, 220, 50, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = 'black';
  context.arc(240, 220, 25, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = 'black';
  context.arc(360, 220, 25, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();
  context.closePath();
  //nariz
  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = 'black';
  context.ellipse(300, 280, 35, 8, 0, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = 'black';
  context.arc(300, 290, 10, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();
  context.closePath();
  //panza
  context.beginPath();
  context.fillStyle = '#EFE0B1';
  context.ellipse(300, 390, 110, 60, 0, 0, Math.PI * 2, true);
  context.fill();
  context.closePath();
  //numeros
  function numbers() {
    let ang;
    let num;
    //tamaño de los nnumeros
    context.font = 188 * 0.08 + "px arial";
    context.textBaseline = "middle";
    context.textAlign = "center";
    //Creación de los numeros, se empieza con 1, ya que es del 1 al 12 y asi no se dibuja el 0 en vez del 12
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      context.rotate(ang);
      context.translate(0, -188 * 0.85);
      context.rotate(-ang);
      context.fillText(num.toString(), 300, 280);
      context.rotate(ang);
      context.translate(0, 188 * 0.85);
      context.rotate(-ang);
    }
    context.save();
  }
  numbers();

  function clock() {
    setTimeout(clock, 1000);
    let theDate = new Date();
    seconds(theDate);
  }
  clock();

  function seconds(theDate) {
    let seconds = theDate.getSeconds();

    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(300, 288);
    //En esta linea estabas moviendo la coordenada Y de lineTo a -1000, por eso se ve que se dibuja hacia arriba. Recuerda que  el canvas -Y es hacia arriba.
    // context.lineTo(290, -1000);
    context.lineTo(290, 100);
    context.stroke();
    context.closePath();
  }
}
