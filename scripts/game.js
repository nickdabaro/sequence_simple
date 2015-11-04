var compteur=1;
var nbsequence;
var sequence;
var nameLevel;
var sizeSeq;
var url = "../images/";
var audio_bonne = new Audio('../sons/bonne.mp3');
var audio_mauvaise = new Audio('../sons/mauvaise.mp3');
var audio_applaudissement = new Audio('../sons/applause.mp3');

function init(){

	nbsequence = 1;
	var url = document.location.href;
	nameLevel = url.substring(url.lastIndexOf("/")+1);
	console.log(nameLevel);
	switch (nameLevel){
		case "niveau0.html": initLevel0();
			break;
		case "niveau1.html": initLevel1(nbsequence);
			break;
	}

 }

 function initLevel1 (nbsequence) {

	var level1 = JSON.parse(levelone);

	sizelevel = level1.length;

	sequence = level1[nbsequence%sizelevel];

	console.log(sequence);

	var index = [1, 2, 3];
	 sizeSeq = 3;
	var indexRandon = randomizeArray(index);

	var image1=document.getElementById("image1");
	image1.src = url.concat(sequence[indexRandon[0]]);

	var image2=document.getElementById("image2");
	image2.src = url.concat(sequence[indexRandon[1]]);

	var image3=document.getElementById("image3");
	image3.src = url.concat(sequence[indexRandon[2]]);
 }


 function initLevel0 () {

	var level0 = JSON.parse(levelzero);

	sequence = level0[0];
	 sizeSeq = 3;
	var image1=document.getElementById("image1");
	image1.src = url.concat(sequence[2]);

	var image2=document.getElementById("image2");
	image2.src = url.concat(sequence[3]);

	var image3=document.getElementById("image3");
	image3.src = url.concat(sequence[1]);
 }


// On a besoin pour charger le JSON
window.onload = init;

function verification(e){
	var tab_src=e.src.split("/");
	var name=tab_src[tab_src.length-1];
	if(name==sequence[compteur]){
		compteur++;
		bonneReponse(e);
	}else{
		mauvaiseReponse();
	}
}

function randomizeArray(arr) {
    var output = [];
    while (arr.length) {
        output.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    return output;
}

function bonneReponse(e){
	//Afficher image bonne réponse
	//son
	var obj=document.getElementById("true_image"+(compteur-1));
	console.log(e.src);
	obj.src = e.src;
	e.style.display = "none";

	// On n'ffiche pas l'image non
	var non=document.getElementById("non");
	non.style.display = "none";

	// On affiche l'image oui
	var oui=document.getElementById("oui");
	oui.style.display = "block";
	console.log(compteur);
	console.log(sequence.length);
	if (compteur > sizeSeq){
		audio_applaudissement.play();
		audio_applaudissement.currentTime = 0;
		nbsequence++;
		switch (nameLevel){
			case "niveau0.html": initLevel0();//retour menu
				break;
			case "niveau1.html": initLevel1(nbsequence);
				break;
		}
	}
	else{
		audio_bonne.play();
		audio_bonne.currentTime = 0;
	}
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
