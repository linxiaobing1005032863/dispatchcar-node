var app = angular.module('weekExportM', ['toastr']);
app.controller('weekExportCtrl', function($scope){
    $scope.typeTO = '周';
    //导出
    $scope.exportRe = function(){
        var obj = {
            typeTO:'WEEK',
            collectType:$scope.collectType,
            weekDay:angular.element('.weekDay').val()
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


