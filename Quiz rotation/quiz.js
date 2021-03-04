/* problemas a resolver
- escribir la lista de jugadores
- seleccionar dos jugadores 
- seleccionar categoria

*/
let nombres = document.getElementById("nombres");
let comenzar = document.getElementById("boton");
let config = document.getElementById("config");
let lista = document.getElementById("lista");

comenzar.addEventListener("click", players);

function players() {
  let cantidad = parseInt(nombres.value);
  let jugadores = [];
  let categorias = [];
  let check;

  console.log(cantidad);
  // if (cantidad == 0 || cantidad == NaN) return;
  // alert("debe ingresar un numero valido") + location.reload();
  // check = true;

  for (let i = 1; i <= cantidad; i++) {
    jugadores.push(prompt(`Introdusca el nombre del jugador numero ${i}`));
  }

  for (let i = 1; i <= 5; i++) {
    if (check == true) {
      break;
    }
    categorias.push(prompt(`Introdusca una categoria, categoria ${i}`));
  }
  config.innerHTML = `<strong><h2>Configuracion del juego</h2></strong> 
      Jugadores: ${jugadores} <br />
      Categorias: ${categorias} <br />
      <input type="button" value="comenzar" id="jugar" class="btn"> <link rel="stylesheet" href="style.css"> <hr />
      `;

  jugar.addEventListener("click", seleccionar);

  function seleccionar() {
    let numerito = [];
    for (let i = 1; i <= 2; i++) {
      if (check == true) {
        break;
      }
      let selec = Math.floor(Math.random() * (jugadores.length - 0) + 0);

      let numero = numerito.push(parseInt(selec));
    }

    let cate = Math.floor(Math.random() * (categorias.length - 0) + 0);
    lista.innerHTML = `<strong><h2>Resultado</h2></strong>
      Jugador que decide la pregunta: ${jugadores[numerito[0]]} <br />
      Jugador que recibe la pregunta: ${jugadores[numerito[1]]} <br />
      Categoria de la pregunta: ${categorias[cate]} <br />
      <input type="button" value="reroll" type="reset" id="reroll" class="btn" <link rel="stylesheet" href="style.css">
      `;

    reroll.addEventListener("click", rerol);

    function rerol() {
      lista.innerHTML = "";
      seleccionar();
    }
  }
}
