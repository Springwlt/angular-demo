angular.module('app',[])
.controller('MyCtrl',function($scope){
	$scope.msg=""; //定义变量
	$scope.user = {uname:'',pwd:''};
	$scope.errormsg="";
	$scope.reverse= function(){
		return $scope.msg.split("").reverse().join("");
	}
	$scope.login = function(){
		if($scope.user.uname == "admin" && $scope.user.pwd=="123"){
			alert("登陆成功");
		}else{
			console.log("llll");
			$scope.errormsg="用户名或者密码错误";
		}
	}
})