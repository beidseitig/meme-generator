const textInput = document.querySelector('#text-input');
const image = document.querySelector('#meme-image');
const imageInsert = document.querySelector('#meme-insert')
const memeText = document.querySelector('#meme-text');

function addText () {
    memeText.innerHTML = textInput.value
}

textInput.addEventListener('input', addText);

function addMemeImage () {
	image.src = URL.createObjectURL(event.target.files[0]);
}

imageInsert.addEventListener('change', addMemeImage);