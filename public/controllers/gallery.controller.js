angular.module('galPhoto')

.controller('GalleryCtrl',['$scope','instagram', function($scope, instagram){

	$scope.images = [];

	instagram.fetchPopular(function(data){
		//console.log(data);
		$scope.images = data;
	})
}])
.controller('LoginCtrl',['$scope','$cookies',function($scope, $cookies){
    $scope.isLoggedIn = false;
    $scope.login = function(){
	    var username = $scope.username
	    var password = $scope.password
	    $http({
            url: 'http://0.0.0.0:5004/app/authenticate',
            method: "GET",
            params: {
                username: username,
                password: password
            }
         }).then(function(response) {
            if(response) {
                var _id = JSON.parse(response.data)['_id']
                $scope.connector.id = _id
                $scope.connector.isLoggedIn = true;
                $scope.isLoggedIn = true;
                $cookies.put('_id', _id)
                $cookies.put('isLoggedIn', $scope.isLoggedIn)
               // $scope.userData = refreshService.refresh(refreshService.id);
                $window.location.href = '/app/#!/insta';
		    }
        }, function(response) {
            if(response && response.data)
                $scope.connector.error = response.data.error
        });
	}

	$scope.logout = function(){
		//$facebook.logout().then(function(){
			$scope.connector.isLoggedIn = false;
			$scope.isLoggedIn = refreshService.isLoggedIn ? refreshService.isLoggedIn : false;
			$scope.userData = refreshService.refresh(refreshService.id);
		    $window.location.href = '/app/#!/login';
		    $cookies.remove('_id')
            $cookies.put('isLoggedIn', false)
		//});
	}
}])