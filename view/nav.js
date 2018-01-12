"use strict";

function addOrder(){
	let inputSearch = document.getElementById("order");

	for(let i = 0; i < cols.length; i++){
		let optionNode = document.createElement('option');
    	let optionText = document.createTextNode(titulos[i]);
    	optionNode.appendChild(optionText);
    	optionNode.setAttribute('value', cols[i]);
    	inputSearch.appendChild(optionNode);
	}
}

function updatePagination(){
	let pageNumber = document.getElementById("pageNumber");
	pageNumber.innerText = page;
}