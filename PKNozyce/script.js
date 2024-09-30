class Mozliwosc {
    constructor(name1, image1) {
        this.name = name1;
    }
}

const mozliwosci = [
    new Mozliwosc("Papier"),
    new Mozliwosc("Kamien"),
    new Mozliwosc("Nozyce")
]


function losowanie(){
    let a = Math.floor(Math.random() * mozliwosci.length)
    return mozliwosci[a]
}

document.write("<h1>PAPIER, KAMIEN, NOŻYCE</h1>")

function wybor(wyborN){
    let odp = losowanie()
    let h2Wynik = document.getElementById("1")
    if(wyborN ==odp.name)
        {
          h2Wynik.innerHTML = "Remis. Komputer też wybrał: " + wyborN
        }
        else if(wyborN==='Papier' && odp.name==='Kamien' || wyborN==='Kamien' && odp.name==='Nozyce'|| wyborN==='Nozyce' && odp.name==='Papier' )
        {
            h2Wynik.innerHTML = "Wygrałeś. Komputer wybrał: "+ odp.name
        }else{
            h2Wynik.innerHTML = "Przegrałeś. Komputer wybrał: "+odp.name
        }
}
