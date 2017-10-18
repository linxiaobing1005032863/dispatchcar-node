
var app = angular.module('payMoney', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('payMoneyCtrl',function($scope,paySer,toastr,ipCookie){
    $scope.collect=function () {
        var vm=$scope;
        var data={
            startTime: vm.startTime = angular.element('.startTime').val(),
            endTime: vm.startTime = angular.element('.endTime').val()
        };
        paySer.payMoney(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});

