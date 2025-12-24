let timer = null;
let running = true;
let speed = 2000;
const nodes = { image: null, caption: null };
const img = { cache: [], counter: 0 };

function stopSlideShow() {
  clearInterval(timer);
}

function displayNextImage() {
  img.counter = ++img.counter % img.cache.length;
  const image = img.cache[img.counter];
  nodes.image.src = image.src;
  nodes.image.alt = image.alt;
  nodes.caption.textContent = image.alt;
}

function loadImages(slides) {
  for (let slide of slides) {
    const image = new Image();
    image.src = "images/" + slide.href;
    image.alt = slide.title;
    img.cache.push(image);
  }
}

function startSlideShow(image, caption) {
  if (image && caption) {
    nodes.image = image;
    nodes.caption = caption;
  }
  displayNextImage();
  timer = setInterval(displayNextImage, speed);
}

function getToggleHandler() {
  return (evt) => {
    if (running) {
      stopSlideShow();
    } else {
      startSlideShow();
    }
    const button = evt.currentTarget;
    button.value = running ? "Resume" : "Pause";
    running = !running;
  };
}

export { loadImages, startSlideShow, getToggleHandler };
