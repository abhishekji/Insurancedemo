var myapp= angular.module("SampleApp",['ngRoute']);


myapp.config(['$routeProvider', function($routeProvider){
	
	$routeProvider.
	when('/',{
		templateUrl:'Insurance1a.html',
		controller:'act'
				
	}).
		when('/getquote1',{
		templateUrl:'insurancepage1.html',
		controller:'actsctrl1'
	}).
	when('/continue1',{
		
		templateUrl:'insurancepage2.html',
		controller:'actsctrl2'
		
	}).
	when('/continue2',{
	templateUrl:'insurancepage3.html',
	controller:'actsctrl3'
	}).
	when('/continue3',{
	templateUrl:'insurancepage4.html',
	controller:'actsctrl4'
		
		
	}).

	
	when('/continue4',{
		templateUrl:'insurancepage5.html',
		controller:'actsctrl6'
		
		
	}).
	when('/continue5',{
	
		templateUrl:'insurancepage6.html',
		controller:'actsctrl7'
		
	}).
	
	
	otherwise({
		redirect:'/'
	});
}
	
]);

var11=false;
	myapp.controller('act',function($scope,$http){
	
		
			$http.jsonp(" http://www.mocky.io/v2/559f0e256384a60d20728595?callback=JSON_CALLBACK").success(function(resp)
					{
				results1=resp;
			
			}
			);
	
				
				$scope.reset=function(){
		
					if($scope.select1==results1[0].persondetails1.email){
						if($scope.select2==results1[0].persondetails1.password){
							alert("success");
						}    
				
					}
					if($scope.select1==results1[0].persondetails2.email){
						if($scope.select2==results1[0].persondetails2.password){
							alert("success");
						}
						
					}
					if($scope.select1==results1[0].persondetails3.email){
						if($scope.select2==results1[0].persondetails3.password){
							alert("success");
						}
						
					}
					if($scope.select1==results1[0].persondetails4.email){
						if($scope.select2==results1[0].persondetails4.password){
							alert("success");
						}
						
					}
					if($scope.select1==results1[0].persondetails5.email){
						if($scope.select2==results1[0].persondetails5.password){
							alert("success");
						}
						
					}
					
			
					}
		
		
	});


myapp.controller('actsctrl1',function($scope){ 
	
$scope.fnaming="Enter your first name";
	$scope.lname="Enter your last name";
	$scope.fname31="Enter your address ";
	$scope.fname32="Enter the zip code";
	$scope.fname4="00";
	$scope.fname5="00";
	$scope.fname6="0000";
	$scope.sub1=function(){
localStorage.setItem("fname",$scope.fnaming);
alert(localStorage.getItem("fname"));
localStorage.setItem("lname",$scope.lname);
alert(localStorage.getItem("lname"));
localStorage.setItem("fname2",$scope.fname31);
alert(localStorage.getItem("fname2"));
localStorage.setItem("fname3",$scope.fname32);
alert(localStorage.getItem("fname3"));
localStorage.setItem("fname4",$scope.fname4);
alert(localStorage.getItem("fname4"));
localStorage.setItem("fname5",$scope.fname5);
alert(localStorage.getItem("fname5"));
localStorage.setItem("fname6",$scope.fname6);
alert(localStorage.getItem("fname6"));
	}
	
	/*localStorage.setItem("fname","Amar");
	alert(localStorage.fname);
	sessionStorage.setItem("fname1","Amar1");
	alert(sessionStorage.fname1);
	
	*/
	$scope.popup1=function(){
		
		$scope.var11=true;
		
	}
	$scope.popup2=function(){
		
		$scope.var12=true;
		
	}
	$scope.popup3=function(){
		
		$scope.var13=true;
		
	}
	$scope.popup4=function(){
		
		$scope.var14=true;
		
	}
	$scope.popup5=function(){
		
		$scope.var15=true;
		
	}
	
});
myapp.controller('actsctrl2',function($scope){ 
	$scope.popshow=function(){
		
		$scope.var21=true;
		
	}
	$scope.popshow1=function(){
		
		$scope.var22=true;
		
	}
	$scope.popshow2=function(){
		
		$scope.var23=true;
		
	}
	
	

	//$scope.people=[{"name":"Honda"},{"name":"Santro"},{"name":"Ford"}];
	//$scope.m1=[{"name":"MDX"},{"name":"RDX"},{"name":"TLX"},{"name":"TL"}]
	$scope.sub2=function(){
		
					localStorage.setItem("fname",$scope.year);
			alert(localStorage.getItem("fname"));
			localStorage.setItem("fname1",$scope.make);
			alert(localStorage.getItem("fname1"));
			localStorage.setItem("fname2",$scope.model);
			alert(localStorage.getItem("fname2"));
			localStorage.setItem("fname3",$scope.t1);
			alert(localStorage.getItem("fname3"));
			localStorage.setItem("fname4",$scope.t2);
			alert(localStorage.getItem("fname4"));
			localStorage.setItem("fname5",$scope.t3);
			alert(localStorage.getItem("fname5"));
			localStorage.setItem("fname6",$scope.primary);
			alert(localStorage.getItem("fname6"));
			localStorage.setItem("fname7",$scope.coverage);
			alert(localStorage.getItem("fname7"));
			
			localStorage.setItem("fname8",$scope.ra1);
			alert(localStorage.getItem("fname8"));
			localStorage.setItem("fname9",$scope.ra2);
			alert(localStorage.getItem("fname9"));
			
	}
//if($scope.selectedOption=$scope.people[2]){
	
//	alert("yesw");
//}
	
});

