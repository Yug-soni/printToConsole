import {elements} from './views/base'


elements.form.addEventListener('submit', e => {
    e.preventDefault();
});


elements.button.addEventListener('click', () => {
    const value = elements.message.value;
    console.log(value);
    message.value = '';
});
