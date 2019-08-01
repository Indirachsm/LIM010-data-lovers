/* DECLRANDO LOS BOTONES DEL LOGIN Y DAR(LE FUNCIONABILIDAD */
const loginbox = document.getElementById('loginbox');
const login = document.getElementById('login');
const password = document.getElementById('password');
const buttonUno = document.getElementById('btn1');
const error = document.getElementById('error');
const interfaz2 = document.getElementById('interfaz2');
const contenedor = document.getElementById('contenedor');
const ordenador = document.getElementById('ordenador');
let contador = 0;
buttonUno.addEventListener('click', () => {
  if (login.value && password.value === 'LABORATORIA') {
    loginbox.classList.add('hide');
    interfaz2.classList.replace('hide', 'show');
  }
  // else if (contador === 2) {
  //   error.innerHTML = 'intentaste 3 veces ya no puedes entrar a la pagina';
  // }
  // else {
  //   contador++;
  //   error.innerHTML = 'contraseña incorrecta';
  // }
});
/* LLAMANDO A MI DATA POKEMON DESDE DATA JS QUE APARECE EN LA SEGUNDA INTERFAZ */
const pokemones = POKEMON.pokemon;
const mostrarData = (pokemon) => {
  let mostrar = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
      <div class='mostrar' name='pokemon' id=${pokemon[i].id}>
      <p class='nomp'>${pokemon[i].name}</p>
        <img  class = 'sizeimg' src='${pokemon[i].img}'/>
        <p class='info'>${pokemon[i].num}</p>
        <P class='info'>${pokemon[i].type}</p>
      </div>`;
    mostrar += llamar;
  }
  return mostrar;
};
contenedor.innerHTML = mostrarData(pokemones);
  
/* FUNCIONABILDAD DE LOS POKEMONES POR ORDEN DE LA A-Z */
ordenador.addEventListener('change', () => {
  contenedor.innerHTML = mostrarData(azordena(pokemones, ordenador.value));
});
/* HACIENOD LAS FUNCIONABILIDADA DE LOS POKEMONES POR DEBILIDADES */
porweakness.addEventListener('change', () => {
  contenedor.innerHTML = mostrarData(pokedebilidades(pokemones, porweakness.value));
});
/* HACIENOD LAS FUNCIONABILIDAD DE LOS POKEMONES POR TIPOS */
tipos.addEventListener('change', () => {
  contenedor.innerHTML = mostrarData(poketypos(pokemones, tipos.value));
});
/* HACIENDPO LA FUNCIONABILIDAD DE LOS POKEMONES POR APARICIONES */
const ordenascend = document.getElementById('porspawn');
ordenascend.addEventListener('change', () => {
  contenedor.innerHTML = mostrarData(ordenpoder(pokemones, ordenascend.value));
});

/* FUNCIONABILIDAD DE LOS HUEVOS */
const pokehuevos = document.getElementById('pokeegs');
pokehuevos.addEventListener('change', () => {
  const filtroHuevos = pokehuevos.value;
  const pokemonesHuevos = huevos(pokemones, filtroHuevos);
  porcentaje.classList.remove('hide');
  porcentaje.innerHTML = `Pokemones que nacen de huevos de  ${pokehuevos.value} corresponden al ${((pokemonesHuevos.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
  contenedor.innerHTML = mostrarData(pokemonesHuevos);
});
/* HACIENDO LA FUNCIONABILIDAD DE MOSTRAR LOS POKEMONES EN EL MODAL */
const infopoke = document.getElementById('infopoke');
contenedor.addEventListener('click', () => {
  const pokecito = parseInt(event.target.parentElement.getAttribute('id') - 1); {
    document.getElementById('modalventana').classList.remove('hide');
    document.getElementById('modal-info').innerHTML = `
      <img  class='imagenpoke' src='${POKEMON.pokemon[pokecito].img}'/>
      <p class='pokeke'>${POKEMON.pokemon[pokecito].name}</p>
      <p class='pokeke'>Peso: ${POKEMON.pokemon[pokecito].weight}</p> 
      <p class='pokeke'>Altura: ${POKEMON.pokemon[pokecito].height}</p>    
      <p class='pokeke'>Tipo: ${POKEMON.pokemon[pokecito].type}</p>
      <p class='pokeke'>Apariciones: ${POKEMON.pokemon[pokecito].avg_spawns}</p>
      <p class='pokeke'> Debilidades:  ${POKEMON.pokemon[pokecito].weaknesses}</p>
      <p class='pokeke'> Spawn Time:  ${POKEMON.pokemon[pokecito].spawn_time}</p>
       `;
  }
});
document.getElementById('cerrar').addEventListener('click', () => {
  document.getElementById('modalventana').classList.add('hide');
});