var beers = document.querySelectorAll(".beer");
var buttons = document.querySelectorAll("button");

function hideAllBeers (){
    for (var i = 0; i < beers.length; i++){
        beers[i].style.display = "none";
    }
}

function bindButtonToBeer (idNumber) {
    var idButton = document.querySelector("#button" + idNumber);
    var idBeer = document.querySelector("#beer" + idNumber);
    function buttonClickHandler (){
        hideAllBeers();
        idBeer.style.display = 'block';
    }

    idButton.addEventListener('click', buttonClickHandler);

}

function bindCounterToBeer (idNumber){
    var idBeer = document.querySelector("#beer" + idNumber);;
    alert(idBeer);
    function beerClickHandler () {
        var count = idBeer.querySelector('.counter').innerText;
        count = parseInt(count) + 1;
        idBeer.querySelector('.counter').innerText = count;
    };
    if (idBeer) {
        idBeer.addEventListener('click', beerClickHandler);
    };
}

for (var i = 1; i <= buttons.length; i++){
    bindButtonToBeer(i);
}

for (var i = 1; i <= beers.length; i++){
    bindCounterToBeer(i);
}

hideAllBeers();
document.getElementById("beer1").style.display = 'block';