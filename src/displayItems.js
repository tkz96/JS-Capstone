/* eslint-disable import/no-cycle */

import { getComments, postComment } from './apiclass.js';

const appContainer = document.querySelector('.app-container');
const overlay = document.getElementById('overlay');

const displayOverlay = (array, n) => {
  overlay.innerHTML = `
        <div id="modal">
            <button id="close-overlay">X</button>
            <figure>
                <img src="${array[n - 1].image.medium}" alt="">
                <figcaption>${array[n - 1].name}</figcaption>
            </figure>
            <div id="comment-section"></div>
            <div id="comment-list"></div>
            <div id="add-a-comment">
                <h3>Add A Comment</h3>
                <form id="comment-form">
                    <input id="comment-name" type="text" name="name" placeholder="Your Name" required/>
                    <textarea id="comment-textarea" name="textarea" placeholder="Your Insights" maxlength="500" required></textarea>
                    <button type="submit">Comment</button>
                </form>
            </div>
        </div>`;

  const closeOverlay = document.getElementById('close-overlay');

  closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  const commentForm = document.getElementById('comment-form');
  const commentName = document.getElementById('comment-name');
  const commentTextArea = document.getElementById('comment-textarea');

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postComment(n, commentName.value, commentTextArea.value);
    commentName.value = '';
    commentTextArea.value = '';
  });
};

const displayComments = (arr) => {
  const commentSection = document.getElementById('comment-section');
  if (arr.length === undefined) {
    arr.length = 0;
  }
  commentSection.innerHTML = `<h3>Comments (${arr.length})</h3>`;

  const commentList = document.getElementById('comment-list');
  let item = '';

  arr.forEach((element) => {
    item += `
                <p>${element.creation_date} - ${element.username}: ${element.comment}</p>
            `;
  });
  commentList.innerHTML = item;
};

const displayEpisodes = (card) => {
  let item = '';
  card.forEach((element) => {
    item += `
      <div class="info-card">
        <figure>
          <img src="${element.image.medium}" alt="">
          <figcaption>${element.name}</figcaption>
        </figure>
        <div class="${element.id}">
          <i class="fa fa-heart-o" aria-hidden="true" id='card${element.id}'></i> <span>${element.id}</span>
        </div>
        <button class="comments" data-id="${element.id}">Comments</button>
      </div>`;
  });
  appContainer.innerHTML = item;

  const comments = document.querySelectorAll('.comments');

  comments.forEach((n) => n.addEventListener('click', () => {
    overlay.style.display = 'flex';
    const targetID = n.getAttribute('data-id');
    getComments(targetID);
    displayOverlay(card, targetID);
  }));
};

export { displayEpisodes, displayOverlay, displayComments };