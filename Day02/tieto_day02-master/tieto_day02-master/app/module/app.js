(function(){
	angular.module("app",["ngRoute"])
	.config(function($routeProvider){
	$routeProvider
	.when("/",{
		controller : "maincontroller",
		templateUrl : "app/views/main.html"
	})
	.when("/batman",{
		controller : "batcontroller",
		templateUrl : "app/views/heroview.html"
	})
	.when("/ironman",{
		controller : "ironcontroller",
		templateUrl : "app/views/heroview.html"
	})
	.when("/spiderman",{
		controller : "spidercontroller",
		controllerAs : "spyCon",
		templateUrl : "app/views/spiderview.html"
	})
	.when("/superman",{
		controller : "supermancontroller",
		templateUrl : "app/views/heroview.html"
	})
});
}());
