var app = angular.module('wrongMail', ['toastr','ipCookie']);
app.controller('wrongMailCtrl', function($scope, wrongSer,$state,toastr,$stateParams,ipCookie,$location){
    var infoEdit ={id: $stateParams.id}
    //获取ID
    wrongSer.findwrongId(infoEdit).then(function(response){

        if(response.data.code==0){
            $scope.edit = response.data.data;
            console.log($scope.edit)
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //新增出车记录
    $scope.infoMailFun = function(){
        var vm = $scope;
        var data = {
            totalParking : vm.edit.totalParking,
            ifSendArchiveAl : vm.edit.ifSendArchiveAl,
            ifSendReimbursementAl :vm.edit.ifSendReimbursementAl,
            tatalReceipts : vm.edit.tatalReceipts,
            ifSendAddOilReceipts : vm.edit.ifSendAddOilReceipts,
            id:vm.edit.id,
            sendDate:angular.element('.sendDate').val(),

        };


//addOilAmount:
        wrongSer.Mailwrong(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.dispatchcar.dipatchcarwrong.list[12]');
                toastr.success("客户信息已成功寄送", '温馨提示');
            }
        });

    };
});





