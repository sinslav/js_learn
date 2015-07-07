(function() {

    // Модель
    var data = {
        lastID: 0,
        beers: []
    };

    // View - представление
    var controller = {
        addBeer: function() {
            var thisID = ++data.lastID;
            data.beers.push({
                id: thisID,
                visible: true
            });
            view.render();
        },

        removeBeer: function(beer) {
            beerID = beer.getAttribute('data-id');
            var clickedBeer = data.beers[beerID - 1];
            clickedBeer.visible = false;
            view.render();
        },

        getVisibleBeers: function() {
            var visibleBeers = data.beers.filter(function(beer) {
                return beer.visible;
            });
            return visibleBeers;
        },

        init: function() {
            view.init();
        }
    }


    var view = {
        // Инициализация
        init: function() {
            var addBeerBtn = document.querySelector('.buy-beer'),
            removeBeerBtns;

            // получаем элементы и html для использования в функции render
            this.beerList = document.querySelector('.beer-list');
            this.beerTemplate = document.querySelector('script[data-template="beer"]').innerHTML;


            // обработчик удаления пива
             function removeBeerHandler(event) {
                var removeLink = event.srcElement;
                var beer = removeLink.parentNode.parentNode;
                controller.removeBeer(beer);
                return false;
            };

            // обработчик добавления пива
            function beerClickHandler () {
                controller.addBeer();
            };

            if (addBeerBtn) {
                addBeerBtn.addEventListener('click', beerClickHandler);
            }

            if (this.beerList) {
                this.beerList.addEventListener('click', removeBeerHandler);
            }

            this.render();
        },
        // 
        render: function() {
            // Кешируем переменные для forEach() callback (performance)
            var beerList = this.beerList,
                beerTemplate = this.beerTemplate;

            beerList.innerHTML = '';

            function beerWalker (beer) {
                // используем данные для заполнения шаблона
                var thisTemplate = beerTemplate.replace(/{{id}}/g, beer.id);
                beerList.insertAdjacentHTML('beforeEnd', thisTemplate);

            }
            controller.getVisibleBeers().forEach(beerWalker);
        }
    };

    controller.init();
})();
