(function (app) {

    'use strict';

    app.service('formDataService', formDataService);

    formDataService.$inject = ['$http', '$q'];
    function formDataService($http, $q) {

        return {
            getData: getData
        };

        function getData(params) {
            var defer = $q.defer();
            var URL = 'http://localhost:3000/api/ip/' + params;

            $http.get(URL).then(function (res) {
                defer.resolve(res.data);
            });

            return defer.promise;
        }

    }




}(angular.module('app')));