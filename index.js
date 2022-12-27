var x = document.querySelectorAll(".box");
var value = true;
var hero = true;
var a = new Audio("ting.mp3");
var f = new Audio("gameover.mp3");
var ar1 = [];
document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});
x.forEach(function (i) {
  i.addEventListener("click", (e) => {
    if (hero == true && value == true && e.target.textContent == "") {
      i.textContent = "x";
      a.play();
      document.getElementById("turn").textContent = "Turn for 0";
      value = false;
      whowins();
      ar1.push("x");
    } else if (hero == true && e.target.textContent == "") {
      i.textContent = "0";
      a.play();
      value = true;
      ar1.push("0");
      whowins();
      document.getElementById("turn").textContent = "Turn for X";
    }
    if (ar1.length == 9) {
      document.getElementById("turn").textContent = "Its a Draw!";
      whowins();
    }
  });
});

// defining patterns for win-------------------------------------------
function whowins() {
  var pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
  ];

  pattern.forEach((g) => {
    if (
      x[g[0]].textContent == x[g[1]].textContent &&
      x[g[1]].textContent == x[g[2]].textContent &&
      x[g[0]].textContent != ""
    ) {
      hero = false;
      document.getElementById("turn").textContent =
        x[g[0]].textContent + " wins";
      document.querySelector(".img").style.display = "inline-block";
      f.play();
      winline();

      function winline() {
        switch (g) {
          case pattern[0]:
            document.getElementById("line").classList.add("line1");
            break;
          case pattern[1]:
            document.getElementById("line").classList.add("line2");
            break;
          case pattern[2]:
            document.getElementById("line").classList.add("line3");
            break;
          case pattern[3]:
            document.getElementById("line").classList.add("line7");
            break;
          case pattern[4]:
            document.getElementById("line").classList.add("line8");
            break;
          case pattern[5]:
            document.getElementById("line").classList.add("line4");
            break;
          case pattern[6]:
            document.getElementById("line").classList.add("line6");
            break;
          case pattern[7]:
            document.getElementById("line").classList.add("line5");
            break;
        }
      }
    }
  });
}
