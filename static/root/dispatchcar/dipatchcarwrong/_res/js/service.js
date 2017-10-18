var app = angular.module('wrongServer',[]);
app.factory('wrongSer',function ($http) {
    return {
        menuPermission : menuPermission,
        wrongList :wrongList ,
        Addwrong:Addwrong,
        Editwrong:Editwrong,
        findwrongId:findwrongId,
       /* wrongDelete:wrongDelete,
        Countwrong:Countwrong,*/
        congealwrong:congealwrong,
        Thawwrong:Thawwrong,
        infoDriver:infoDriver,
        infoEntry:infoEntry,
        viewWrong:viewWrong,
        Mailwrong:Mailwrong,
        infoOil:infoOil,
        infoProject:infoProject,
        Addinfo:Addinfo,
        Editinfo:Editinfo
       /* congeawait:congeawait,
        Thawwait:Thawwait,
        waitDriver:waitDriver,
        waitEntry:waitEntry,
        viewWait:viewWait,
        Mailwait:Mailwait,
        waitOil:waitOil,
        waitProject:waitProject*/
       /* addRewardbonus:addRewardbonus,
        seeRewardbonus:seeRewardbonus,
        eaidRewardbonus:eaidRewardbonus,

        getAllArea:getAllArea*/



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/dipatchcarwrong/guidePermission'+data);
    }
    //列表
    function wrongList(data) {
        return $http.get('/dipatchcarwrong/list',{
            params: data
        })
    }
    //添加
    function Addinfo(data){
        return $http.post('/dispatchcarinfo/add',data)
    }

    //编辑
    function Editinfo(data){
        return $http.post('/dispatchcarinfo/edit',data)
    }
    //id查询find
    function findwrongId(data){
        return $http.get('/dispatchcarinfo/find',{
            params:data
        })
    }
   /* //计算总数量
    function Countwrong() {
        return $http.get('/waitaudit/count')
    }*/
 //添加
    function Addwrong(data){
        return $http.post('/dispatchcarinfo/add',data)
    }

    //编辑
    function Editwrong(data){
        return $http.post('/dipatchcarwrong/edit',data)
    }

 /*   //删除
    function wrongDelete(data){
        return $http.get('/dispatchcarinfo/delete',{
            params: data
        })
    }*/
   //冻结
    function congealwrong(data){
        return $http.get('/dipatchcarwrong/freeze',{
            params: data
        })
    }
    //解冻
    function Thawwrong(data){
        return $http.get('/dipatchcarwrong/unfreeze',{
            params: data
        })
    }
    //查询所有司机信息和车牌号码
    function infoDriver() {
        return $http.get('/dispatchcarinfo/find/driver')
    }
 //查询所有用车陪同人员和用车人员和任务下达人员和所属地区和所属项目组
    function infoEntry() {
        return $http.get('/dispatchcarinfo/find/entry')
    }
    //附件列表
    function viewWrong(data){
        return $http.get('/dipatchcarwrong/listFile',{params:data})
    }
    //寄件
    function Mailwrong(data){
        return $http.post('/dipatchcarwrong/mail',data)
    }
    //查询所有油卡信息
    function infoOil() {
        return $http.get('/dispatchcarinfo/find/oil')
    }
    //查找所有项目名称
    function infoProject() {
        return $http.get('/dispatchcarinfo/find/allProject')
    }



});

