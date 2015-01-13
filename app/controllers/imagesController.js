(function() {

    var currentPicturePosition = 0;

    var ImagesController = function ($scope, imagesFactory, appSettings) {

        function init() {
            $scope.current_image_url = "";
            $scope.picture_urls = [];
        }

        init();

        $scope.searchByTag = function() {
            imagesFactory.getImagesByTag($scope.searchParams.tag, appSettings.apiKey)
                .success(function(response) {

                var pictures = response.photos.photo.map(function (photo) {
                    return "http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg"
                        .replace("{farm-id}", photo.farm)
                        .replace("{server-id}", photo.server)
                        .replace("{id}", photo.id)
                        .replace("{secret}", photo.secret);
                    });

                $scope.picture_urls = pictures;
                $scope.current_image_url = $scope.picture_urls[currentPicturePosition];

                }).error(function(error) {
                    console.log('Error fest');
            });
        }

        $scope.haveImages = function() {
            return $scope.picture_urls.length != 0;
        }

        $scope.moveForward = function() {

            console.log('Length ' + $scope.picture_urls.length);
            console.log('Pos ' + currentPicturePosition);

            if(currentPicturePosition + 1 >= $scope.picture_urls.length) {
                return;
            }
            else {
                $scope.current_image_url = $scope.picture_urls[currentPicturePosition++];
            }

            console.log('Forward');
        }

        $scope.moveBack = function() {
            console.log('Back');
        }
    };

    ImagesController.$inject = ['$scope', 'imagesFactory', 'appSettings'];

    angular.module('flikrModule')
      .controller('ImagesController', ImagesController);

}());