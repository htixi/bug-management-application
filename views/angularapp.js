var app = angular.module('myapp', []);
 

app.controller('mycontroller', ($scope) => {
	$scope.submit = function(){
		var data = $.param({
            bug: JSON.stringify({
                info: $scope.info
            })
        });
		
		$http.post("/api/bugs",data).success((data,status) => {
console.log('data posted with success');
        })
    }
    });
