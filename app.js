window.addEventListener('load', init, false);

function init() {
  let canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  let context = canvas.getContext('2d');
  let xpos = 300;
  let ypos = 250;
  let clockWidth = 188;

  renderClock();
  var theDate = new Date();
  var sec = theDate.getSeconds();
  setSeconds(sec);

  let intervalId = setInterval(clock, 1000);

  function clock() {
    sec++;
    if (sec > 59) {
      sec = 0;
    }

    console.log('clock');
    // hour(theDate);
    // minute(theDate);
    renderClock();
    setSeconds(sec);
  }

  function renderClock() {
    //dibujar reloj
    //horilla negra
    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.arc(xpos, ypos, clockWidth, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    //La cara
    context.beginPath();
    context.strokeStyle = 'grey';
    context.fillStyle = 'grey';
    context.arc(xpos, ypos, clockWidth - 20, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    //ojos
    context.beginPath();
    context.strokeStyle = 'white';
    context.fillStyle = 'white';
    context.arc(xpos - 80, ypos - 80, 50, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'white';
    context.fillStyle = 'white';
    context.arc(xpos + 80, ypos - 80, 50, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.arc(xpos - 60, ypos - 80, 25, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.arc(xpos + 60, ypos - 80, 25, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    //nariz
    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.ellipse(xpos, ypos - 20, 35, 8, 0, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.arc(xpos, ypos - 10, 10, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();
    //panza
    context.beginPath();
    context.fillStyle = '#EFE0B1';
    context.ellipse(xpos, ypos + 100, 110, 60, 0, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    renderNumbers();
  }

  //numeros
  function renderNumbers() {

    let angle = 14.75;
    let angleRatio = 360 / 12;
    let num;

    //tamaño de los nnumeros
    context.font = 188 * 0.08 + "px arial";
    context.textBaseline = "middle";
    context.textAlign = "center";

    //Creación de los numeros, se empieza con 1, ya que es del 1 al 12 y asi no se dibuja el 0 en vez del 12
    let hip = 80;
    let x = xpos;
    let y = ypos - 155;

    for (num = 1; num < 13; num++) {


      x += Math.cos(degreesToRadians(angle)) * hip;
      y += Math.sin(degreesToRadians(angle)) * hip;


      // context.translate(xpos, ypos);
      // context.rotate(ang);

      // context.rotate(ang);
      // context.translate(0, -188 * 0.85);
      // context.rotate(-ang);

      context.fillText(num.toString(), x, y);


      angle += angleRatio;
      // context.rotate(ang);
      // context.translate(0, 188 * 0.85);
      // context.rotate(-ang);
      // context.resetTransform();

    }
    // context.save();
  }

  //radianes
  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  //segundos
  function setSeconds(sec) {

    console.log(sec);

    context.save();
    context.translate(xpos, ypos);
    context.rotate(degreesToRadians(sec * 6));
    context.beginPath();
    context.strokeStyle = 'red';
    // context.moveTo(300, 288);
    // context.lineTo(300, 130);
    context.lineWidth = 3;
    context.moveTo(0, 0);
    context.lineTo(0, -170);
    context.stroke();
    context.closePath();
    context.resetTransform();
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
