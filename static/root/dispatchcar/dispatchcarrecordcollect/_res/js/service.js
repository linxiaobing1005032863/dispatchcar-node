var app = angular.module('cordcollectServer',[]);
app.factory('cordcollect',function ($http) {
    return {
        menuPermission:menuPermission,
        dayCollcet:dayCollcet,
        weekCollect:weekCollect,
        monthCollect:monthCollect,
        allCollect:allCollect



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarrecordcollect/guidePermission'+data);
    }
    //月汇总
    function dayCollcet(data){
        return $http.get('/dispatchcarrecordcollect/dayCollcet',{params:data})
    }
    //月汇总
    function weekCollect(data){
        return $http.get('/dispatchcarrecordcollect/weekCollect',{params:data})
    }
    //月汇总
    function monthCollect(data){
        return $http.get('/dispatchcarrecordcollect/monthCollect',{params:data})
    }
    //月汇总
    function allCollect(data){
        return $http.get('/dispatchcarrecordcollect/allCollect',{params:data})
    }
});
