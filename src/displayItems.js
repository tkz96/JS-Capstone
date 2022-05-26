const appContainer = document.querySelector('.app-container');
const overlay = document.getElementById('overlay');

const displayEpisodes = (card) => {
  const splice = card.slice(0,9);
  let item = '';
  
  splice.forEach((element) => {
    item += `
    <div class="info-card">
      <figure>
        <img src="${element.image.medium}" alt="">
        <figcaption>${element.name}</figcaption>
      </figure>
      <div class="${element.id}">
        <i class="fa fa-heart-o" aria-hidden="true"id='card${element.id}'></i> <span>${element.id}</span>
      </div>
      <button class="comments" data-id="${element.id}">Comments</button>
    </div>`;
  });
  appContainer.innerHTML = item;
};

const displayOverlay = () => {
    overlay.innerHTML = 
    `<div id="modal">
        <button id="close-overlay">X</button>
        <figure>
            <img src="https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg" alt="">
            <figcaption>Space 1</figcaption>
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
                <ul class="form-input">
                    <li>
                        <input type="text" name="name" placeholder="Your Name" required/>
                    </li>
                    <li>
                        <textarea name="textarea" placeholder="Your Insights" maxlength="500" required></textarea>
                    </li>
                </ul>
                <button type="submit">Comment</button>
            </form>
        </div>
    </div>`;
};


export { displayEpisodes, displayOverlay };