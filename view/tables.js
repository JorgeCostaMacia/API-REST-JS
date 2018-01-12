"use strict";

function iniTableContainer(){
	let tableContainer = document.getElementById("tableContainer");
	let tableStyle = document.getElementById("style").value;

	tableContainer.innerHTML = "";

	let table = document.createElement('table');
	table.setAttribute('id', 'table');
	table.setAttribute('class', tableStyle);
	let thead = document.createElement('thead');
	thead.setAttribute('id', 'headTable');
	let trHead = document.createElement('tr');
	trHead.setAttribute('id', 'trHead');
	let tbody = document.createElement('tbody');
	tbody.setAttribute('id', 'bodyTable');

	thead.appendChild(trHead);
	table.appendChild(thead);
	table.appendChild(tbody);
	tableContainer.appendChild(table);
}

function updateStyleTable(table, tableStyle){
	table.classList.remove("table-bordered", "table-hover");
	if(tableStyle != "table"){ table.classList.add(tableStyle); }
}

function addHeadTable(){
	let trHead = document.getElementById("trHead");

	for(let i = 0; i < titulos.length; i++){
		let thNode = document.createElement('th');
    	let thText = document.createTextNode(titulos[i]);
    	thNode.appendChild(thText);
    	trHead.appendChild(thNode);
	}
	let thNode = document.createElement('th');
    trHead.appendChild(thNode);
}

function addTableNewPersona(){
	let bodyTable = document.getElementById("bodyTable");

	let trNode = document.createElement('tr');
	trNode.setAttribute('id', 'tr' + '-new');
	trNode.setAttribute('class', 'warning');

	let tdNode = document.createElement('td');
	trNode.appendChild(tdNode);

	for(let i = 1; i < cols.length; i++){
		tdNode = document.createElement('td');
		let inputNode = document.createElement('input');
		inputNode.setAttribute('type', 'text');
		inputNode.setAttribute('id', cols[i] + '-new');
		inputNode.setAttribute('class', 'form-control');
		inputNode.setAttribute('placeholder', titulos[i]);
		tdNode.appendChild(inputNode);

        trNode.appendChild(tdNode);
	}

	tdNode = document.createElement('td');
	let inputNode = document.createElement('button');
	inputNode.setAttribute('type', 'button');
	inputNode.setAttribute('class', 'btn btn-primary form-control');
	inputNode.setAttribute('id', 'button-new');
	inputNode.setAttribute('text', 'Nuevo');
  	let buttonText = document.createTextNode("Nuevo");
    inputNode.appendChild(buttonText);

	tdNode.appendChild(inputNode);
    trNode.appendChild(tdNode);	

	bodyTable.appendChild(trNode);
}

function addPersonasTable(){
	let bodyTable = document.getElementById("bodyTable");

	for(let i = 0; i < personas.length; i++){
		let trNode = document.createElement('tr');
		trNode.setAttribute('id', 'tr' + personas[i]["id"]);

		for(let j = 0; j < cols.length; j++){
			let tdNode = document.createElement('td');
			let inputNode = document.createElement('input');
			inputNode.setAttribute('type', 'text');
			inputNode.setAttribute('id', cols[j] + '-' + personas[i]["id"]);	
			inputNode.setAttribute('class', 'form-control');
			inputNode.setAttribute('value', personas[i][cols[j]]);
			inputNode.setAttribute('placeholder', cols[j]);
			if(cols[j] == "id"){ inputNode.setAttribute('disabled', true); }
			tdNode.appendChild(inputNode);
		    trNode.appendChild(tdNode);
		}

		let tdNode = document.createElement('td');
		let inputNode = document.createElement('button');
		inputNode.setAttribute('type', 'button');
		inputNode.setAttribute('class', 'btn btn-warning form-control');
		inputNode.setAttribute('id', 'modificar-' + personas[i]["id"]);
		inputNode.setAttribute('name', 'modificar-' + personas[i]["id"]);
	  	let buttonText = document.createTextNode("Modificar");
	    inputNode.appendChild(buttonText);

		tdNode.appendChild(inputNode);

		inputNode = document.createElement('button');
		inputNode.setAttribute('type', 'button');
		inputNode.setAttribute('class', 'btn btn-danger form-control');
		inputNode.setAttribute('id', 'borrar-' + personas[i]["id"]);
		inputNode.setAttribute('name', 'borrar-' + personas[i]["id"]);
		buttonText = document.createTextNode("Borrar");
		inputNode.appendChild(buttonText);

		tdNode.appendChild(inputNode);
	    trNode.appendChild(tdNode);	

		bodyTable.appendChild(trNode);
	}
}

function delPersonaTable(idTr){
	let bodyTable = document.getElementById("bodyTable");
	let tr = document.getElementById(idTr);

	bodyTable.removeChild(tr);
}