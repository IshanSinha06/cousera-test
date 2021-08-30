(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry","jim", "Paula", "Laura", "Jim"];
for (var i=0; i<names.length; i++) {
    var firstLetter=names[i].charAt(0);
    if (firstLetter == 'j' || firstLetter == 'J') {
        byespeaker.spk(names[i]);
    }
    else {
        hellospeaker.spk(names[i]);
    }
}
})();


