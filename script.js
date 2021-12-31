const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const image = document.querySelector('#meme-image');
const imageInsert = document.querySelector('#meme-insert');
const container = document.querySelector('#meme-image-container');
const normal = document.querySelector('#normal');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');

//Functions
function addText () {
    memeText.innerHTML = textInput.value
}

function addMemeImage () {
    // https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
	image.src = URL.createObjectURL(event.target.files[0]);
}


function fireStyle () {
    container.style.border = '3px dashed red';
}

function waterStyle () {
    container.style.border = '5px double blue';
}

function earthStyle () {
    container.style.border = '6px groove green';
}

function normalStyle () {
    container.style.border = '1px solid black';
}

//Listeners
textInput.addEventListener('input', addText);
imageInsert.addEventListener('change', addMemeImage);
fire.addEventListener('click', fireStyle);
water.addEventListener('click', waterStyle);
earth.addEventListener('click', earthStyle);
normal.addEventListener('click', normalStyle);