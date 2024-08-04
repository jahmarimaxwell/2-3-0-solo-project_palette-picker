/// updating work
import { deletePalette } from './delete-palette.js';

export const makePaletteCard = (palettes) => {
    const { title, colors, temperature } = palettes;
    console.log({ title, colors, temperature });
    const cardContainer = document.createElement("div");
    // create attributes for each container to style
    cardContainer.setAttribute("id", "card-container");

    const bigCardContainer = document.getElementById('big-card-container');
    const bodyContainer = document.createElement("div");
    bodyContainer.setAttribute("id", "body-container");

    // create list item structure for different containers
    const cardLi = document.createElement("li");
    cardLi.setAttribute("id", "card-list");
    const titleContainer = document.createElement("p");
    titleContainer.setAttribute("id", "title-container");

    const colorContainer = document.createElement("div");
    colorContainer.setAttribute("id", "color-container");

    const hexContainer = document.createElement("div");
    hexContainer.setAttribute("id", "hex-container");

    const color1 = document.createElement("div");
    color1.setAttribute("id", "color");
    const hex1 = document.createElement("div");

    const color2 = document.createElement("div");
    color2.setAttribute("id", "color");
    const hex2 = document.createElement("div");

    const color3 = document.createElement("div");
    color3.setAttribute("id", "color");
    const hex3 = document.createElement("div");

    const deleteButtonContainer = document.createElement("div");
    deleteButtonContainer.setAttribute("id", "delete-button-container");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-button")
    deleteButton.textContent = 'Delete Palette';

    const temperatureContainer = document.createElement("div");
    temperatureContainer.setAttribute("id", "temperature-container")

    // Structure Elements
    colorContainer.append(color1, color2, color3);
    hexContainer.append(hex1, hex2, hex3);
    bodyContainer.append(colorContainer, hexContainer);
    deleteButtonContainer.append(deleteButton);

    cardLi.append(
        titleContainer,
        bodyContainer,
        deleteButtonContainer,
        temperatureContainer
    );

    cardContainer.append(cardLi);
    bigCardContainer.appendChild(cardContainer);

    titleContainer.textContent = title;

    hex1.textContent = `Copy ${colors[0]}`;
    hex2.textContent = `Copy ${colors[1]}`;
    hex3.textContent = `Copy ${colors[2]}`;

    color1.textContent = 'Color 1';
    color2.textContent = 'Color 2';
    color3.textContent = 'Color 3';
    // setting background of each color to the color chosen
    color1.style.backgroundColor = colors[0];
    color2.style.backgroundColor = colors[1];
    color3.style.backgroundColor = colors[2];

    temperatureContainer.textContent = temperature;

    deletePalette(deleteButton, `card-container`);
    // cardContainer.style.backgroundColor = green;
}