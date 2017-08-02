var artistControllers = angular.module('artistControllers', ['ngAnimate']);
artistControllers.controller('ProgressbarController', ['$scope', '$http', function($scope, $http) {
	$http.get('json/data.json').success(function(data) {
		$scope.resp = data;
        $scope.limit = 100/data.limit;
		//change progressbar vaues
		$scope.changeProgress = function(e) {
			//selected course from dropdown
			$scope.selectedCourse = document.getElementById('selectedCourse').value;
			$scope.selProgrssBar = document.getElementById($scope.selectedCourse);
			$scope.selPerc = parseInt(e.currentTarget.value);
			$scope.progressWidth = parseFloat(($scope.selProgrssBar.style.width).slice(0, -1));
			//dynamic value for width
			$scope.selProgrssBar.style.width = ($scope.progressWidth + ($scope.selPerc) * $scope.limit) + "%";
			//dynamic value for inner text  
			$scope.selProgrssBar.getElementsByTagName('span')[0].innerHTML = (parseFloat($scope.selProgrssBar.getElementsByTagName('span')[0].innerHTML) + $scope.selPerc);
			//dynamic value for aria-valuenow
			$scope.selProgrssBar.setAttribute('aria-valuenow', $scope.selProgrssBar.getElementsByTagName('span')[0].innerHTML);
			if ($scope.selProgrssBar.getElementsByTagName('span')[0].innerHTML < 0) {
				$scope.selProgrssBar.style.width = "0%";
				$scope.selProgrssBar.getElementsByTagName('span')[0].innerHTML = "0";
				$scope.selProgrssBar.setAttribute('aria-valuenow', 0)
			}
			//change background color over limit
			if ($scope.selProgrssBar.getElementsByTagName('span')[0].innerHTML > $scope.resp.limit) {
				$scope.selProgrssBar.classList.add('redBG');
			} else {
				$scope.selProgrssBar.classList.remove('redBG');
			}
		}
	});
}]);