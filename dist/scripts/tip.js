"use strict";function offWork(e,o,n){function t(){var e=null;e=setTimeout(function(){canClick=!0},36e5)}var c=null,r=e||8,u=o||21,l=document.getElementById("clockIn"),i=document.querySelector(".window-shadow"),a=document.querySelector(".window-mask"),d=document.querySelector(".messager-window");c=setInterval(function(){var e=new Date,o=e.getHours(),n=e.getMinutes(),c=30+parseInt(15*Math.random(),10);console.log(o,n,c),o===r&&n>=c&&canClick?(canClick=!1,l&&l.click(),t(),setTimeout(function(){i=document.querySelector(".window-shadow"),a=document.querySelector(".window-mask"),d=document.querySelector(".messager-window"),i.remove(),a.remove(),d.remove()},3e3),window.localStorage.setItem("start",o+":"+c)):o===u&&n>=c&&canClick?(canClick=!1,l&&l.click(),t(),setTimeout(function(){i=document.querySelector(".window-shadow"),a=document.querySelector(".window-mask"),d=document.querySelector(".messager-window"),i.remove(),a.remove(),d.remove()},3e3),window.localStorage.setItem("end",o+":"+c)):console.log("work or rest...")},3e4)}window.onload=function(){offWork(8,21,30)};var canClick=!0;
//# sourceMappingURL=tip.js.map
