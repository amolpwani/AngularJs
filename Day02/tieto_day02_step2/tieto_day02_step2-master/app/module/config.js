(function(){
	angular.module("config",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
		.when("/",{
			controller : "maincontroller",
			templateUrl : "app/views/main.html"
		})
		// : will add a name to the parameter
		.when("/movie/:id",{
			controller : "moviescontroller",
			templateUrl : "app/views/movie.html"
		})
		
	})
}());