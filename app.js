"use strict";
console.log("yo");

const form = document.getElementById("placeForm");

const allPlaces = [];

function Places(name) {
  this.name = name;
  this.timesSelected = 0;
  allPlaces.push(this);
}

const mountain = new Places("mountain");
const river = new Places("river");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const mountainSelected = event.target.mountain.checked;
  const riverSelected = event.target.river.checked;

  const inputSelection = [mountainSelected, riverSelected];

  for (let i = 0; i < allPlaces.length; i++) {
    if (inputSelection[i]) {
      allPlaces[i].timesSelected++;
    }
  }

  form.reset();
  console.log(allPlaces);
});
