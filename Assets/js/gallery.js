const dinnyArray = [
  "Dinny-01.jpg",
  "Dinny-02.jpg",
  "Dinny-03.jpg",
  "Dinny-04.jpg",
  "Dinny-05.jpg",
  "Dinny-06.jpg",
  "Dinny-07.jpg",
  "Dinny-08.jpg",
  "Dinny-09.jpg",
];

let galleryImageCount = 0;

let galleryImageElement = document.getElementById("gallery-img");

const forwardsBtn = document.getElementById("forwards-arrow");

const backwardsBtn = document.getElementById("backwards-arrow");

forwardsBtn.addEventListener("click", () => {
  galleryImageCount++;

  if (galleryImageCount >= dinnyArray.length) {
    galleryImageCount = 0;
  }

  showGalleryImage();
});

backwardsBtn.addEventListener("click", () => {
  galleryImageCount--;

  if (galleryImageCount < 0) {
    galleryImageCount = dinnyArray.length - 1;
  }

  showGalleryImage();
});

const showGalleryImage = () => {
  let galleryImageUrl =
    "./Assets/images/gallery/" + dinnyArray[galleryImageCount];

  galleryImageElement.src = galleryImageUrl;
};
