(function (widnow) {
    var hellospeaker={};
    hellospeaker.spk=function (n) {
        console.log("Hello " + n);
    }
    window.hellospeaker=hellospeaker;
})();