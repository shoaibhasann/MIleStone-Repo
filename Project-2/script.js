const searchInput = document.getElementById("search__movie");
const resultsSection = document.querySelector("section");
let debounceTimeout;

// Function to perform debounced search
function debounceSearch(callback,delay){
    let debounceTimeout;
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(callback,delay);
}

// Function to fetch movies based on search query
function fetchMovies(searchQuery) {
  // Replace 'YOUR_API_KEY' with your actual API key
  const apiKey = "a9e53433";
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => displayMovies(data.Search))
    .catch((error) => console.error("Error fetching movies:", error));
}

// Function to display movies in the results section
function displayMovies(movies) {
  resultsSection.innerHTML = "";

  if (movies) {
    movies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie__card");
      movieCard.innerHTML = `
                <div class='image__wrapper'>
                <img src="${movie.Poster}" alt="${movie.Title}">
                </div>
                <h2>${movie.Title}</h2>
                <p>Release in : ${movie.Year}</p>
            `;
      resultsSection.appendChild(movieCard);
    });
  } else {
    resultsSection.innerHTML = "<p>No movies found.</p>";
  }
}

// Event listener for search input
searchInput.addEventListener("input", (event) => {
  const searchQuery = event.target.value.trim();

  // Wait for 600ms after the user stops typing before making the request
  debounceSearch(() => {
    if (searchQuery.length > 2) {
      fetchMovies(searchQuery);
    } else {
      resultsSection.innerHTML = "";
    }
  }, 600);
});
