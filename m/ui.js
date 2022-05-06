pageAnimate = false
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
window.onload = function(){
   $("body").addClass("show")
}
function toPage(id){
   if (pageAnimate == true){
      return
   }
   pageAnimate = true
   $("body").animate({opacity: "0"},500)
   setTimeout(() => {
      $("#main").addClass("hide")
      $("#download").addClass("hide")
      $("#wiki").addClass("hide")
      $("#address").addClass("hide")
      $("#" + id).removeClass("hide")
      $("body").animate({opacity: "1"},1000)
      setTimeout(() => {
         pageAnimate = false
      }, 1000);
   }, 600);
}
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