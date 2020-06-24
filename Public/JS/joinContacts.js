var padre1 = document.getElementById('personass');
var padre2 = document.getElementById('gruposs');
var title = document.getElementById('mainContacts');
var hideGroups = document.getElementById('hideGroups');
var increaseContact = document.getElementById('increaseContacts');

function unir(){
    var docfrag = document.createDocumentFragment();

    while(padre2.firstChild){
        docfrag.appendChild(padre2.firstChild);
    }
    
    title.textContent = "Contactos";
    padre1.appendChild(docfrag);
    hideGroups.checked=true;
    increaseContact.checked=true;
}

function separar(){
    
    var docfrag = document.createDocumentFragment();
    
    var prueba = padre1.getElementsByClassName('groupElement');

    while(prueba.length){
        docfrag.appendChild(prueba[0]);
    }
    
    title.textContent = "Personas";
    padre2.appendChild(docfrag);
    hideGroups.checked=false;
    increaseContact.checked=false;
    
}