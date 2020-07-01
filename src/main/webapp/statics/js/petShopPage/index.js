$(function(){
    //初始化销售金额
    getPetSalesMoneyAnalysis();
    //初始化用户访问量
    getUserBrowse();

    //金额
    //年度金额情况
    $("#petMoneyYear").click(function () {
        $(this).addClass('btn-info').siblings().removeClass('btn-info');
        $(this).siblings().addClass('btn-default')
        getPetSalesMoneyAnalysis(getSelectTime("year")+"-01-01",getSelectTime("year")+"-"+getSelectTime("month")+"-31");
    })
    //本月度金额情况
    $("#petMoneyQuarter").click(function () {
        $(this).addClass('btn-info').siblings().removeClass('btn-info');
        $(this).siblings().addClass('btn-default')
        getPetSalesMoneyAnalysis(getSelectTime("year")+"-"+getSelectTime("month")+"-01",getSelectTime("year")+"-"+getSelectTime("month")+"-"+(getSelectTime("date")+1)+"","day");
    })
    //查看更多
    $("#petMoneySelect").click(function () {
        loadPage("/petShop/petSalesAnalysis.html")
    })

    //用户访问量-按月
    $("#userMonth").click(function () {
        $(this).addClass('btn-info').siblings().removeClass('btn-info');
        $(this).siblings().addClass('btn-default')
        getUserBrowse(getSelectTime("year")+"-"+getSelectTime("month")+"-01",getSelectTime("year")+"-"+getSelectTime("month")+"-"+(getSelectTime("date")+1)+"","day");
    })
    //本月按天
    $("#userYear").click(function () {
        $(this).addClass('btn-info').siblings().removeClass('btn-info');
        $(this).siblings().addClass('btn-default')
        getUserBrowse();
    })
    //查看更多
    $("#userSelect").click(function () {
        loadPage("/petShop/petShopUserAnalysis.html")
    })

    //销售分析
    $(".petSalesAnalysis").click(function () {
        loadPage("/petShop/petSalesAnalysis.html");
    })
    //用户分析
    $(".petShopUserAnalysis").click(function () {
        loadPage("/petShop/petShopUserAnalysis.html");
    })
})


//获取用户访问量
function getUserBrowse(startTime,endTime,type) {
    $.ajax({
        type:"post",
        url:"/petShop/getPetShopUserAnalysis.html",
        dataType:"json",
        data:{
            startTime:isNull(startTime)?(getSelectTime("year")+"-01-01"):startTime,
            endTime:isNull(endTime)?(getSelectTime("year")+"-"+getSelectTime("month")+"-31"):endTime,
            type:isNull(type)?"month":type
        },
        success:function(data){
            var utils = Samples.utils;

            $('#petShopUserVisitLineChart').remove();
            $('#petShopUserVisitLine').append('<canvas id="petShopUserVisitLineChart"></canvas>');
            //销售金额数据条形图
            var chart = new Chart('petShopUserVisitLineChart', {
                type: 'line',
                data: {
                    labels: data.petShopBrowseMap.dataName,
                    datasets:  [{
                        label: '用户访问量',
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data:data.petShopBrowseMap.total,
                        fill: false,
                        hoverBackgroundColor: window.chartColors.yellow,
                        radius: 10,
                        pointStyle: 'rect',
                        hoverRadius: 15,
                    }]
                },
                options: {
                    legend: false,
                    /*tooltips: true,*/
                    responsive: true,
                    title: {
                        display: true,
                        text: ""
                    },legend: {
                        position: 'top',
                    },
                }
            });
        }
    })
}


