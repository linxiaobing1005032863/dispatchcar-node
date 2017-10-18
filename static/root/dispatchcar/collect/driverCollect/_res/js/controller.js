
var app = angular.module('driverCollect', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('driverCollectCtrl',function($scope,collectSer,toastr,ipCookie){
    $scope.collect=function () {
        var data={
            type:$scope.type
        };
        collectSer.driverCollect(data).then(function(response){
            if(response.data.code == 0){
                $scope.driverCollects = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});

