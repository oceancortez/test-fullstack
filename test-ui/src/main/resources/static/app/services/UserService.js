'use strict';

angular.module('test')

    .service('UserService', ['$http',

function UserService($http){

    var _headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    var service = {
        getAllUsers: getAllUsers,
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser,
        getUserById: getUserById
    };

    return service;


    function getAllUsers() {
        return $http.get("http://localhost:5000/api/user/getAllUsers");
    };

    function createUser(out) {
        return $http.post("http://localhost:5000/api/user/create", out, {
            headers: _headers
        });
    };

    function updateUser(out) {
        return $http.put("http://localhost:5000/api/user/update", out, {
            headers: _headers
        });
    };

    function deleteUser(out) {
        return $http.delete("http://localhost:5000/api/user/delete/" + out.id, {
            headers: _headers
        });
    };


    function getUserById(out) {
        return $http.get("http://localhost:5000/api/user/getUserById/"+ out.id, {
            headers: _headers
        });
    };

}]);
