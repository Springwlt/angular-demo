angular.module('app',[])
.factory('Data',function(){
	return {
		msg:'我是factory'
	}
})
.Controller('FCtrl',function($scope,Data){
	$scope.data = Data;
})
.controller('SCtrl',function($scope,Data){
	$scope.data = Data;
})
