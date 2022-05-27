/* eslint-disable import/no-cycle */

import { displayEpisodes, displayComments } from './displayItems.js';

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
  displayComments(data);
}

const postComment = (id, name, comment) => {
  fetch(`${baseUrl}/${ourID}/comments`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset="utf-8"',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
  }).then(() => getComments(id));
};

export { getEpisodes, getComments, postComment };