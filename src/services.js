(function (app) {

    'use strict';

    app.service('formDataService', formDataService);

    formDataService.$inject = ['$http', '$q'];
    function formDataService($http, $q) {

        return {
            getData: getData
        };

        function getData() {
            var defer = $q.defer();

            $http.get('http://localhost:3000/api/ip').then(function (res) {
                defer.resolve(res.data);
            });

            return defer.promise;
        }

    }




}(angular.module('app')));