/**
 * @author: libin
 * @date: 15/11/9.
 */

var preTab,currentTab;
function refreshTab(tabid){
    var tabBar=$('.tab-bar');
    if(preTab) preTab.removeClass('tab-activated');
    switch (tabid){
        case 1:
            currentTab=tabBar.find('#user-manage');
            preTab=currentTab;

            break;
        case 2:
            currentTab=tabBar.find('#app-manage');
            preTab=currentTab;

            break;
        case 3:
            currentTab=tabBar.find('#mod-manage');
            preTab=currentTab;

            break;
        case 4:
            currentTab=tabBar.find('#ualg-manage');
            preTab=currentTab;

            break;


    }
    currentTab.addClass('tab-activated');

}

function redrawUserTab(){
 var ulheader= $('.ul-header');
    var header = '<li class="four-col">用户名</li><li class="four-col">算法名称</li>' +
        '<li class="four-col">提交时间</li><li class="four-col">操作</li>'
    ulheader.html(header);
 var container = $('.container');
 var content ="";


}