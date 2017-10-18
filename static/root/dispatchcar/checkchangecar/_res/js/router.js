var app = angular.module('payModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.checkchangecar", {
        url : "/checkchangecar",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/checkchangecar/_res/html/index.html",
                controller:"changeModuleCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/checkchangecar/_res/html/menu.html",
                controller:"changeMenuCtrl"
            }
        }
    }).state("root.dispatchcar.checkchangecar.list[12]",{
        url:"/list[12]?id=&name=&carUser=&number=",
        views:{
            "content@root.dispatchcar.checkchangecar":{
                templateUrl : "root/dispatchcar/checkchangecar/list/_res/html/index.html",
                controller:'changeListCtrl'
            }
        }
    }).state("root.dispatchcar.checkchangecar.modify[12]",{
        url:"/modify[12]?id=&page=",
        views:{
            "content@root.dispatchcar.checkchangecar":{
                templateUrl : "root/dispatchcar/checkchangecar/modify/_res/html/index.html",
                controller:'changeModifyCtrl'
            }
        }
    })
});
