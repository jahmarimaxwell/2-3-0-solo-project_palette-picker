// importing json into javascript
import palettes from '/palettes.json' with { type: 'json' };
// importng functions from another javascript file
import { handlePaletteSubmit } from './helper-function.js';
import { preventDefault } from './helper-function.js';
import { makePaletteCard } from './palette.js';

/*
Object.keys(palettes).forEach((key) => {
    let value = palettes[key];
    console.log(value);
});
console.log(palettes)
*/

const displayPalettes = () => {
    palettes.forEach(palette => {
        makePaletteCard(palette);
    });
}

// Display palettes on page load
window.onload = displayPalettes;

const main = () => {
    handlePaletteSubmit();
    preventDefault();
    makePaletteCard();
    displayPalettes();
}

main();
