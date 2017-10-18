var app = angular.module('changeServer',[]);
app.factory('changeSer',function ($http) {
    return {
        menuPermission:menuPermission,
        changeList :changeList ,
        findinfoId:findinfoId,
        Editmodify:Editmodify,



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/checkchangecar/guidePermission'+data);
    }
    //列表
    function changeList(data) {
        return $http.get('/checkchangecar/list',{
            params: data
        })
    }

    //id查询find
    function findinfoId(data){
        return $http.get('/checkchangecar/find/one',{
            params:data
        })
    }
    function Editmodify(data){
        return $http.get('/checkchangecar/modify',{
            params: data
        })
    }

});

