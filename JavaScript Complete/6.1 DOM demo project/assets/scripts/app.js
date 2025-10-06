const movieButton = document.getElementById("add-btn");
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("add-modal");
const cancelMovieButton = document.querySelector(".btn--passive");
const addMovieButton = document.querySelector(".btn--success");
const inputsElements = document.querySelectorAll("input");
const sectionPrev = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    sectionPrev.style.display = "block";
  } else {
    sectionPrev.style.display = "none";
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if ((movie.id = movieId)) {
      break;
    }
    movieIndex++;
  }
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}" />
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>`;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const movieList = document.getElementById("movie-list");
  movieList.append(newMovieElement);
};

function toggleModal() {
  modal.classList.toggle("visible");
  backdrop.classList.toggle("visible");
}

function cancelMovieHandler() {
  toggleModal();
  clearInputs();
}

function clearInputs() {
  for (const input of inputsElements) {
    input.value = "";
  }
}

const addMovie = () => {
  const title = inputsElements[0].value;
  const imageUrl = inputsElements[1].value;
  const rating = inputsElements[2].value;

  if (
    title.trim() === "" ||
    imageUrl.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Invalid input, please try again! (Rating must be between 1 and 5)");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: title,
    image: imageUrl,
    rating: rating,
  };

  movies.push(newMovie);

  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.imageUrl,
    newMovie.rating
  );
  toggleModal();
  clearInputs();
  updateUI();
};

movieButton.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleModal);
cancelMovieButton.addEventListener("click", cancelMovieHandler);
addMovieButton.addEventListener("click", addMovie);
