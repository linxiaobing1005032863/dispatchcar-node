var app = angular.module('paypay', ['toastr']);
app.controller('paypayCtrl', function($scope, paySer,$stateParams,$state,toastr){
    var infoAudit ={id: $stateParams.id}
    //获取ID
    //获取ID
    paySer.findpayId(infoAudit).then(function(response){
        if(response.data.code==0){
            $scope.list = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
$scope.infoEditFun = function() {
    var vm = $scope;
    var data = {
        accompanyUser:vm.list.accompanyUser,
        acctype:vm.list.acctype,
        addOil:vm.list.addOil,
        addOilAmount:vm.list.addOilAmount,
        addOilExplain:vm.list.addOilExplain,
        addOilTime:vm.list.addOilTime,
        aircondition:vm.list.aircondition,
        area:vm.list.area,
        carNumber:vm.list.carNumber,
        carRentalCost:vm.list.carRentalCost,
        carUser:vm.list.carUser,
        dispatchDate:vm.list.dispatchDate,
        dispatchReason:vm.list.dispatchReason,
        downtown:vm.list.downtown,
        driver:vm.list.driver,
        endMileage:vm.list.endMileage,
        endTime:vm.list.endTime,
        evaluatedriver:vm.list.evaluatedriver,
        finishTaskAmount:vm.list.finishTaskAmount,
        group:vm.list.group,
        id:vm.list.id,
        mileageOfGPS:vm.list.mileageOfGPS,
        oilCardBalance:vm.list.oilCardBalance,
        oilCardNumber:vm.list.oilCardNumber,
        oilPrice:vm.list.oilPrice,
        overWorkTime:vm.list.overWorkTime,
        oweOilExplain:vm.list.oweOilExplain,
        parkCost:vm.list.parkCost,
        planTaskAmount:vm.list.planTaskAmount,
        principal:vm.list.principal,
        project:vm.list.project,
        projectApproval:vm.list.projectApproval,
        roadCost:vm.list.roadCost,
        shouldAmount:vm.list.shouldAmount,
        siesta:vm.list.siesta,
        startMileage:vm.list.startMileage,
        startTime:vm.list.startTime,
        userNumber:vm.list.userNumber,
        auditResult:vm.auditResult,
    };
    paySer.findpayPay(data).then(function (response) {
        if(response.data.code == 0){
            $state.go('root.dispatchcar.waitpay.list[12]');
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
