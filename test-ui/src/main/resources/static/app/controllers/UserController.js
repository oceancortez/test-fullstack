'use strict';

angular.module('test')

    .controller('UserController', ['$scope','$state', 'UserFacade', '$log', '$filter', '$location','$stateParams',
    	
   
   function UserController($scope, $state, UserFacade, $log, $filter, $location, $stateParams){
	   var controller = $scope;
	
	    controller.user = {};
	    controller.users = [];
	  	    
	    controller.alertMsg = '';
	    controller.showMessage = false;
	    
	    controller.propertyName = 'id';
	    controller.reverse = true;
	    
	    controller.showCreate;
	    controller.showUpdate;
	    controller.showDelete;
	    controller.showForm = false;
	    
	    controller.sex = ["Masculino", "Feminino"];

        controller.EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;        
        controller.TELEPHONE_REGEXP = /^\d{4,5}-\d{4}$/;
	    
	    if($stateParams.id){
	    	getUserById($stateParams.id);
	    }


    controller.getAllUsers = function() {
    	
        var promise = UserFacade.getAllUsers();
        promise.then(function(users) {
            console.log("Entrou no método = UserController.getAllUsers " + users.length);
            controller.users = users;

            controller.sortBy = function(propertyName) {
                controller.reverse = (controller.propertyName === propertyName) ? !controller.reverse : false;
                controller.propertyName = propertyName;
            };

        }, function error(response) {
        	var result = 'Dont possible loading the Users >> ' + response.status + ' / ' + response.statusText;
            controller.alertShowMessage(result, true);
        });
    };


    function getUserById(id){
    	 controller.showUpdate = true;
    	 controller.showDelete = true;
    	 
        UserFacade.getUserById(id).then(function(result) {
        	if(result.id){
        		controller.showForm = true;
            	controller.user = result;
            	if(controller.user.id === null){
            		controller.redirectToUsers();
            	}       
        	}else{
        		controller.alertShowMessage(result, true);
        	}           
        },  function error(response) {
        	var result = 'Dont possible getUserById the User >> ' + response.status + ' / ' + response.statusText;
            controller.alertShowMessage(result, true);
        });  	
        
    };

    controller.isFormValid = function (user){
        var result;
        if(user.email &&  (!(controller.EMAIL_REGEXP.test(user.email)))){ 
           result = 'Favor inserir um e-mail válido!';
           controller.alertShowMessage(result, true);
        }
        if(user.telephone &&  (!(controller.TELEPHONE_REGEXP.test(user.telephone)))){ 
        	result = 'Favor inserir um telefone no padrão 9999-9999 ou 99999-9999';
        	controller.alertShowMessage(result, true);
        }

        return result;
    }


    controller.create = function(user) {
        if(controller.isFormValid(user)){
            return;
        }
    	controller.showForm = true;
        UserFacade.createUser(user).then(function(result) {
        	if(result.id){
             	controller.user = {};
             	controller.redirectToUsers();
                          		
        	}else{
        		controller.alertShowMessage(result, true);
        	}           

        },  function error(response) {
        	var result = 'Dont possible create the User >> ' + response.status + ' / ' + response.statusText;
            controller.alertShowMessage(result, true);
        });
    };
    
    controller.deleteUser = function(user) {
        if(controller.isFormValid(user)){
            return;
        }
        UserFacade.deleteUser(user.id).then(function(result) {
        	if(result.id){
        		controller.alertShowMessage(result, true);
              	         		
         	}else{
         		 controller.alertMsg = result; 
         		controller.redirectToUsers();  
         	} 
        },  function error(response) {
        	var result = 'Dont possible deleteUser the User >> ' + response.status + ' / ' + response.statusText;
                controller.alertShowMessage(result, true);
            });     
    };

     controller.update = function(user) {
        if(controller.isFormValid(user)){
            return;
        }
        UserFacade.updateUser(user).then(function(result) {
        	if(result.id){
        	  	controller.user = {};
              	controller.redirectToUsers();
                                 		
         	}else{
         		controller.alertShowMessage(result, true);          
         	}     
        }, function error(response) {
        	var result = 'Dont possible update the User >> ' + response.status + ' / ' + response.statusText;
            controller.alertShowMessage(result, true);
        });
    };
    
    
    var path = $location.$$path;
     if (path.indexOf('user/add') > 0) {
    	 controller.user = {};
    	 controller.showCreate = 'CREATE';
    	 controller.showForm = true;
     }
     
     
     controller.userDetail = function (user){
     	 $location.path("/user/"+user.id);
     	$log.info(user);
     };
     

      controller.redirectToUsers = function() {
          $location.path("/user");
      };
      
      controller.alertShowMessage = function (message, hide){
    	  controller.alertMsg = message;
    	  controller.showMessage = hide;
      };
      
      controller.getAllUsers();



 }]);