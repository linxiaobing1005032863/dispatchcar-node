var app = angular.module('monthExportM', ['toastr']);
app.controller('monthExportCtrl', function($scope){
    $scope.typeTO = '月';
    //导出
    $scope.exportRe = function(){
        var obj = {
            typeTO:'MONTH',
            collectType:$scope.collectType,
            month:angular.element('.month').val()
        };
        window.open(`/collect/export/${encode(obj,true)}`);
    }
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


