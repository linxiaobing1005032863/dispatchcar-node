var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.setting", {
        url : "/setting",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.dispatchcar.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.dispatchcar.setting":{
                templateUrl : "root/dispatchcar/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.dispatchcar.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.dispatchcar.setting":{
                templateUrl : "root/dispatchcar/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});