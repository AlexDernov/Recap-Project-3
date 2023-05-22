import {createCharacterCard} from "./components/card/card.js";
import {navButtonPrevious} from "./components/nav-button/nav-button.js";
import {navButtonNext} from "./components/nav-button/nav-button.js";
import {navPagination} from "./components/nav-pagination/nav-pagination.js";
import {searchBarfct} from "./components/search-bar/search-bar.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
/* const searchBar = document.querySelector('[data-js="search-bar"]'); */
const navigation = document.querySelector('[data-js="navigation"]');
/* const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]'); */
/* const pagination = document.querySelector('[data-js="pagination"]'); */

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

// DOM-Elemente
//Buttons, Pagination
const previousButton = navButtonPrevious(() => {
  if (page > 1) {
    page--;
    fetchCharacters()}
  }); 
const nextButton = navButtonNext(() => {
  console.log(maxPage);
  if (page < maxPage) {
    page++;
    fetchCharacters()}
  }); 
const pagination = navPagination();

console.log(previousButton);
navigation.append(previousButton,  pagination, nextButton);


//SearchBar
const searchBarFromFct = searchBarfct();

searchBarFromFct.addEventListener("submit",(event) =>{
event.preventDefault();
searchQuery = event.target.elements.query.value;
fetchCharacters();
});

searchBarContainer.append(searchBarFromFct);

// Fetch
async function fetchCharacters(){

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`)

      const data = await response.json();
      console.log(data);
      const characters = data.results;
      maxPage = data.info.pages;
      pagination.textContent = `${page} / ${maxPage}`;
      cardContainer.innerHTML ="";
      characters.forEach((character) =>  {const cardElement = createCharacterCard(character)
cardContainer.append(cardElement);
});
}
  fetchCharacters();
