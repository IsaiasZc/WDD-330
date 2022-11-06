const URL = "https://swapi.dev/api/people/";
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const cards= document.getElementById("cards");

let response;
await newPage(URL);

// console.log(response);

next.addEventListener("click", () => newPage(response.next));


previous.addEventListener("click", () => newPage(response.previous))

async function newPage(url) {

  if (!url) return ;

  await fetch(url)
    .then(response => response.json())
    .then(json => {
      response = json;

      cards.innerHTML = '';

      response.results.forEach(character => cards.appendChild(newCard(character)))

      console.log(response);
    });    

};

function newCard(character) {

  const li = document.createElement("li");
  li.className = 'list__item';

  li.innerHTML = `
    <h2>${character.name}</h2>
    <div className="hide"></div>
  `
  
  return li

}