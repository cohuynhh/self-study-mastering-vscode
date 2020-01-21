function getManagers() {
    console.log("getManagers");
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8080/managers';
    Http.open("GET", url);
    Http.send();
    
    Http.onreadystatechange = () => {        
        updateElement('managers', Http.responseText);
    }


}
/**
 * We update the element
 * @param {*} id 
 * @param {*} text 
 */
function updateElement(id, text){
    document.getElementById(id).innerHTML = text;

}

function log(text){
    var a = String(text);
    a.toUpperCase();

    console.log(a);
}