//获取商品销售金额情况
function getPetSalesMoneyAnalysis(startTime,endTime,type) {
    //获取商品销售金额情况
    $.ajax({
        type:"post",
        url:"/petShop/getPetSalesMoneyAnalysis.html",
        dataType:"json",
        data:{
            startTime:isNull(startTime)?(getSelectTime("year")+"-01-01"):startTime,
            endTime:isNull(endTime)?(getSelectTime("year")+"-"+getSelectTime("month")+"-31"):endTime,
            selectType:isNull(type)?"month":type
        },
        success:function(data){
            $('#petShopMoneyLineChart').remove();
            $('#petShopMoneyLine').append('<canvas id="petShopMoneyLineChart"></canvas>');
            //销售金额数据条形图
            var chart = new Chart('petShopMoneyLineChart', {
                type: 'line',
                data: {
                    labels: data.petMoneyMap.dataName,
                    datasets:  [{
                        label: '宠物',
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data:data.petMoneyMap.total,
                        fill: false,
                        hoverBackgroundColor: window.chartColors.red,
                        radius: 10,
                        pointStyle: 'rect',
                        hoverRadius: 15,
                    },{
                        label: '食品',
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data:data.foodMoneyMap.total,
                        fill: false,
                        hoverBackgroundColor: window.chartColors.blue,
                        radius: 10,
                        pointStyle: 'circle',
                        hoverRadius: 15,
                    },{
                        label: '服务',
                        backgroundColor: window.chartColors.yellow,
                        borderColor: window.chartColors.yellow,
                        data:data.serviceMoneyMap.total,
                        fill: false,
                        hoverBackgroundColor: window.chartColors.yellow,
                        radius: 10,
                        pointStyle: 'rect',
                        hoverRadius: 15,
                    },{
                        label: '周边商品',
                        backgroundColor: window.chartColors.green,
                        borderColor: window.chartColors.green,
                        data:data.peripheryMoneyMap.total,
                        fill: false,
                        hoverBackgroundColor: window.chartColors.green,
                        radius: 10,
                        pointStyle: 'rect',
                        hoverRadius: 15,
                    }]
                },
                options: {
                    legend: false,
                    /*tooltips: true,*/
                    responsive: true,
                    title: {
                        display: true,
                        text: ""
                    },legend: {
                        position: 'top',
                    },
                }
            });
        }
    })
}

//获取时间
function getNowTime() {
    //判断是否在前面加0
    function getNow(s) {
        return s < 10 ? '0' + s: s;
    }
    var myDate = new Date();
    var year=myDate.getFullYear();        //获取当前年
    var month=myDate.getMonth()+1;   //获取当前月
    var date=myDate.getDate();            //获取当前日

    var h=myDate.getHours();              //获取当前小时数(0-23)
    var m=myDate.getMinutes();          //获取当前分钟数(0-59)
    var s=myDate.getSeconds();

    var now=year+'-'+getNow(month)+"-"+getNow(date)+" "+getNow(h)+':'+getNow(m)+":"+getNow(s);
    return now;
}
//获取年月日
function getSelectTime(value) {
    //判断是否在前面加0
    function getNow(s) {
        return s < 10 ? '0' + s: s;
    }
    var myDate = new Date();
    var year=myDate.getFullYear();        //获取当前年
    var month=myDate.getMonth()+1;   //获取当前月
    var date=myDate.getDate();            //获取当前日

    if(value=="year"){
        return year;
    }else if(value=="month"){
        return month;
    }else {
        return date;
    }
}

function getMonthQuarter(value) {
    var nowDate = new Date();
    var beginDate = null;
    var endDate = null;
    if(nowDate.getMonth()+1 <= 3){
        beginDate =  nowDate.getFullYear() + "-01-01";
        endDate = nowDate.getFullYear() + "-03-31";
    }else if(nowDate.getMonth()+1 > 3 && nowDate.getMonth()+1 <= 6){
        beginDate =  nowDate.getFullYear() + "-04-01";
        endDate = nowDate.getFullYear() + "-06-30";
    }else if(nowDate.getMonth()+1 > 6 && nowDate.getMonth()+1 <= 9){
        beginDate =  nowDate.getFullYear() + "-07-01";
        endDate = nowDate.getFullYear() + "-09-30";
    }else if(nowDate.getMonth()+1 > 9 && nowDate.getMonth()+1 <= 12){
        beginDate =  nowDate.getFullYear() + "-10-01";
        endDate = nowDate.getFullYear() + "-12-31";
    }
    if(value==1){
        return beginDate;
    }else {
        return endDate;
    }
}