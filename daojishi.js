/**
 * Created by mac on 16/5/20.
 */
function daojishi(a,jishu)
{

    var Adv                         = document.getElementsByClassName('dv');
    var oImage                      = Adv[a].getElementsByTagName('img')[0];
    var op                          = Adv[a].getElementsByTagName('span')[1];
    var otime                       = Adv[a].getElementsByTagName('input')[0];
    var iNow                        = null;
    var iNew                        = null;
    var t                           = 0;


        iNew                        = new Date(otime.value);

        clearInterval(Adv[a].timer);
        Adv[a].timer                = setInterval(function (){
                iNow                = new Date();
                t                   = Math.floor((iNew - iNow)/1000);
                if (t>=0) {
                    var str         = Math.floor(t/86400)+'天'+Math.floor(t%86400/3600)+'时'+Math.floor(t%846400%3600/60)+'分'+t%60+'秒';
                    op.innerHTML    = str;
                }else{
                    clearInterval(Adv[a].timer);
                        shake(oImage, 'left',a,jishu);




                }
            },
            50
        );



    };