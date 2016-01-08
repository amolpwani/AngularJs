(function(){
	
	function spiderFun(){
		this.title = "Spiderman";
		this.fName = "Peter";
		this.lName = "Parker";
		this.city = "New York";
		this.power = 7;
		this.photo = "images/spiderman.jpg";
	};

	angular.module("app")
	.controller("spidercontroller", spiderFun);
}())
