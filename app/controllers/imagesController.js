(function() {

    var currentPicturePosition = 0;

    var ImagesController = function ($scope, imagesFactory, appSettings) {

        function init() {
            $scope.tag = "";
            $scope.current_image_url = "";
            $scope.picture_urls = [];
            $scope.current_image_url="";
        }

        init();

        $scope.searchByTag = function() {
            imagesFactory.getImagesByTag($scope.tag, appSettings.apiKey)
                .success(function(response) {

                $scope.picture_urls = imagesFactory.photosToUrls(response.photos.photo);
                $scope.current_image_url = $scope.picture_urls[currentPicturePosition];

                }).error(function(error) {
                    console.log('Error fest');
            });
        }

        $scope.haveImages = function() {
            return $scope.picture_urls.length != 0;
        }

        $scope.moveForward = function() {
            if(currentPicturePosition + 1 >= $scope.picture_urls.length) {
                return;
            }
            else {
                $scope.current_image_url = $scope.picture_urls[++currentPicturePosition];
            }
        }

        $scope.moveBack = function() {
            if(currentPicturePosition - 1 < 0) {
                return;
            }
            else {
                $scope.current_image_url = $scope.picture_urls[--currentPicturePosition];
            }
        }
    };

    ImagesController.$inject = ['$scope', 'imagesFactory', 'appSettings'];

    angular.module('flikrModule')
      .controller('ImagesController', ImagesController);

}());