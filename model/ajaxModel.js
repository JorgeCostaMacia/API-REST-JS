"use strict";

 function ajaxQuery(url, parameter, nameResultFunction, method) {
    let _connection = newConnection();

    _connection.onreadystatechange = function() {
        if(_connection.readyState == 4) {
            if(_connection.status == 200) {
                let queryRessult = _connection.responseText;
                eval(nameResultFunction  + '(queryRessult)');
            }
        }
    }

    _connection.onerror = function() { msjDanger('No puede conectarse'); }

    if(trim (method.toUpperCase()) == 'POST' )  { requestPOST(url, parameter, _connection); }
    else if(trim (method.toUpperCase()) == 'GET' )  { requestGET(url,parameter, _connection); }
    else if(trim (method.toUpperCase()) == 'DELETE' )  { requestDelete(url, parameter, _connection); }
    else if(trim (method.toUpperCase()) == 'PUT' )  { requestPut(url, parameter, _connection); }
}

function newConnection() {
    let _connection = "";
    try { _connection = new XMLHttpRequest(); } /* e.j. Firefox */
    catch(err1) {
        try { _connection = new ActiveXObject("Msxml2.XMLHTTP"); } /*  some versions IE */
        catch(err2) {
            try { _connection = new ActiveXObject("Microsoft.XMLHTTP"); } /* some versions IE */
            catch(err3) { _connection = false; }
        }
    }
    return _connection;
}

function requestGET(url, parameter, _connection) {
    _connection.open("GET", url + parameter, true);
    _connection.send();
}

function requestPOST(url, parameter, _connection) {
    _connection.open("POST", url, true);
    _connection.setRequestHeader('Content-Type',  'application/json');
    _connection.send(JSON.stringify(parameter));
}

function requestDelete(url, parameter, _connection) {
    _connection.open("DELETE", url + parameter, true);
    _connection.setRequestHeader('Content-Type',  'application/json');
    _connection.send();
}

function requestPut(url, parameter, _connection) {
    _connection.open("PUT", url,true);
    _connection.setRequestHeader('Content-Type',  'application/json');
    _connection.send(JSON.stringify(parameter));
}

function trim (myString){ return myString.replace(/^\s+/g,'').replace(/\s+$/g,'') }