var app = angular.module('infoModule', [{
    files:[
        "root/dispatchcar/dispatchcarinfo/_res/js/service.js",
    ]
}]);
app.controller('infoModuleCtrl',function ($scope,$state) {
    if ($state.current.url == '/dispatchcarinfo') {//默认加载列表
        $state.go('root.dispatchcar.dispatchcarinfo.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('infoMenuCtrl',function($scope,$state,$rootScope,$location,infoSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        $scope.idListd1 = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    //多导航折叠
    $scope.flag=true;
    $scope.noflag=false
    $scope.flagtoggon=function () {
        if($scope.flag){
            $scope.flag=false;
            $scope.noflag=true;
        } else{
            $scope.flag=true;
            $scope.noflag=false;
        }
    }
    //功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        infoSer.menuPermission(buttonName).then(function(response){
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
    $scope.congeal = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.dispatchcarinfo.list[12]',{id:$scope.idListd,name:'congeal',page:$scope.page});
            $scope.menuClass = 'congealMenu';

        }
    };
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.dispatchcarinfo.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';
        }
    };
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.dispatchcarinfo.upload[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.dispatchcarinfo.view[12]',{id:$scope.idListd,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idListd = ''
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu';
        $scope.idListd = ''
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.dispatchcarinfo.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.mail = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.dispatchcarinfo.mail[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'mailMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.audit = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.dispatchcarinfo.audit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'auditMenu'
        }
    };

});


