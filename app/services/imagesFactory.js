(function() {
    var imagesFactory = function($http) {

        var factory = {};

        factory.getImagesByTag = function(tag, apiKey) {

        return $http.get("https://api.flickr.com/services/rest/", {
                params: {
                    method: "flickr.photos.search",
                    api_key: apiKey,
                    format: "json",
                    tags: tag,
                    nojsoncallback: 1,
                    has_geo: 1
                }
            });
        };

        factory.photosToUrls = function(photos) {
            return photos.map(function (photo) {
                    return "http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg"
                        .replace("{farm-id}", photo.farm)
                        .replace("{server-id}", photo.server)
                        .replace("{id}", photo.id)
                        .replace("{secret}", photo.secret);
                });
        }

        return factory;
    };

    imagesFactory.$inject = ['$http'];

    angular.module('flikrModule').factory('imagesFactory', imagesFactory);

}());