$(function () {
  initScroll();  

});

function initScroll() {
  var aScrollTimer;
  $(window).scroll(function() {
    //函数防抖动
    if(aScrollTimer){
      clearTimeout(aScrollTimer);
    }
    aScrollTimer = setTimeout(function(){
      if ($(window).scrollTop() > 100) {
        $("#backToTop").fadeIn(1000);
      } else {
        $("#backToTop").fadeOut(1000);
      }
    },100);
  });
  $("#article-toc").navScrollSpy({
      container: window,
      current:"active",
      scrollSpeed: 50
  });
}

function backToTop() {
  $("html").stop().animate({scrollTop: 0}, 1000);
}

function showToc() {
  var $s = $('#fixed-panel .toc-panel');
  if ($s.hasClass('show')) {
    $s.removeClass('show');
  }else{
    $s.addClass('show');
  }
}

function getSiteTime(t1){
  var seconds = 1000;
  var minutes = seconds * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;
  var today = new Date();
  var todayYear = today.getFullYear();
  var todayMonth = today.getMonth()+1;
  var todayDate = today.getDate();
  var todayHour = today.getHours();
  var todayMinute = today.getMinutes();
  var todaySecond = today.getSeconds();
  /* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
  year - 作为date对象的年份，为4位年份值
  month - 0-11之间的整数，做为date对象的月份
  day - 1-31之间的整数，做为date对象的天数
  hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
  minutes - 0-59之间的整数，做为date对象的分钟数
  seconds - 0-59之间的整数，做为date对象的秒数
  microseconds - 0-999之间的整数，做为date对象的毫秒数 */
  // var t1 = Date.UTC(2018,02,13,15,00,00); //北京时间2018-2-13 00:00:00
  var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
  var diff = t2-t1;
  var diffYears = Math.floor(diff/years);
  var diffDays = Math.floor((diff/days)-diffYears*365);
  var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
  var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
  var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
  return {
      years : diffYears,
      days :  diffDays,
      hours : diffHours,
      minutes : diffMinutes,
      seconds : diffSeconds
  }
  // document.getElementById("sitetime").innerHTML="本站已勉强存活"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒";
  // document.getElementById("siteDate").innerHTML=diffYears+"年"+diffDays+"天";
}




// function getIp() {
//     var getOSAndBrowser = function () {
//       var os = navigator.platform;
//       var userAgent = navigator.userAgent;
//       var info = "";
//       var tempArray = "";
//       if (os.indexOf("Win") > -1) {
//         if (userAgent.indexOf("Windows NT 5.0") > -1) {
//           info += "Win2000"
//         } else if (userAgent.indexOf("Windows NT 5.1") > -1) {
//           info += "WinXP"
//         } else if (userAgent.indexOf("Windows NT 5.2") > -1) {
//           info += "Win2003"
//         } else if (userAgent.indexOf("Windows NT 6.0") > -1) {
//           info += "WindowsVista"
//         } else if (userAgent.indexOf("Windows NT 6.1") > -1 || userAgent.indexOf("Windows 7") > -1) {
//           info += "Win7"
//         } else if (userAgent.indexOf("Windows NT 6.2") > -1 || userAgent.indexOf("Windows 8") > -1) {
//           info += "Win8"
//         } else if (userAgent.indexOf("Windows NT 6.3") > -1 || userAgent.indexOf("Windows 8.1") > -1) {
//           info += "Win8.1"
//         } else if (userAgent.indexOf("Windows NT 10.0") > -1 || userAgent.indexOf("Windows 10") > -1) {
//           info += "Win10"
//         } else {
//           info += "Other"
//         }
//       } else if (os.indexOf("Mac") > -1) {
//         info += "Mac"
//       } else if (os.indexOf("X11") > -1) {
//         info += "Unix"
//       } else if (os.indexOf("Linux") > -1) {
//         info += "Linux"
//       } else {
//         info += "Other"
//       }
//       info += "/";
//       var isOpera = userAgent.indexOf("Opera") > -1;
//       var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
//       var isEdge = userAgent.toLowerCase().indexOf("edge") > -1 && !isIE;
//       var isIE11 = (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1);
//       if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) {
//         tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent);
//         info += tempArray[1] + tempArray[2]
//       } else if (isIE) {
//         var version = "";
//         var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
//         reIE.test(userAgent);
//         var fIEVersion = parseFloat(RegExp["$1"]);
//         if (fIEVersion == 7) {
//           version = "IE7"
//         } else if (fIEVersion == 8) {
//           version = "IE8"
//         } else if (fIEVersion == 9) {
//           version = "IE9"
//         } else if (fIEVersion == 10) {
//           version = "IE10"
//         } else {
//           version = "0"
//         }
//         info += version
//       } else if (isEdge) {
//         info += "Edge"
//       } else if (isIE11) {
//         info += "IE11"
//       } else if (/[Cc]hrome\/\d+/.test(userAgent)) {
//         tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent);
//         info += tempArray[1] + tempArray[2]
//       } else if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent)) {
//         tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent);
//         info += tempArray[3] + tempArray[1]
//       } else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) {
//         tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent);
//         info += tempArray[1] + tempArray[2]
//       } else {
//         info += "unknown"
//       }
//       return info
//     };
//     $("#visitors-info").html("欢迎来自" + returnCitySN["cname"] + "的朋友"+"<br>您的 IP 是：" + returnCitySN["cip"]+"<br>您使用的是：" + getOSAndBrowser());
// }