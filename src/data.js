export const seleccionTipoPokemon = () => {
  let listadoTipoPokemones = pokemon.pokemon.filter(pokemon => pokemon.type == seleccionTipoPokemon);
    return (listadoTipoPokemones);
};