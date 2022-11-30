
import data from './data/pokemon/pokemon.js';
import { filtrarTipoPokemones } from './data.js';
import pokemon from './data/pokemon/pokemon.js';


// Funciones para visualizar las secciones del html: 
 document.getElementById("btnPokemones").addEventListener("click", () => {
    document.querySelector('.paginaPrincipal').style.display= 'none';
    document.querySelector('.paginaEstadistica').style.display= 'none';
    document.querySelector('.paginaPokemones').style.display= 'block';
    document.querySelector('.filtrosBusqueda').style.display= 'block';

});

document.getElementById("btnEstadistica").addEventListener("click", () => {
    document.querySelector('.paginaPrincipal').style.display= 'none';
    document.querySelector('.paginaEstadistica').style.display= 'block';
    document.querySelector('.paginaPokemones').style.display= 'none';
    document.querySelector('.filtrosBusqueda').style.display= 'none'
});


  const seccion = document.getElementById('seccionPokemones');
  seccion.setAttribute('class', 'paginaPokemones');
 const contenedorPadre= document.createElement('div');
 contenedorPadre.setAttribute('class','contenedorP');
 const contenedor = document.createElement('div');
contenedor.setAttribute('class','contenedorTarjetas'); 
const filtros = document.createElement('div');
filtros.setAttribute('class','contenedorFiltros'); 
contenedorPadre.appendChild(contenedor);     
contenedorPadre.appendChild(filtros);
seccion.appendChild(contenedorPadre);

// const tipoEmoticon= {

//   grass:'😉',
//   water:'💖',
//   poison:'🦢',

// };


const mostrar = (pokemones)=>{
    pokemones.forEach(pokemon => {
         
            
       contenedor.innerHTML+=  
       
       ` <div class="tarjetaPokemones" id="tarjetaPokemones" >
                                <h2 id="nombrePokemon" class="nombreP">${pokemon.name} </h2>
                                <h3 id="numeroPokemon" class="textoh3">${pokemon.num} </h3>
                                 <div class="encabezadoTarjeta">                     
                                  <img src="${pokemon.img}" alt="" id="imagenPokemon" class="imgPokemon">
                                  <div class = 'contenedorh3'> <h3 id="tipoPokemon" class="textoh3">Type: ${pokemon.type} </h3>
                                 <h3 id="generacionPokemon" class="textoh3"> Generation:${pokemon.generation.name} </h3>
                                 </div>      
                            </div>
                            
                                 <div class="descripcionTarjeta">
                                   <p id="heightPokemon" class="sizeP"> height: ${pokemon.size.height}</p>
                                   <p id="weightPokemon" class="sizeP"> weight: ${pokemon.size.weight}</p>
                                 
                                 </div>
                                 
                                 <div class="botonesTarjeta">
                                   <button id="btnStats" class="bntS"> Stats </button>
                                   <button id="btnResistencia" class="btnR">Characteristics</button>
                                 </div>
                                                    
                                 </div>  `                        
        
    });
} 
 mostrar(pokemon.pokemon);
 // Filtrar por tipo:

 //se crea un evento para seleccionar el pokemon que queremos filtrar por tipo //
document.getElementById("tipoPokemon").addEventListener("change", () => {
  // se crea la variable para guardar la selección del usuario (filtro tipo)//
  let selecccionPokemones = document.getElementById("tipoPokemon").value;
  // se crea la condicional de: si no se selecciona ninguna opción va a mostrar todos los pokemones//
  if (!selecccionPokemones) {
    (pokemon.pokemon);
  } else {
   (filtrarTipoPokemones(pokemon.pokemon, selecccionPokemones));
  }
});

let seleccionTipoPokemones = document.getElementById("filtrosTipo");
// se crea el select para las opciones de filtrado tipo de pokemon//
let opcionesTipoPokemones = `
<div  class="opcionesFiltros" >
        <h3>Type</h3>
        <select  id="tipoPokemon" placeholder="type">
          <option value="bug">Bug</option>
          <option value="dark" selected>Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>

      </div>
`;
seleccionTipoPokemones.innerHTML = opcionesTipoPokemones;
 
