// SHOW THE CONTENTS WHEN CLICK ON THE 'FROM STATION' BUTTON
function dropdownToggle() {
    document.getElementById("f-station").classList.toggle("display");
    
    var content = document.getElementsByClassName(".dropdownbutton");
    content.classList.remove("center");
  }

// HIDING THE CONTENTS WHEN CLICK ELSE WHERE
window.onclick = function(event) {
    if (!event.target.matches('.dropdownbtn')) {
      var dropdownContent = document.getElementsByClassName("from-station");
      var i;
      for (i = 0; i < dropdownContent.length; i++) {
        var openDropdown = dropdownContent[i];
        if (openDropdown.classList.contains("display")) {
          openDropdown.classList.remove("display");
        }
      }
    }
}

// SHOW THE CONTENTS WHEN CLICK ON THE 'TO STATION' BUTTON
function dropdownToggle1() {
    document.getElementById("t-station").classList.toggle("show");
  }

// HIDING THE CONTENTS WHEN CLICK ELSE WHERE
window.onclick = function(event) {
    if (!event.target.matches('.dropdownbtn1')) {
      var dropdownContent1 = document.getElementsByClassName("to-station");
      var i;
      for (i = 0; i < dropdownContent1.length; i++) {
        var openDropdown1 = dropdownContent1[i];
        if (openDropdown1.classList.contains("show")) {
          openDropdown1.classList.remove("show");
        }
      }
    }
}

