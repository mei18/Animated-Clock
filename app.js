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
  var min = theDate.getMinutes() + theDate.getSeconds() / 60;
  var hr = theDate.getHours() + theDate.getMinutes() / 60;
  var degrees = (hr * 360 / 12) % 360
  setSeconds(sec);
  setMinute(min);
  setHour(hr);

  let intervalId = setInterval(clock, 1000);
//funcion para llamar las otras funciones y crear el reloj
  function clock() {
    sec++;

    if (sec > 59) {
      sec = 0;
      min++;
    }
    console.log('clock');
    renderClock();
    setHour(hr);
    setMinute(min);
    console.log("min",min);
    console.log("hour",hr);
    setSeconds(sec);
  }
  //dibujar reloj
  function renderClock() {
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
    context.arc(xpos, ypos, clockWidth - 15, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    //ojos
    context.beginPath();
    context.strokeStyle = 'white';
    context.fillStyle = 'white';
    context.arc(xpos - 80, ypos - 70, 50, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'white';
    context.fillStyle = 'white';
    context.arc(xpos + 80, ypos - 70, 50, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.arc(xpos - 60, ypos - 70, 25, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.arc(xpos + 60, ypos - 70, 25, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    //nariz
    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.ellipse(xpos, ypos , 35, 8, 0, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    //panza
    context.beginPath();
    context.fillStyle = '#EFE0B1';
    context.ellipse(xpos, ypos + 112, 110, 60, 0, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    renderNumbers();
  }

  //numeros
  function renderNumbers() {
    //angulo del circulo de los números
    let angle = 14.75;
    //angulo entre cada numero
    let angleRatio = 360 / 12;
    let num;

    //tamaño de los nnumeros
    context.font = 188 * 0.08 + "px arial";
    context.textBaseline = "middle";
    context.textAlign = "center";

    //Creación del circulo
    let hip = 85;
    let x = xpos;
    let y = ypos - 163;

    for (num = 1; num < 13; num++) {
      x += Math.cos(degreesToRadians(angle)) * hip;
      y += Math.sin(degreesToRadians(angle)) * hip;

      context.fillText(num.toString(), x, y);

      angle += angleRatio;
    }
  }

  //radianes
  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  //segundos
  function setSeconds(sec) {

    console.log(sec);
    //translate para mover el contexto
    context.translate(xpos, ypos);
    context.rotate(degreesToRadians(sec * 6));
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 3;
    //ubicarlo en el centro del contexto
    context.moveTo(0, 0);
    //-150 es el largo de la manilla
    context.lineTo(0, -150);
    context.stroke();
    context.closePath();
    context.resetTransform();
  }
  //minutos
  function setMinute(min) {
    context.translate(xpos, ypos);
    context.rotate( degreesToRadians(min * 6));
    context.beginPath();
    context.strokeStyle = '#198F31';
    context.lineWidth = 9;
    context.lineCap = 'round';
    context.moveTo(0, 0);
    context.lineTo(0, -140);
    context.stroke();
    context.closePath();
    context.resetTransform();
  }
  //horas
  function setHour(hr) {
    context.translate(xpos, ypos);
    context.rotate( degreesToRadians(degrees));
    context.beginPath();
    context.lineCap = 'round';
    context.lineWidth = 9;
    context.strokeStyle = '#198F31';
    context.moveTo(0, 0);
    context.lineTo(0, -120);
    context.stroke();
    context.closePath();
    context.resetTransform();
  }
}
