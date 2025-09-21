const images = [
 {
  url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
  alt: "White and Black Long Fur Cat",
 },
 {
  url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
  alt: "Orange and White Koi Fish Near Yellow Koi Fish",
 },
 {
  url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
  alt: "Group of Horses Running",
 },
 {
  url: "https://krivbass.city/uploads/news/redactor/mhtih3t4jqln4edf.jpg",
  alt: "Alpine Spring Meadows",
 },
 {
  url: "https://1zoom.club/uploads/posts/2023-03/thumbs/1678147919_1zoom-club-p-priroda-san-marino-1.jpg",
  alt: "Nature Landscape",
 },
 {
  url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
  alt: "Lighthouse Coast Sea",
 },
];



const list = document.querySelector(".gallery");

function makeGallery(arr) {
  return arr.map((image) => `
  <li class="list-image">
  <img class="card-image" src="${image.url}" alt="${image.alt}"
  </li>
  `).join("");
}
// list.style.display = "flex";
// list.style.flexWrap = "wrap"
// list.style.maxWidth = "1128px";

list.insertAdjacentHTML("beforeend", makeGallery(images))