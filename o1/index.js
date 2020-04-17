

//a
//let filmer = [ "snatch", "good will hunting", "fight club",  "harry potter" ]

//b
//filmer.push("inception")
//filmer.unshift("interstellar")



//c
//console.log ("Filmen på plass nummer 3 i arrayet er " + filmer[2])

//d

const inpNyFilm = document.querySelector ("#inpNyFilm");
const listFilmer = document.querySelector ("#listFilmer");
const btn = document.querySelector ("#btn");

let filmer = [];


function visFilmer() {

    listFilmer.innerHTML = "";

    for(const film of filmer) {
        listFilmer.innerHTML += `<li>${film}</li>`;
    }
    
    inpNyFilm.value = "";
    inpNyFilm.focus();
    
}




function leggTilFilm() {
    filmer = [inpNyFilm.value, ...filmer];
    visFilmer();
}

btn.onclick = leggTilFilm;





//btn.onclick = LeggTilFilm;
