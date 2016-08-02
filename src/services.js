(function (app) {

    'use strict';

    app.service('formDataService', formDataService);

    formDataService.$inject = ['$http', '$q'];
    function formDataService($http, $q) {

        return {
            getData: getData
        };

        function getData(step, data) {
            var defer = $q.defer();
            var URL = 'http://localhost:3000/api/ip/' + step;


            $http({
                url: URL,
                method: 'GET',
                params: data.params
            }).then(function (res) {
                defer.resolve(res.data);
            });

            return defer.promise;
        }

    }




}(angular.module('app')));