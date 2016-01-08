(function(){
	angular.module("app")
.controller("batcontroller", function($scope){
	$scope.title = "Batman";
	$scope.fName = "Bruce";
	$scope.lName = "Wayne";
	$scope.city = "Gotham";
	$scope.power = 7;
	$scope.photo = "images/batman.jpg";
});
}())
