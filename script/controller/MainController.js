app.factory('dataKu', [function() {
    var dt = {};
    dt.getDataSlide = function() {
        return [
	        {
	        	username:'user 1',
	        	posting:[
	        		{
	        			title:'Judul 1',
	        			isi:'jdkandansnkc aksdjka kasjdkakxmj'
	        		},
	        		{
	        			title:'Judul 2',
	        			isi:'apofioaknaksn aknklcfn a ajnjaksnkal'
	        		},
	        		{
	        			title:'Judul 3',
	        			isi:'skfnmkla kalsjfwoapj laknfklaakla lkasjka'
	        		}
	        	]
	        },
	        {
	        	username:'user 2',
	        	posting:[
	        		{
	        			title:'Judul 1',
	        			isi:'jdkandansnkc aksdjka kasjdkakxmj'
	        		},
	        		{
	        			title:'Judul 2',
	        			isi:'apofioaknaksn aknklcfn a ajnjaksnkal'
	        		},
	        		{
	        			title:'Judul 3',
	        			isi:'skfnmkla kalsjfwoapj laknfklaakla lkasjka'
	        		}
	        	]
	        },
	        {
	        	username:'user 3',
	        	posting:[
	        		{
	        			title:'Judul 1',
	        			isi:'jdkandansnkc aksdjka kasjdkakxmj'
	        		},
	        		{
	        			title:'Judul 2',
	        			isi:'apofioaknaksn aknklcfn a ajnjaksnkal'
	        		},
	        		{
	        			title:'Judul 3',
	        			isi:'skfnmkla kalsjfwoapj laknfklaakla lkasjka'
	        		}
	        	]
	        }
        ];
    };
    return dt;
}]);

app.service('UserService', ['$http', function($http){
	var user;
	this.getUserDetail=function() {
		user = {
			nama:'Pororo',
			pendidikan:'pelajar',
		};
		return user;
	};	
}]);

app.controller('MainController', ['$scope','UserService','dataKu', function($scope,UserService,dataKu){
	$scope.posting=[
		{
			judul:'membuat ikan bakar',
			user:'roki',
			isi:'ikan bakar .............',
			waktu:'7:20:16'
		},
		{
			judul:'membuat roti goreng',
			user:'kucing',
			isi:'roti bakar .........',
			waktu:'7:21:16'
		},
		{
			judul:'membuat ayam goreng',
			user:'ayam',
			isi:'ayam goreng .............',
			waktu:'7:33:16'
		}
	];
	$scope.publikasi=function() {
		var userInfo = UserService.getUserDetail();
		var jam = new Date().getHours()+':'+ new Date().getMinutes()+':'+ new Date().getSeconds();
		var data = {
			judul:$scope.judul,
			user:userInfo.nama,
			isi:$scope.isi,
			waktu:jam
		};
		$scope.posting.push(data);
		$scope.judul='';
		$scope.isi='';
	};
	$scope.indiku='';
	$scope.data = dataKu.getDataSlide();
}]);