var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
var koaBody = require('koa-body');
var request = require('request-promise');
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fileType = require(path.resolve('plugins/fileType.js'));
module.exports = function(){
    var router = new Router();
    //列表 节日礼品
    router.get('/dispatchcarinfo/setButtonPermission', function*(){ //设置导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().infoNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/dispatchcarinfo/sonPermission', function*(){ //导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().infoSon(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/dispatchcarinfo/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().infoPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/waitaudit/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().waitPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/finance/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().finPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/waitpay/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().payPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/payed/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().payedPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/dispatchcarrecordcollect/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().cordPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/collect/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().collectPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/checkchangecar/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().checkPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/dipatchcarwrong/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().wrongPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/dispatchcarinfo/list', function*(){ //出车记录列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().infoList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dispatchcarinfo/add', function*(){//出车记录添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().infoAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dispatchcarinfo/edit', function*(){//出车记录编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().infoEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/find', function*(){//根据id查询出车记录
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().infoInfoId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/audit', function*(){//根据id查询出车记录
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().infoAudit(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/delete', function*(){//删除出车记录
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().infoDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/count', function*(){//获取出车记录总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getinfoTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/freeze', function*(){//冻结邮件汇总数据
        var $self = this;
        var congealData = $self.request.query;
        congealData.userToken = $self.cookies.get('token');
        yield (server().Congealinfo(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/unfreeze', function*(){//解冻邮件汇总数据
        var $self = this;
        var thawData = $self.request.query;
        thawData.userToken = $self.cookies.get('token');
        yield (server().Thawinfo(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/driver', function*(){ //查询所有司机信息和车牌号码
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().infoDriver(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/entry', function*(){ //查询所有用车陪同人员
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().infoEntry(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dispatchcarinfo/upload', koaBody({multipart:true}),function *(next) {//上传文件 出车记录
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().infoUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }) .get('/dispatchcarinfo/listFile', function*(){ //查看附件 项目签收与立项
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().infoEnclosure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dispatchcarinfo/deleteFile', koaBody({multipart:true}), function*(){//合同签订与立项 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().delFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/download', function*(){//下载文件 项目签收与立项
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/dispatchcarinfo/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/dispatchcarinfo/import', koaBody({multipart:true}),function *(next) {//导入 项目签收与立项
        var $self = this;
        var fileData = $self.request.body;
        fileData.userToken = $self.cookies.get("token");
        yield (server().infoImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/templateExport', function*(){//导入模板下载 项目签收与立项
        var $self = this;
        var fileName = '项目签订与立项导入模板.xlsx';
        yield (fetch(config()['rurl']+`/dispatchcarinfo/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/dispatchcarinfo/exportExcel', function*(){//导出 项目签收与立项
        var $self = this;
        var count = $self.request.query;
        var fileName = '项目签订与立项.xlsx';
        yield (fetch(config()['rurl']+`/dispatchcarinfo/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/dispatchcarinfo/mail', function*(){//出车记录寄件
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().infoMail(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/oil', function*(){ //查询所有用车陪同人员
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().infofIndoil(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarinfo/allProject', function*(){ //查找所有项目名称
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().infoProject(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
        .get('/waitaudit/list', function*(){ //等待审核列表
            var $self = this;
            var page = $self.request.query;
            page.userToken = $self.cookies.get('token');
            yield (server().waitList(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        }).get('/waitaudit/count', function*(){//获取出车记录总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getwaitTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }) .get('/waitaudit/listFile', function*(){ //查看附件 出车记录
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().waitEnclosure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitaudit/download', function*(){//下载文件 出车记录
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/waitaudit/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/waitaudit/findAudit', function*(){//审核详情
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().waitAudit(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitaudit/find', function*(){//根据id查询出车记录
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().waitAuditfind(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/waitaudit/budgetsugg', function*(){//出车记录添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().waitAuditbudget(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/waitaudit/client', function*(){// 客户模块负责人核对意见
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().waitAuditclient(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/waitaudit/head', function*(){// 素养模块负责人核对意见
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().waitAudithead(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/waitaudit/principalsugg', function*(){//// 项目负责人或任务下发人审核
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().waitAuditsugg(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/checkchangecar/list', function*(){ //出车核对修改记录列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().changeCar(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payed/audit', function*(){//审核详情
        var $self = this;
        var data = $self.request.query;
        data.userToken = $self.cookies.get('token');
        yield (server().payedAudit(data)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }) .get('/payed/collectPayed', function*(){//汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().collectPayed(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }) .get('/waitpay/payMoney', function*(){//支付司机金额汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().payMoney(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/exportExcel', function*(){//导出
        var $self = this;
        var count = $self.request.query;
        var fileName = '项目签订与立项.xlsx';
        yield (fetch(config()['rurl']+`/waitpay/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/waitpay/deleteFile', koaBody({multipart:true}), function*(){// 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().waitpayFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })




        .get('/finance/list', function*(){ //财务核对列表
            var $self = this;
            var page = $self.request.query;
            page.userToken = $self.cookies.get('token');
            yield (server().financeList(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        }).get('/finance/count', function*(){//获取财务核对总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getfinanceTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/finance/audit', function*(){//审核详情
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().financeAudit(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/finance/receive', function*(){// 收到票据
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().Receivefin(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/finance/find', function*(){//根据id查询出车记录
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().finIdfind(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/finance/financialSugg', function*(){//// 项目负责人或任务下发人审核
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().finanSugg(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/finance/listFile', function*(){ //查看附件 出车记录
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().finEnclosure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/finance/download', function*(){//下载文件 出车记录
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/finance/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/checkchangecar/find/one', function*(){//根据id查询单个核对修改记录
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().addFind(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/checkchangecar/one', function*(){ //等待付款列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().finEnclosure(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/list', function*(){ //等待付款列表
            var $self = this;
            var page = $self.request.query;
            page.userToken = $self.cookies.get('token');
            yield (server().payList(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        }).get('/waitpay/fundsugg', function*(){ //核对分析
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().payFundsugg(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/pay', function*(){ //核对分析
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().paythePay(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/listFile', function*(){ //查看附件
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().payEnclosure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitpay/download', function*(){//下载文件 
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/waitpay/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/waitpay/audit', function*(){//审核详情
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().waitpayAudit(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payed/list', function*(){ //已付款记录列表
            var $self = this;
            var page = $self.request.query;
            page.userToken = $self.cookies.get('token');
            yield (server().payedList(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        }).get('/payed/download', function*(){//下载文件 出车记录
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/payed/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/payed/exportExcel', function*(){//导出
        var $self = this;
        var count = $self.request.query;
        var fileName = '项目签订与立项.xlsx';
        yield (fetch(config()['rurl']+`/payed/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/payed/upload', koaBody({multipart:true}),function *(next) {//上传文件 出车记录
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().infoUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payed/listFile', function*(){ //查看附件 
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().waitEnclosure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/waitaudit/download', function*(){//下载文件
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/waitaudit/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/payed/deleteFile', koaBody({multipart:true}), function*(){// 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().payedFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
  .get('/checkchangecar/list', function*(){ //出车核对修改记录列表
            var $self = this;
            var page = $self.request.query;
            page.userToken = $self.cookies.get('token');
            yield (server().changeList(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        }).get('/checkchangecar/modify', function*(){//问题解决
        var $self = this;
        var congealData = $self.request.query;
        congealData.userToken = $self.cookies.get('token');
        yield (server().Modifywrong(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dipatchcarwrong/list', function*(){ //出车有误记录列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().wrongList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dispatchcarinfo/add', function*(){//出车有误添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().wrongAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dipatchcarwrong/edit', function*(){//出车有误编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().wrongEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dipatchcarwrong/freeze', function*(){//冻结出车有误数据
        var $self = this;
        var congealData = $self.request.query;
        congealData.userToken = $self.cookies.get('token');
        yield (server().Congealwrong(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dipatchcarwrong/unfreeze', function*(){//解冻出车有误数据
        var $self = this;
        var thawData = $self.request.query;
        thawData.userToken = $self.cookies.get('token');
        yield (server().Thawwrong(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dipatchcarwrong/upload', koaBody({multipart:true}),function *(next) {//上传文件 出车有误
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.userToken = $self.cookies.get("token");
        yield (server().wrongUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }) .get('/dipatchcarwrong/listFile', function*(){ //查看附件 出车有误
        var $self = this;
        var enData = $self.request.query;
        enData.userToken = $self.cookies.get('token');
        yield (server().wrongEnclosure(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dipatchcarwrong/deleteFile', koaBody({multipart:true}), function*(){//出车有误 删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().wrongFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dipatchcarwrong/download', function*(){//下载文件 出车有误
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/dipatchcarwrong/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/dipatchcarwrong/import', koaBody({multipart:true}),function *(next) {//导入 出车有误
        var $self = this;
        var fileData = $self.request.body;
        fileData.userToken = $self.cookies.get("token");
        yield (server().wrongImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dipatchcarwrong/templateExport', function*(){//导入模板下载 出车有误
        var $self = this;
        var fileName = '项目签订与立项导入模板.xlsx';
        yield (fetch(config()['rurl']+`/dispatchcarinfo/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/dipatchcarwrong/exportExcel', function*(){//导出 出车有误
        var $self = this;
        var count = $self.request.query;
        var fileName = '项目签订与立项.xlsx';
        yield (fetch(config()['rurl']+`/dipatchcarwrong/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/dipatchcarwrong/mail', function*(){//出车有误寄件
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().wrongMail(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/collect/dispatchCollect', function*(){//出车情况汇总    //出车情况汇总
            var $self = this;
            var count = $self.request.query;
            count.userToken = $self.cookies.get('token');
            yield (server().dispatchCollect(count)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        }).get('/payed/count/car', function*(){//司机出车情况汇总   //出车情况汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().carCollect(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/collect/driverCollect', function*(){//司机出车情况汇总   //出车情况汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().driverCollect(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarrecordcollect/dayCollcet', function*(){//司机出车情况汇总   //出车情况汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().patchDayCollect(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarrecordcollect/weekCollect', function*(){//周汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().patchweekCollect(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarrecordcollect/monthCollect', function*(){//月汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().patchmonthCollect(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dispatchcarrecordcollect/allCollect', function*(){//累计汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().patchallCollect(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/collect/export', function*(){//导出   //新加入修改的
        var $self = this;
        var data = $self.request.query;
        console.log(data)
        var fileName = "汇总表.xlsx";
        yield (fetch(config()['rurl']+`/collect/v1/exportExcel${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
    }).get('/listSetting', function*(){
        var $self = this;
        var setting = this.request.query;
        setting.userToken = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function*(){
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function*(){
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function*(){
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function*(){
        var $self = this;
        var editSet = $self.request.body;
        editSet.userToken = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
    return router;
};


