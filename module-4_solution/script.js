var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function (names) {
    for (var elem in names) {
        var name = names[elem];
        var firstLetter = name.charAt(0);
        firstLetter = firstLetter.toLowerCase();
        if ( firstLetter == "j" ) {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }
}) (names);