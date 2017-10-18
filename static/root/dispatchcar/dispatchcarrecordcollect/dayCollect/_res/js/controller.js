var app = angular.module('dayCollectM', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('dayCollectCtrl',function($scope,cordcollect,toastr){
    $scope.collect = function(){
        var vm = $scope;
        var data={
            day: vm.day = angular.element('.day').val()
        };
        cordcollect.dayCollcet(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
});

