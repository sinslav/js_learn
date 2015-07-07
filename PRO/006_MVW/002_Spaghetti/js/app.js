
/* ======= Model ======= */

var model = {
    currentBeer: null,
    beers: [
        {
            clickCount : 0,
            name : 'Пенное',
            imgSrc : 'img/beer_pic1.jpg',
            imgAttribution : 'Пи́во — слабоалкогольный напиток[1], получаемый спиртовым брожением солодового сусла (чаще всего на основе ячменя) с помощью пивных дрожжей, обычно с добавлением хмеля'
        },
        {
            clickCount : 0,
            name : 'Светлое',
            imgSrc : 'img/beer_pic2.jpg',
            imgAttribution : 'Содержание этилового спирта в большинстве сортов пива около 3,0-6,0 % об. (крепкое содержит, как правило, от 8 % до 14 % об., иногда также выделяют лёгкое пиво, которое содержит 1-2 % об., отдельно выделяют безалкогольное пиво, которое сюда не включают), сухих веществ (в основном углеводов) 7—10 %, углекислого газа 0,48—1,0 %[2].'
        },
        {
            clickCount : 0,
            name : 'Сезонное',
            imgSrc : 'img/beer_pic3.jpg',
            imgAttribution : 'Пиво распространено во множестве стран мира и пользуется популярностью благодаря своим вкусовым качествам и аромату'
        },
        {
            clickCount : 0,
            name : 'Pale Ele',
            imgSrc : 'img/beer_pic4.jpg',
            imgAttribution : 'В становлении стабильного разнообразия пива сильное влияние оказывают страны с наибольшим потреблением этого напитка на душу населения (Чехия, Германия, Ирландия, Австрия, Финляндия, Эстония, Польша) и страны со специфической культурой производства (Ирландия, Бельгия, Бразилия, Япония)[источник не указан 1497 дней].'
        },
        {
            clickCount : 0,
            name : 'Оболонь',
            imgSrc : 'img/beer_pic5.jpg',
            imgAttribution : '«Пиво» первоначально означало всякое питьё, напиток вообще, а рассматривалось как алкогольный напиток определенного вида в современном понимании'
        }
    ]
};


/* ======= Controller ======= */

var controller = {

    init: function() {
        // выбираем первое пиво
        model.currentBeer = model.beers[0];

        // инициализируем наше представление(View)
        beerListView.init();
        beerView.init();
    },

    getCurrentBeer: function() {
        return model.currentBeer;
    },

    getBeers: function() {
        return model.beers;
    },

    // выбираем текущее пиво
    setCurrentBeer: function(beer) {
        model.currentBeer = beer;
    },

    // инкрементируем значение счетчика  для текущ. выбран. счетчика
    incrementCounter: function() {
        model.currentBeer.clickCount++;
        beerView.render();
    }
};


/* ======= View ======= */

var beerView = {

    init: function() {
        // переменные
        this.beerElem = document.getElementById('beer');
        this.beerNameElem = document.getElementById('beer-name');
        this.beerImageElem = document.getElementById('beer-img');
        this.countElem = document.getElementById('beer-count');

        // увеличиваем значение счетчика
        this.beerImageElem.addEventListener('click', function(){
            controller.incrementCounter();
        });

        // обновляем наше представление (View)
        this.render();
    },

    render: function() {
        // обновляем DOM с данными о текущем выбран. пиве
        var currentBeer = controller.getCurrentBeer();
        this.countElem.textContent = currentBeer.clickCount;
        this.beerNameElem.textContent = currentBeer.name;
        this.beerImageElem.src = currentBeer.imgSrc;
    }
};

var beerListView = {

    init: function() {
        this.beerListElem = document.getElementById('beer-list');

        // обновляем DOM с правильными значениями
        this.render();
    },

    render: function() {
        var beer, elem, i;
        // получаем пиво с контроллера
        var beers = controller.getBeers();

        // очищаем список
        this.beerListElem.innerHTML = '';

        for (i = 0; i < beers.length; i++) {
            // текущее пиво
            beer = beers[i];

            elem = document.createElement('li');
            elem.textContent = beer.name;

            elem.addEventListener('click', (function(beerCopy) {
                return function() {
                    controller.setCurrentBeer(beerCopy);
                    beerView.render();
                };
            })(beer));

            // добавляем елемент в разметку
            this.beerListElem.appendChild(elem);
        }
    }
};

// Инициализация
controller.init();
