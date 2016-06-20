$(function(){
//    一级标题单击
    var one=$($('.contentbox a')[0]);
    console.log(one)
    var box=$($('.cbbox')[0]);
    //console.log(box)
    one.click(function(){
        box.show();
        //one.hide();
    });
//    添加数据
    var data={
        num:123,
        user:'小明',
        phone:18435143345,
        car:'法国小跑车',
        money:'33',
        shijimoney:'45',
        time:'5/12 8.25',
        xiaoshou:'李四',
        state:'12356'
    };
    //console.log(data.car)
    var allList=$('.listbox table');
    //console.log(allList)
    allList.append('<tr class="order"> <td><div class="shu"></div>'+data.num+'</td><td class="userName">'+data.user+'</td><td>'+data.phone+'</td><td class="center">'+data.car+'</td><td>'+data.money+'</td><td>'+data.shijimoney+'</td><td>'+data.time+'</td><td>'+data.xiaoshou+'</td><td>'+data.state+'</td></tr>');
    //表格经过变色

    $('.order').mousemove(function(){
        var index=$(this).index()-1;
        $('.shu').eq(index).css('display','block')
    }).mouseout(function(){
        var index=$(this).index()-1;
        $('.shu').eq(index).css('display','none')
    });
});