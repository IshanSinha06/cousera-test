(function (widnow) {
    var byespeaker={};
    byespeaker.spk=function (n) {
        console.log("Goodbye " + n);
    }
    window.byespeaker=byespeaker;
})();