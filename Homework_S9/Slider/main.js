const mainImgTag = document.querySelector("#main_img");
const captionTag = document.querySelector("#caption");
const imgTags = document.querySelectorAll("#img_list a");

const imgCache = [];
let image = null;

for (let imgTag of imgTags) {
  image = new Image();
  image.src = imgTag.href;
  image.alt = imgTag.title;

  imgCache.push(image);
}

mainImgTag.src = imgCache[0].src;
mainImgTag.alt = imgCache[0].alt;
captionTag.textContent = imgCache[0].alt;

let imgCount = 0;
setInterval(() => {
  imgCount = (imgCount + 1) % imgCache.length;

  image = imgCache[imgCount];

  mainImgTag.src = image.src;
  mainImgTag.alt = image.alt;
  captionTag.textContent = image.alt;
}, 2000);
