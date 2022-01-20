var timeCheck = false;
var localtime;

function updateClock() {
    d = new Date();
    if (timeCheck === false) {
        if (localtime != d.toLocaleTimeString('en-US', { hour12: true }).replace(/(.*)\D\d+/, '$1')) {
            localtime = d.toLocaleTimeString('en-US', { hour12: true }).replace(/(.*)\D\d+/, '$1');
            document.getElementById('time').innerHTML = localtime;
        }
    }
}

function check() {
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var yyyy = d.getFullYear();
    if (timeCheck === false) {
        localtime = mm + '/' + dd + '/' + yyyy;
        document.getElementById('timeIcon').innerText = "";
        timeCheck = true;
    } else {
        localtime = d.toLocaleTimeString('en-US', { hour12: true }).replace(/(.*)\D\d+/, '$1');
        document.getElementById('timeIcon').innerText = "";
        timeCheck = false;
    }
    document.getElementById('time').innerHTML = localtime;
}

updateClock();
setInterval(updateClock, 1000);

function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function getSpotStatus() {
    var json_obj = JSON.parse(Get("https://possums.xyz/nowplaying/song"));
    document.getElementById('spotstatus').innerHTML = json_obj;
}

getSpotStatus();
setInterval(getSpotStatus, 30000);