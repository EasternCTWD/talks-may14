var SeahawksApp = angular.module('SeahawksApp', []);

SeahawksApp.factory('TeamFactory', function () {
	var team = {};

	team.coach = "Pete Carroll";

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
});

SeahawksApp.controller('SeahawksCtrl',function ($scope, TeamFactory) {
	$scope.coach = TeamFactory.coach;
	$scope.seahawks = TeamFactory.roster;
});

SeahawksApp.directive('rant', function () {

	return {
		restrict: 'E',
		replace: true,
		template: "<div>Don't you ever talk about me! I'm the best Cornerback in the league!</div>"
	}
});
