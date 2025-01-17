// vite will now compile our scss
import './styles/styles.scss';

//JS Import
import MovieCardGenerator from './js/_frontpage_movie_cards.js';
import LoadAllFilmsPage from './js/LoadAllFilmsPage.js';
import ApiBackend from './js/ApiBackend.js';
import MobileMenu from './js/MobileMenu.js';
import initLiveEvents from './js/_initLiveEvents.js';

document.addEventListener('DOMContentLoaded', initLiveEvents);
