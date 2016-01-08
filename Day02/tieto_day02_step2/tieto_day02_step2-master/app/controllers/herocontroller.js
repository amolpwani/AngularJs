(function(){
	
	var heroFun = function($scope, $routeParams){
		$scope.name = $routeParams.hero;
	};
	angular.module("app").controller("herocontroller",heroFun);
	
}());
