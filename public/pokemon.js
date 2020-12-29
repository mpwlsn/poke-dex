const getStats = new Vue ({
  el: '#app',
  data: {
    poke_select: "",
    name:"Select a pokemon",
    image: "",
    poke_stats: null
  },
  methods: {
    getPoke: function(){
      console.log("got em");
      getPokeAPI();
    }
  }
})

async function getPokeAPI(){
  const poke_name = getStats.name;

  try{

    const pokemon = await P.getPokemonByName(poke_name); // with await, be sure to be in an async function (and in a try/catch)

    console.log(pokemon);

    getStats.poke_stats = pokemon.stats;
    getStats.name = poke_name;
    getStats.image = pokemon.sprites.front_default;

  }
  catch(err){
    console.log(err);
  }
}
