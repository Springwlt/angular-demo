angular.module('app',[])
.config(function($httpProvider){
	
})
.controller('MyCtrl',function(){
	$scope.name="";
	$scope.adduser = function(){
		$http.post('http://127.0.0.1:80/user/adduser',{name:$scope.name})
		.success(function(resp){
			if(resp.success){
				alert("添加成功");
			}
		})
	}
})