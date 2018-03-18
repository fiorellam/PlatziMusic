const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=bfed81e678fabe5405c32f3cc2291770&format=json'

function getArtists(){
  return fetch(URL) //lo que fetch hace es devolver una promise que es justo una promesa de una funcion que se va a resolver con data
  .then(response => response.json())// se encarga de formatearlo para que sea un json //La forma de acceder a data es llamando al metodo then, es el principal metodo de las promises, recibe el resultado de fetch
  .then(data => data.topartists.artist)
  .then(artists => artists.map(artist => {
    return{
      id: artist.mbid,
      name: artist.name,
      image: artist.image[3]['#text'],
      likes: 200,
      comments: 320
    }
  }))
}

export {getArtists}
