import { getElement } from "./lib_DOM.js";
import {
  getToggleHandler,
  loadImages,
  startSlideShow,
} from "./lib_slide_show.js";

const slides = [
  { href: "release.jpg", title: "Catch and Release" },
  { href: "deer.jpg", title: "Deer at Play" },
  { href: "hero.jpg", title: "The Big One!" },
];

getElement("#pause_resume").onClick = getToggleHandler();
loadImages(slides);
startSlideShow(getElement("#image"), getElement("#caption"));
