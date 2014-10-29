var app = angular.module('gemStore', []);

var gems = [
    {name: "Gem1", price: 4.5, canPurchase: true, soldOut: false},
    {name: "Gem2", price: 2.3, canPurchase: true, soldOut: true},
    {name: "Gem3", price: 4.1, canPurchase: false, soldOut: false}
];

app.controller('StoreController', function(){
    this.products = gems;
});
