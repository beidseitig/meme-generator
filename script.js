const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const image = document.querySelector('#meme-image');
const imageInsert = document.querySelector('#meme-insert');
const container = document.querySelector('#meme-image-container');
const normal = document.querySelector('#normal');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');



function addText () {
    memeText.innerHTML = textInput.value
}

textInput.addEventListener('input', addText);

function addMemeImage () {
    // https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
	image.src = URL.createObjectURL(event.target.files[0]);
}

imageInsert.addEventListener('change', addMemeImage);


function fireStyle () {
    container.style.border = '3px dashed red';
}

fire.addEventListener('click', fireStyle);


function waterStyle () {
    container.style.border = '5px double blue';
}

water.addEventListener('click', waterStyle);


function earthStyle () {
    container.style.border = '6px groove green';
}

earth.addEventListener('click', earthStyle);

function normalStyle () {
    container.style.border = '1px solid black';
}

normal.addEventListener('click', normalStyle);

function addMeme1 () {
    image.src = meme1.src
}

meme1.addEventListener('click', addMeme1);

function addMeme2 () {
    image.src = meme2.src
}

meme2.addEventListener('click', addMeme2);

function addMeme3 () {
    image.src = meme3.src
}

meme3.addEventListener('click', addMeme3);

function addMeme4 () {
    image.src = meme4.src
}

meme4.addEventListener('click', addMeme4);