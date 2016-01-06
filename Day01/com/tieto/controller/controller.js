angular.module("app")
.controller("heroController", function($scope) {
	$scope.heros=[
		{title:'Batman', fName:'Bruce', lName:'Wayne', city:'Gotam', power:7, releasedate: '2016-01-06', price: 123.4542323, photo: 'images/batman.jpg'},
		{title:'Superman', fName:'Clark', lName:'Kent', city:'Manhatn', power:8, releasedate: '2016-01-04', price: 235.45234423, photo: 'images/superman.jpg'},
		{title:'Ironman', fName:'Amol', lName:'Wani', city:'Pune', power:9, releasedate: '2016-01-10', price: 345.45432432, photo: 'images/ironman.jpg'},
		{title:'Spiderman', fName:'Rahul', lName:'Wani', city:'Pimpri', power:10, releasedate: '2016-01-09', price: 567.45545}
		];
	$scope.sortby='title';
	$scope.reverse=true;
	
	$scope.sortFun = function(value) {
		$scope.sortby = value;
		$scope.reverse = !$scope.reverse;
	};

	
});
//using module

