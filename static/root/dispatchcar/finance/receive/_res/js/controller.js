var app = angular.module('finReceive', ['toastr']);
app.controller('finReceiveCtrl', function($scope, finSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //获取ID
    finSer.findfinId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //新增出车记录
    $scope.infoEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.edit.id,
            isCorrect :vm.edit.isCorrect,
        };
        finSer.Receivefin(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.dispatchcar.finance.list[12]');
                toastr.success( "收到票据", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});
