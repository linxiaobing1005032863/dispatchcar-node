var app = angular.module('infoEdit', ['toastr']);
app.controller('infoEditCtrl', function($scope, infoSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //获取ID
    infoSer.findinfoId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //查询所有司机信息和车牌号码
    infoSer.infoDriver().then(function(response){
        if(response.data.code == 0){
            $scope.infoDri = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //查询所有用车陪同人员
    infoSer.infoEntry().then(function(response){
        if(response.data.code == 0){
            $scope.infoEnt = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    ////查找所有项目名称
    infoSer.infoProject().then(function(response){
        if(response.data.code == 0){
            $scope.infoPro = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //查询所有用车陪同人员
    infoSer.infoOil().then(function(response){
        if(response.data.code == 0){
            $scope.Oil = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    //新增出车记录
    $scope.infoEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.edit.id,
            accompanyUser :vm.edit.accompanyUser,
            addOil : vm.edit.addOil,
            addOilAmount : vm.edit.addOilAmount,
            aircondition :vm.edit.aircondition,
            carNumber : vm.edit.carNumber,
            dispatchReason : vm.edit.dispatchReason,
            downtown:vm.edit.downtown,
            driver : vm.edit.driver,
            evaluatedriver : vm.edit.evaluatedriver,
            finishTaskAmount : vm.edit.finishTaskAmount,
            group : vm.edit.group,
            mileageOfGPS :vm.edit.mileageOfGPS,
            oilCardBalance : vm.edit.oilCardBalance,
            oilPrice : vm.edit.oilPrice,
            oweOilExplain : vm.edit.oweOilExplain,
            parkCost : vm.edit.parkCost,
            planTaskAmount : vm.edit.planTaskAmount,
            principal:vm.edit.principal,
            project:vm.edit.project,
            projectApproval:vm.edit.projectApproval,
            roadCost:vm.edit.roadCost,
            siesta:vm.edit.siesta,
            startMileage:vm.edit.startMileage,
            userNumber:vm.edit.userNumber,
            area:vm.edit.area,
            acctype:vm.edit.acctype,
            oilCardNumber:vm.edit.oilCardNumber,
            addOilExplain:vm.edit.addOilExplain,
            carUser:vm.edit.carUser,
            carRentalCost:vm.edit.carRentalCost,
            shouldAmount:vm.edit.shouldAmount,
            endMileage:vm.edit.endMileage,
            overWorkTime:vm.edit.overWorkTime,
            addOilTime:angular.element('.addOilTime').val(),
            dispatchDate:angular.element('.dispatchDate').val(),
            endTime:angular.element('.endTime').val(),
            startTime:angular.element('.startTime').val(),
        };
        infoSer.Editinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recommendrequire.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});
