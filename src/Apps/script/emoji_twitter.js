async function valor(){
  const response = await fetch('/json/emoji.json');
  const data = await response.json()
  return console.log(data)
};

// Twitter API Emoji: 
let div = document.createElement('span');
div.textContent = twemoji.convert.fromCodePoint('1F1E7-1F1F73');
document.querySelector('#info').appendChild(div);

twemoji.parse(document.body);

let img = div.querySelector('img');


img.parentNode === div;

img.src;
img.alt;
img.className;
img.draggable; 

function imageSourceGenerator(icon, options) {
    return ''.concat(
      options.base, 
      options.size, 
      '/',
      icon,         
      options.ext   
    );
}



