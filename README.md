# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./Screenshot%202024-06-11%20at%202.04.15%20PM.png)

### Links

- Solution URL: [Click to go to Solution URL](https://www.frontendmentor.io/solutions/rest-api-country-Z96hwofbuz)
- Live Site URL: [Live site URL here](https://all-countries-bigwills27.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

```js
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
```

## Author

- Website - [BigWills27](https://github.com/Bigwills27/)
- Frontend Mentor - [@BigWills27](https://www.frontendmentor.io/profile/Bigwills27)
- Twitter - [@BolutifeAjbo](https://www.twitter.com/bolutifeAjbo)
