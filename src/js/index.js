import {elements} from './views/base';

elements.form.addEventListener('submit', e => {
    e.preventDefault();
});

elements.button.addEventListener('click', () => {
    const value = elements.message.value;
    fetchText();
    console.log(value);
    message.value = '';
});

const fetchText = async () => {
    const response = await fetch('http://localhost:9999/',{ mode: 'no-cors' });
    console.log(response.status);
    console.log(response.statusText);

    response.json().then(data => {console.log(data)});

    console.log(await response.text());
};