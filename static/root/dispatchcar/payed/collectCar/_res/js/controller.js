var app = angular.module('payedcollectCar', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('payedcollectCarCtrl',function($scope,payedSer,toastr,ipCookie){

    $scope.collect=function () {
        var vm=$scope;
        data={
            endTime:angular.element('.endTime').val(),
            startTime:angular.element('.startTime').val(),
            collectDispatchcarType:vm.collectDispatchcarType,
            collectDateType:vm.collectDateType,
        };
        payedSer.collectcarPayed(data).then(function(response){
            if(response.data.code == 0){
                $scope.list1 = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});

