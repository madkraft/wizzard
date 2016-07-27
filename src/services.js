(function (app) {

    'use strict';

    app.service('formData', formData);

    formData.$inject = ['$http', '$q'];
    function formData($http, $q) {

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