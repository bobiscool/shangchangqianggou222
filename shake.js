/**
 * Created by mac on 16/5/21.
 */
/**
 * Created by mac on 16/4/30.
 */
function shake(obj,attr,Fn,jishu){
    var pos = parseInt(getstyle(obj,attr));//如果在此处定义pos,那么pos是不变的;
    var num=0;
    var timer =null;
    var arr = [];
    for (var i = 20; i > 0; i -= 2) {
        arr.push(i, -i);//生成一个抖动用的左右数组,我才知道还可以一口气添加几个数

    }
    arr.push(0);

    clearInterval(timer);
    timer = setInterval(function () {
        //var pos = parseInt(getstyle(oImg,'left'));  //如果在此处定义抖动pos是动态的
        obj.style[attr] = pos + arr[num] + 'px';

        num++;
        //
        // alert(arr.length);
        if (num === arr.length) {
            clearInterval(timer);
            doMove(obj,1,'top',100,90,Fn,jishu);
        }



    }, 100);


};