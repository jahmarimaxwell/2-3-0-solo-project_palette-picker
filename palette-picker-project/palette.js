/// updating work
import { deletePalette } from './helper-function.js';
import { copyToClipboard } from './helper-function.js';

export const makePaletteCard = (palettes) => {
    const { title, colors, temperature } = palettes;
    console.log({ title, colors, temperature });
    const cardContainer = document.createElement("div");
    // create attributes for each container to style
    cardContainer.setAttribute("id", `${title}-container`);
    cardContainer.setAttribute("class", "card-container")

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
    const color1DivText = document.createElement("div");
    color1DivText.setAttribute("id", "color-div-text");
    const hex1 = document.createElement("div");
    hex1.setAttribute("id", "hex");

    const color2 = document.createElement("div");
    color2.setAttribute("id", "color")
    const color2DivText = document.createElement("div");
    color2DivText.setAttribute("id", "color-div-text");
    const hex2 = document.createElement("div");
    hex2.setAttribute("id", "hex");

    const color3 = document.createElement("div");
    const color3DivText = document.createElement("div");
    color3.setAttribute("id", "color");
    color3DivText.setAttribute("id", "color-div-text");
    const hex3 = document.createElement("div");
    hex3.setAttribute("id", "hex");

    const deleteButtonContainer = document.createElement("div");
    deleteButtonContainer.setAttribute("id", "delete-button-container");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-button")
    deleteButton.textContent = 'Delete Palette';

    const temperatureContainer = document.createElement("div");
    temperatureContainer.setAttribute("id", "temperature-container")

    // Structure Elements
    color1.append(color1DivText);
    color2.append(color2DivText);
    color3.append(color3DivText);
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

    color1DivText.textContent = 'Color 1';
    color2DivText.textContent = 'Color 2';
    color3DivText.textContent = 'Color 3';
    // setting background of each color to the color chosen
    color1.style.backgroundColor = colors[0];
    color2.style.backgroundColor = colors[1];
    color3.style.backgroundColor = colors[2];

    temperatureContainer.textContent = temperature;

    deletePalette(deleteButton, `${title}-container`);

    copyToClipboard(hex1, colors[0]);
    copyToClipboard(hex2, colors[1]);
    copyToClipboard(hex3, colors[2]);
    // cardContainer.style.backgroundColor = green;
}