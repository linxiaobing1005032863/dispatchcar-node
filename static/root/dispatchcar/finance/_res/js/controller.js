var app = angular.module('financeModule', [{
    files:[
        "root/dispatchcar/finance/_res/js/service.js",
    ]
}]);
app.controller('financeModuleCtrl',function ($scope,$state) {
    if ($state.current.url == '/finance') {//默认加载列表
        $state.go('root.dispatchcar.finance.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('financeMenuCtrl',function($scope,$state,$rootScope,$location,finSer){
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
    //功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        finSer.menuPermission(buttonName).then(function(response){
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
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.finance.view[12]',{id:$scope.idListd,view:1,page:$scope.page});
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
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.principalsugg = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.finance.principalsugg[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'principalsuggMenu'
        }
    };
    $scope.changecar = function(){
        $scope.menuClass = 'changecarMenu';
        $scope.idListd = ''
    };
    $scope.audit = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.finance.audit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'auditMenu'
        }
    };
    $scope.receive = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.finance.receive[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'receiveMenu'
        }
    };

   /* $scope.addReward = function(){
        $scope.menuClass = 'addRewardMenu';
        $scope.idListd = '';
        $state.go('root.companyrewards.bonusbudget.addReward[12]',{id:$scope.idListd,page:$scope.page});
    };*/
   /* $scope.seeReward = function(){
        $scope.menuClass = 'seeRewardMenu';
        $scope.idListd = '';
        $state.go('root.companyrewards.bonusbudget.seeReward[12]',{id:$scope.idListd,page:$scope.page});
    };*/


});


