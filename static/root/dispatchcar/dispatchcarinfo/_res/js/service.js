var app = angular.module('infoServer',[]);
app.factory('infoSer',function ($http) {
    return {
        menuPermission : menuPermission,
        infoList :infoList ,
        Addinfo:Addinfo,
        Editinfo:Editinfo,
        findinfoId:findinfoId,
        infoDelete:infoDelete,
        Countnfo:Countnfo,
        congealinfo:congealinfo,
        Thawinfo:Thawinfo,
        infoDriver:infoDriver,
        infoEntry:infoEntry,
        viewInfo:viewInfo,
        Mailinfo:Mailinfo,
        infoOil:infoOil,
        infoProject:infoProject,
        infoAudit:infoAudit



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }
    //列表
    function infoList(data) {
        return $http.get('/dispatchcarinfo/list',{
            params: data
        })
    }
    //id查询find
    function findinfoId(data){
        return $http.get('/dispatchcarinfo/find',{
            params:data
        })
    }
    //计算总数量
    function Countnfo() {
        return $http.get('/dispatchcarinfo/count')
    }
    //添加
    function Addinfo(data){
        return $http.post('/dispatchcarinfo/add',data)
    }

    //编辑
    function Editinfo(data){
        return $http.post('/dispatchcarinfo/edit',data)
    }

    //删除
    function infoDelete(data){
        return $http.get('/dispatchcarinfo/delete',{
            params: data
        })
    }
    //冻结
    function congealinfo(data){
        return $http.get('/dispatchcarinfo/freeze',{
            params: data
        })
    }
    //解冻
    function Thawinfo(data){
        return $http.get('/dispatchcarinfo/unfreeze',{
            params: data
        })
    }
    //查询所有司机信息和车牌号码
    function infoDriver(data) {
        return $http.get('/dispatchcarinfo/driver',{
            params: data
        })
    }
 //查询所有用车陪同人员和用车人员和任务下达人员和所属地区和所属项目组
    function infoEntry(data) {
        return $http.get('/dispatchcarinfo/entry',{
            params: data
        })
    }
    /*//当月预算范围
    function getAllArea() {
        return $http.get('/bonusbudget/findPay/reserve')
    }*/
    //附件列表
    function viewInfo(data){
        return $http.get('/dispatchcarinfo/listFile',{params:data})
    }
    //寄件
    function Mailinfo(data){
        return $http.post('/dispatchcarinfo/mail',data)
    }
    //查询所有油卡信息
    function infoOil() {
        return $http.get('/dispatchcarinfo/oil')
    }
    //查找所有项目名称
    function infoProject() {
        return $http.get('/dispatchcarinfo/allProject')
    }
    //审核详情
    function infoAudit(data){
        return $http.get('/dispatchcarinfo/audit',{
            params:data
        })
    }

});

