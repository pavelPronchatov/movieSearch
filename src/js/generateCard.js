import slider from './slider';

class GenerateCard {
  constructor(title, titleLink, img, year, rating) {
    this.title = title;
    this.titleLink = titleLink;
    this.img = img;
    this.year = year;
    this.rating = rating;
  }

  createCard() {
    const card = document.createElement('div');
    const cardTitle = document.createElement('a');
    cardTitle.classList.add('card__link');

    const cardPoster = document.createElement('div');
    cardPoster.classList.add('card__img');

    const cardYear = document.createElement('div');
    cardYear.classList.add('card__year');

    const cardRait = document.createElement('div');
    cardRait.classList.add('card__raiting');


    card.setAttribute('class', 'card swiper-slide');

    card.append(cardTitle);
    card.append(cardPoster);
    card.append(cardYear);
    card.append(cardRait);

    cardTitle.textContent = this.title;
    cardTitle.setAttribute('href', `https://www.imdb.com/title/${this.titleLink}/?ref_=hm_fanfav_tt_1_pd_fp1`);
    cardPoster.style.backgroundImage = `url(${this.img})`;
    cardYear.textContent = this.year;
    cardRait.textContent = this.rating;


    slider.appendSlide(card);
  }
}

export default GenerateCard;
