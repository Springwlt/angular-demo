angular.module('app',[])
.value('realname','赵普')  //变量名字可变
.constant('http',"www.baidu.com")
.factory('Data',function(){
	return {
		msg:'你好啊',
		setMsg:function(){
			this.msg="我不好";
		}
	}
})
.service('user',function(){
	this.firstname ='王';
	this.lastname = '漂亮';
	this.getName = function(){
		return this.firstname+this.lastname;
	}
})
.controller('MyCtrl',function($scope,realname,http,Data,user){
	$scope.msg="你好";
	$scope.realname = realname;
	$scope.http=http;
	$scope.data=Data;
	$scope.user= user;
	user.getName();
})
