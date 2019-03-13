const fetch = require("node-fetch")
var personURL = "https://swapi.co/api/people/";
var starshipURL = "http swapi.co/api/starships/";
var planetURL = "https://swapi.co/api/planets/";
          
function getPerson(id){            
  return fetch(personURL+id)
  .then(res=>{
    if(!res.ok){
      return res.json().then(data=> {throw data});
    }
    return res.json()
  });
}

function getStarship(id){            
  return fetch(starshipURL+id)
  .then(res=>{
    if(!res.ok){
      return res.json().then(data=> {throw data});
    }
    return res.json()
  });
}

function getPlanet(id){            
  return fetch(planetURL+id)
  .then(res=>{
    if(!res.ok){
      return res.json().then(data=> {throw data});
    }
    return res.json()
  });
}
          
module.exports = {
  getPerson,
  getPlanet,
  getStarship
  }