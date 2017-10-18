var app = angular.module('waitModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.waitaudit", {
        url : "/waitaudit",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/waitaudit/_res/html/index.html",
                controller:"waitModuleCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/waitaudit/_res/html/menu.html",
                controller:"waitMenuCtrl"
            }
        }
    }).state("root.dispatchcar.waitaudit.list[12]",{
        url:"/list[12]?id=&name=&carUser=&number=",
        views:{
            "content@root.dispatchcar.waitaudit":{
                templateUrl : "root/dispatchcar/waitaudit/list/_res/html/index.html",
                controller:'waitListCtrl'
            }
        }
    }).state("root.dispatchcar.waitaudit.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.dispatchcar.waitaudit":{
                templateUrl : "root/dispatchcar/waitaudit/view/_res/html/index.html",
                controller:'waitViewCtrl'
            }
        }
    }).state("root.dispatchcar.waitaudit.principalsugg[12]",{
        url:"/principalsugg[12]?id=&page=",
        views:{
            "content@root.dispatchcar.waitaudit":{
                templateUrl : "root/dispatchcar/waitaudit/principalsugg/_res/html/index.html",
                controller:'waitPrincipalsuggCtrl'
            }
        }
    }).state("root.dispatchcar.waitaudit.changecar[12]",{
        url:"/changecar[12]",
        views:{
            "content@root.dispatchcar.waitaudit":{
                templateUrl : "root/dispatchcar/waitaudit/changecar/_res/html/index.html",
                controller:'waitchangecarCtrl'
            }
        }
    }).state("root.dispatchcar.waitaudit.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.dispatchcar.waitaudit":{
                templateUrl : "root/dispatchcar/waitaudit/audit/_res/html/index.html",
                controller:'waitAuditCtrl'
            }
        }
    }).state("root.dispatchcar.waitaudit.budget[12]",{
        url:"/budget[12]?id=&page=",
        views:{
            "content@root.dispatchcar.waitaudit":{
                templateUrl : "root/dispatchcar/waitaudit/budget/_res/html/index.html",
                controller:'waitBudgetCtrl'
            }
        }
    })
});
