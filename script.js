const SUPERHERO_TOKEN = "5d376d65410bc28132b8e8be1f954582";
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const body = document.querySelector("body");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const hero = document.getElementById("hero");
const notFoundDiv = document.getElementById("notFound");
const button_div = document.querySelectorAll(".button-div");
const inputs = document.querySelector(".inputs");
const appear = document.querySelector(".appear");

function getSuperHero(id) {
  fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((json) => {
      const superHero = json;
      notFoundDiv.innerText = "";
      ShowHeroInfo(superHero);
    });
}

const Emojis = {
  combat: "⚔️",
  durability: "🏋️‍♂️",
  intelligence: "🧠",
  power: "⚡",
  speed: "🚀",
  strength: "💪",
};

let nameOfHero = "";
const ShowHeroInfo = (stats) => {
  nameOfHero = stats.name;
  if (stats.appearance.gender.toLowerCase() !== "female") {
    const name = ` <h1>${stats.name} </h1>`;
    const image = ` <img src=${stats.image.url} >`;
    const s = Object.keys(stats.powerstats)
      .map((stat) => {
        return `
            <p>${Emojis[stat]}${stat}: ${stats.powerstats[stat]} </p>
        `;
      })
      .join("");
    hero.innerHTML = `${name} ${image} ${s}`;
  } else {
    hero.innerHTML = "Hero gender is Female i cant show you her";
  }

  //   return` ${name} ${image} ${s.join("")}`  ;
};

const randomId = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};

// const herosName = [

//   "War Machine",
//   "Kylo Ren",
//   "Blue Beetle III",
//   "Winter Soldier",
// ];

searchButton.onclick = async () => {
  const HeroName = searchInput.value;
  let notFound = "Not found";
  let foundName = notFound;
  //   console.log(foundName);

  try {
    await fetch(`${BASE_URL}/search/${HeroName}`)
      .then((res) => res.json())
      .then((json) => {
        foundName = json.results[0].name;
        ShowHeroInfo(json.results[0]);
      });
  } catch (error) {
    console.log(error.message);
  }

  if (foundName != notFound) {
    notFoundDiv.innerText = "";
  } else {
    notFoundDiv.innerText = "Not found...";
  }
};
const heros_inputs = document.querySelector(".heros-inputs");
// const buttonArray = Array.from(button_div);
button_div.forEach((button) => {
  button.onclick = () => {
    searchInput.value = button.value;
  };
});

searchInput.addEventListener("click", () => {
  // heros_inputs.classList.remove('heros-inputs')
  // heros_inputs.classList.add('heros-inputs2')
  if (heros_inputs.className == "heros-inputs") {
    heros_inputs.className = heros_inputs.className.replace(
      "heros-inputs",
      "heros-inputs2"
    );
  }
  if (searchInput.id == "searchInput" && searchButton.id == "searchButton") {
    searchInput.id = "searchInput2";
    searchButton.id = "searchButton2";
  }
});

// searchInput.addEventListener("blur", () => {
//   heros_inputs.className = heros_inputs.className.replace(
//     "heros-inputs2",
//     "heros-inputs"
//   );
//   if (
//     searchInput.id == "searchInput2" &&
//     searchButton.id == "searchButton2"
//   ) {
//     searchInput.id = "searchInput";
//     searchButton.id = "searchButton";
//   }
// });


  // heros_inputs.addEventListener("mouseenter", () => {
  //   heros_inputs.className = heros_inputs.className.replace(
  //     "heros-inputs2",
  //     "heros-inputs"
  //   );
  //   if (
  //     searchInput.id == "searchInput2" &&
  //     searchButton.id == "searchButton2"
  //   ) {
  //     searchInput.id = "searchInput";
  //     searchButton.id = "searchButton";
  //   }
  // });


// button_div.forEach((b) => {
  heros_inputs.addEventListener("click", () => {
    // heros_inputs.classList.remove('heros-inputs')
    // heros_inputs.classList.add('heros-inputs2')
    heros_inputs.className = heros_inputs.className.replace(
      "heros-inputs2",
      "heros-inputs"
    );
    if (
      searchInput.id == "searchInput2" &&
      searchButton.id == "searchButton2"
    ) {
      searchInput.id = "searchInput";
      searchButton.id = "searchButton";
    }
  });
// });
appear.addEventListener("mouseover", () => {
  if (hero.id == "hero") {
    hero.id = "hero2";
  }
  if (appear.className == "appear") {
    appear.className = appear.className.replace("appear", "appear2");
  }
});

