const section = document.getElementById("section");


let resultCharacters = [];

let arrayId = [];
let arrayName = [];
let arrayKi = [];
let arrayMaxKi = [];
let arrayRace = [];
let arrayGender = [];
let arrayDescription = [];
let arrayImage = [];
let arrayAffiliation = [];

fetch("https://dragonball-api.com/api/characters?limit=1000")
    .then((result) => result.json())
    .then((data) => {
        data.items.forEach(character => {
            resultCharacters.push(character)
        });
    })
    .catch((error) => console.error(error))

function arraysInformationCharacters(characters, idArray, nameArray, kiArray, maxKiArray, raceArray, genderArray, descriptionArray, imageArray, affiliationArray) {


    characters.forEach(character => {
        idArray.push(character.id)
        console.log(character.id)
    })

    characters.forEach(character => {
        nameArray.push(character.id)
    })

    characters.forEach(character => {
        kiArray.push(character.id)
    })

    characters.forEach(character => {
        maxKiArray.push(character.id)
    })

    characters.forEach(character => {
        raceArray.push(character.id)
    })

    characters.forEach(character => {
        genderArray.push(character.id)
    })

    characters.forEach(character => {
        descriptionArray.push(character.id)
    })

    characters.forEach(character => {
        imageArray.push(character.id)
    })

    characters.forEach(character => {
        affiliationArray.push(character.id)
    })
}
arraysInformationCharacters(resultCharacters, arrayId, arrayName, arrayKi, arrayMaxKi, arrayRace, arrayGender, arrayDescription, arrayImage, arrayAffiliation)


function addDiv() {

    const charactersDiv = document.createElement("div");

    charactersDiv.setAttribute("id", "charactersDiv")
    charactersDiv.innerText = "hola"
    arrayId.forEach(id => {
        charactersDiv.innerHTML = `<p>${id}</p>
                                     </br> `
    })



    section.appendChild(charactersDiv);
}
addDiv();