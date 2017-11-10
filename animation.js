var antalObjekter = 0;


$(window).on("load", instruktioner1);

function instruktioner1() {
    console.log("Skærm med navn loades, navnet fader væk og introduktion dukker op");
    $("#startscreen").addClass("startscreen_away");
    $("#scene").addClass("scene1");
    $("#tekst4").addClass("intro1");
    $("#tekst5").addClass("instru1");
    $("#taske").on("animationend", klikPaaObjekt);

    $("#objekt1").addClass("objekt1_start_pos");
    $("#objekt2").addClass("objekt2_start_pos");
    $("#objekt3").addClass("objekt3_start_pos");
    $("#objekt4").addClass("objekt4_start_pos");
    $("#objekt5").addClass("objekt5_start_pos");
    $("#objekt6").addClass("objekt6_start_pos");
}

function klikPaaObjekt() {
    console.log("Objekter findes og samles");
    $("#taske").off("animationend", klikPaaObjekt);
    $("#tekst4").removeClass("intro1");
    $("#tekst5").removeClass("instru1");


    $(this).hide();
    antalObjekter++;

    if (antalObjekter >= 5) {
        console.log("tykket på 6 objekter");
        instruktioner2();

    } else {
        console.log("klik på flere objekter");
        klikPaaObjekt();
    }
}

$("#objekt1").addClass("objekt1_start_pos");

$("#objekt1").addClass("objekt1_pos_room");
$("#objekt2").addClass("objekt2_pos_room");
$("#objekt3").addClass("objekt3_pos_room");
$("#objekt4").addClass("objekt4_pos_room");
$("#objekt5").addClass("objekt5_pos_room");
$("#objekt6").addClass("objekt6_pos_room");



}

function instruktioner2() {
    console.log("Objekter fundet og samlet");
    $("#tekst5").addClass("instru2");
    $("#tekst5").on("animationend", instruktioner3);
}

function instruktioner3() {
    console.log("Sceneskift, tankeboble");
    $("#tekst5").off("animationend", instruktioner3);
    $("#tekst5").removeClass("instru2");
    $("#scene").removeClass("scene1");
    $("#scene").addClass("scene2");
    $("#tekst2").addClass("intro3");
    $("#tekst3").addClass("instru3");
    $("#tekst4").addClass("svarja");
    $("#tekst5").addClass("svarnej");
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
