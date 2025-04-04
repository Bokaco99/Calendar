let danas = new Date();
let godina = danas.getFullYear();
let mesec = danas.getMonth()+1;

function resetKalendar(){
    document.getElementById('title').innerText = '';
    document.getElementById('dani').innerHTML ='';
}

function popuniKalendar(){
    document.getElementById('dani').innerHTML = ''
   
    let imenaMeseci= ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    let imeIzabranogMeseca = imenaMeseci[mesec-1];

    let t= imeIzabranogMeseca + ' ' + godina ;

    document.getElementById('monthTitle').innerText = t;
    
    let prvi = new Date(godina, mesec-1, 1);
    let zadnji = new Date(godina, mesec, 0);

    let dUNP = prvi.getDay();
    if(dUNP == 0)dUNP = 7;

    let dUNK = zadnji.getDay();
    if(dUNP == 0)dUNP = 7;

    let brojDana = zadnji.getDate();

    let dani = [];

    for (let i=1; i<dUNP; i++){
        dani.push('');
    }
    for (let dan=1; dan<=brojDana; dan++){
        dani.push(dan);
    }
    for (let i=dUNK; i<7; i++ ){
        dani.push('');

    }
    let nedelje = [];

    while (dani.length>0){
        let narednaNedelja = dani.splice(0,7);
        nedelje.push(narednaNedelja);
    }

    popuniTeloKalendar(nedelje);
}

function popuniTeloKalendar(nedelje){
    for(let nedelja of nedelje){
        let r = document.createElement('tr');

        for(let dan of nedelja){
            let td = document.createElement('td');
            td.innerText = dan;
            r.appendChild(td)
        }
        document.getElementById('dani').appendChild(r);
    }
}

function napred(){
    mesec++;
    if (mesec > 12){
        mesec = 1;
        godina ++;
    }

    popuniKalendar(godina,mesec);
}
function nazad(){
    mesec--;
    if (mesec < 1){
        mesec = 12;
        godina --;
    }
    popuniKalendar(godina,mesec);
}
function main(){
    let sada = new Date();
    popuniKalendar(sada.getFullYear(), sada.getMonth()+1);   
}
window.addEventListener('load',() => popuniKalendar(godina, mesec));


//Suština je da Vama treba da pozovete funkciju, ali da vrednosti godine i meseca ne budu hard-kodirane, nego iz promenljivih. Napravite promenljivu za godinu, promenljivu za mesec i dve funkcije koje ih menjaju. Funkcija "napred()" povećava mesec za 1. Ako mesec pređe na 13. mesec, vraća njega na 1. (januar) i godinu uvećava za 1. Funkcija "nazad()" smanjuje vrednost promenljive za mesec za 1. Ako mesec pređe na vrednost 0, onda tu promenljivu za mesec setuje na 12 (decembar) i godinu umanjuje za 1. Tako se krećemo unapred i unazad kroz mesece, a tako i kroz godine. Na kraju i jedne i druge funkcije, poziva se ova naša funkcija za popunjavanje kalendara, ali se njoj, umesto hard-kodiranih vrednosti godine i meseca, daju vrednosti iz promenljivih za godinu i mesec. Vodite računa samo da ispraznite holder tela tabele, da se ne bi samo dodavali redovi novog meseca. Takođe, moraće funkcija da promeni vrednosti imena meseca i godine kao što to radi ova sada za popunjavanje podataka o mesecu i godini... Mislim da bi to trebalo da bude dovoljno jasno.