myapp.controller('actsctrl3',function($scope){ 
	flag=0;
	for(var i=0;i<3;i++){
		$(".A1").keyup(function(){
			flag=flag+1;
			
			
		
		if(flag==3){
			alert("hello");
		 $(this).next(".A1").focus();
		}
		});
	}
	
	
	$scope.sub3=function(){

	localStorage.setItem("name1",$scope.m1);
	alert(localStorage.getItem("name1"));
	localStorage.setItem("name2",$scope.m2);
	alert(localStorage.getItem("name2"));
	localStorage.setItem("name3",$scope.m3);
	alert(localStorage.getItem("name3"));
	localStorage.setItem("name4",$scope.m4);
	alert(localStorage.getItem("name4"));
	localStorage.setItem("name5",$scope.m5);
	alert(localStorage.getItem("name5"));
	localStorage.setItem("name6",$scope.m6);
	alert(localStorage.getItem("name6"));
	localStorage.setItem("name7",$scope.m7);
	alert(localStorage.getItem("name7"));
	localStorage.setItem("name8",$scope.m8);
	alert(localStorage.getItem("name8"));
	localStorage.setItem("name9",$scope.m9);
	alert(localStorage.getItem("name9"));
	
	}
}
);
myapp.controller('actsctrl4',function($scope){ 
//		if(($scope.radiohere.prop("checked")==true)){
		//	alert("true");
	//		}
	$scope.sub4=function(){
		localStorage.setItem("radio1",$scope.radiohere);
		alert(localStorage.getItem("radio1"));
		localStorage.setItem("radio2",$scope.radiohere1);
		alert(localStorage.getItem("radio2"));
	}
});

				               

	
myapp.controller('actsctrl6',function($scope){ 
	$scope.sub5=function(){
	localStorage.setItem("p11",$scope.p1);
	alert(localStorage.getItem("p11"));
	localStorage.setItem("p21",$scope.p2);
	alert(localStorage.getItem("p21"));
	}
});



myapp.controller('actsctrl7',function($scope){
	
	$scope.sub6=function(){
		
		localStorage.setItem("c11",$scope.c1);
		alert(localStorage.getItem("c11"));
		localStorage.setItem("c21",$scope.c2);
		alert(localStorage.getItem("c21"));
		localStorage.setItem("c31",$scope.c3);
		alert(localStorage.getItem("c31"));
		localStorage.setItem("c41",$scope.c4);
		alert(localStorage.getItem("c41"));
		localStorage.setItem("c51",$scope.c5);
		alert(localStorage.getItem("c51"));
		localStorage.setItem("c61",$scope.c6);
		alert(localStorage.getItem("c61"));
		localStorage.setItem("c71",$scope.c7);
		alert(localStorage.getItem("c71"));
		localStorage.setItem("c81",$scope.c8);
		alert(localStorage.getItem("c81"));
		localStorage.setItem("c9",$scope.c9);
		alert(localStorage.getItem("c9"));
		localStorage.setItem("c10",$scope.c10);
		alert(localStorage.getItem("c10"));
		localStorage.setItem("c11",$scope.c11);
		alert(localStorage.getItem("c11"));
		
		
		
	}
	$scope.popup1=function(){
		
		$scope.var11=true;
		
	}
	$scope.popup2=function(){
		
		$scope.var12=true;
		
	}
	$scope.popup3=function(){
		
		$scope.var13=true;
		
	}
});

myapp.directive("direct",function(){ 
	
	return{
		restrict: "EAC",
		replace:true,
		templateUrl:"directive.html"
		
		
	}
	
	
})
myapp.directive("direct1",function(){

	return{
		
		restrict:"EAC",
		replace:true,
		templateUrl:"directive1.html"
		
	}
	
	
})
