import { baseUrl, ourID } from './url.js';

export const getLikesNumber = (likesData) => {
  const likeSpan = document.querySelectorAll('.likes');
  likeSpan.forEach((element) => {
    likesData.forEach((like) => {
      if (like.item_id === element.id) {
        element.innerHTML = `${like.likes} likes`;
      }
    });
  });
};

async function getLikes() {
  const res = await fetch(`${baseUrl}/${ourID}/likes`);
  const data = await res.json();
  getLikesNumber(data);
}

export const postLike = (item) => {
  fetch(`${baseUrl}/${ourID}/likes`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset="utf-8"',
    },
    body: JSON.stringify({
      item_id: item,
    }),
  }).then(() => getLikes());
};
export const checkLikes = () => {
  const likeItem = document.querySelector('.app-container');

  likeItem.addEventListener('click', (e) => {
    const id = e.target.className;
    const likeItem = e.target.parentElement.className;

    if (id === 'heart') {
      postLike(likeItem);
    }
  });
};

export const init = () => {
  checkLikes();
  window.addEventListener('load', getLikes);
};
export default init;
