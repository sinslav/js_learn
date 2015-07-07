var basketModule = (function() {
var basket = []; // закрытая переменная
    return { // методы доступные извне
        addItem: function(values) {
            basket.push(values);
        },
        getItemCount: function() {
            return basket.length;
        },
        getTotal: function() {
           var total = this.getItemCount(),
           price = 0;
            while(total--){
                price+= basket[total].price; 
            }
            return price;
        }
    }
}());