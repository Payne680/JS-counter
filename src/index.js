import './styles/style.css'

import data, {getCurrentValue} from "./data.js"

const plusBtn = document.querySelector('.add');
const minusBtn = document.querySelector('.min');
const textContainer = document.querySelector('span')

function displayValue (text = data.getCurrentValue()) {
    textContainer.innerHTML = text;
}

plusBtn.addEventListener("click", () => {
    data.add();
    displayValue();
});

minusBtn.addEventListener("click", () => {
    data.sub();
    displayValue();
});