var app = angular.module('help', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.versionInfo.help", {
        url : "/help",
        views : {  
            "content@root.dispatchcar.versionInfo" : {
                templateUrl : "root/dispatchcar/versionInfo/help/_res/html/index.html",
                controller:"helpCtrl"
            },"menu@root.dispatchcar.versionInfo" : {
                templateUrl : "root/dispatchcar/versionInfo/help/_res/html/menu.html",
                controller:"helpMenuCtrl"
            }
        }
    }).state("root.dispatchcar.versionInfo.help.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.dispatchcar.versionInfo.help":{
                templateUrl : "root/dispatchcar/versionInfo/help/list/_res/html/index.html",
                controller:'helpListCtrl'
            }
        }
    }).state("root.dispatchcar.versionInfo.help.detail[12]",{
        url:"/detail[12]?id=&page=",
        views:{
            "content@root.dispatchcar.versionInfo.help":{
                templateUrl : "root/dispatchcar/versionInfo/help/detail/_res/html/index.html",
                controller:'helpDetailCtrl'
            }
        }
    }).state("root.dispatchcar.versionInfo.help.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.dispatchcar.versionInfo.help":{
                templateUrl : "root/dispatchcar/versionInfo/help/edit/_res/html/index.html",
                controller:'helpEditCtrl'
            }
        }
    }).state("root.dispatchcar.versionInfo.help.answer[12]",{
        url:"/answer[12]?id=&page=",
        views:{
            "content@root.dispatchcar.versionInfo.help":{
                templateUrl : "root/dispatchcar/versionInfo/help/answer/_res/html/index.html",
                controller:'answerCtrl'
            }
        }
    })
});