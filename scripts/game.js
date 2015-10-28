var compteur=2;
var sequences
var audio_bonne = new Audio('../sons/bonne.mp3');
var audio_mauvaise = new Audio('../sons/mauvaise.mp3');

function init(){
	//code XMLHttpRequest
	var req = new XMLHttpRequest();
	req.open("GET", "../sequences.json", true); 
	req.onreadystatechange = monCode;   // la fonction de prise en charge
	req.send(null); 


	//travail récupération et affichage images

}

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
	
	audio_bonne.play();
	console.log("yes")
}

function mauvaiseReponse(){	
	audio_mauvaise.play();
	console.log("no")
}
