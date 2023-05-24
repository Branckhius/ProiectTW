
window.addEventListener('load', function () {
        if (localStorage.getItem("iarna")) {
            document.getElementById("iarna").innerHTML = localStorage.getItem("iarna");
        }
        if (localStorage.getItem("primavara")) {
            document.getElementById("primavara").innerHTML = localStorage.getItem("primavara");
        }
        if (localStorage.getItem("vara")) {
            document.getElementById("vara").innerHTML = localStorage.getItem("vara");
        }
        if (localStorage.getItem("toamna")) {
            document.getElementById("toamna").innerHTML = localStorage.getItem("toamna");
        }
        document.getElementById("iarna").addEventListener("input", function () {
            localStorage.setItem("iarna", document.getElementById("iarna").innerHTML);
        });
        document.getElementById("primavara").addEventListener("input", function () {
            localStorage.setItem("primavara", document.getElementById("primavara").innerHTML);
        });
        document.getElementById("vara").addEventListener("input", function () {
            localStorage.setItem("vara", document.getElementById("vara").innerHTML);
        });
        document.getElementById("toamna").addEventListener("input", function () {
            localStorage.setItem("toamna", document.getElementById("toamna").innerHTML);
        });
    const submitButton = document.querySelector('input[type="submit"]');
    const resetButton = document.querySelector('input[type="reset"]');
    const textField = document.querySelector('input[name="text"]');
    const coloane = document.querySelectorAll('.coloane');

    submitButton.addEventListener('click', function (event) {
        const inputText = textField.value.trim();
        event.preventDefault();
        if (inputText !== '') {
            const firstWord = inputText.split(' ')[0];

            coloane.forEach((coloana) => {
                const coloanaText = coloana.querySelector('ul');
                const listItem = document.createElement('li');
                const h2 = coloana.querySelector('h2');
                const computedStyle = getComputedStyle(coloana);
                const backgroundColor = computedStyle.backgroundColor;
                const color = computedStyle.backgroundColor;
                h2.style.color = color;
                h2.style.opacity = 1;
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                coloana.style.backgroundColor = `rgba(${r}, ${g}, ${b},0.3)`;

                if (firstWord.toLowerCase() === coloanaText.id.toLowerCase()) {
                    listItem.textContent = inputText;
                    coloanaText.appendChild(listItem);
                }
            });
        }

    });

    resetButton.addEventListener('click', function (event) {
        event.preventDefault();
        localStorage.clear();
        coloane.forEach((coloana) => {
            const coloanaText = coloana.querySelector('ul');
            while (coloanaText.firstChild) {
                coloanaText.firstChild.remove();
            }
        });
    });
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var canSwap = true;
    var interval;

    image1.addEventListener('click', function (event) {
        if (canSwap) {
            clearInterval(interval); // Opriți intervalul existent, dacă există
            interval = setInterval(swapImages, 1000);
            canSwap = false;
        } else {
            clearInterval(interval);
            canSwap = true;
        }
    });

    image2.addEventListener('click', function (event) {
        if (canSwap) {
            clearInterval(interval); // Opriți intervalul existent, dacă există
            interval = setInterval(swapImages, 1000);
            canSwap = false;
        } else {
            clearInterval(interval);
            canSwap = true;
        }
    });
    function swapImages(event) {
        if (event) {
            event.stopPropagation();
        }

        var image1 = document.getElementById('image1');
        var image2 = document.getElementById('image2');

        // Salvați sursa imaginii 1
        var tempSrc = image1.src;

        // Schimbați sursa imaginii 1 cu sursa imaginii 2
        image1.src = image2.src;

        // Schimbați sursa imaginii 2 cu sursa imaginii inițiale a imaginii 1
        image2.src = tempSrc;
    }
    if (localStorage.getItem("iarna")) {
        document.getElementById("iarna").innerHTML = localStorage.getItem("iarna");
      }
      if (localStorage.getItem("primavara")) {
        document.getElementById("primavara").innerHTML = localStorage.getItem("primavara");
      }
      if (localStorage.getItem("vara")) {
        document.getElementById("vara").innerHTML = localStorage.getItem("vara");
      }
      if (localStorage.getItem("toamna")) {
        document.getElementById("toamna").innerHTML = localStorage.getItem("toamna");
      }
    
      // Adăugarea evenimentului pentru stocarea valorilor în localStorage la fiecare modificare
      document.getElementById("iarna").addEventListener("DOMSubtreeModified", function() {
        localStorage.setItem("iarna", document.getElementById("iarna").innerHTML);
      });
      document.getElementById("primavara").addEventListener("DOMSubtreeModified", function() {
        localStorage.setItem("primavara", document.getElementById("primavara").innerHTML);
      });
      document.getElementById("vara").addEventListener("DOMSubtreeModified", function() {
        localStorage.setItem("vara", document.getElementById("vara").innerHTML);
      });
      document.getElementById("toamna").addEventListener("DOMSubtreeModified", function() {
        localStorage.setItem("toamna", document.getElementById("toamna").innerHTML);
      });
});
