//Buttons to Feed, Turn off lights, and Play
const buttonH = document.getElementById('buttonH').addEventListener('click', lowerHunger);
const buttonS = document.getElementById('buttonS').addEventListener('click', lowerSleepiness);
const buttonB = document.getElementById('buttonB').addEventListener('click', lowerBoredom);

//Digimon object
const digimon = {
age: 0,
hunger: 0,
sleepiness: 0,
boredom: 0,
alive: true,
image1: "https://wikimon.net/images/2/27/Koromon_vpet_dv.gif",
image2: "https://wikimon.net/images/2/28/Agumon_vpet_dv.gif",
image3: "https://wikimon.net/images/5/5c/Greymon_vpet_dv.gif",
image4: "https://wikimon.net/images/3/31/Metalgreymon_vpet_dv.gif" 
}

//Select the HTML that has the temagitchi image
let digimonName = document.getElementById("tomagotchi-name")
let digimonImage = document.getElementById("tomagotchiImg")
const gEl = document.getElementById("game-over")
const hEl = document.getElementById("hDisplay")
const sEl = document.getElementById("sDisplay")
const bEl = document.getElementById("bDisplay")
const aEl = document.getElementById("aDisplay")

function counter() {
    if(digimon.alive === true) {
        const digimonInterval = setInterval(() => {
        
        //Incremental increase to all stats with each interval
        digimon.age +=1
        digimon.hunger +=1
        digimon.sleepiness +=1
        digimon.boredom +=1

        //Displays/updates stats to HTML elements
        hEl.innerText = "Hunger: " + digimon.hunger;
        sEl.innerText = "Sleepiness: " + digimon.sleepiness;
        bEl.innerText = "Boredom: " + digimon.boredom;
        aEl.innerText = "Age: " + digimon.age;
        
        //Sets the sprite for the img tag based on age
        if (digimon.age < 10) {
            digimonImage.src = digimon.image1
        }
        else if (digimon.age >= 10 && digimon.age <20) {
            digimonImage.src = digimon.image2
        }
        else if (digimon.age >= 20 && digimon.age <30) {
            digimonImage.src = digimon.image3
        }
        else if (digimon.age >= 30 ) {
            digimonImage.src = digimon.image4
        }

        //Establishes death condition
        if (digimon.hunger === 10 || digimon.sleepiness === 10 || digimon.boredom === 10) {
           digimonDeath(digimonInterval);
        }
        }, 6000)
 
    }
}
init();
//Initialize interval timer
 function init() {
    counter();
}



//Lower stat functions, each -=1
function lowerHunger() {
    digimon.hunger -= 1
    console.log(digimon.hunger)
}
function lowerSleepiness() {
    digimon.sleepiness -= 1
    console.log(digimon.sleepiness)
}
function lowerBoredom() {
    digimon.boredom -= 1
    console.log(digimon.boredom)
}

//Function to restart game
let refresh = () => {
    location.reload()
}

//Function to stop interval and reset stats
let digimonDeath = (digimonInterval) => {
    hEl.innerText = "Oops! Your Digimon has expired."
        digimon.age = 0
        digimon.hunger = 0
        digimon.sleepiness = 0
        digimon.boredom = 0
        digimon.alive = false
    clearInterval(digimonInterval);
};
