var app = angular.module('gemStore', []);

var gems = [
    {name: "Gem1", price: 4.5, canPurchase: true, soldOut: false,
	    images:[
		    "images/www.flickr.com--photos--jdickert--2382425209--_square.jpg",
		    "images/www.flickr.com--photos--psd--2477033684--_square.jpg",
		    "images/www.flickr.com--photos--treehouse1977--6289804336--_square.jpg"
	    ]},
    {name: "Gem2", price: 2.3, canPurchase: true, soldOut: true},
    {name: "Gem3", price: 4.1, canPurchase: false, soldOut: false}
];

app.controller('StoreController', function(){
    this.products = gems;
});
