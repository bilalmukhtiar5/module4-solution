function (window) {
  var bySpeaker = new Object();
  var speakWord = "Good Bye";
  byeSpeaker.speak = function speak(name){
    console.log(speakWord + " " + name);
  };
  window.bySpeaker = byeSpeaker;
})(window);
