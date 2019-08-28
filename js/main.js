// INSTANCIATION DES CLASSES /////////////////////////////
const diapo = new Slider();
var carte = new Map(47.218371, -1.553621, 10);
const sauvegarde = new Storage();
const horloge = new Timer();
const signature = new Canvas();

horloge.verification();

//SLIDER////////////////////////////////////////////////////////////////////////

diapo.next();
diapo.previous();
diapo.stop();
diapo.play();
diapo.defilement();
diapo.clavier();

//MAP/////////////////////////////////////////////////////////////////////////

function startMap()
{
    carte.initMap();
    carte.ajoutMarqueur();
}

//SAUVEGARDE INFO//////////////////////////////////////////////////////////

sauvegarde.chargement();
sauvegarde.sauvegarde();
sauvegarde.suppression();
sauvegarde.suppressionSession();

//CANVAS//////////////////////////////////////////////////////////////////

signature.actionDown();
signature.actionUp();
signature.draw();
signature.reset();
signature.hasSignature();

/// GESTION DES ELEMENTS CREES DYNAMIQUEMENT //////

document.addEventListener('click', (e) =>
{
    if(e.target && e.target.id == 'alertAnnuler')
    {
        document.getElementById('declenchement').style.display = "none";
        document.getElementById('alert').remove();
    }
});

document.addEventListener('click', (e) =>
{
    if(e.target && e.target.id == 'alertContinuer')
    {
        document.getElementById('alert').remove();
        document.getElementById("position_canvas").style.display = "flex";
    }
});


document.addEventListener('click', (e) =>
{
    if(e.target && e.target.id == 'annulReserv')
    {
        document.getElementById('alert').remove();
        document.getElementById('declenchement').style.display = "none";
        horloge.clear();
        horloge.time.style.display = "none";
        horloge.resetTimer.style.display = "none";
    }
});