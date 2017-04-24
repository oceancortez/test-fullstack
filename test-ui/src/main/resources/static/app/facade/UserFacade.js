'use strict';

angular.module('test')

    .service('UserFacade', ['UserService', 'UserFactory', '$q',

function UserFacade(UserService, UserFactory, $q){


    var facade = {

        getAllUsers: getAllUsers,
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser,
        getUserById: getUserById
    };

    return facade;

    function getAllUsers() {
        return $q(function(resolve, reject) {
            UserService.getAllUsers().then(function(response) {

                var retorno = UserFactory.getAllUsersIn(response);
                if (retorno) {
                    resolve(retorno);
                } else {
                    retorno.error = retorno.message;
                    reject(retorno);
                }
            }, function error(response) {
                reject(response);
            });
        });
    };

    function createUser(user) {
        return $q(function(resolve, reject) {
            var out = UserFactory.createUserOut(user);
            UserService.createUser(out).then(function(response) {
                var result = UserFactory.userIn(response);
                if (result) {
                    resolve(result);
                } else {
                    result.error = result.message;
                    reject(result);
                }
            });
        });
    };

    function updateUser(user) {
        return $q(function(resolve, reject) {
            var out = UserFactory.updateUserOut(user);
            UserService.updateUser(out).then(function(response) {
                var retorno = UserFactory.userIn(response);
                if (retorno) {
                    resolve(retorno);
                } else {
                    retorno.error = retorno.message;
                    reject(retorno);
                }
            });
        });
    };

    function deleteUser(id) {
        return $q(function(resolve, reject) {
            var out = UserFactory.userIdOut(id);
            UserService.deleteUser(out).then(function(response) {
                var retorno = UserFactory.userIn(response);
                if (retorno) {
                    resolve(retorno);
                } else {
                    retorno.error = retorno.message;
                    reject(retorno);
                }
            }, function error(response){
                reject(response.message);
            });
        });
    };

    function getUserById(id) {
        return $q(function(resolve, reject) {
            var out = UserFactory.userIdOut(id);
            UserService.getUserById(out).then(function(response) {
                var result = UserFactory.userIn(response);
                if (result) {
                    resolve(result);
                } else {
                    result.error = result.message;
                    reject(result);
                }
            });
        });
    };
 }]);
