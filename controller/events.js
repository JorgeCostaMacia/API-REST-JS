window.onload = addEvents();

// INICIALIZA EVENTOS 
// INICIALIZA ORDER NAVEGADOR - TABLA
// AÑADE LISTENER STYLE - MOSTRAR - PREVIUS - NEXT
function addEvents(){
	iniOrderNav();
	iniTable();

	let style = document.getElementById("style");
	style.addEventListener("change", changeStyle);

	let mostrar = document.getElementById("mostrar");
	mostrar.addEventListener("click", getPersonas);

	updatePagination();

	let previous = document.getElementById("previous");
	previous.addEventListener("click", previousPage);

	let next = document.getElementById("next");
	next.addEventListener("click", nextPage);
}

function addEventButtonNewPersona(){
	let buttonNew = document.getElementById("button-new");
	buttonNew.addEventListener("click", addPersona);
}

function addEventButtonBorrar(id){
	let buttonBorrar = document.getElementById(id);
	buttonNew.addEventListener("click", delPersona);
}

function addEventButtonModificar(id){
	let buttonNew = document.getElementById(id);
	buttonNew.addEventListener("click", changePersona);
}

function addEventsButtonsPersonas(){
	for(let i = 0; i < personas.length; i++){
		let borrar = document.getElementById("borrar-" + personas[i]["id"]);
		let modificar = document.getElementById("modificar-" + personas[i]["id"]);

		borrar.addEventListener("click", delPersona);
		modificar.addEventListener("click", changePersona);
	}
}

function changeStyle(){ 
	let table = document.getElementById("table");
	let tableStyle = document.getElementById("style").value;
	updateStyleTable(table, tableStyle);
}