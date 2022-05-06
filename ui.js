window.onresize = function () {
    if (document.getElementById("upzw") != null){
        document.getElementById("upzw").style.height = document.getElementById("up").offsetHeight + 0 + "px"
    }
    if ($(".full-screen").height() <= document.documentElement.clientHeight * 1.2){
        $(".full-screen").css("height", document.documentElement.clientHeight * 1.2 + "px")
    }
}
window.onresize()
function copyToClipboard(s){
    if(window.clipboardData){
       window.clipboardData.setData('text',s);
    }else{
       (function(s){
          document.oncopy=function(e){
             e.clipboardData.setData('text',s);
             e.preventDefault();
             document.oncopy=null;
          }
       })(s);
       document.execCommand('Copy');
    }
    alert("复制成功！")
}
setInterval(() => {
    if (document.documentElement.clientWidth < 790){
        //横屏提示
        $("#screennotice").addClass("show")
    }
    else{
        $("#screennotice").removeClass("show")
    }
}, 500);
function isAndroid() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("android")
}
function isIos() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("iphone")
}
function isInWb() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("weibo")
}
function isInWX() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("micromessenger")
}
function isInBdmini() {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("swan-baiduboxapp")
}
function isInQQ() {
    return 0 <= navigator.userAgent.toLowerCase().replace("mqqbrowser", "").indexOf("qq")
}
function isInSafari() {
    return isIos() && !!window.ApplePaySession
}
if (isAndroid() == true){
    window.location = "/m/index.html"
}
if (isIos() == true){
    window.location = "/m/index.html"
}
