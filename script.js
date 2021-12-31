const textInput = document.querySelector('#text-input');
const image = document.querySelector('#image');
const memeText = document.querySelector('#meme-text');

function addText () {
    memeText.innerHTML = textInput.value
}

textInput.addEventListener('input', addText);