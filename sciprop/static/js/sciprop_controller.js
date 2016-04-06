var scipropControllers = angular.module('sciprop.controllers', []);

scipropControllers.controller('HomeCtrl', function HomeCtrl($scope) {
	$scope.header = 'Home';
});

scipropControllers.controller('CampaignDashBoardCtrl', function HomeCtrl($scope, Campaign) {
	$scope.header = 'Campaigns Dashboard';

	Campaign.query(function (response) {
		$scope.list_of_campaigns = response;
	});

});

scipropControllers.controller('CampaignDetailsCtrl', function HomeCtrl($scope, $stateParams, Campaign) {

	Campaign.get({id:$stateParams.campaignId},function(response) {
    	$scope.campaign = response;
	});

	$scope.main_form_schema = {
		type: "object",
		properties: {
			title: { type: "string", minLength: 2, maxLength: 200, title: "Title", description: "Give your proposal a title." },
		}
	};

	$scope.main_form = [
		"*",
		{
		    type: "submit",
		    title: "Save"
		}
	];

  	//$scope.field_form = {};

	$scope.submitFieldForForm = function(main_form_schema,form_name){

		$scope.campaign.forms[form_name] = main_form_schema;
		$scope.campaign.$update(
			{ id:$scope.campaign.pk	}, $scope.campaign
		);

	};

});









