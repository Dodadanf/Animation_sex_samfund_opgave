var antalObjekter = 0;
$(window).on("load", instruktioner1);
// var erDerKlikketPaaSeksObjekter = false;


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
    $("#lyd2")[0].play();
    $("#taske").on("animationend", klikPaaObjektSetup);
}

function klikPaaObjektSetup() {

    $("#objekt1").on("click", instruktioner2_objekt1);
    $("#objekt2").on("click", instruktioner2_objekt2);
    $("#objekt3").on("click", instruktioner2_objekt3);
    $("#objekt4").on("click", instruktioner2_objekt4);
    $("#objekt5").on("click", instruktioner2_objekt5);
    $("#objekt6").on("click", instruktioner2_objekt6);
    klikPaaObjekt();
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
}

function instruktioner2_objekt1() {
    $("#objekt1").removeClass("objekt1_pos_room");
    $("#objekt1").addClass("objekt1_pos_taske");
    $("#lyd3")[0].play();
    $("#objekt1").off("click", instruktioner2_objekt1);

    antalObjekter++;
    erDerKlikketPaaSeksObjekter();
}

function instruktioner2_objekt2() {
    $("#objekt2").removeClass("objekt2_pos_room");
    $("#objekt2").addClass("objekt2_pos_taske");
    $("#lyd3")[0].play();
    $("#objekt2").off("click", instruktioner2_objekt2);

    antalObjekter++;
    erDerKlikketPaaSeksObjekter();
}

function instruktioner2_objekt3() {
    $("#objekt3").removeClass("objekt3_pos_room");
    $("#objekt3").addClass("objekt3_pos_taske");
    $("#lyd3")[0].play();
    $("#objekt3").off("click", instruktioner2_objekt3);

    antalObjekter++;
    erDerKlikketPaaSeksObjekter();
}

function instruktioner2_objekt4() {
    $("#objekt4").removeClass("objekt4_pos_room");
    $("#objekt4").addClass("objekt4_pos_taske");
    $("#lyd3")[0].play();
    $("#objekt4").off("click", instruktioner2_objekt4);

    antalObjekter++;
    erDerKlikketPaaSeksObjekter();
}

function instruktioner2_objekt5() {
    $("#objekt5").removeClass("objekt5_pos_room");
    $("#objekt5").addClass("objekt5_pos_taske");
    $("#lyd3")[0].play();
    $("#objekt5").off("click", instruktioner2_objekt5);

    antalObjekter++;
    erDerKlikketPaaSeksObjekter();
}

function instruktioner2_objekt6() {
    $("#objekt6").removeClass("objekt6_pos_room");
    $("#objekt6").addClass("objekt6_pos_taske");
    $("#lyd3")[0].play();
    $("#objekt6").off("click", instruktioner2_objekt6);


    antalObjekter++;
    erDerKlikketPaaSeksObjekter();
}


function erDerKlikketPaaSeksObjekter() {
    if (antalObjekter >= 6) {
        console.log("tykket på 6 objekter");
        instruktioner3();

    } else {
        console.log("klik på flere objekter");
        klikPaaObjekt();
    }

    //Skal ikke være hide, men skift af class fra pos_room til pos_taske
    //antalObjekter++;

    //console.log("Objekter fundet og samlet");

    //$("#objekt1").off("click", instruktioner2);

    $("#tekst5").addClass("instruk2");
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

    $("#lyd2")[0].pause();
    $("#lyd1")[0].play();

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
    $("#ja2").addClass("svar_startpos");
    $("#ja3").addClass("svar_startpos");
    $("#nej2").addClass("svar_startpos");
    $("#nej3").addClass("svar_startpos");
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
    $("#ja2").removeClass("svar_startpos");
    $("#ja3").removeClass("svar_startpos");
    $("#nej2").removeClass("svar_startpos");
    $("#nej3").removeClass("svar_startpos");

    $("#karakter1_sprite").addClass("karakter1_glad");
    $("#karakter2_sprite").addClass("karakter2_glad");
    $("#karakter3_sprite").addClass("karakter3_glad");
    $("#karakter4_sprite").addClass("karakter4_glad");
    $("#lyd3")[0].play();
    $("#lyd4")[0].play();
    setTimeout(instruktioner4, 2000);

}

