console.log("page loaded...");
// name change function
var changeElement = document.querySelector("#change");
function changeName(){
    changeElement.innerText = "John Smith";
    console.log(changeElement);
}
// connection request functions 

function removeReq(element){
    element.remove();
}
