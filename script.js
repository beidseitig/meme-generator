const textInput = document.querySelector('#text-input');
const image = document.querySelector('#meme-image');
const imageInsert = document.querySelector('#meme-insert')
const memeText = document.querySelector('#meme-text');

function addText () {
    memeText.innerHTML = textInput.value
}

textInput.addEventListener('input', addText);

function addMemeImage () {
    // https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
	image.src = URL.createObjectURL(event.target.files[0]);
}

imageInsert.addEventListener('change', addMemeImage);