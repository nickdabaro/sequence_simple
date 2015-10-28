var compteur=1;
var sequences

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


function verification(Element e){
	var src=e.src;
	var name=src.split("/")[2].split(".")[0];
	var nb_image=name.charAt(name.length-1);

	if(nb_image==compteur){
		compteur++;
		bonneReponse(e);
	}else{
		mauvaiseReponse();
	}
}

function bonneReponse(Element e){
	//Afficher image bonne réponse
	//son

		var offset=document.getElementById("true_image"+compteur-1).offsetLeft;
		e.offsetLeft=offset;
	}
}