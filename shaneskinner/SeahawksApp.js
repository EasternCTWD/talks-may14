
var SeahawksApp = angular.module('SeahawksApp', []);

SeahawksApp.factory('Team', function () {
	var team = {};
	var Coach = "Pete Carroll";

	team.roster = [
	{
	   name: "Russell Wilson",
	   position: "Quarterback"
	},
	{
	   name: "Marshawn Lynch",
	   position: "Running Back"
	},
	{
	   name: "Percy Harvin",
	   position: "Wide Receiver"
	},
	{
	   name: "Richard Sherman",
	   position: "Cornerback"
	},
	{
	   name: "Earl Thomas",
	   position: "Free Safety"
	},
	{
	   name: "Michael Bennett",
	   position: "Defensive End"
	},
	{
	   name: "Cliff Avril",
	   position: "Defensive End"
	},
	{
	   name: "Kam Chancellor",
	   position: "Strong Safety"
	}
    ];

	return team;
})
.controller('SeahawksCtrl',function ($scope, Team) {
	$scope.seahawks = Team.roster;
})
.directive('rant', function () {
	return {
		restrict: 'E',
		replace: true,
		template: "<div>blah blah!!!!</div>"
	}
});

// var app = angular.module("RichardSherman", [])
//
// app.directive("rant", function() {
// 	return {
// 		restrict: "E",
// 		template: "<div>Don't you ever talk about me! I'm the best Cornerback in the league!</div>"
// 	}
// })
