var app = angular.module('payedcoller', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('payedcollerCtrl',function($scope,payedSer,toastr,ipCookie){

    $scope.collect=function () {
        var vm=$scope;
        data={
            endTime:angular.element('.endTime').val(),
            startTime:angular.element('.startTime').val(),
        };
        payedSer.collectPayed(data).then(function(response){
            if(response.data.code == 0){
                $scope.list1 = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});

