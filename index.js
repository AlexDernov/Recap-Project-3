import {createCharacterCard} from "./components/card/card.js";
import {navButtonPrevious} from "./components/nav-button/nav-button.js";
import {navButtonNext} from "./components/nav-button/nav-button.js";
import {navPagination} from "./components/nav-pagination/nav-pagination.js";



const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
/* const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]'); */
/* const pagination = document.querySelector('[data-js="pagination"]'); */

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

const previousButton = navButtonPrevious(() => {
  if (page > 1) {
    page--;
    fetchCharacters()}
  }); 
const nextButton = navButtonNext(() => {
  if (page < maxPage) {
    page++;
    fetchCharacters()}
  }); 
const pagination = navPagination();

console.log(previousButton);
navigation.append(previousButton,  pagination, nextButton);

async function fetchCharacters(){

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)

      const data = await response.json();
      console.log(data);
      const characters = data.results;
      pagination.textContent = `${page} / ${maxPage}`;
      cardContainer.innerHTML ="";
      characters.forEach((character) =>  {const cardElement = createCharacterCard(character)
cardContainer.append(cardElement);
});
}
  fetchCharacters();
