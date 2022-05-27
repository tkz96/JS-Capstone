import './styles.css';
import { getEpisodes } from './apiclass.js';
import { init } from './likes.js';

window.onload = getEpisodes();
init();
