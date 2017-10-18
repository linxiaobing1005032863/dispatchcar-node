var app = angular.module('finPrincipalsugg', ['toastr']);
app.controller('finPrincipalsuggCtrl', function($scope, finSer,$stateParams,$state,toastr){
    var infoAudit ={id: $stateParams.id}
    //获取ID
    finSer.findfinId(infoAudit).then(function(response){
        if(response.data.code==0){
            $scope.list = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
$scope.infoEditFun = function() {
    var vm = $scope;
    var data = {
        accompanyUser :vm.list.accompanyUser,
        addOil : vm.list.addOil,
        addOilAmount : vm.list.addOilAmount,
        aircondition :vm.list.aircondition,
        carNumber : vm.list.carNumber,
        dispatchReason : vm.list.dispatchReason,
        downtown:vm.list.downtown,
        driver : vm.list.driver,
        evaluatedriver : vm.list.evaluatedriver,
        finishTaskAmount : vm.list.finishTaskAmount,
        group : vm.list.group,
        oilCardBalance : vm.list.oilCardBalance,
        oilPrice : vm.list.oilPrice,
        oweOilExplain : vm.list.oweOilExplain,
        planTaskAmount : vm.list.planTaskAmount,
        principal:vm.list.principal,
        project:vm.list.project,
        projectApproval:vm.list.projectApproval,
        roadCost:vm.list.roadCost,
        siesta:vm.list.siesta,
        userNumber:vm.list.userNumber,
        area:vm.list.area,
        acctype:vm.list.acctype,
        oilCardNumber:vm.list.oilCardNumber,
        addOilExplain:vm.list.addOilExplain,
        carUser:vm.list.carUser,
        carRentalCost:vm.list.carRentalCost,
        shouldAmount:vm.list.shouldAmount,
        overWorkTime:vm.list.overWorkTime,
        id: vm.list.id,
        problemType:vm.problemType,
        problemDes:vm.problemDes,
        auditSugg:vm.auditSugg,
        endMileage:vm.list.endMileage,
        mileageOfGPS:vm.list.mileageOfGPS,
        startMileage:vm.list.startMileage,
        parkCost:vm.list.parkCost,
        addOilTime:vm.list.addOilTime,
        dispatchDate:vm.list.dispatchDate,
        endTime:angular.element('.endTime').val(),
        startTime:angular.element('.startTime').val(),
    };
    finSer.finanSugg(data).then(function (response) {
        if(response.data.code == 0){
            $state.go('root.dispatchcar.finance.list[12]');
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
