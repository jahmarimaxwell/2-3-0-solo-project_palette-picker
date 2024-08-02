// importing json into javascript
import { makePaletteCard } from './palette.js';
// selects form from html
const form = document.getElementById('new-palette-form');
export const preventDefault = (event) => {
    event.preventDefault();
}
// function for event listener for the form
export const handlePaletteSubmit = (event) => {
    // uses events target
    const form = event.target;
    // store value from form into variable 
    const title = form.palleteName.value;
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
form.addEventListener('submit', handlePaletteSubmit);
form.addEventListener('submit', preventDefault);