function reaktion2() {
    console.log("Nej valgt, sur reaktion");
    $("#nej1").off("click", reaktion2);
    $("#tekst2").removeClass("intro3");
    $("#tekst3").removeClass("instru3");
    $("#ja1").removeClass("svarja");
    $("#nej1").removeClass("svarnej");
    $("#ja2").removeClass("svar_startpos");
    $("#ja3").removeClass("svar_startpos");
    $("#nej2").removeClass("svar_startpos");
    $("#nej3").removeClass("svar_startpos");


    $("#karakter1_sprite").addClass("karakter1_ad");
    $("#karakter2_sprite").addClass("karakter2_ad");
    $("#karakter3_sprite").addClass("karakter3_ad");
    $("#karakter4_sprite").addClass("karakter4_ad");
    $("#lyd3")[0].play();
    $("#lyd6")[0].play();
    setTimeout(instruktioner4, 2000);
}

function instruktioner4() {
    console.log("videre til taleboble fra kammerat");

    $("#tekst4").addClass("intro4");

    $("#karakter1_sprite").removeClass("karakter1_glad");
    $("#karakter2_sprite").removeClass("karakter2_glad");
    $("#karakter3_sprite").removeClass("karakter3_glad");
    $("#karakter4_sprite").removeClass("karakter4_glad");

    $("#karakter1_sprite").removeClass("karakter1_ad");
    $("#karakter2_sprite").removeClass("karakter2_ad");
    $("#karakter3_sprite").removeClass("karakter3_ad");
    $("#karakter4_sprite").removeClass("karakter4_ad");
    $("#lyd4")[0].pause();
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
    $("#ja1").addClass("svar_startpos");
    $("#ja3").addClass("svar_startpos");
    $("#nej1").addClass("svar_startpos");
    $("#nej3").addClass("svar_startpos");
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


    $("#karakter1_sprite").addClass("karakter1_glad");
    $("#karakter2_sprite").addClass("karakter2_glad");
    $("#karakter3_sprite").addClass("karakter3_glad");
    $("#karakter4_sprite").addClass("karakter4_glad");

    $("#ja1").removeClass("svar_startpos");
    $("#ja3").removeClass("svar_startpos");
    $("#nej1").removeClass("svar_startpos");
    $("#nej3").removeClass("svar_startpos");
    $("#karakter2").on("animationend", instruktioner5);
    $("#lyd4")[0].play();
    $("#lyd3")[0].play();
    setTimeout(instruktioner5, 2000);

}

function reaktion4() {
    console.log("Nej valgt, sur reaktion");
    $("#nej2").off("click", reaktion4);
    $("#tekst2").removeClass("intro4");
    $("#tekst3").removeClass("instru4");
    $("#ja2").removeClass("svarja");
    $("#nej2").removeClass("svarnej");

    $("#karakter1_sprite").addClass("karakter1_ad");
    $("#karakter2_sprite").addClass("karakter2_ad");
    $("#karakter3_sprite").addClass("karakter3_ad");
    $("#karakter4_sprite").addClass("karakter4_ad");

    $("#ja1").removeClass("svar_startpos");
    $("#ja3").removeClass("svar_startpos");
    $("#nej1").removeClass("svar_startpos");
    $("#nej3").removeClass("svar_startpos");
    $("#lyd3")[0].play();
    $("#lyd6")[0].play();
    setTimeout(instruktioner5, 2000);

}

