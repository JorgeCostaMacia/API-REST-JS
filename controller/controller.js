"use strict";

var titulos = "";			// ARRAY TITULOS
var cols = "";				// ARRAY IDS
var personas = "";			// ARRAY PERSONAS
var page = 1;				// PAGINA
var idButtonEvent = "";		// ID PERSONA DE BOTON QUE ACCIONA EVENTO

// LLAMA AJAX - RETURN GETORDER
function iniOrderNav(){
	ajaxQuery('http://localhost:3000/db', '', 'getOrder', 'GET');
}

// INICIALIZA VARIABLES GLOBALES - INIZIALIZA SELECT ORDENAR
function getOrder(ressult){
	let returnRessult = JSON.parse(ressult);

	titulos = returnRessult["titulos"];
	cols = returnRessult["cols"];
	personas = returnRessult["personas"];

	addOrder();	
}

// LLAMA AJAX - RETURN GETTABLE
function iniTable(){
	ajaxQuery('http://localhost:3000/db', '', 'getTable', 'GET');
}

// INICIALIZA VARIABLES - LIMPIA MENSAJES - INICIALIZA TABLA - AÑADE HEAD - AÑADE FORM NEW PERSONA - AÑADE EVENTOS
function getTable(ressult){
	let returnRessult = JSON.parse(ressult);

	titulos = returnRessult["titulos"];
	cols = returnRessult["cols"];
	personas = returnRessult["personas"];

	cleanMensajes();
	iniTableContainer();
	addHeadTable();
	addTableNewPersona();
	addEventButtonNewPersona();	
}

// RECOGE DATOS FORMULARIO - LINPIA MENSAJES - ENVIA PERSONA - MUESTRA MENSAJE
function addPersona(){
	let persona = {};

	for(let i = 1; i < cols.length; i++){
		persona[cols[i]] = document.getElementById(cols[i] + '-new').value;
	}

	ajaxQuery('http://localhost:3000/personas', persona, '', 'POST');
	cleanMensajes();
	msjSucces(JSON.stringify(persona), 'guardado');
}

// INICIALIZA TABLA - INICIALIZA VARIABLES - GENERA PARAMETROS PETICION - LLAMA AJAX - RETURN GETTPERSONAS
function getPersonas(){
	iniTable();

	let pages = document.getElementById("pages").value;
	let parameter = '?_page=' + page + '&_limit=' + pages;

	let order = document.getElementById("order").value;
	parameter += '&_sort=' + order;
	
	ajaxQuery('http://localhost:3000/personas', parameter, 'gettPersonas', 'GET');
}

// LOS AGREGA A LA TABLA - AÑADE EVENTOS
function gettPersonas(ressult){
	personas = JSON.parse(ressult);

	addPersonasTable();
	addEventsButtonsPersonas();
}

// OBTIENE ID DEL BOTON QUE ACCIONA EVENTO - LLAMA AJAX - RETURN UPDATETABLEBORRAR
function delPersona(event){
	let inputName = event.target.name;
	idButtonEvent = inputName.split("-")[1];

	ajaxQuery('http://localhost:3000/personas/', idButtonEvent, 'updateTableBorrar', 'DELETE');
}

// OBTIENE ID DEL BOTON QUE ACCIONA EVENTO - LLAMA AJAX - RETURN UPDATETABLEMODIFICAR
function changePersona(event){
	let inputName = event.target.name;
	idButtonEvent = inputName.split("-")[1];

	let persona = {};

	for(let j = 0; j < cols.length; j++){
		persona[cols[j]] = document.getElementById(cols[j] + '-' + idButtonEvent).value;
	}

	ajaxQuery('http://localhost:3000/personas/' + idButtonEvent, persona, 'updateTableModificar', 'PUT');
}

// OPTIENE DATOS CAMPO BORRADO - LIMPIA MENSAJES - MUESTRA ADVERTENCIA - QUITA DE LA TABLA
function updateTableBorrar(ressult){
	let persona = "";
	for(let i = 0; i < personas.length; i++){
		if(personas[i]["id"] == idButtonEvent){
			persona = personas[i];
		}
	}

	cleanMensajes();
	msjSucces(JSON.stringify(persona), 'Borrado');

	delPersonaTable('tr' + idButtonEvent);
}

// OPTIENE DATOS CAMPO MODIFICAR - LIMPIA MENSAJES - MUESTRA ADVERTENCIA
function updateTableModificar(ressult){
	let persona = {};

	for(let j = 0; j < cols.length; j++){
		persona[cols[j]] = document.getElementById(cols[j] + '-' + idButtonEvent).value;
	}

	cleanMensajes();
	msjSucces(JSON.stringify(persona), 'Modificado');
}

// ACTUALIZA PAGINA
function previousPage(){
	if(page != 0){ 
		page--; 
		getPersonas();
		updatePagination();
	}
}

// ACTUALIZA PAGINA
function nextPage(){
	page++;
	getPersonas();
	updatePagination();
}