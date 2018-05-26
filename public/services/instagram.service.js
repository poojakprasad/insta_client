angular.module('galPhoto')

.factory('instagram', function($resource, $http){
	return {
		fetchPopular: function(callback){
			$http({
                url: 'http://0.0.0.0:5004/popular',
                method: "GET"
            }).then(function(response) {
                if(response) {
                    var responseData = JSON.parse(response.data)
                    callback(responseData);
                }
            }, function(response) {
                if(response && response.data) {
                    callback(response.data.error);
                }
            });
		}
	}
})