// Add js here.

var myvideo = document.getElementById("videoplayer");
myvideo.autoplay=false;
myvideo.loop=false;

// set initial value
document.getElementById("volume").innerText = document.getElementById("slider").value.toString()+"%";
// load video 
myvideo.load();

document.getElementById("play").addEventListener("click",
    function () {
        myvideo.play();
    });

document.getElementById("pause").addEventListener("click",
    function () {
        myvideo.pause();
    });

var speed = [0.5, 1, 2];
var speedid = 1;

document.getElementById("slower").addEventListener("click",
    function () {
        if (speedid == 0) {
            alert("Video is at slowest speed!");
        }
        else {
            speedid -= 1;
            myvideo.playbackRate = speed[speedid];
        }
    });

document.getElementById("faster").addEventListener("click",
    function () {
        if (speedid == 2) {
            alert("Video is at fastest speed!");
        }
        else {
            speedid += 1;
            myvideo.playbackRate = speed[speedid];
        }
    });

document.getElementById("skip").addEventListener("click",
    function () {
        let target_time = myvideo.currentTime+15;
        if (target_time > myvideo.duration) {
            target_time = 0;
        }
        myvideo.currentTime = target_time;
    });

document.getElementById("mute").addEventListener("click",
    function () {
        myvideo.muted = 1 - myvideo.muted; 
        if (myvideo.muted) {
            document.getElementById("mute").innerText = "Unmute";
        }
        else {
            document.getElementById("mute").innerText = "Mute";
        }
    });  

document.getElementById("slider").oninput = function() {
    myvideo.volume = document.getElementById("slider").value / 100;
    document.getElementById("volume").innerText = document.getElementById("slider").value.toString()+"%";
}