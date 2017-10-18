
var app = angular.module('dispatchCollect', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('dispatchCollectCtrl',function($scope,collectSer,toastr,ipCookie){
    $scope.collect=function () {
        var data={
            type:$scope.type
        };
        collectSer.dispatchCollect(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});

