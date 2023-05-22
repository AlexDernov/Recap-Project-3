export function searchBarfct (input){
    const searchBar = document.createElement("form");
    searchBar.classList.add("search-bar");
    searchBar.innerHTML = `<input
    name="query"
    class="search-bar__input"
    type="text"
    placeholder="search characters"
    aria-label="character name"
  />
  <button class="search-bar__button" aria-label="search for character">
    <img
      class="search-bar__icon"
      src="assets/magnifying-glass.png"
      alt=""
    />
  </button>`;
  /* searchBar.addEventListener("submit", broccoli); */
    return searchBar;
}
