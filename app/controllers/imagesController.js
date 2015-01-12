(function() {

    var ImagesController = function ($scope) {

        function init() {
/*            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
*/
        }

        init();
    };

    ImagesController.$inject = ['$scope'];

    angular.module('flikrModule')
      .controller('ImagesController', ImagesController);

}());