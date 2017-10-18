var app = angular.module('waitServer',[]);
app.factory('waitSer',function ($http) {
    return {
        menuPermission : menuPermission,
        waitList :waitList ,
        findwaitId:findwaitId,
        Countwait:Countwait,
        viewWait:viewWait,
        waiAudit:waiAudit,
        infoDriver:infoDriver,
        infoEntry:infoEntry,
        infoProject:infoProject,
        infoOil:infoOil,
        budgetSugg:budgetSugg,
        Client:Client,
        Head:Head,
        palSugg:palSugg,
        changeCar:changeCar



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/waitaudit/guidePermission'+data);
    }
    //列表
    function waitList(data) {
        return $http.get('/waitaudit/list',{
            params: data
        })
    }
    //id查询find
    function findwaitId(data){
        return $http.get('/waitaudit/find',{
            params:data
        })
    }
    //计算总数量
    function Countwait() {
        return $http.get('/waitaudit/count')
    }
    //附件列表
    function viewWait(data){
        return $http.get('/waitaudit/listFile',{params:data})
    }
    //审核详情
    function waiAudit(data){
        return $http.get('/waitaudit/findAudit',{
            params:data
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
    //查询所有油卡信息
    function infoOil() {
        return $http.get('/dispatchcarinfo/oil')
    }
    //查找所有项目名称
    function infoProject() {
        return $http.get('/dispatchcarinfo/allProject')
    }
    //预算模块负责人核对意见
    function budgetSugg(data){
        return $http.post('/waitaudit/budgetsugg',data)
    }
    //客户模块负责人核对意见
    function Client(data){
        return $http.post('/waitaudit/client',data)
    }
    //素养模块负责人核对意见
    function Head(data){
        return $http.post('/waitaudit/head',data)
    }
    //项目负责人或任务下发人审核
    function palSugg(data){
        return $http.post('/waitaudit/principalsugg',data)
    }
    //出车核对修改记录列表
    function changeCar(data) {
        return $http.get('/checkchangecar/list',{
            params: data
        })
    }
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

