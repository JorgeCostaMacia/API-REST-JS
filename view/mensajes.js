"use strict";

function cleanMensajes(){
	let mensajes = document.getElementById("mensajes");
	mensajes.innerHTML = "";
}

function msjDanger(text){
	let mensajes = document.getElementById("mensajes");
	mensajes.innerHTML = "";

    let mssjNode = document.createElement('div');
    mssjNode.setAttribute('class', 'alert alert-danger'); 
    mssjNode.setAttribute('id', 'alert alert-danger');
    let strongNode = document.createElement('strong');
    let strongText = document.createTextNode("Se ha producido un error ");
    strongNode.appendChild(strongText);
    let msjText = document.createTextNode(text);
    mssjNode.appendChild(strongNode);
    mssjNode.appendChild(msjText);

    mensajes.appendChild(mssjNode);
}

function msjSucces(persona, action){
	let mensajes = document.getElementById("mensajes");
	mensajes.innerHTML = "";

    let mssjNode = document.createElement('div');
    mssjNode.setAttribute('class', 'alert alert-success'); 
    mssjNode.setAttribute('id', 'alert alert-success');
    let strongNode = document.createElement('strong');
    let strongText = document.createTextNode("Se ha " + action + " correctamente ");
    strongNode.appendChild(strongText);
    let msjText = document.createTextNode(persona);
    mssjNode.appendChild(strongNode);
    mssjNode.appendChild(msjText);

    mensajes.appendChild(mssjNode);
}