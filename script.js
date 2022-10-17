function afiseazaText() {
    document.querySelector("#experienta1").classList.toggle("element-ascuns");
    // document.querySelector- ne returneaza elementul
    // classlist - ne ofera o lista cu clasele
    // toggle - va adauga o clasa in cazul in care ea nu este in lista, si o va sterge daca este in lista (se aplica doar pentru CLASSLIST)
}

function afiseazaText2(){
    document.querySelector("#experienta2").classList.toggle("element-ascuns");
}