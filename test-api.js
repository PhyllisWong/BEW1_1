
const Url ='http://pokeapi.co/api/v2/';

fetch(Url)
.then(data=>{return data.json()})
.then(res=>{console.log(res)});