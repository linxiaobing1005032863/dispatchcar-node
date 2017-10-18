var app = angular.module('dispatchcarModule');
app.factory('dispatchcarSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/dispatchcarinfo/sonPermission');
    }
    function setPermission(){
        return $http.get('/dispatchcarinfo/setButtonPermission');
    }
});