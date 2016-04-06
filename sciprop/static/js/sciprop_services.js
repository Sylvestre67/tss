/**
 * Created by gugs on 4/5/16.
 */

angular.module('sciprop.services', ['ngResource'])
	.factory('Campaign', function($resource) {
		return $resource('/api/proposal_campaign/:id/',null,
			{
				'update' : {method:'PATCH'}
			}
		);
  	})
    .factory('User', function($resource) {
    	return $resource('/api/users/:id/');
	})
    /*.factory('Proposal',function($resource){
		return 	$resource('/api/proposal/:id/');
  	})*/
  	.factory('APIInterceptor', function($q, $location, $injector) {

		return {
        	'responseError': function(rejection) {

            	return $q.reject(rejection);
         }
    };
});

