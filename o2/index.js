let navn = document.querySelector ("#navn");
let alder = document.querySelector ("#alder");
let btn = document.querySelector ("#btn");
let listVenn = document.querySelector ("#listVenn");

/*let venner = [
    { navn: "Snorre", alder: 28 },
    { navn: "Lise", alder: 24 },
    { navn: "Børre", alder: 32 }
    ]*/

    
    
function LeggTilNavn() {

    div1.innerHTML += `(<tr>  <td>${navn}</td> <td>${alder} </td>  </tr>)`
    console.log (navn)

    
}

btn.onclick = LeggTilNavn;

console.log (navn)
   
    

