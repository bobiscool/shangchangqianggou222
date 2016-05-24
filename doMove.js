/**
 * Created by mac on 16/4/28.
 */


function doMove(obj,dir,attr,target,opac,Fn,jishu) {
    dir = parseInt(getstyle(obj,attr))<target?dir:-dir;//
    //alert(dir);
    var Adv = document.getElementsByClassName('dv');
    var oP1 = Adv[Fn].getElementsByTagName('p')[0];
    var oP2 = Adv[Fn].getElementsByTagName('p')[1];


    clearInterval(obj.timer);
    obj.timer = setInterval(
        function () {
            var position = parseInt(getstyle(obj, attr)) + dir;//取出当前自己的位置
            //判断自身的位指
            if (position > target&&dir>0 || position <target&&dir<0) {
                //oDiv.style[attr] = position + dir + 'px'; 这种写法,如果在中间过程中调用两个函数就会造成odiv在中间停止不前
                position = target;
            }//满足这两个条件才能在中间场地上驰骋!!!

            obj.style[attr] = position + 'px';

            opac = opac-2.5;
            obj.style.filter = 'alpha(opacity='+opac+')';
            obj.style.opacity = opac/100;
            //document.title = alpha;
            //alert(position);
            if(position==target){
                clearInterval(obj.timer);
                oP1.style.display = 'none';
                oP2.style.display = 'none';
                var divin = document.createElement('div');
                var imgin = document.createElement('img');

                var pin = document.createElement('p');
                imgin.className = 'imgin';
                divin.className = 'divin';
                pin.className = 'pin';
                var divs = document.getElementById('divs');
                divs.appendChild(divin);
                divin.appendChild(pin);
                divin.appendChild(imgin);

                pin.innerHTML = oP1.innerHTML + oP2.innerHTML;
                imgin.src = obj.src;

            }



            //alert(oDiv.style[attr]);  //alert(attr);

        }, 30);

};
