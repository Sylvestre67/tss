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

scipropControllers.controller('CampaignDetailsCtrl', function HomeCtrl($scope, $stateParams, Campaign, Slug) {

	Campaign.get({id:$stateParams.campaignId},function(response) {
    	$scope.campaign = response;
		$scope.form_preview_schema = response.forms['main_form'];
		$scope.form_preview_form = [
			"*"
		];
	});

	$scope.field_form_model = {};

	$scope.field_form_schema = {
		type:"object",
		properties:{

			type: {
				"type": "string",
				"minLength": 2,
				"maxLength": 200,
				"title": "Type",
				"x-schema-form": {
					 "type": "select",
					 "titleMap": [
						 { value: "string", name: "Text" },
						 { value: "integer", name: "Number" },
						 { value: "boolean", name: "True/False" },
						 { value: "select", name: "Select" },
					 ]
				}
			},

			title: {
				"type": "string",
				"minLength": 2,
				"maxLength": 200,
				"title": "Title"
			},

			minLength: {
				"type": "integer",
				"title": "Minumum Length"
			},

			maxLength: {
				"type": "integer",
				"title": "Maximum Length"
			},

			enum: {
				"type": "array",
				"title":"Choices",
				"maxItems": 5,
				"items": {
					"type":"string"
				}
			}
		}
	};

	$scope.field_form_form = [
		'*',
		{
			"type": "submit",
			"style": "btn-primary",
			"title": "Add"
  		}
	];

	$scope.main_form_schema = {
		type: "object",
		properties: {
		}
	};

	$scope.onSubmitFieldForm = function(form,form_name) {
    	// First we broadcast an event so all fields validate themselves
    	//$scope.$broadcast('schemaFormValidate');

    	// Then we check if the form is valid
    	if (form.$valid) {

			//Update main form schema with newly added field information
			var key = Slug.slugify($scope.field_form_model.title);
			$scope.form_preview_schema.properties[key] = ($scope.field_form_model);

			debugger;
			//Update Campaigns object
			$scope.campaign.forms[form_name] = $scope.form_preview_schema ;
			$scope.campaign.$update(
				{ id:$scope.campaign.pk	}, $scope.campaign
			);
    	}
  	};

});









