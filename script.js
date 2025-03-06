const section = document.getElementById("section");
const searchInput = document.getElementById("searchInput");
const radioButtonName = document.getElementById("radioButtonName");
const radioButtonRace = document.getElementById("radioButtonRace")
const radioButtonGender = document.getElementById("radioButtonGender");
let link = "https://dragonball-api.com/api/characters?limit=1000";
let selectedFilter = "name";




function updateFilter(event) {
    selectedFilter = event.target.value;
    switch (selectedFilter) {
        case "name":
            searchInput.setAttribute("placeholder", "Search a name");
            break;
        case "race":
            searchInput.setAttribute("placeholder", "Search a race");

            break;
        case "gender":
            searchInput.setAttribute("placeholder", "Search a gender");

            break;
        default:
            searchInput.setAttribute("placeholder", "Search a name");
            break;
    }
}


function queryGeneral(event) {
    let searchValue = event.target.value;
    console.log(selectedFilter)
    switch (selectedFilter) {
        case "name":

            queryName(searchValue);
            break;
        case "race":

            queryRace(searchValue);
        case "gender":

            queryGender(searchValue);
        default:

            break;
    }

}

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
    // descriptionP.innerText = description;
    characterImage.setAttribute("src", image);
    //Add elements to div
    charactersDiv.append(nameH1, kiP, maxKiP, raceH2, genderP, descriptionP, characterImage);
    //Add element to section
    section.appendChild(charactersDiv);
}

function fetchOrigin() {
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

}
fetchOrigin();

async function queryName(searchValue) {

    section.innerHTML = "";
    console.log(searchValue)
    if (!searchValue) {

        fetchOrigin();
    } else {
        console.log("hi")
        let querySearch = "";
        querySearch = "&name=" + searchValue;
        console.log("link", link + querySearch);

        try {
            const result = await fetch(link + querySearch);
            let data = await result.json();

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
}

async function queryRace(searchValue) {

    section.innerHTML = "";

    if (!searchValue) {
        try {
            // const result = await fetch(link)
            // console.log(link);
            // let data = await result.json();
            // console.log(data);


            fetchOrigin();

        } catch (error) {
            throw new Error(error);
        }

    } else {
        let querySearch = "";
        querySearch = "&race=" + searchValue;
        console.log("link", link + querySearch);

        try {
            const result = await fetch(link + querySearch);
            let data = await result.json();

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
}

async function queryGender(searchValue) {

    section.innerHTML = "";

    if (!searchValue) {
        try {
            // const result = await fetch(link)
            // console.log(link);
            // let data = await result.json();
            // console.log(data);


            fetchOrigin();

        } catch (error) {
            throw new Error(error);
        }

    } else {
        let querySearch = "";
        querySearch = "&gender=" + searchValue;
        console.log("link", link + querySearch);

        try {
            const result = await fetch(link + querySearch);
            let data = await result.json();

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
}



//queryGeneral();

const filters = document.getElementsByName('filter')
filters.forEach(radio => {
    radio.addEventListener("change", updateFilter)
});


searchInput.addEventListener("input", queryGeneral);