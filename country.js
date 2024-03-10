const body = document.querySelector("body");
const nav = document.querySelector("nav");
const themeIcon = document.querySelector(".theme-icon > path");
const navRight = document.querySelector(".nav-right");
const countryFlag = document.querySelector(".country-flag");
const countryName = document.querySelector(".name");
const countryInfos = document.querySelector(".country-infos");
const subHeadSpan = document.querySelectorAll(".subh span");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".pop-num");
const region = document.querySelector(".reg-name");
const subRegion = document.querySelector(".sub-reg");
const capital = document.querySelector(".cap");
const domain = document.querySelector(".domain");
const currency = document.querySelector(".currency");
const lang = document.querySelector(".lang");
const neighbors = document.querySelector(".neighbors");
const neighbor = document.querySelectorAll(".neighbor");
const backBtn = document.querySelector(".back-btn");
const iconBack = document.querySelector(".icon-back");

// functions
function toLightTheme() {
  themeIcon.style.fill = "transparent";
  themeIcon.style.stroke = "black";
  themeIcon.style.strokeWidth = "25px";
  body.style.backgroundColor = "var(--Very-Light-Gray-Light-Mode-Background)";
  nav.style.backgroundColor = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  nav.style.color = "var(--Very-Dark-Blue-Light-Mode-Text)";
  countryInfos.style.color = "var(--Very-Dark-Blue-Light-Mode-Text)";
  subHeadSpan.forEach((subh) => {
    subh.style.color = "var(--Very-Dark-Blue-Light-Mode-Text)";
  });
  backBtn.style.backgroundColor =
    "var(--Very-Light-Gray-Light-Mode-Background)";
  backBtn.style.color = "var(--Very-Dark-Blue-Light-Mode-Text)";
  iconBack.style.filter = "brightness(0)";
}

function toDarkTheme() {
  themeIcon.style.fill = "white";
  themeIcon.style.stroke = "unset";
  themeIcon.style.strokeWidth = "unset";
  body.style.backgroundColor = "var(--Very-Dark-Blue-Dark-Mode-Background)";
  nav.style.backgroundColor = "var(--Dark-Blue-Dark-Mode-Elements)";
  nav.style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  countryInfos.style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  subHeadSpan.forEach((subh) => {
    subh.style.color = "rgb(216, 216, 216)";
  });
  backBtn.style.backgroundColor = "var(--Dark-Blue-Dark-Mode-Elements)";
  backBtn.style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
  iconBack.style.filter = "brightness(1)";
}

navRight.addEventListener("click", () => {
  if (themeIcon.style.fill === "transparent") {
    toDarkTheme();
  } else {
    toLightTheme();
  }
});

// This array holds the language names
let langArr = [];

// holds array of border countries
let bordArr = [];

let countryIndex = localStorage.countryIndex;
console.log(countryIndex);

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data[countryIndex]);

    countryFlag.src = data[countryIndex].flag;
    countryName.textContent = data[countryIndex].name;
    capital.textContent = data[countryIndex].capital;
    subRegion.textContent = data[countryIndex].subregion;
    region.textContent = data[countryIndex].region;
    population.textContent = data[countryIndex].population.toLocaleString();
    nativeName.textContent = data[countryIndex].nativeName;
    domain.textContent = data[countryIndex].topLevelDomain.join(" ");
    currency.textContent = data[countryIndex].currencies[0].name;
    // This inserts the language names
    data[countryIndex].languages.forEach((language) => {
      langArr.push(language.name);
      lang.textContent = langArr.join(", ");
    });

    data[countryIndex].borders.forEach((border) => {
      let aBorder = document.createElement("button");
      aBorder.classList.add("neighbor");
      aBorder.textContent = `${border}`;
      neighbors.append(aBorder);

      aBorder.addEventListener("click", () => {
        neighbors.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          if (data[i].alpha3Code === aBorder.textContent) {
            countryFlag.src = data[i].flag;
            countryName.textContent = data[i].name;
            capital.textContent = data[i].capital;
            subRegion.textContent = data[i].subregion;
            region.textContent = data[i].region;
            population.textContent = data[i].population.toLocaleString();
            nativeName.textContent = data[i].nativeName;
            domain.textContent = data[i].topLevelDomain.join(" ");
            currency.textContent = data[i].currencies[0].name;
            // This inserts the language names
            data[i].languages.forEach((language) => {
              langArr.push(language.name);
              lang.textContent = langArr.join(", ");
            });

            data[i].borders.forEach((border) => {
              let aBorder = document.createElement("button");
              aBorder.classList.add("neighbor");
              aBorder.textContent = `${border}`;
              neighbors.append(aBorder);
            });
          }
        }
        console.log(aBorder.textContent);
      });
    });
  });
