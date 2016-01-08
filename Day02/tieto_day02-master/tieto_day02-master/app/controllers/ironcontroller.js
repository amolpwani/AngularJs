(function(){
	
	function ironFun($scope){
		$scope.title = "Ironman";
		$scope.fName = "Tony";
		$scope.lName = "Stark";
		$scope.city = "New York";
		$scope.power = 6;
		$scope.photo = "images/ironman.jpg";
	};
	
	angular.module("app")
	.controller("ironcontroller", ironFun);

})()
