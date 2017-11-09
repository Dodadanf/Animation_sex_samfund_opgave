$(window).on("load", instruktioner1);

function instruktioner1() {
    console.log("Skærm med navn loades, navnet fader væk og introduktion dukker op");
    $("#startscreen").addClass("startscreen_away");
    $("#scene").addClass("scene1");
    $("#introduktion").addClass("intro1");
    $("#instruktion").addClass("instru1");
    $("#okBtn").addClass("okBtn_trykpos");
    $("#okBtn").on("click", klikPaaObjekt);
}

function klikPaaObjekt() {
    console.log("OK klikkes, objekter findes og samles");
    $("#").off("", klikPaaObjekt);
    $("#").on("", instruktioner2);
}

function instruktioner2() {
    console.log("Objekter fundet og samlet");
    $("#").off("", instruktioner2);
    $("#").on("", instruktioner3);
}

function instruktioner3() {
    console.log("Sceneskift, tankeboble");
    $("#").off("", instruktioner3);
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
    $("#").on("", outro);

}

function outro() {
    window.location.replace("https://privatsnak.dk");
}
