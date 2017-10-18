var app = angular.module('payAudit', ['toastr']);
app.controller('payAuditCtrl', function($scope, paySer,$stateParams,$state,toastr){
    var infoAudit ={id: $stateParams.id}
    //获取ID
    paySer.payAudit(infoAudit).then(function(response){
        if(response.data.code==0){
            $scope.lists = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
});
app.filter('pay',function(){
    return function(val){
        var result;
        switch(val){
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }
});
