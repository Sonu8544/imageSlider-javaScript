const images = document.querySelectorAll(".slide");
let count = 0;
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

images.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

const prev = () => {
  if (count > 0) {
    count--;
    imageSlider();
  }
};

const next = () => {
  if (count < images.length - 1) {
    count++;
    imageSlider();
  }
};

const imageSlider = () => {
  images.forEach((item, index) => {
    item.style.transform = `translateX(-${count * 100}%)`;
  });

  prevButton.disabled = count === 0;
  nextButton.disabled = count === images.length - 1;
};

prevButton.disabled = true;
