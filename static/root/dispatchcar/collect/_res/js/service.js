var app = angular.module('collectServer',[]);
app.factory('collectSer',function ($http) {
    return {
        menuPermission:menuPermission,
        dispatchCollect:dispatchCollect,
        driverCollect:driverCollect


    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/collect/guidePermission'+data);
    }
  //出车情况汇总
    function dispatchCollect(data){
        return $http.get('/collect/dispatchCollect',{params:data})
    }
    //司机出车情况汇总
    function driverCollect(data){
        return $http.get('/collect/driverCollect',{params:data})
    }
});

