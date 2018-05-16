/*jslint browser, devel, for, this*/
//Kalder scriptet når sitet er loadet og der trykkes på submit
window.addEventListener('load', function () {
    document.getElementById("contact").onsubmit = Valider;
})

//Hele validerings-scriptet
function Valider() {
    var AntalFejl = 0;
    var FejlBesked1 = "";
    var FejlBesked2 = "";
    var FejlBesked3 = "";
    var FejlBesked4 = "";
    //Hvis InputNavn er lig med tomt, giv fejlbesked
    if (document.getElementById('InputNavn').value == "") {
        AntalFejl += 1;
        FejlBesked1 = "Skriv dit navn!";
    }
    //ellers tjek om der bliver brugt bogstaver
    else {
        var regexpbogstaver = /^[a-zA-Z ]+$/;
        if (!regexpbogstaver.test(document.getElementById('InputNavn').value)) {
            AntalFejl += 1;
            FejlBesked1 = "Navn må kun indeholde bogstaver og mellemrum!";
        }
    }

    if (document.getElementById('InputTelefon').value == "") {
        AntalFejl += 1;
        FejlBesked2 = "Skriv dit telefonnummer!";
    } else {
        var regexptal = /^[0-9]+$/;
        if (!regexptal.test(document.getElementById('InputTelefon').value)) {
            AntalFejl += 1;
            FejlBesked2 += "Telefonnummer må kun indeholde tal!";
        }
    }

    if (document.getElementById('InputMail').value == "") {
        AntalFejl += 1;
        FejlBesked3 = "Skriv din mail!";
    } else {
        var regexpmail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!regexpmail.test(document.getElementById('InputMail').value)) {
            AntalFejl += 1;
            FejlBesked3 = "Mail er ikke gyldig!";
        }
    }
     //Hvis InputNavn er lig med tomt, giv fejlbesked
     if (document.getElementById('InputBesked').value == "") {
        AntalFejl += 1;
        FejlBesked4 = "Skriv en besked!";
    }
    //ellers tjek om der bliver brugt bogstaver
    else {
        var regexpbogstaver = /^[a-zA-Z ]+$/;
        if (!regexpbogstaver.test(document.getElementById('InputBesked').value)) {
            AntalFejl += 1;
            FejlBesked4 = "Du skal skrive en besked!";
        }
    }
    //hvis der ingen fejl er gennemføres udfyldelsen af formen
    if (AntalFejl == 0) {
        alert('Tak for din henvendelse, vi svarer så hurtigt vi kan');
        return true;
    }
    //Ellers gives fejlbeskeder i html'en (p-tagget)
    else {
        document.getElementById('FejlBesked1').innerHTML = FejlBesked1;
        document.getElementById('FejlBesked2').innerHTML = FejlBesked2;
        document.getElementById('FejlBesked3').innerHTML = FejlBesked3;
        document.getElementById('FejlBesked4').innerHTML = FejlBesked4;
        return false;
    }
}