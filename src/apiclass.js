/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

import { displayEpisodes } from './displayItems.js';

const ourID = 'VquE0tA2WmPqHydxagQA';

const episodes = ' https://api.tvmaze.com/seasons/1/episodes';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

async function getEpisodes() {
  const response = await fetch(episodes);
  const data = await response.json();
  displayEpisodes(data);
}

async function getComments(itemID) {
  const response = await fetch(`${baseUrl}/${ourID}/comments?item_id=${itemID}`);
  const data = await response.json();
  console.log(data);
};

export { getEpisodes, getComments };