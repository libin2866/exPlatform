/**
 * Created by Libin on 2015/10/23.
 */

//var hotsUrl ="http://10.41.5.136:8080";
var hotsUrl ="";
$(function () {
        console.log('init');
        function getModuleList() {
            $.ajax({
                url:hotsUrl+"/module/getList",
                type:"post",
                dataType:'json',
                success:function (resp) {
                    console.log(resp);
            updateModuleList(resp.data);
                }
            })

        }
        getModuleList();
        function updateModuleList(data){
            var list =data;
            var container=$(".container");
            var tmpHtml ="";
            for(var i=0;i<list.length;++i){
               tmpHtml+=' <ul class="input-ul"><li>'+list[i].name+'</li><li>';
                for(var j =0;j<list[i].algorithms.length;++j){
                    tmpHtml+='<span class="inner-li">'+ list[i].algorithms[j].name ;
                }
                tmpHtml+= '</li><li><a target="_blank" href="'+list[i].resultUrl+'">展示</a></li></ul>';
            }
            container.html(tmpHtml);
        }
    }
);