function instruktioner5() {
    console.log("Tanker om sure sokker");

    $("#karakter1_sprite").removeClass("karakter1_glad");
    $("#karakter2_sprite").removeClass("karakter2_glad");
    $("#karakter3_sprite").removeClass("karakter3_glad");
    $("#karakter4_sprite").removeClass("karakter4_glad");

    $("#karakter1_sprite").removeClass("karakter1_ad");
    $("#karakter2_sprite").removeClass("karakter2_ad");
    $("#karakter3_sprite").removeClass("karakter3_ad");
    $("#karakter4_sprite").removeClass("karakter4_ad");
    $("#lyd4")[0].pause();
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
    $("#ja2").addClass("svar_startpos");
    $("#ja1").addClass("svar_startpos");
    $("#nej2").addClass("svar_startpos");
    $("#nej1").addClass("svar_startpos");

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
    $("#ja2").removeClass("svar_startpos");
    $("#ja1").removeClass("svar_startpos");
    $("#nej2").removeClass("svar_startpos");
    $("#nej1").removeClass("svar_startpos");


    $("#karakter1_sprite").addClass("karakter1_ad");
    $("#karakter2_sprite").addClass("karakter2_ad");
    $("#karakter3_sprite").addClass("karakter3_ad");
    $("#karakter4_sprite").addClass("karakter4_ad");
    $("#lyd5")[0].play();
    $("#lyd3")[0].play();
    setTimeout(instruktioner6, 2000);

}

function reaktion6() {
    console.log("Nej valgt, glad reaktion");
    $("#nej3").off("click", reaktion6);
    $("#tekst2").removeClass("intro5");
    $("#tekst3").removeClass("instru5");
    $("#ja3").removeClass("svarja");
    $("#nej3").removeClass("svarnej");
    $("#ja2").removeClass("svar_startpos");
    $("#ja1").removeClass("svar_startpos");
    $("#nej2").removeClass("svar_startpos");
    $("#nej1").removeClass("svar_startpos");

    $("#karakter1_sprite").addClass("karakter1_glad");
    $("#karakter2_sprite").addClass("karakter2_glad");
    $("#karakter3_sprite").addClass("karakter3_glad");
    $("#karakter4_sprite").addClass("karakter4_glad");
    $("#lyd4")[0].play();
    $("#lyd3")[0].play();
    setTimeout(instruktioner6, 2000);
}

function instruktioner6() {
    console.log("Telefon bliver taget frem");

    $("#karakter1_sprite").removeClass("karakter1_ad");
    $("#karakter2_sprite").removeClass("karakter2_ad");
    $("#karakter3_sprite").removeClass("karakter3_ad");
    $("#karakter4_sprite").removeClass("karakter4_ad");

    $("#karakter1_sprite").removeClass("karakter1_glad");
    $("#karakter2_sprite").removeClass("karakter2_glad");
    $("#karakter3_sprite").removeClass("karakter3_glad");
    $("#karakter4_sprite").removeClass("karakter4_glad");

    $("#tekst3").addClass("intro6");
    $("#tekst4").addClass("instru6");
    $("#objekt3").removeClass("objekt3_pos_taske");
    $("#objekt3").hide;

    $("#karakter1_sprite").addClass("karakter1_overrasket");
    $("#karakter2_sprite").addClass("karakter2_overrasket");
    $("#karakter3_sprite").addClass("karakter3_overrasket");

    //Eva skal løbe ud
    $("#karakter4_container").removeClass("karakter4_start_pos");
    $("#karakter4_container").addClass("karakter4_container_move");
    $("#karkater4_sprite").addClass("karakter4_walkcycle");

    $("#karakter4_container").on("animationend", valgUdenMuligheder);
    $("#lyd4")[0].pause();
}

function valgUdenMuligheder() {
    console.log("Idiot tager uden samtykke");
    $("#").off("animationend", valgUdenMuligheder);
    $("#tekst3").removeClass("intro6");
    $("#tekst4").removeClass("instru6");
    $("#tekst2").addClass("intro7");
    $("#tekst3").addClass("instru7");

    $("#lyd6")[0].play();

    $("#tekst3").on("click", outro);
}

function outro() {
    window.location.replace("http://privatsnak.dk");
}
