var timeCheck = false;
var localtime;

function updateClock() {
    d = new Date();
    if (!timeCheck) {
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
    if (!timeCheck) {
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

async function getSpotStatus() {
    var json_obj = await (await fetch("https://possums.xyz/nowplaying/song")).json();
    document.getElementById('spotstatus').innerHTML = json_obj;
}

getSpotStatus();
setInterval(getSpotStatus, 30000);