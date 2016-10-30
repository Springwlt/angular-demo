angular.module('app',[])
.controller('AddressCtrl',function($scope){
	$scope.list = [
		{id:1,address:'梨花小区'},
		{id:2,address:'世纪大道'},
		{id:3,address:'梨花小区'},
		{id:4,address:'世纪大道'}
	];
})