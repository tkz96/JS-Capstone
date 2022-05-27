import { getComments } from './apiclass.js';

const appContainer = document.querySelector('.app-container');
const overlay = document.getElementById('overlay');

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
    let targetID = n.getAttribute('data-id');
    displayOverlay(card, targetID);
    getComments(targetID);
    }));
};

const displayOverlay = (array, n) => {
    console.log(n-1)

    overlay.innerHTML = `
        <div id="modal">
            <button id="close-overlay">X</button>
            <figure>
                <img src="${array[n-1].image.medium}" alt="">
                <figcaption></figcaption>
            </figure>
            <div>
                <ul id="modal-info">
                    <li>Fuel: Titanium</li>
                    <li>Length: 100,000</li>
                    <li>Weight: 400</li>
                    <li>Power: 100,000,000</li>
                </ul>
            </div>
            <div id="comment-section">
                <h3>Comments (2)</h3>
                <p>03/11/2021 Alex: I'd love to buy it!</p>
                <p>03/11/2021 Alex: I'd love to buy it!</p>
            </div>
            <div id="add-a-comment">
                <h3>Add A Comment</h3>
                <form id="form">
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <textarea name="textarea" placeholder="Your Insights" maxlength="500" required></textarea>
                    <button type="submit">Comment</button>
                </form>
            </div>
        </div>`;

        const closeOverlay = document.getElementById('close-overlay');

        closeOverlay.addEventListener('click', () => {
            overlay.style.display = 'none'; 
        })
    };

    

export { displayEpisodes, displayOverlay };