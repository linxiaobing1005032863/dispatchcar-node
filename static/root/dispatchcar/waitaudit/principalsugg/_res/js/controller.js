var app = angular.module('waitPrincipalsugg', ['toastr']);
app.controller('waitPrincipalsuggCtrl', function($scope, waitSer,$stateParams,$state,toastr){
    var infoAudit ={id: $stateParams.id}
    //获取ID
    waitSer.findwaitId(infoAudit).then(function(response){
        if(response.data.code==0){
            $scope.list = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
$scope.infoEditFun = function() {
    var vm = $scope;
    var data = {
        id: vm.list.id,
        principalSugg: vm.principalSugg,
        auditResult: vm.auditResult
    };
    waitSer.palSugg(data).then(function (response) {
        if(response.data.code == 0){
            $state.go('root.dispatchcar.waitaudit.list[12]');
            toastr.success( "审核成功", '温馨提示');
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
};
});

//自定义过滤器
app.filter('addCover',function(){
    return function(val){
        var result;
        switch(val){
            case "MAIN":
                result = "主营业务成本";
                break;
            case "MARKET":
                result = "市场费";
                break;
            case "TRAINING":
                result = "培训费";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});
app.filter('driver',function(){
    return function(val){
        var result;
        switch(val){
            case "GOOD":
                result = "优秀";
                break;
            case "WELL":
                result = "良好";
                break;
            case "BAD":
                result = "恶劣 ";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});
app.filter('staTus',function(){
    return function(val){
        var result;
        switch(val){
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除 ";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});
app.filter('Type',function(){
    return function(val){
        var result;
        switch(val){
            case "WAITAUDIT":
                result = "等待审核";
                break;
            case "FINANCEAUDIT":
                result = "财务核对";
                break;
            case "WAITPAY":
                result = "等待付款 ";
                break;
            case "PAYED":
                result = "已付款";
                break;
            case "WRONG":
                result = "WRONG";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});
app.filter('pay',function(){
    return function(val){
        var result;
        switch(val){
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }
});

