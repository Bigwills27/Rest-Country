const html = document.querySelector("html");
const body = document.querySelector("body");
const scrollToBt = document.querySelector(".scrollToBt");
const scrollToTp = document.querySelector(".scrollToTp");
const nav = document.querySelector("nav");
const navRight = document.querySelector(".nav-right");
const themeIcon = document.querySelector(".theme-icon > path");
const searchLabel = document.querySelector("header > label");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.getElementById("search-input");
const filterCtn = document.querySelector(".filter-ctn");
const filter = document.getElementById("filter");
const filterUi = document.querySelector(".filter-ui");
const arrDown = document.querySelector(".arr-down");
const radioCtn = document.querySelectorAll(".radio-container");
const countries = document.querySelector(".countries");
let country = [];
const flag = document.querySelectorAll(".flag");
const countryName = document.querySelectorAll(".country-name");
const popNum = document.querySelectorAll(".pop-num");
const regName = document.querySelectorAll(".region-name");
const capName = document.querySelectorAll(".capital-name");
let styler = document.createElement("style");

// Functions
function toLightTheme() {
  styler.innerHTML = `#search-input::placeholder {
    color: gray;
}

.filter-ui > p,
.population,
.region,
.capital{
  font-weight: 400;
}`;
  body.appendChild(styler);
  themeIcon.style.fill = "transparent";
  themeIcon.style.stroke = "black";
  themeIcon.style.strokeWidth = "25px";
  body.style.backgroundColor = "var(--Very-Light-Gray-Light-Mode-Background)";
  nav.style.backgroundColor = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  nav.style.color = "var(--Very-Dark-Blue-Light-Mode-Text)";
  searchLabel.style.backgroundColor =
    "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  searchIcon.style.filter = "brightness(0)";
  searchInput.style.color = "var(--Very-Dark-Blue-Light-Mode-Text)";
  searchInput.style.boxShadow = "0px 0px 10px -2px rgba(0,0,0, 0.2)";
  filterCtn.style.backgroundColor =
    "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  filterCtn.style.color = "var(--Very-Dark-Blue-Light-Mode-Text)";
  filterCtn.style.boxShadow = "0px 0px 10px -2px rgba(0,0,0, 0.2)";
  arrDown.style.filter = "brightness(0)";
  filter.style.backgroundColor =
    "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  filter.style.boxShadow = "0px 0px 10px -2px rgba(0,0,0, 0.2)";
  country.forEach((county) => {
    county.style.backgroundColor =
      "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
    county.style.color = "var(--Very-Dark-Blue-Light-Mode-Text)";
    county.style.boxShadow = "0px 0px 10px -2px rgba(0,0,0, 0.2)";
  });
}

function toDarkTheme() {
  styler.remove();
  themeIcon.style.fill = "white";
  themeIcon.style.stroke = "unset";
  themeIcon.style.strokeWidth = "unset";
  body.style.backgroundColor = "var(--Very-Dark-Blue-Dark-Mode-Background)";
  nav.style.backgroundColor = "var(--Dark-Blue-Dark-Mode-Elements)";
  nav.style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  searchLabel.style.backgroundColor = "var(--Dark-Blue-Dark-Mode-Elements)";
  searchIcon.style.filter = "brightness(2)";
  searchInput.style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  searchInput.style.boxShadow = "0px 0px 0px 0px transparent";
  filterCtn.style.backgroundColor = "var(--Dark-Blue-Dark-Mode-Elements)";
  filterCtn.style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  filterCtn.style.boxShadow = "0px 0px 0px 0px transparent";
  arrDown.style.filter = "brightness(2)";
  filter.style.backgroundColor = "var(--Dark-Blue-Dark-Mode-Elements)";
  filter.style.boxShadow = "0px 0px 0px 0px transparent";
  country.forEach((county) => {
    county.style.backgroundColor = "var(--Dark-Blue-Dark-Mode-Elements)";
    county.style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
    county.style.boxShadow = "0px 0px 0px 0px transparent";
  });
}

scrollToTp.addEventListener("click", () => {
  html.scrollTop = 0;
});

scrollToBt.addEventListener("click", () => {
  html.scrollTop = html.scrollHeight;
});

