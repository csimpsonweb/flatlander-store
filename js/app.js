(function(){
	
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
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
		],
		reviews: [
			{
				stars: 5,
				body: "I love this gem",
				author: "joe@thomas.com"
			},
			{
				stars: 3,
				body: "I bought this for my wife",
				author: "hubby@loveydovey.com"
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
		],
		reviews: [
			{
				stars: 4,
				body: "This Ruby is really hard to find",
				author: "jane@doe.com"
			},
			{
				stars: 2,
				body: "Mine came cracked",
				author: "james@jungle.com"
			}
		]
	}
	];



})();