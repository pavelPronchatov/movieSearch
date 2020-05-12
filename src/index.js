/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-await-in-loop */
import slider from './js/slider';
import GenerateCard from './js/generateCard';
import addKeyboard from './js/keyboard';


const searchMovie = document.querySelector('.search__input');
const apiKeyMovie = '9cce0e15';
const translateUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200430T204237Z.b7c8eff516037912.d23d66cb61b730d7fa6505f89b009653da8bcfdc&text=dream&lang=ru-en'


localStorage.setItem('successResult', 'dream');

async function getTranslateSearch(word) {
  const url = translateUrl.replace('dream', `${word}`);
  const res = await fetch(url);
  const translateWord = await res.json();

  return translateWord.text[0];
}

async function getRatingMovie(idMovie) {
  const url = `https://www.omdbapi.com/?i=${idMovie}&apikey=${apiKeyMovie}`;

  const res = await fetch(url);
  const ratingData = await res.json();

  return ratingData.imdbRating;
}


async function getMovieInfo(page = 1, nameSearch = 'dream') {
  const url = `https://www.omdbapi.com/?s=${await getTranslateSearch(nameSearch)}&page=${page}&apikey=${apiKeyMovie}`;

  const res = await fetch(url);
  const data = await res.json();
  document.querySelector('.search__load').style.display = 'inline-block';


  if (data.Search === undefined) {
    document.querySelector('.info').textContent = `No results for "${searchMovie.value}"`;
    document.querySelector('.search__load').style.display = 'none';
  }


  for (let i = 0; i < data.Search.length; i += 1) {
    const ratingMovie = await getRatingMovie(data.Search[i].imdbID);
    const card = new GenerateCard(data.Search[i].Title, data.Search[i].imdbID, data.Search[i].Poster, data.Search[i].Year, ratingMovie);
    card.createCard();
  }

  document.querySelector('.search__load').style.display = 'none';


  return new Promise((resolve) => {
    resolve(data);
  });
}


let curentSlides = 1;
function moveSlidesHandlear() {
  if (slider.activeIndex % 6 === 0) {
    curentSlides += 1;
    if (searchMovie.value.length === 0) {
      getMovieInfo(curentSlides, localStorage.getItem('successResult'));
    } else {
      getMovieInfo(curentSlides, searchMovie.value);
    }
  }
}


function addNewSlides() {
  document.querySelectorAll('.swiper__btn').forEach((el) => {
    el.addEventListener('click', moveSlidesHandlear);
  });

  document.querySelectorAll('.swiper-container').forEach((el) => {
    el.addEventListener('mousedown', moveSlidesHandlear);
  });

  document.querySelectorAll('.swiper-container').forEach((el) => {
    el.addEventListener('touchstart', moveSlidesHandlear);
  });
}

function cleanSearch() {
  document.querySelector('.search__clean').addEventListener('click', () => {
    searchMovie.value = '';
  });
}

function searchResultHandlear() {
  getMovieInfo(1, searchMovie.value).then((data) => {
    if (data.Search !== undefined) {
      localStorage.setItem('successResult', searchMovie.value);
      document.querySelector('.swiper-wrapper').innerHTML = '';
      getMovieInfo(1, searchMovie.value);
      document.querySelector('.info').textContent = `Showing results for "${searchMovie.value}"`;
    } else {
      getMovieInfo(1, localStorage.getItem('successResult'));
    }
  });
}

addKeyboard();
getMovieInfo();

addNewSlides();

cleanSearch();


searchMovie.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    if (searchMovie.value !== '') {
      searchResultHandlear();
    } else {
      document.querySelector('.info').textContent = `No results for "${searchMovie.value}"`;
    }
  }
});


document.querySelector('.search__btn').addEventListener('click', () => {
  if (searchMovie.value !== '') {
    searchResultHandlear();
  } else {
    document.querySelector('.info').textContent = `No results for "${searchMovie.value}"`;
  }
});

document.querySelector('.keyboard').addEventListener('click', (e) => {
  if (e.target.getAttribute('id') === 'Enter') {
    if (searchMovie.value !== '') {
      searchResultHandlear();
    } else {
      document.querySelector('.info').textContent = `No results for "${searchMovie.value}"`;
    }
  }
});


document.querySelector('.search__keyboard').addEventListener('click', () => {
  document.querySelector('.keyboard').classList.toggle('keyboard--show');
});
