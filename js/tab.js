$(function(){

    function tab(show,hidn,classname){
        $(show).hide().eq(0).show();
        $(hidn).removeClass(classname).eq(0).addClass(classname);
        $(hidn).click(function(){
            var index=$(this).index();
            $(show).hide().eq(index).show();
            $(hidn).removeClass(classname).eq(index).addClass(classname);
        });
    };
    console.log($('.today-a'));

    tab('.today','.list-a li','list-child');//管理首页 预约列表 新增预约
    tab('.today-a','.list-a-a li','list-child');//服务列表 接待开单  派工施工  领料退料  结算收银  车辆车场
    tab('.contentbox','.left li','one');//侧边主导航
    tab('.listbox','.list li','list-one');//预约管理  服务流程 充值 套餐
    tab('.inner','.list-box li','button');//弹窗
});