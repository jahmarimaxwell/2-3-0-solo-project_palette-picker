
export const makePaletteCard = (palettes) => {
    const { title, colors, temperature } = palettes;
    console.log({ title, colors, temperature });
    const cardContainer = document.getElementById('palette-section');

    // create elements
    const cardLi = document.createElement("li");
    const titleP = document.createElement("p");
    // const paletteContainer = document.createElement("div");
    const colorContainer = document.createElement("div");
    const hexContainer = document.createElement("div");

    const colorContainer1 = document.createElement("div");
    const hexContainer1 = document.createElement("div");

    const colorContainer2 = document.createElement("div");
    const hexContainer2 = document.createElement("div");

    const colorContainer3 = document.createElement("div");
    const hexContainer3 = document.createElement("div");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete Palette';
    const temperatureContainer = document.createElement("div");

    //structure elements
    colorContainer.append(colorContainer1, colorContainer2, colorContainer3);
    hexContainer.append(hexContainer1, hexContainer2, hexContainer3);

    cardLi.append(
        titleP,
        hexContainer,
        colorContainer,
        temperatureContainer,
        deleteButton
    );
    cardContainer.append(cardLi);

    titleP.textContent = title;

    hexContainer1.textContent = colors[0];
    hexContainer2.textContent = colors[1];
    hexContainer3.textContent = colors[2];

    colorContainer1.textContent = 'Color 1';
    colorContainer2.textContent = 'Color 2';
    colorContainer3.textContent = 'Color 3';

    colorContainer1.style.backgroundColor = colors[0];
    colorContainer2.style.backgroundColor = colors[1];
    colorContainer3.style.backgroundColor = colors[2];

    temperatureContainer.textContent = temperature[0];
}