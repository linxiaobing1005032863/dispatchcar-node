var app = angular.module('changeModify', ['toastr']);
app.controller('changeModifyCtrl', function($scope, changeSer,$stateParams,$state,toastr){
    var infoAudit ={id: $stateParams.id}
    //获取ID
    changeSer.findinfoId(infoAudit).then(function(response){
        if(response.data.code==0){
            $scope.list = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
$scope.infoEditFun = function() {
    var vm = $scope;
    var data = {
        id: vm.list.id,
        ifSolve: vm.ifSolve,
        solution: vm.solution,
        solutionTime:angular.element('.solutionTime').val(),
    };
    changeSer.Editmodify(data).then(function (response) {
        if(response.data.code == 0){
            $state.go('root.dispatchcar.checkchangecar.list[12]');
            toastr.success( "审核成功", '温馨提示');
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
};
});
