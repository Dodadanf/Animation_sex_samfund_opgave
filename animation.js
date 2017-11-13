var antalObjekter = 0;


$(window).on("load", instruktioner1);

function instruktioner1() {
    console.log("Skærm med navn loades, navnet fader væk og introduktion dukker op");
    $("#startscreen").addClass("startscreen_away");
    $("#scene").addClass("scene1");
    $("#tekst4").addClass("intro1");
    $("#tekst5").addClass("instru1");
    $("#objekt1").addClass("objekt1_start_pos");
    $("#objekt2").addClass("objekt2_start_pos");
    $("#objekt3").addClass("objekt3_start_pos");
    $("#objekt4").addClass("objekt4_start_pos");
    $("#objekt5").addClass("objekt5_start_pos");
    $("#objekt6").addClass("objekt6_start_pos");
    $("#taske").on("animationend", klikPaaObjekt);
}

function klikPaaObjekt() {
    console.log("Objekter findes og samles");
    $("#taske").off("animationend", klikPaaObjekt);
    $("#tekst4").removeClass("intro1");
    $("#tekst5").removeClass("instru1");


    $("#objekt1").removeClass("objekt1_start_pos");
    $("#objekt2").removeClass("objekt2_start_pos");
    $("#objekt3").removeClass("objekt3_start_pos");
    $("#objekt4").removeClass("objekt4_start_pos");
    $("#objekt5").removeClass("objekt5_start_pos");
    $("#objekt6").removeClass("objekt6_start_pos");

    $("#objekt1").addClass("objekt1_pos_room");
    $("#objekt2").addClass("objekt2_pos_room");
    $("#objekt3").addClass("objekt3_pos_room");
    $("#objekt4").addClass("objekt4_pos_room");
    $("#objekt5").addClass("objekt5_pos_room");
    $("#objekt6").addClass("objekt6_pos_room");


    $("#objekt1").on("click", instruktioner2);


}


function instruktioner2() {
    //        $(this).hide(); Skal ikke være hide, men skift af class fra pos_room til pos_taske
    //    antalObjekter++;
    //
    //    if (antalObjekter >= 5) {
    //        console.log("tykket på 6 objekter");
    //        instruktioner2();
    //
    //    } else {
    //        console.log("klik på flere objekter");
    //        klikPaaObjekt();
    //    }
    console.log("Objekter fundet og samlet");

    $("#objekt1").off("click", instruktioner2);


    $("#objekt1").removeClass("objekt1_pos_room");
    $("#objekt2").removeClass("objekt2_pos_room");
    $("#objekt3").removeClass("objekt3_pos_room");
    $("#objekt4").removeClass("objekt4_pos_room");
    $("#objekt5").removeClass("objekt5_pos_room");
    $("#objekt6").removeClass("objekt6_pos_room");

    $("#objekt1").addClass("objekt1_pos_taske");
    $("#objekt2").addClass("objekt2_pos_taske");
    $("#objekt3").addClass("objekt3_pos_taske");
    $("#objekt4").addClass("objekt4_pos_taske");
    $("#objekt5").addClass("objekt5_pos_taske");
    $("#objekt6").addClass("objekt6_pos_taske");

    $("#tekst5").addClass("instru2");
    $("#tekst5").on("animationend", instruktioner3);

}

function instruktioner3() {
    console.log("Sceneskift, tankeboble om tyggegummi");
    $("#tekst5").off("animationend", instruktioner3);
    $("#tekst5").removeClass("instru2");
    $("#scene").removeClass("scene1");
    $("#scene").addClass("scene2");

    $("#tekst4").addClass("intro3");
    //    $("#tekst3").addClass("instru3");
    //    $("#tekst4").addClass("svarja");
    //    $("#tekst5").addClass("svarnej");
    //    $("#").on("", valgMedMuligheder1);

    $("#karakter1_container").addClass("karakter1_start_pos");
    $("#karakter2_container").addClass("karakter2_start_pos");
    $("#karakter3_container").addClass("karakter3_start_pos");
    $("#karakter4_container").addClass("karakter4_start_pos");

    $("#tekst4").on("animationend", valgMedMuligheder1);

}

function valgMedMuligheder1() {
    console.log("Dele tyggegummi?");
    $("#tekst4").off("animationend", valgMedMuligheder1);
    $("#tekst4").removeClass("intro3");
    $("#tekst2").addClass("intro3");
    $("#tekst3").addClass("instru3");
    $("#ja1").addClass("svarja");
    $("#nej1").addClass("svarnej");
    $("#ja1").on("click", reaktion1);
    $("#nej1").on("click", reaktion2);
}

function reaktion1() {
    console.log("Ja valgt, glad reaktion");
    $("#ja1").off("click", reaktion1);
    $("#tekst2").removeClass("intro3");
    $("#tekst3").removeClass("instru3");
    $("#ja1").removeClass("svarja");
    $("#nej1").removeClass("svarnej");

    $("#karakter1_container").removeClass("karakter1_start_pos");
    $("#karakter2_container").removeClass("karakter2_start_pos");
    $("#karakter3_container").removeClass("karakter3_start_pos");
    $("#karakter4_container").removeClass("karakter4_start_pos");

    $("#karakter1_container").addClass("karakter1_glad");
    $("#karakter2_container").addClass("karakter2_glad");
    $("#karakter3_container").addClass("karakter3_glad");
    $("#karakter4_container").addClass("karakter4_glad");

    $("#karakter1").on("animationend", instruktioner4);

}

