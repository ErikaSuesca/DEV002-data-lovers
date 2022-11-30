/* Filtro por tipo de Pokémon */
export const filtrarTipoPokemones = ( pokemon, type) => {
  let filtroTiposPoke = pokemon.pokemon.filter(
    (tipoPokemon) => tipoPokemon.type.includes(type) // only arrays //
  );
  return  filtroTiposPoke; /* Esto me retorna una data con la información filtrada */
};

/*export const anotherExample = () => {
  return 'OMG';
};*/
