time();
function time(){
    var nowTime = new Date();
    document.getElementById("time").innerHTML = nowTime.toLocaleTimeString();
}
setInterval('time()',1000);