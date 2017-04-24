'use strict';


angular.module('test')

    .factory('UserFactory',['$log',

function UserFactory($log){

    var factory = {
        getAllUsersIn: getAllUsersIn,
        userIn: userIn,
        createUserOut: createUserOut,
        updateUserOut: updateUserOut,
        userIdOut: userIdOut
    };

    return factory;



    function getAllUsersIn(response) {
        var list = [];
        if (response.data !== undefined) {
            response.data.userEntities.forEach(function(user) {
                list.push({
                    "id": user.id,
                    "name": user.name,
                    "email": user.email,
                    "telephone": user.telephone,
                    "sex": user.sex
                });
            });
        }

        $log.info("Out of method = UserFactory.getAllUsersIn " + response);
        return list;
    };

    function createUserOut(user) {
        return {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "telephone": user.telephone,
            "sex": user.sex
        };
    };

    function updateUserOut(user) {
        return {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "telephone": user.telephone,
            "sex": user.sex
        };
    };

    function userIdOut(id) {
        return {
            "id": id
        };
    };

    function userIn(response) {
        var retorno;
        if (response.data !== undefined) {
        	if(!(response.data.userEntity === null)){
        			retorno = response.data.userEntity;
	        }else{
	            	retorno = response.data.message;
	        }
        	
        }
        return retorno;
        
    };
	}]);


