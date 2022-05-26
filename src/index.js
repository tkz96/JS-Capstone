import './styles.css';
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';

const comments = document.getElementById('comments');

comments.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
});

const closeBtn = document.getElementById('close-overlay');

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});