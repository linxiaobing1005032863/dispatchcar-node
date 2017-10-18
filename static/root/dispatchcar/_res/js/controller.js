var app = angular.module('dispatchcarModule', [{
    files: ['root/dispatchcar/_res/js/server.js']
}]);
app.controller('rewardsCtrl', function ($scope,$state) {
    if ($state.current.url == '/dispatchcar') {//默认加载列表
        $state.go('root.dispatchcar.dispatchcarinfo');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('changeId1',function(event,msg) {
        $scope.$broadcast('getId1', msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,dispatchcarSer){
    $scope.navCla='dispatchcarinfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'dispatchcarinfo';
    $scope.navClass = function(name){
        $scope.navCla = name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
    // 前面下拉导航权限
    dispatchcarSer.navPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    // 设置导航权限
    dispatchcarSer.setPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    $scope.showsList = [
        {id:"1",item:"用车管理",
            menuList:
                [
                    {name2:"出车记录",msg:'dispatchcarinfo'},
                    {name3:"等待审核",msg:'waitaudit'},
                    {name4:"财务核对",msg:'finance'},
                    {name5:"等待付款",msg:'waitpay'},
                    {name6:"已付款记录",msg:'payed'},
                    {name7:"出车情况汇总",msg:'collect'},
                    {name8:"出车记录管理汇总",msg:'dispatchcarrecordcollect'},
                    {name9:"出车核对修改记录",msg:'checkchangecar'},
                    {name10:"出车单有误记录",msg:'dipatchcarwrong'},
                ],
            showIs:false},
        {id:"2",item:"设置",
            menuList:
                [{name11:'设置',msg:'setting'}]
            ,showIs:false},
        {id:"3",item:"版本信息",menuList:[{name12:'版本信息'},{name13:'帮助与解答'}],showIs:false},
    ];
    if(active){
        for(var i = 0; i < $scope.showsList.length; i++){
            var n = $scope.showsList[i].menuList;
            for(var j = 0; j < n.length; j++){
                var m = n[j].msg;
                if(m == active){
                    $scope.showsList[i].showIs = true;
                    break;
                }
            }
        }
    }
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };
});

app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();

                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});