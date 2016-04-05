var scipropControllers = angular.module('sciprop.controllers', []);

scipropControllers.controller('HomeCtrl', function HomeCtrl($scope) {
	$scope.header = 'Home';
});

scipropControllers.controller('CampaignDashBoardCtrl', function HomeCtrl($scope, Campaign) {
	$scope.header = 'Campaigns Dashboard';

	Campaign.query(function (response) {
		$scope.list_of_campaign = response;
	});

});









