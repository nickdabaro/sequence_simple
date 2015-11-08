var compteur=1;
var nbsequence=1;
var sequence;
var nameLevel;
var sizeSeq;
var url = "../images/";
var audio_bonne = new Audio('../sons/bonne.mp3');
var audio_mauvaise = new Audio('../sons/mauvaise.mp3');
var audio_applaudissement = new Audio('../sons/applause.mp3');


function init(){

	var url = document.location.href;
	nameLevel = url.substring(url.lastIndexOf("/")+1);
	console.log(nameLevel);
	switch (nameLevel){
		case "niveau0.html": initLevel0();
			break;
		case "niveau1.html": initLevel1(nbsequence);
			break;
		case "niveau2.html": initLevel2(nbsequence);
			break;
		case "niveau3.html": initLevel3(nbsequence);
			break;
	}

 }

 function initLevel1 (nbsequence) {

	var level1 = JSON.parse(levelone);

	sizelevel = level1.length;
	 nbsequence =  sessionStorage.getItem("nbsequence");
	 if(nbsequence == null){
		 sessionStorage.setItem("nbsequence", 1);
		 nbsequence =  sessionStorage.getItem("nbsequence");
	 }
	 console.log(nbsequence);
	sequence = level1[nbsequence%sizelevel];

	console.log(sequence);

	var index = [1, 2, 3];
	 sizeSeq = 3;
	var indexRandon = randomizeArray(index);

	var image1=document.getElementById("image1");
	image1.src = url.concat(sequence[indexRandon[0]]);
	 //image1.style.display="block";

	var image2=document.getElementById("image2");
	image2.src = url.concat(sequence[indexRandon[1]]);
	 //image2.style.display="block";

	var image3=document.getElementById("image3");
	image3.src = url.concat(sequence[indexRandon[2]]);
	 //image3.style.display="block";
 }

function initLevel2 (nbsequence) {

	var level2 = JSON.parse(leveltwo);

	sizelevel = level2.length;
	nbsequence =  sessionStorage.getItem("nbsequence");
	if(nbsequence == null){
		sessionStorage.setItem("nbsequence", 1);
		nbsequence =  sessionStorage.getItem("nbsequence");
	}
	console.log(nbsequence);
	sequence = level2[nbsequence%sizelevel];

	console.log(sequence);

	var index = [1, 2, 3, 4];
	sizeSeq = 4;
	var indexRandon = randomizeArray(index);

	var image1=document.getElementById("image1");
	image1.src = url.concat(sequence[indexRandon[0]]);
	//image1.style.display="block";

	var image2=document.getElementById("image2");
	image2.src = url.concat(sequence[indexRandon[1]]);
	//image2.style.display="block";

	var image3=document.getElementById("image3");
	image3.src = url.concat(sequence[indexRandon[2]]);
	//image3.style.display="block";

	var image4=document.getElementById("image4");
	image4.src = url.concat(sequence[indexRandon[3]]);
}

function initLevel3 (nbsequence) {

	var level3 = JSON.parse(levelthree);

	sizelevel = level3.length;
	nbsequence =  sessionStorage.getItem("nbsequence");
	if(nbsequence == null){
		sessionStorage.setItem("nbsequence", 1);
		nbsequence =  sessionStorage.getItem("nbsequence");
	}
	console.log(nbsequence);
	sequence = level3[nbsequence%sizelevel];

	console.log(sequence);

	var index = [1, 2, 3, 4, 5];
	sizeSeq = 5;
	var indexRandon = randomizeArray(index);

	var image1=document.getElementById("image1");
	image1.src = url.concat(sequence[indexRandon[0]]);
	//image1.style.display="block";

	var image2=document.getElementById("image2");
	image2.src = url.concat(sequence[indexRandon[1]]);
	//image2.style.display="block";

	var image3=document.getElementById("image3");
	image3.src = url.concat(sequence[indexRandon[2]]);
	//image3.style.display="block";

	var image4=document.getElementById("image4");
	image4.src = url.concat(sequence[indexRandon[3]]);

	var image5=document.getElementById("image5");
	image5.src = url.concat(sequence[indexRandon[4]]);
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

	 setTimeout(function () {simulateClick("image3")}, 1000);
 }

var simulateClick = function(image){
	var evt = document.createEvent("MouseEvents");
	evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	document.getElementById(image).dispatchEvent(evt);
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

function changeSeq(){
	nbsequence =  sessionStorage.getItem("nbsequence");
	console.log(nbsequence);
	nbsequence++;
	sessionStorage.setItem("nbsequence", nbsequence);
	console.log(nbsequence);

	switch (nameLevel){
		case "niveau0.html":window.location.replace("../views/index.html");//retour menu
			break;
		case "niveau1.html": initLevel1(nbsequence);
			window.location.reload();
			break;
		case "niveau2.html": initLevel2(nbsequence);
			window.location.reload();
			break;
		case "niveau3.html": initLevel3(nbsequence);
			window.location.reload();
			break;
	}
}
function bonneReponse(e){
	//Afficher image bonne réponse
	//son
	var obj=document.getElementById("true_image"+(compteur-1));
	console.log(e.src);
	obj.src = e.src;
	e.style.display = "none";

	// On n'affiche pas l'image non
	var non=document.getElementById("non");
	non.style.display = "none";

	// On affiche l'image oui
	var oui=document.getElementById("oui");
	oui.style.display = "block";
	if (compteur > sizeSeq){
		if(true){
			audio_applaudissement.play();
			audio_applaudissement.currentTime = 0;

		}
		var x = setTimeout(changeSeq, 3000);
	}
	else{
		audio_bonne.play();
		audio_bonne.currentTime = 0;
	}
	if (nameLevel == "niveau0.html" && compteur <= sizeSeq){
		if (compteur<3){
            setTimeout(function () {simulateClick("image1")}, 1000);
        }
		else{
            setTimeout(function () {simulateClick("image2")}, 1000);
        }
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