function reaktion2() {
    console.log("Nej valgt, sur reaktion");
    $("#nej1").off("click", reaktion2);
    $("#tekst2").removeClass("intro3");
    $("#tekst3").removeClass("instru3");
    $("#ja1").removeClass("svarja");
    $("#nej1").removeClass("svarnej");

    $("#karakter1_container").removeClass("karakter1_start_pos");
    $("#karakter2_container").removeClass("karakter2_start_pos");
    $("#karakter3_container").removeClass("karakter3_start_pos");
    $("#karakter4_container").removeClass("karakter4_start_pos");

    $("#karakter1_container").addClass("karakter1_ad");
    $("#karakter2_container").addClass("karakter2_ad");
    $("#karakter3_container").addClass("karakter3_ad");
    $("#karakter4_container").addClass("karakter4_ad");

    $("#karakter1").on("animationend", instruktioner4);
}

function instruktioner4() {
    console.log("videre til taleboble fra kammerat");
    $("#karakter1").off("animationend", instruktioner4);
    $("#tekst4").addClass("intro4");
    $("#tekst4").on("animationend", valgMedMuligheder2);
}

function valgMedMuligheder2() {
    console.log("Tanker om at dele sodavand");
    $("#tekst4").off("animationend", valgMedMuligheder2);
    $("#tekst4").removeClass("intro4");
    $("#tekst2").addClass("intro4");
    $("#tekst3").addClass("instru4");
    $("#ja2").addClass("svarja");
    $("#nej2").addClass("svarnej");
    $("#ja2").on("click", reaktion3);
    $("#nej2").on("click", reaktion4);
}

function reaktion3() {
    console.log("Ja valgt, glad reaktion");
    $("#ja2").off("click", reaktion3);
    $("#tekst2").removeClass("intro4");
    $("#tekst3").removeClass("instru4");
    $("#ja2").removeClass("svarja");
    $("#nej2").removeClass("svarnej");
    $("#karakter2").on("animationend", instruktioner5);
}

function reaktion4() {
    console.log("Nej valgt, sur reaktion");
    $("#nej2").off("click", reaktion4);
    $("#tekst2").removeClass("intro4");
    $("#tekst3").removeClass("instru4");
    $("#ja2").removeClass("svarja");
    $("#nej2").removeClass("svarnej");
    $("#karakter2").on("animationend", instruktioner5);
}

function instruktioner5() {
    console.log("Tanker om sure sokker");
    $("#karakter2").off("animationend", instruktioner5);
    $("#tekst4").addClass("intro5");
    $("#tekst4").on("animationend", valgMedMuligheder3);
}

function valgMedMuligheder3() {
    console.log("Tanker om at dele");
    $("#tekst4").off("", valgMedMuligheder3);
    $("#tekst4").removeClass("intro5");
    $("#tekst2").addClass("intro5");
    $("#tekst3").addClass("instru5");
    $("#ja3").addClass("svarja");
    $("#nej3").addClass("svarnej");
    $("#ja3").on("click", reaktion5);
    $("#nej3").on("click", reaktion6);
}

function reaktion5() {
    console.log("Ja valgt, frastødt reaktion");
    $("#ja3").off("click", reaktion5);
    $("#tekst2").removeClass("intro5");
    $("#tekst3").removeClass("instru5");
    $("#ja3").removeClass("svarja");
    $("#nej3").removeClass("svarnej");
    $("#karakter3").on("animationend", instruktioner6);
}

function reaktion6() {
    console.log("Nej valgt, glad reaktion");
    $("#nej3").off("click", reaktion6);
    $("#tekst2").removeClass("intro5");
    $("#tekst3").removeClass("instru5");
    $("#ja3").removeClass("svarja");
    $("#nej3").removeClass("svarnej");
    $("#karakter3").on("animationend", instruktioner6);
}

function instruktioner6() {
    console.log("Telefon bliver taget frem");
    $("#tekst3").addClass("intro6");
    $("#tekst4").addClass("instru6");
    $("#tekst3").on("animationend", valgUdenMuligheder);

}

function valgUdenMuligheder() {
    console.log("Idiot tager uden samtykke");
    $("#tekst3").off("animationend", valgUdenMuligheder);
    $("#tekst3").removeClass("intro6");
    $("#tekst4").removeClass("instru6");
    $("#tekst3").addClass("intro7");
    $("#tekst4").addClass("instru7");
    $("#tekst4").on("click", outro);
}

//function instruktioner7() {
//    console.log("Idiot tager uden samtykke");
//    $("#").off("", valgUdenMuligheder);
//    $("#tekst6").on("click", outro);
//
//}

function outro() {
    window.location.replace("https://privatsnak.dk");
}
