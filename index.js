const form = document.querySelector('.myForm');

form.addEventListener('submit', e => {
    e.preventDefault();
});

const button = document.querySelector('.submit');
button.addEventListener('click', () => {
    const message = document.querySelector('#message');
    const value = message.value;
    console.log(value);
    message.value = '';
});