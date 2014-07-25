(function(){
	
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
	{
		name: 'Dope Diamond',
		price: 2.95,
		description: 'This gem is awesome',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'img/diamond.png',
				thumb: 'img/diamond-thumb.png'
			}
		]
	},
	{
		name: 'Rare Ruby',
		price: 5.95,
		description: 'This gem is super sharp',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full: 'img/ruby.png',
				thumb: 'img/ruby-thumb.png'
			}
		]
	}
	];

})();