const section = document.getElementById("section");
const searchInput = document.getElementById("searchInput");
const buttonSearch = document.getElementById("buttonSearch");


let query = searchInput.value;

fetch("https://dragonball-api.com/api/characters?limit=1000")

    .then((result) => result.json())
    .then((data) => {
        data.items.forEach(character => {
            const { name } = character;
            const { ki } = character;
            const { maxKi } = character;
            const { race } = character;
            const { gender } = character;
            const { description } = character;
            const { image } = character;

            cardCharacter(name, ki, maxKi, race, gender, description, image);
        });
    })
    .catch((error) => console.error(error))

function cardCharacter(name, ki, maxKi, race, gender, description, image) {

    //Create elements
    const charactersDiv = document.createElement("div");
    const nameH1 = document.createElement("h1");
    const kiP = document.createElement("p");
    const maxKiP = document.createElement("p");
    const raceH2 = document.createElement("h2");
    const genderP = document.createElement("p");
    const descriptionP = document.createElement("p");
    const characterImage = document.createElement("img");
    //Set Attributes
    charactersDiv.setAttribute("id", "charactersDiv");
    nameH1.innerText = name;
    kiP.innerText = ki;
    maxKiP.innerText = maxKi;
    raceH2.innerText = race;
    genderP.innerText = gender;
    descriptionP.innerText = description;
    characterImage.setAttribute("src", image);
    //Add elements to div
    charactersDiv.append(nameH1, kiP, maxKiP, raceH2, genderP, descriptionP, characterImage);
    //Add element to section
    section.appendChild(charactersDiv);
}

async function queryName(event) {
    let link = "https://dragonball-api.com/api/characters?limit=1000";

    let query = event.target.value;
    let querySearch = "&name=" + query;
    link += querySearch;

    try {
        const result = await fetch(link);
        let data = await result.json();
        console.log(data);

        data.forEach(character => {
            const { name } = character;
            const { ki } = character;
            const { maxKi } = character;
            const { race } = character;
            const { gender } = character;
            const { description } = character;
            const { image } = character;

            cardCharacter(name, ki, maxKi, race, gender, description, image);
        });

    } catch (error) {
        throw new Error(error);
    }
}
searchInput.addEventListener("input", queryName)