
'use strict';

angular.module('test').config(['$stateProvider', function ($stateProvider) {

	$stateProvider
	.state('app', {
		url: '/home',
		templateUrl: '/app/app-template.html',
		controller: 'AppController'
	})
	.state('user',{
		url: '/user',
		templateUrl: '/app/user-list.html',
		controller: 'UserController'
		
	})
	.state('user-add',{
		url: '/user/add',
		templateUrl: '/app/user-form.html',
		controller: 'UserController'
		
	})
	.state('user-detail',{
		url: '/user/{id}',
		templateUrl: '/app/user-form.html',
		controller: 'UserController',
		params: {
			id: '{id}'
		}
		
	});

}]);