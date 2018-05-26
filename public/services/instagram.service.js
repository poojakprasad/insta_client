angular.module('galPhoto')

.factory('instagram', function($resource){
	return {
		fetchPopular: function(callback){
			$http({
                url: 'http://0.0.0.0:5004',
                method: "GET"
                    '_id': $cookies.get('_id')
                }
            }).then(function(response) {
                if(response) {
                    var responseData = JSON.parse(response.data)
                    l2Response.welcomeMsg = "Welcome "+ responseData.first_name;
                    l2Response.userInfo = responseData;
                    l2Response.picture = l2Response.userInfo ? (l2Response.userInfo.image_url ? l2Response.userInfo.image_url : '') : '';
                    l2Response.posts = l2Response.userInfo ? (l2Response.userInfo.posts ? l2Response.userInfo.posts : []) : [];
                    callback(l2Response);
                }
            }, function(response) {
                if(response && response.data) {
                    l2Response.error = response.data.error;
                    callback(l2Response);
                }
            });
		}
	}
})