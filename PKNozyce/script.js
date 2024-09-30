class Mozliwosc {
    constructor(name1, image1) {
        this.name = name1;
        this.img = image1;
    }
}

const mozliwosci = [
    new Mozliwosc("Papier", "media/papier.png"),
    new Mozliwosc("Kamien", "media/kamien.png"),
    new Mozliwosc("Nozyce", "media/nozyce.png")
]


function losowanie(){
    let a = Math.floor(Math.random() * mozliwosci.length)
    return mozliwosci[a]
}

function wybor(){
    let odp = losowanie()
    switch(Mozliwosc.name){
        case "Papier"
    }
}
