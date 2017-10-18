var app = angular.module('payServer',[]);
app.factory('paySer',function ($http) {
    return {
        menuPermission : menuPermission,
        payList :payList ,
        payAudit:payAudit,
        findpayId:findpayId,
        paySugg:paySugg,
        findpayPay:findpayPay,
        viewPay:viewPay,
        changeCar:changeCar,
        payMoney:payMoney


    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/waitpay/guidePermission'+data);
    }
    //列表
    function payList(data) {
        return $http.get('/waitpay/list',{
            params: data
        })
    }
    //审核详情
    function payAudit(data){
        return $http.get('/waitpay/audit',{
            params:data
        })
    }
    //id查询find
    function findpayId(data){
        return $http.get('/dispatchcarinfo/find',{
            params:data
        })
    }
    //核对分析
    function paySugg(data){
        return $http.get('/waitpay/fundsugg',{
            params:data
        })
    }
    //付款
    function findpayPay(data){
        return $http.get('/waitpay/pay',{
            params:data
        })
    }
    //附件列表
    function viewPay(data){
        return $http.get('/waitpay/listFile',{params:data})
    }
    //出车核对修改记录列表
    function changeCar(data) {
        return $http.get('/checkchangecar/list',{
            params: data
        })
    }
    //支付司机金额汇总
    function payMoney(data){
        return $http.get('/waitpay/payMoney',{
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

