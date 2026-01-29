const emailForm = document.querySelector('.email_box');

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Welcome to Chai Culture. We will notify you very soon.');
    emailForm.reset();
});