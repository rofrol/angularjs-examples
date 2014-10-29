var app = angular.module('gemStore', []);

var gem = {name: "Gem1", price: 4.5, canPurchase: true, soldOut: false}

app.controller('StoreController', function(){
    this.product = gem;
});
