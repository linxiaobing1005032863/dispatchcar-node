var app = angular.module('payedServer',[]);
app.factory('payedSer',function ($http) {
    return {
        menuPermission : menuPermission,
        payedList :payedList ,
        viewPayed:viewPayed,
        payedAudit:payedAudit,
        collectPayed:collectPayed,
        collectcarPayed:collectcarPayed



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/payed/guidePermission'+data);
    }
    //列表
    function payedList(data) {
        return $http.get('/payed/list',{
            params: data
        })
    }
    //汇总
    function collectPayed(data){
        return $http.get('/payed/collectPayed',{params:data})
    }
    //出车汇总
    function collectcarPayed(data){
        return $http.get('/payed/count/car',{params:data})
    }
     //附件列表
    function viewPayed(data){
        return $http.get('/payed/listFile',{params:data})
    }
    //审核详情
    function payedAudit(data){
        return $http.get('/payed/audit',{
            params:data
        })
    }
    
    /*//id查询find
    function findinfoId(data){
        return $http.get('/dispatchcarinfo/find',{
            params:data
        })
    }*/
  /*  //计算总数量
    function Countpay() {
        return $http.get('/waitaudit/count')
    }*/
  /*  //添加
    function Addinfo(data){
        return $http.post('/dispatchcarinfo/add',data)
    }

    //编辑
    function Editinfo(data){
        return $http.post('/dispatchcarinfo/edit',data)
    }*/
/*

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
    function infoDriver() {
        return $http.get('/dispatchcarinfo/find/driver')
    }
 //查询所有用车陪同人员和用车人员和任务下达人员和所属地区和所属项目组
    function infoEntry() {
        return $http.get('/dispatchcarinfo/find/entry')
    }
    /!*!//当月预算范围
    function getAllArea() {
        return $http.get('/bonusbudget/findPay/reserve')
    }*!/
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
        return $http.get('/dispatchcarinfo/find/oil')
    }
    //查找所有项目名称
    function infoProject() {
        return $http.get('/dispatchcarinfo/find/allProject')
    }

*/

});

