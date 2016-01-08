(function(){
	/*
	var superFun = function($scope){
		$scope.title = "Superman";
		$scope.fName = "Clark";
		$scope.lName = "Kent";
		$scope.city = "Metropolis";
		$scope.power = 9;
		$scope.photo = "images/superman.jpg";
	};
	angular.module("app")
	.controller("supermancontroller", ["$scope", superFun]);
	 */
	var superFun = function($scope){
		$scope.title = "Superman";
		$scope.fName = "Clark";
		$scope.lName = "Kent";
		$scope.city = "Metropolis";
		$scope.power = 9;
		$scope.photo = "images/superman.jpg";
	};
	angular.module("app")
	.controller("supermancontroller", superFun);
	superFun.$inject = ["$scope"];
}());
