//Make a tamagotchi object
const digimon = {
age: 0,
hunger: 0,
sleepiness: 0,
boredom: 0,
image1: "https://wikimon.net/images/2/27/Koromon_vpet_dv.gif",
image2: "https://wikimon.net/images/2/28/Agumon_vpet_dv.gif",
image3: "https://wikimon.net/images/5/5c/Greymon_vpet_dv.gif",
image4: "https://wikimon.net/images/3/31/Metalgreymon_vpet_dv.gif" 
}

//Select the HTML that has the temagitchi image
let digimonImage = document.getElementById("tomagotchiImg") 
const hEl = document.getElementById("hDisplay")
const sEl = document.getElementById("sDisplay")
const bEl = document.getElementById("bDisplay")
const aEl = document.getElementById("aDisplay")

// The numbers go up
function counter() {
    //make the digimon stats go up by 1 every x number of seconds
    setInterval(() => {
        digimon.age +=1
        digimon.hunger +=1
        digimon.sleepiness +=1
        digimon.boredom +=1
        //console.log things to see what's happening
        //console.log(digimon)
        hEl.innerText = "Hunger: " + digimon.hunger;
        sEl.innerText = "Sleepiness: " + digimon.sleepiness;
        bEl.innerText = "Boredom: " + digimon.boredom;
        aEl.innerText = "Age: " + digimon.age;
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
    }, 3000)

}
init();
//An init to start your timer(s)
 function init() {
    counter()
}

//Add some buttons
const buttonH = document.getElementById('buttonH').addEventListener('click', lowerHunger);
const buttonS = document.getElementById('buttonS').addEventListener('click', lowerSleepiness);
const buttonB = document.getElementById('buttonB').addEventListener('click', lowerBoredom);

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