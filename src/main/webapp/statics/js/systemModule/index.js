$(function(){
   //初始化用户新增情况
    getNewUser();
    //初始化宠物店申请情况
    getNewShop();

    //用户新增情况
    $("#shopYear").click(function () {
        $(this).addClass('btn-info').siblings().removeClass('btn-info');
        $(this).siblings().addClass('btn-default')
        getNewUser(getSelectTime("year")+"-01-01",getSelectTime("year")+"-"+getSelectTime("month")+"-31");
    })
    //本月度金额情况
    $("#shopMonth").click(function () {
        $(this).addClass('btn-info').siblings().removeClass('btn-info');
        $(this).siblings().addClass('btn-default')
        getNewUser(getSelectTime("year")+"-"+getSelectTime("month")+"-01",getSelectTime("year")+"-"+getSelectTime("month")+"-"+(getSelectTime("date")+1)+"","day");
    })
    //查看更多
    $("#userSelect").click(function () {
        loadPage("/system/userAnalysis.html")
    })


    //用户新增情况-按月
    $("#userMonth").click(function () {
        $(this).addClass('btn-info').siblings().removeClass('btn-info');
        $(this).siblings().addClass('btn-default')
        getNewShop(getSelectTime("year")+"-"+getSelectTime("month")+"-01",getSelectTime("year")+"-"+getSelectTime("month")+"-"+(getSelectTime("date")+1)+"","day");
    })
    //本月按天
    $("#userYear").click(function () {
        $(this).addClass('btn-info').siblings().removeClass('btn-info');
        $(this).siblings().addClass('btn-default')
        getNewShop();
    })
    //查看更多
    $("#shopMore").click(function () {
        loadPage("/system/userAnalysis.html")
    })

    //销售分析
    $(".petSalesAnalysis").click(function () {
        loadPage("/petShop/petSalesAnalysis.html");
    })
    //用户分析
    $(".petShopUserAnalysis").click(function () {
        loadPage("/petShop/petShopUserAnalysis.html");
    })

    $(".now-time").text(getNowTime())
})


//获取用户新增情况
function getNewShop(startTime,endTime,type) {
    $.ajax({
        type:"post",
        url:"/system/getNewUser.html",
        dataType:"json",
        data:{
            startTime:isNull(startTime)?(getSelectTime("year")+"-01-01"):startTime,
            endTime:isNull(endTime)?(getSelectTime("year")+"-"+getSelectTime("month")+"-31"):endTime,
            selectType:isNull(type)?"month":type
        },
        success:function(data){
            $('#newUserLineChart').remove();
            $('#newUserLine').append('<canvas id="newUserLineChart"></canvas>');
            //销售金额数据条形图
            var chart = new Chart('newUserLineChart', {
                type: 'line',
                data: {
                    labels: data.userMap.dataName,
                    datasets:  [{
                        label: '用户新增情况',
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data:data.userMap.total,
                        fill: false,
                        hoverBackgroundColor: window.chartColors.red,
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

//获取宠物店申请情况
function getNewUser(startTime,endTime,type) {
    $.ajax({
        type:"post",
        url:"/system/getNewShopAnalysis.html",
        dataType:"json",
        data:{
            startTime:isNull(startTime)?(getSelectTime("year")+"-01-01"):startTime,
            endTime:isNull(endTime)?(getSelectTime("year")+"-"+getSelectTime("month")+"-31"):endTime,
            selectType:isNull(type)?"month":type
        },
        success:function(data){
            $('#newPetShopLineChart').remove();
            $('#newPetShopLine').append('<canvas id="newPetShopLineChart"></canvas>');
            var chart = new Chart('newPetShopLineChart', {
                type: 'line',
                data: {
                    labels: data.newShopMap.dataName,
                    datasets:  [{
                        label: '宠物店申请情况',
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data:data.newShopMap.total,
                        fill: false,
                        hoverBackgroundColor: window.chartColors.blue,
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

