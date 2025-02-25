const section = document.getElementById("section");


fetch("https://dragonball-api.com/api/characters")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
