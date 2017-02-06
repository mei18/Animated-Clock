window.addEventListener('load', init, false);

function init() {
  let canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  let context = canvas.getContext('2d');
  var theDate = new Date();
  var sec = theDate.getSeconds();


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

    // hour(theDate);
    // minute(theDate);
    seconds(theDate);
    console.log(sec);

  }
  setInterval(clock(), 1000);


  //radianes
  function degreesToRadians(degrees) {
    return  degrees * Math.PI / 180;
  }
  //segundos
  function seconds(theDate) {

    context.save();
    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo(300, 288);
    context.lineTo(300, 130);
    context.rotate(degreesToRadians(seconds * 13));
    context.stroke();
    context.closePath();
    context.restore();
  }
  //minutos
  // function minute(theDate) {
  //   let min = theDate.getMinutes() + theDate.getSeconds() / 60;
  //   context.save();
  //   context.beginPath();
  //   context.lineWidth = 4;
  //   context.strokeStyle = 'black';
  //   context.rotate( degreesToRadians(min * 6));
  //   context.moveTo(300, 288);
  //   context.lineTo(300, 145);
  //   context.stroke();
  //   context.closePath();
  //   context.restore();
  // }
  //
  // function hour(theDate) {
  //   let hour = theDate.getHours() + theDate.getMinutes() / 60;
  //   let degrees = (hour * 360 / 12) % 360
  //   context.save();
  //   context.beginPath();
  //   context.lineWidth = 4;
  //   context.strokeStyle = 'black';
  //   context.rotate( degreesToRadians(degrees));
  //   context.moveTo(300, 288);
  //   context.lineTo(320, 180);
  //   context.stroke();
  //   context.closePath();
  //   context.restore();
  // }
}
