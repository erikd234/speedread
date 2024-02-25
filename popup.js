document.addEventListener("DOMContentLoaded", function () {
  var loadButton = document.getElementById("loadButton");
  var pasteButton = document.getElementById("pasteButton");
  var prevWordButton = document.getElementById("prevWord");
  var nextWordButton = document.getElementById("nextWord");
  var textArea = document.getElementById("textArea");
  var currentWordSpan = document.getElementById("currentWord");
  var toCycleTab = document.getElementById("toCycleWords");
  var toCopyTab = document.getElementById("toCopyPaste");
  var words = [];
  var currentWordIndex = 0;

  toCycleTab.addEventListener("click", function (e) {
    openTab(e, "CycleWords");
  });

  toCopyTab.addEventListener("click", function (e) {
    openTab(e, "CopyPaste");
  });

  loadButton.addEventListener("click", function () {
    string = textArea.value;
    console.log(string);
    words.push(...string.split(" "));
  });

  prevWordButton.addEventListener("click", function () {
    if (words.length > 0) {
      currentWordIndex = (currentWordIndex - 1 + words.length) % words.length;
      currentWordSpan.textContent = words[currentWordIndex];
    }
  });

  nextWordButton.addEventListener("click", function () {
    if (words.length > 0) {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      currentWordSpan.textContent = words[currentWordIndex];
    }
  });

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
});