appear.addEventListener("click", () => {
  if (hero.id == "hero") {
    hero.id = "hero2";
  }
  getSuperHero(randomId());
  searchInput.value = `Previous hero: ${nameOfHero}`;
});

const change = document.querySelector(".change");

change.addEventListener("click", () => {
  getSuperHero(randomId());
  searchInput.value = `Previous hero: ${nameOfHero}`;
});

appear.addEventListener("mouseout", () => {
  if (hero.id == "hero2") {
    hero.id = "hero";
  }
});

hero.addEventListener("mouseover", () => {
  if (appear.className == "appear") {
    appear.className = appear.className.replace("appear", "appear2");
  }
});

hero.addEventListener("mouseout", () => {
  if (appear.className == "appear2") {
    appear.className = appear.className.replace("appear2", "appear");
  }
});

const AllHeros = [
  "Abin Sur",
  "Abomination",
  "Abraxas",
  "Absorbing Man",
  "Agent Zero",
  "Adam Strange",
  "Adam Monroe",
  "Air-Walker",
  "Ajax",
  "Agent Bob",
  "Alfred Pennyworth",
  "Alien",
  "Ando Masahashi",
  "Alex Woolsly",
  "Alex Mercer",
  "Bantam",
  "Bane",
  "Banshee",
  "Battlestar",
  "Batman",
  "Beast Boy",
  "Beast",
  "Cable",
  "Cameron Hicks",
  "Cannonball",
  "Captain America",
  "Captain Atom",
  "Captain Cold",
  "Captain Britain",
  "Captain Epic",
  "Cypher",
  "Corsair",
  "Darkhawk",
  "Darkside",
  "Darkseid",
  "Darkman",
  "Darth Maul",
  "Dash",
  "Data",
  "Destroyer",
  "Deathstroke",
  "Diamondback",
  "DL Hawkins",
  "Elle Bishop",
  "Elongated Man",
  "Emma Frost",
  "Enchantress",
  "Energy",
  "Ego",
  "ERG-1",
  "Fighting Spirit",
  "Feral",
  "Fabian Cortez",
  "Falcon",
  "Fallen One II",
  "Faora",
  "Firebird",
  "Fixer",
  "Flash",
  "Firestar",
  "Frigga",
  "Han Solo",
  "Hancock",
  "Harley Quinn",
  "Harry Potter",
  "Havok",
  "Hawk",
  "Hawkeye",
  "Hawkeye II",
  "Hawkgirl",
  "Hawkman",
  "Hawkwoman",
  "Hawkwoman II",
  "Mister Fantastic",
  "Mimic",
  "Mister Freeze",
  "Minna Murray",
  "Misfit",
  "Michelangelo",
  "Miss Martian",
  "Metron",
  "Metamorpho",
  "Meteorite",
  "Micro Lad",
  "Metallo",
  "Mephisto",
  "Micah Sanders",
  "Mera",
  "Medusa",
  "Match",
  "Meltdown",
  "Master Chief",
  "Maxima",
  "Maya Herrera",
  "Maverick",
  "Matt Parkman",
  "Master Brood",
  "Man-Wolf",
  "Mandarin",
  "Mantis",
  "Martian Manhunter",
  "Marvel Girl",
  "Mister Knife",
  "Mister Mxyzptlk",
  "Red Hulk",
  "Red Mist",
  "Red Robin",
  "Red Skull",
  "Red Tornado",
  "Redeemer III",
  "Redeemer II",
  "Machine Man",
  "Red Arrow",
  "Rey",
  "Razor-Fist II",
  "Renata Soliz",
  "Red Hood",
  "Rhino",
  "Rick Flag",
  "Riddler",
  "Rip Hunter",
  "Ripcord",
  "Robin",
  "Robin II",
  "Robin III",
  "Robin V",
  "Robin VI",
  "Rocket Raccoon",
  "Rogue",
  "Ronin",
  "T-1000",
  "T-800",
  "T-850",
  "T-X",
  "Taskmaster",
  "Thanos",
  "The Cape",
  "Tempest",
  "The Comedian",
  "Thing",
  "Thor",
  "Thor Girl",
  "Thunderbird II",
  "Thunderbird III",
  "Thunderbird",
  "Thunderstrike",
  "Sabretooth",
  "Sasquatch",
  "Sage",
  "Sauron",
  "Scarecrow",
  "Scarlet Spider II",
  "Sebastian Shaw",
  "Scorpia",
  "Scorpion",
  "Shadow King",
]

AllHeros.map((hero) => {
  inputs.innerHTML += `
    <div><input type="button" class="button-div" value="${hero}"></div>
    `
});
