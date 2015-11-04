var compteur=1;
var nbsequence;
var sequence;
var url = "../images/";
var audio_bonne = new Audio('../sons/bonne.mp3');
var audio_mauvaise = new Audio('../sons/mauvaise.mp3');

function init(){

	nbsequence = 1;

	initLevel0();

	//initLevel1(nbsequence);

	// tableau des objects, chaque object une seq
	//level2 = JSON.parse(leveltwo);
	//console.log(level2);
	// je recupere la premiere seq
	//console.log(level2[0]);

	// tableau des objects, chaque object une seq
	//level3 = JSON.parse(levelthree);
	//console.log(level3);
	// je recupere la premiere seq
	//console.log(level3[0]);

 }

 function initLevel1 (nbsequence) {

	var level1 = JSON.parse(levelone);

	sizelevel = level1.length;

	sequence = level1[nbsequence%sizelevel];

	var image1=document.getElementById("image1");
	image1.src = url.concat(sequence[1]);

	var image2=document.getElementById("image2");
	image2.src = url.concat(sequence[2]);

	var image3=document.getElementById("image3");
	image3.src = url.concat(sequence[3]);
 }


 function initLevel0 () {

	var level0 = JSON.parse(levelzero);

	sequence = level0[0];

	var image1=document.getElementById("image1");
	image1.src = url.concat(sequence[2]);

	var image2=document.getElementById("image2");
	image2.src = url.concat(sequence[3]);

	var image3=document.getElementById("image3");
	image3.src = url.concat(sequence[1]);
 }


// On a besoin pour charger le JSON
window.onload = init;

function monCode()
{
   if (req.readyState == 4){
        doc = eval('(' + req.responseText + ')');
   }
}


function verification(e){
	var tab_src=e.src.split("/");
	var name=tab_src[tab_src.length-1].split(".")[0];
	var nb_image=name.charAt(name.length-1);
	if(nb_image==compteur){
		compteur++;
		bonneReponse(e);
	}else{
		mauvaiseReponse();
	}
}

function bonneReponse(e){
	//Afficher image bonne réponse
	//son
	var obj=document.getElementById("true_image"+(compteur-1));
	console.log(e.src);
	obj.src = e.src;
	e.style.display = "none";
		/*var offset=document.getElementById("true_image"+(compteur-1)).offsetLeft;
		console.log(offset);
		e.style.position = "absolute";
		e.style.left=offset;
		e.removeAttribute("onClick");*/

	// On n'ffiche pas l'image non
	var non=document.getElementById("non");
	non.style.display = "none";

	// On affiche l'image oui
	var oui=document.getElementById("oui");
	oui.style.display = "block";

	audio_bonne.play();
	audio_bonne.currentTime = 0;
}

function mauvaiseReponse(){

	// On n'affiche pas l'image oui
	var oui=document.getElementById("oui");
	oui.style.display = "none";

	// On affiche l'image non
	var non=document.getElementById("non");
	non.style.display = "block";

	audio_mauvaise.play();
	audio_mauvaise.currentTime = 0;
}
