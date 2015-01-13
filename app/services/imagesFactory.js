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

        return factory;
    };

    imagesFactory.$inject = ['$http'];

    angular.module('flikrModule').factory('imagesFactory', imagesFactory);

}());