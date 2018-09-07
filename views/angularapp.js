var app = angular.module('myapp', []);
 

app.controller('mycontroller', ($scope,$http) => {
	$scope.submit = function(info){
		/*var data = $.param({
            bug: JSON.stringify({
                info: $scope.info
            })
        });*/
		console.log(info)
		$http.post("http://localhost:5500/api/bugs",info).then(function(response) {
console.log('data posted with success');
        })
    }
    });
