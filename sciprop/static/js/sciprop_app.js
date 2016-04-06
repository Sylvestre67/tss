/**
 * Created by gugs on 4/5/16.
 */
angular.module('sciprop', [
    'ui.router',
    'ngResource',
    'ngCookies',
    'sciprop.services',
    'sciprop.controllers',
	'schemaForm'
])
	.config(function ($interpolateProvider, $httpProvider, $resourceProvider, $stateProvider, $urlRouterProvider) {
    // Force angular to use square brackets for template tag
    // The alternative is using {% verbatim %}
    //$interpolateProvider.startSymbol('[[').endSymbol(']]');

    // CSRF Support
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    // This only works in angular 3!
    // It makes dealing with Django slashes at the end of everything easier.
    $resourceProvider.defaults.stripTrailingSlashes = false;

    // Django expects jQuery like headers
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    // Routing
    $stateProvider
		.state('home', {
        	url: '/',
			templateUrl: 'static/views/index.html',
			controller: 'HomeCtrl'
      	})
		.state('campaign_dashboard', {
        	url: '/campaign_dashboard/',
			templateUrl: 'static/views/campaign_dashboard.html',
			controller: 'CampaignDashBoardCtrl'
      	})
		.state('campaign_details', {
        	url: '/campaign/:campaignId',
			templateUrl: 'static/views/campaign_details.html',
			controller: 'CampaignDetailsCtrl'
      	});


	$urlRouterProvider.otherwise('/');

	//Interceptor to handle bad request,response...
	$httpProvider.interceptors.push('APIInterceptor');

  });