window.addEventListener("scroll", () => {
  if (html.scrollTop === 0) {
    scrollToTp.style.left = "-100vw";
  } else {
    scrollToTp.style.left = "8vw";
  }

  const scrollThreshold = 10;
  if (
    Math.abs(
      html.scrollHeight - html.scrollTop - html.clientHeight < scrollThreshold
    )
  ) {
    scrollToBt.style.right = "-100vw";
  } else {
    scrollToBt.style.right = "8vw";
  }
});

window.addEventListener("load", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    filter.style.width = `${filterUi.clientWidth}px`;
    filter.style.top = `${filterUi.clientHeight + 10}px`;
  }
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    filter.style.width = `${filterUi.clientWidth}px`;
    filter.style.top = `${filterUi.clientHeight + 10}px`;
  }
});

if (window.matchMedia("(min-width: 768px)").matches) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      filter.style.backgroundColor = "hsla(208, 23%, 22%, 0.421)";
      filter.style.top = `${filterUi.clientHeight + nav.clientHeight + 38}px`;
      filter.style.position = "fixed";
    } else {
      filter.style.backgroundColor = "var(--Dark-Blue-Dark-Mode-Elements)";
      filter.style.top = `${filterUi.clientHeight + 10}px`;
      filter.style.position = "absolute";
    }
  });
}

// change theme
navRight.addEventListener("click", () => {
  if (themeIcon.style.fill === "transparent") {
    toDarkTheme();
  } else {
    toLightTheme();
  }
});

filterUi.addEventListener("click", () => {
  if (filter.style.paddingBlock === "1rem") {
    filter.style.paddingBlock = "0rem";
    filter.style.height = "0px";
  } else {
    filter.style.paddingBlock = "1rem";
    filter.style.height = "198.76px";
  }
});

countries.addEventListener("click", () => {
  filter.style.paddingBlock = "0rem";
  filter.style.height = "0px";
});

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].flag);

    for (let i = 0; i < data.length; i++) {
      let addedCountry = document.createElement("a");
      addedCountry.href = "./country.html";
      addedCountry.classList.add("country");
      addedCountry.innerHTML = `
       <div class="flag-ctn">
                <img src="./images/Ethereum-Logo.png" title="Country's Flag" alt="Flag" class="flag">
            </div>

            <div class="country-info">
                <h2 class="country-name"></h2>

                <div class="country-details">
                    <p class="population">Population: <span class="pop-num"></span></p>

                    <p class="region">Region: <span class="region-name"></span></p>

                    <p class="capital">Capital: <span class="capital-name"></span></p>
                </div>
            </div>
      `;

      countries.append(addedCountry);
      country.push(addedCountry);

      addedCountry.querySelector(".flag").src = data[i % data.length].flag;
      addedCountry.querySelector(".country-name").textContent =
        data[i % data.length].name;
      addedCountry.querySelector(".pop-num").textContent =
        data[i % data.length].population.toLocaleString();
      addedCountry.querySelector(".region-name").textContent =
        data[i % data.length].region;
      addedCountry.querySelector(".capital-name").textContent =
        data[i % data.length].capital;

      // const flagCtns = document.querySelectorAll(".flag-ctn");
      // flag[i].src = data[i].flag;
      // countryName[i].textContent = data[i].name;
      // popNum[i].textContent = data[i].population.toLocaleString();
      // regName[i].textContent = data[i].region;
      // capName[i].textContent = data[i].capital;

      // get clicked counttry index to display in the country.html
      country.forEach((county, index) => {
        county.addEventListener("click", () => {
          localStorage.setItem("countryIndex", index);
        });
      });

      // Search for countries
      searchInput.addEventListener("input", () => {
        let searchItem = searchInput.value.toLowerCase();
        Array.from(country).forEach(function (item) {
          let itemText = item.children[1].children[0].textContent.toLowerCase();
          const regex = new RegExp(`${searchItem}`);
          if (regex.test(itemText)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });

      // Filter countries by regions
      radioCtn.forEach((radio) => {
        radio.addEventListener("click", () => {
          let searchReg = radio.children[1].textContent;
          for (let i = 0; i < country.length; i++) {
            let regNam =
              country[i].children[1].children[1].children[1].children[0]
                .textContent;
            if (regNam === searchReg) {
              country[i].style.display = "flex";
            } else {
              country[i].style.display = "none";
            }
          }
        });
      });

      radioCtn[0].addEventListener("click", () => {
        country.forEach((county) => {
          county.style.display = "flex";
        });
      });
    }
  });
