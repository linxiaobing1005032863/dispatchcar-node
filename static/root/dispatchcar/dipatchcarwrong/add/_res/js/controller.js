var app = angular.module('infoAdd', ['toastr','ipCookie']);
app.controller('infoAddCtrl', function($scope, wrongSer,$state,toastr,ipCookie,$location){
    //查询所有司机信息和车牌号码
    wrongSer.infoDriver().then(function(response){
        if(response.data.code == 0){
            $scope.infoDri = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //查询所有用车陪同人员
    wrongSer.infoEntry().then(function(response){
        if(response.data.code == 0){
            $scope.infoEnt = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    ////查找所有项目名称
    wrongSer.infoProject().then(function(response){
        if(response.data.code == 0){
            $scope.infoPro = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //查询所有用车陪同人员
    wrongSer.infoOil().then(function(response){
        if(response.data.code == 0){
            $scope.Oil = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    //新增出车记录
    $scope.infoAddFun = function(){
        var vm = $scope;
        var data = {
            accompanyUser :vm.accompanyUser,
            addOil : vm.addOil,
            addOilAmount : vm.addOilAmount,
            aircondition :vm.aircondition,
            carNumber : vm.carNumber,
            dispatchReason : vm.dispatchReason,
            downtown:vm.downtown,
            driver : vm.driver,
            evaluatedriver : vm.evaluatedriver,
            finishTaskAmount : vm.finishTaskAmount,
            group : vm.group,
            mileageOfGPS :vm.mileageOfGPS,
            oilCardBalance : vm.oilCardBalance,
            oilPrice : vm.oilPrice,
            oweOilExplain : vm.oweOilExplain,
            parkCost : vm.parkCost,
            planTaskAmount : vm.planTaskAmount,
            principal:vm.principal,
            project:vm.project,
            projectApproval:vm.projectApproval,
            roadCost:vm.roadCost,
            siesta:vm.siesta,
            startMileage:vm.startMileage,
            userNumber:vm.userNumber,
            area:vm.area,
            acctype:vm.acctype,
            oilCardNumber:vm.oilCardNumber,
            addOilExplain:vm.addOilExplain,
            carUser:vm.carUser,
            carRentalCost:vm.carRentalCost,
            shouldAmount:vm.shouldAmount,
            endMileage:vm.endMileage,
            overWorkTime:vm.overWorkTime,
            addOilTime:angular.element('.addOilTime').val(),
            dispatchDate:angular.element('.dispatchDate').val(),
            endTime:angular.element('.endTime').val(),
            startTime:angular.element('.startTime').val(),
        };


//addOilAmount:
        infoSer.Addinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.dispatchcar.dispatchcarinfo.list[12]');
                toastr.success("客户信息已成功添加", '温馨提示');
            }
        });

    };
});





