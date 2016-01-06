angular.module("app")
.controller("heroController", function($scope) {
	
	$scope.sortby='';
	$scope.reverse=false;
	$scope.offset=0;
	$scope.showMe=true;
	
	$scope.heros=[
		{srno: 1, title:'Batman', fName:'Bruce', lName:'Wayne', city:'Gotam', power:7, releasedate: '2016-01-06', price: 123.4542323, photo: 'images/batman.jpg'},
		{srno: 2, title:'Superman', fName:'Clark', lName:'Kent', city:'Manhatn', power:8, releasedate: '2016-01-04', price: 235.45234423, photo: 'images/superman.jpg'},
		{srno: 3, title:'Ironman', fName:'Amol', lName:'Wani', city:'Pune', power:9, releasedate: '2016-01-10', price: 345.45432432, photo: 'images/ironman.jpg'},
		{srno: 4, title:'Spiderman', fName:'Rahul', lName:'Wani', city:'Pimpri', power:10, releasedate: '2016-01-09', price: 567.45545},
		{srno: 5, title:'Batman1', fName:'Bruce', lName:'Wayne', city:'Gotam', power:7, releasedate: '2016-01-06', price: 123.4542323, photo: 'images/batman.jpg'},
		{srno: 6, title:'Superman1', fName:'Clark', lName:'Kent', city:'Manhatn', power:8, releasedate: '2016-01-04', price: 235.45234423, photo: 'images/superman.jpg'},
		{srno: 7, title:'Ironman1', fName:'Amol', lName:'Wani', city:'Pune', power:9, releasedate: '2016-01-10', price: 345.45432432, photo: 'images/ironman.jpg'},
		{srno: 8, title:'Spiderman1', fName:'Rahul', lName:'Wani', city:'Pimpri', power:10, releasedate: '2016-01-09', price: 567.45545}
		];
		

	$scope.sortFun = function(value) {
		$scope.sortby = value;
		$scope.reverse = !$scope.reverse;
	};
	
	$scope.moveNext = function() {
		$scope.offset += 2;
		//$scope.showMe = show;
	};

	$scope.moveBack = function(show) {
		$scope.offset -= 2;
		//$scope.showMe = show;
	};
});
//using module

