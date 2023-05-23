window.addEventListener('load', () => {
    texts = document.getElementsByClassName("text");
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.fontSize = "medium";
    }

    const submitButton = document.querySelector('input[type="submit"]');
    const resetButton = document.querySelector('input[type="Reset"]');
    const textField = document.querySelector('input[name="text"]');
    const coloane = document.querySelectorAll('.coloane');

    submitButton.addEventListener('click', () => {
        const inputText = textField.value.trim();
        if (inputText !== '') {
            const firstWord = inputText.split(' ')[0];

            coloane.forEach((coloana) => {
                const coloanaText = coloana.querySelector('ul');
                const listItem = document.createElement('li');
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                const color = `rgba(${r}, ${g}, ${b},0.3)`;
                coloana.style.backgroundColor = color;

                if (firstWord.toLowerCase() === coloanaText.id.toLowerCase()) {
                    listItem.textContent = inputText;
                    coloanaText.appendChild(listItem);
                }
            });
        }
    });
    resetButton.addEventListener('click', function(event) {
        coloane.forEach((coloana) => {
            const coloanaText = coloana.querySelector('ul');
            while (coloanaText.firstChild) {
                coloanaText.firstChild.remove();
            }

        });
    });
    
});
