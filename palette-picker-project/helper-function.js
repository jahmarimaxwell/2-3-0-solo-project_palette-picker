// importing json into javascript
import { makePaletteCard } from './palette.js';

// selects form from html
const form = document.getElementById('new-palette-form');

// function for event listener for the form
export const handlePaletteSubmit = (event) => {
    if (event) {
    // prevents the default form submit behavior
    event.preventDefault();

    // uses events target
    const form = event.target;

    // store value from form into variable 
    const title = form.paletteName.value;
    const colors = [
        form.color1.value,
        form.color2.value,
        form.color3.value,
    ];
    const temperature = form.temperature.value;

    // empty array 
    let palettes = [];
    const newPalette = { title, colors, temperature };
    palettes.push(newPalette);
    localStorage.setItem(title, JSON.stringify(palettes));
    makePaletteCard({ title, colors, temperature });
    form.reset();
    }
}

// Add event listener only once for 'submit'
form.addEventListener('submit', handlePaletteSubmit);
