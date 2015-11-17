/**
 * @author: libin
 * @date: 15/11/17.
 */
$(function () {
   var imgContainer = $('.result-contain');

    /**
     * 刷新图像
     * @param data
     */
    function displayImg(data){
        var temp = '<img src='+data.src+' max-width="400px" max-height="400px"/>';
        imgContainer.html(temp);
    }
});