var app = angular.module('changeModule', [{
    files:[
        "root/dispatchcar/dispatchcarrecordcollect/_res/js/service.js",
    ]
}]);
app.controller('disCollectCtrl',function ($scope,$state) {
    if ($state.current.url == '/dispatchcarrecordcollect') {//默认加载列表
        $state.go('root.dispatchcar.dispatchcarrecordcollect.dayCollectCtrl[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('disCollCtrl',function($scope,$state,$rootScope,$location,cordcollect){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='dayCollect[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'dayCollectMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        $scope.idListd1 = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    //功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        cordcollect.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
        $scope.idListd = msg;
    });
    $scope.$on("getId1", function(event, msg){
        $scope.idListd1 = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idListd = ''
    };
    $scope.weekCollect = function(){
        $scope.menuClass = 'weekCollectMenu';
        $scope.idListd = ''
    };
    $scope.allCollect = function(){
        $scope.menuClass = 'allCollectMenu';
        $scope.idListd = ''
    };
    $scope.dayCollect = function(){
        $scope.menuClass = 'dayCollectMenu';
        $scope.idListd = ''
    };
    $scope.monthCollect = function(){
        $scope.menuClass = 'monthCollectMenu';
        $scope.idListd = ''
    };
 


});


