var app = angular.module('financeModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.finance", {
        url : "/finance",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/finance/_res/html/index.html",
                controller:"financeModuleCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/finance/_res/html/menu.html",
                controller:"financeMenuCtrl"
            }
        }
    }).state("root.dispatchcar.finance.list[12]",{
        url:"/list[12]?id=&name=&carUser=&number=",
        views:{
            "content@root.dispatchcar.finance":{
                templateUrl : "root/dispatchcar/finance/list/_res/html/index.html",
                controller:'finListCtrl'
            }
        }
    }).state("root.dispatchcar.finance.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.dispatchcar.finance":{
                templateUrl : "root/dispatchcar/finance/audit/_res/html/index.html",
                controller:'finAuditCtrl'
            }
        }
    }).state("root.dispatchcar.finance.receive[12]",{
        url:"/receive[12]?id=&page=",
        views:{
            "content@root.dispatchcar.finance":{
                templateUrl : "root/dispatchcar/finance/receive/_res/html/index.html",
                controller:'finReceiveCtrl'
            }
        }
    }).state("root.dispatchcar.finance.principalsugg[12]",{
        url:"/principalsugg[12]?id=&page=",
        views:{
            "content@root.dispatchcar.finance":{
                templateUrl : "root/dispatchcar/finance/principalsugg/_res/html/index.html",
                controller:'finPrincipalsuggCtrl'
            }
        }
    }).state("root.dispatchcar.finance.changecar[12]",{
        url:"/changecar[12]",
        views:{
            "content@root.dispatchcar.finance":{
                templateUrl : "root/dispatchcar/finance/changecar/_res/html/index.html",
                controller:'finchangecarCtrl'
            }
        }
    }).state("root.dispatchcar.finance.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.dispatchcar.finance":{
                templateUrl : "root/dispatchcar/finance/view/_res/html/index.html",
                controller:'finViewCtrl'
            }
        }
    }).state("root.dispatchcar.finance.export[12]",{
        url:"/export[12]",
        views:{
            "content@root.dispatchcar.finance":{
                templateUrl : "root/dispatchcar/finance/export/_res/html/index.html",
                controller:'finExportCtrl'
            }
        }
    }).state("root.dispatchcar.finance.import[12]",{
        url:"/import[12]",
        views:{
            "content@root.dispatchcar.finance":{
                templateUrl : "root/dispatchcar/finance/import/_res/html/index.html",
                controller:'finimportCtrl'
            }
        }
    }).state("root.dispatchcar.finance.mail[12]",{
        url:"/mail[12]",
        views:{
            "content@root.dispatchcar.finance":{
                templateUrl : "root/dispatchcar/finance/mail/_res/html/index.html",
                controller:'finMailCtrl'
            }
        }
    })
});
