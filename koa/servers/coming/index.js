var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function() {
//设置导航权限
    this.infoNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/dispatchcarinfo/v1/setButtonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //导航权限
    this.infoSon = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/dispatchcarinfo/v1/sonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //出车记录
    this.infoPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/dispatchcarinfo/v1/guidePermission?guideAddStatus='+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //等待审核
    this.waitPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitaudit/v1/guidePermission?guideAddStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //财务核对
    this.finPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/finance/v1/guidePermission?guideAddStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //等待付款
    this.payPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/guidePermission?guideAddStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //已付款
    this.payedPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/payed/v1/guidePermission?guideAddStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //出车管理汇总
    this.cordPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchcarrecordcollect/v1/guidePermission?guideAddStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //出车汇总
    this.collectPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/guidePermission?guideAddStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //核对汇总
    this.checkPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/checkchangecar/v1/guidePermission?guideAddStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //出车有误
    this.wrongPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dipatchcarwrong/v1/guidePermission?guideAddStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //支付司机金额汇总
    this.payMoney = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitpay/v1/payMoney${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //付款
    this.payedAudit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/payed/v1/audit/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //汇总
    this.collectPayed = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/payed/v1/collectPayed${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };


    //出车记录列表
    this.infoList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 出车记录添加
    this.infoAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //出车记录编辑
    this.infoEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    this.infoAudit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/audit/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    ////根据id查询出车记录
    this.infoInfoId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/find/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    ////删除租车费用基本信息
    this.infoDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/delete${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //获取出车记录总条数
    this.getinfoTotal = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/count${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //冻结邮件汇总
    this.Congealinfo = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/freeze/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //解冻邮件汇总
    this.Thawinfo = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/unfreeze/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //查询所有司机信息和车牌号码
    this.infoDriver = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/find/driver`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //查询所有用车陪同人员
    this.infoEntry = function (argvs) {

        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/find/entry${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //项目签订与立项 上传附件
    this.infoUploadFile = function (argvs) {
        var options = {
            url: config()['rurl'] + `/dispatchcarinfo/v1/upload/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 出车记录 查看附件
    this.infoEnclosure = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/listFile/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //出车记录 删除文件
    this.delFile = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/deleteFile`,
            headers: {
                userToken: argvs.userToken
            },
            form: argvs.fields
        };
        return request(options);
    };
    //出车记录 导入
    this.infoImport = function (argvs) {
        var options = {
            url: config()['rurl'] + '/dispatchcarinfo/v1/leadExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //查询所有用车陪同人员
    this.infofIndoil = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/find/oil`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //查找所有项目名称
    this.infoProject = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/find/allProject`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 出车记录寄件
    this.infoMail = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/mail`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //等待审核列表
    this.waitList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitaudit/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //获取出车记录总条数
    this.getwaitTotal = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitaudit/v1/count${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 出车记录 查看附件
    this.waitEnclosure = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitaudit/v1/listFile/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 出车记录 审核详情
    this.waitAudit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitaudit/v1/findAudit${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    ////根据id查询出车记录
    this.waitAuditfind = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitaudit/v1/find/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 预算模块负责人核对意见
    this.waitAuditbudget = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/waitaudit/v1/budgetsugg`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    // 客户模块负责人核对意见
    this.waitAuditclient = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/waitaudit/v1/client`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 素养模块负责人核对意见
    this.waitAudithead = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/waitaudit/v1/head`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 项目负责人或任务下发人审核
    this.waitAuditsugg = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/waitaudit/v1/principalsugg`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //出车核对修改记录列表
    this.changeCar = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/checkchangecar/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //财务核对列表
    this.financeList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/finance/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //获取财务核对总条数
    this.getfinanceTotal = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/finance/v1/count${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //审核详情
    this.financeAudit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/finance/v1/audit/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 收到票据
    this.Receivefin = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/finance/v1/receive`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    // 出车记录 审核详情
    this.waitpayAudit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitpay/v1/audit/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    ////根据id查询出车记录
    this.finIdfind = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/finance/v1/find/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //核对分析
    this.finanSugg = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/finance/v1/financialSugg`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 查看附件
    this.finEnclosure = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/finance/v1/listFile/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 删除文件
    this.waitpayFile = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/waitpay/v1/deleteFile`,
            headers: {
                userToken: argvs.userToken
            },
            form: argvs.fields
        };
        return request(options);
    };


    //等待付款列表
    this.payList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitpay/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //核对分析
    this.payFundsugg = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitpay/v1/fundsugg${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //付款
    this.paythePay = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitpay/v1/pay/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    // 出车记录 查看附件
    this.payEnclosure = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/waitpay/v1/listFile/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    ////已付款记录列表
    this.payedList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/payed/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //出车记录 删除文件
    this.payedFile = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/payed/v1/deleteFile`,
            headers: {
                userToken: argvs.userToken
            },
            form: argvs.fields
        };
        return request(options);
    };

    // 上传附件
    this.payedUploadFile = function (argvs) {
        var options = {
            url: config()['rurl'] + `/payed/v1/upload${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //  查看附件
    this.payedEnclosure = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/payed/v1/listFile/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //出车核对修改记录列表
    this.changeList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/checkchangecar/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //出车情况汇总
    this.dispatchCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/collect/v1/dispatchCollect?type=' + encodeURIComponent(argvs.type),
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //司机出车情况汇总
    this.driverCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/collect/v1/driverCollect?type=' + encodeURIComponent(argvs.type),
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //出车有误列表
    this.wrongList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dipatchcarwrong/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 出车有误添加
    this.wrongAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/add`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //出车有误编辑
    this.wrongEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/dipatchcarwrong/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    ////根据id查询出车有误
    this.infowrongId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarinfo/v1/find/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //冻结出车有误
    this.Congealwrong = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/dipatchcarwrong/v1/freeze/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //解冻出车有误
    this.Thawwrong = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/dipatchcarwrong/v1/unfreeze/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    //出车有误 上传附件
    this.wrongUploadFile = function (argvs) {
        var options = {
            url: config()['rurl'] + `/dipatchcarwrong/v1/upload/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 出车有误 查看附件
    this.wrongEnclosure = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dipatchcarwrong/v1/listFile/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //出车有误 删除文件
    this.wrongFile = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/dipatchcarwrong/v1/deleteFile`,
            headers: {
                userToken: argvs.userToken
            },
            form: argvs.fields
        };
        return request(options);
    };
    //出车有误 导入
    this.wrongImport = function (argvs) {
        var options = {
            url: config()['rurl'] + '/dipatchcarwrong/v1/leadExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    // 出车有误寄件
    this.wrongMail = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/dipatchcarwrong/v1/mail`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    this.Modifywrong = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/checkchangecar/v1/modify${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    this.addFind = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/checkchangecar/v1/find/one?id='+argvs.id,
            headers: {
                userToken: argvs.userToken
            }
        };

        return request(options);
    };


//出车情况汇总
    this.dispatchCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/collect/v1/dispatchCollect?type=' + argvs.type,  //修改的
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
//司机出车情况汇总
    this.driverCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/collect/v1/driverCollect?type=' + argvs.type, //修改的
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //月汇总
    this.carCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/payed/v1/count/car${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
//日汇总
    this.patchDayCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/dispatchcarrecordcollect/v1/dayCollcet?day=' + argvs.day,  //修改的
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //周汇总
    this.patchweekCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarrecordcollect/v1/weekCollect${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //月汇总
    this.patchmonthCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dispatchcarrecordcollect/v1/monthCollect${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //累计汇总
    this.patchallCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/dispatchcarrecordcollect/v1/allCollect?day=' + argvs.day,  //修改的
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };


//权限设置
    this.listSetting = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers: {
                userToken: argvs.userToken
            }

        };
        return request(options);
    };
    this.countSetting = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + '/cuspermission/v1/edit',
            headers: {
                userToken: argvs.userToken
            },
            form: argvs
        };
        return request(options);
    };
    return this;
}


