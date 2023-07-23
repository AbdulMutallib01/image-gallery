const ACCESSKEY = "SWoREMwFzzzG2LeEAoJhX9dnXb3CQjkBBxuWfrAfI7E";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResult = document.querySelector(".search-result");
const showMore = document.getElementById("show-more");

let inputData = "";
let page = 1;

const searchImage = async () => {
  inputData = inputE1.value;
  const api = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${ACCESSKEY}`;
  const response = await fetch(api);
  const data = await response.json();
  console.log(data.results);

  const results = data.results;

  if (page === 1) {
    searchResult.innerHTML = "";
  }
  results.map((val) => {
    console.log(val);
    const imagewrap = document.createElement("div");
    imagewrap.classList.add("image");
    const image = document.createElement("img");
    image.src = val.urls.small;
    image.alt = val.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = val.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = val.alt_description;

    imagewrap.appendChild(image);
    imagewrap.appendChild(imageLink);
    searchResult.appendChild(imagewrap);
  });

  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
};

formE1.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(page);
  // page = 1;
  searchImage();
});

showMore.addEventListener("click", (e) => {
  searchImage();
});
