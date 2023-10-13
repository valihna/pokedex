
  function PokemonCard(props) {
    console.log(props)
  return <div>
    <img src={props.pokemon.imgSrc}/>
    <h1>{props.pokemon.name}</h1>
   </div>;
 }



 export default PokemonCard





    /* const pokemon = pokemonList[0];
    console.log(pokemon.imgSrc)

    return <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} />: <p>???</p>}

            <figcaption>
                {pokemon.name}
             </figcaption>
    </figure>;
function (props) {
  console.log(props)
}*/