var app = angular.module('quarterExportM', ['toastr']);
app.controller('quarterExportCtrl', function($scope){
    $scope.typeTO = '季度';
    //导出
    $scope.exportRe = function(){
        var vm=$scope;
        var obj = {
            typeTO:'QUARTER',
            collectType:$scope.collectType,
            quarter:vm.quarter,
        };
        window.open(`/collect/export/${encode(obj,true)}`);
    };

});
function encode(){
    var obj = arguments[0];
    var inventory = false;
    if (arguments[1]) {
        inventory = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
            str += (((inventory && count == 0) ? '?' : '&') + name + '=' + obj[name]);
            count++;
        }
    }
    return encodeURI(str);
}


