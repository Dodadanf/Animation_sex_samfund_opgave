var antalObjekter = 0;


$(window).on("load", instruktioner1);

function instruktioner1() {
    console.log("Skærm med navn loades, navnet fader væk og introduktion dukker op");
    $("#startscreen").addClass("startscreen_away");
    $("#scene").addClass("scene1");
    $("#tekst4").addClass("intro1");
    $("#tekst5").addClass("instru1");
    $("#taske").on("animationend", klikPaaObjekt);
}

function klikPaaObjekt() {
    console.log("Objekter findes og samles");
    $("#taske").off("animationend", klikPaaObjekt);
    $("#tekst4").removeClass("intro1");
    $("#tekst5").removeClass("instru1");

    $(this).hide();
    antalObjekter++;

    if (antalObjekter >= 5) {
        console.log("tykket på 5");
        instruktioner2();

    } else {
        console.log("klik på goods igen");
        klikPaaObjekt();
    }
}
$("#").on("", instruktioner2);

$("#objekt1").addClass("objekt1_start_pos");
}

function instruktioner2() {
    console.log("Objekter fundet og samlet");
    $("#").off("", instruktioner2);
    $("#").on("", instruktioner3);
}

function instruktioner3() {
    console.log("Sceneskift, tankeboble");
    $("#").off("", instruktioner3);
    $("#scene").removeClass("scene1");
    $("#scene").addClass("scene2");
    $("#").on("", valgMedMuligheder1);
}

function valgMedMuligheder1() {
    console.log("Tanke om at dele");
    $("#").off("", valgMedMuligheder1);
    $("#").on("", instruktioner4);
}

function instruktioner4() {
    console.log("Reaktion, og videre til taleboble fra kammerat");
    $("#").off("", instruktioner4);
    $("#").on("", valgMedMuligheder2);
}

function valgMedMuligheder2() {
    console.log("Tanker om at dele");
    $("#").off("", valgMedMuligheder2);
    $("#").on("", instruktioner5);
}

function instruktioner5() {
    console.log("Reaktion, idiot kommer");
    $("#").off("", instruktioner5);
    $("#").on("", valgUdenMuligheder);
}

function valgUdenMuligheder() {
    console.log("Idiot tager uden samtykke");
    $("#").off("", valgUdenMuligheder);
    $("#").on("", instruktioner6);
}

function instruktioner6() {
    console.log("Idiot tager uden samtykke");
    $("#").off("", valgUdenMuligheder);
    $("#tekst6").on("click", outro);

}

function outro() {
    window.location.replace("https://privatsnak.dk");
}
