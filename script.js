var v = [["Roberts L.", "Vēlu Jums priecīgus un baltus Ziemassvētkus!"],
        ["Markuss Z.","Lai ir pacietības visu dienu čakarēties ar skolas datoriem un skolēniem."],
        ["Jānis Helvijs J.","Vēlos pateikt paldies par šiem 4 mēnešiem prieka, tuvības, labvēlības un citām izcilām iezīmēm, kuras Jums piemīt! Paldies Jums liels!"],
        ["Maksis G.","Sievietes ir kā vīns - jo vecāks, jo labāks. Novēlu kļūt vecākai un nebaidīties no tā!"],
        ["Ernests K.", "Priecīgus Ziemassvētkus un, lai jaunais gads, atnes prieku un laimi."],
        ["Veronika L.", "Jaukus Ziemassvētkus un lai visas programmas strādātu no pirmas reizes!"],
        ["Kārlis Z.", "Lai viss izdodas!"]];
var i = 0;


function UpdateText(){
    document.getElementById("Quote").innerHTML = v[i][1];
    document.getElementById("Name").innerHTML = v[i][0];
};
function moveForward(){
    if (i == v.length-1){
        i=0;
    } else {
        i=i+1;
    }
    UpdateText();
};

function moveBack(){
    if (i == 0){
        i=v.length-1;
    } else {
        i=i-1;
    }
    UpdateText();
};
