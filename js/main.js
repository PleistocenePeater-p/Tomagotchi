//Make a tamagotchi object
const digimon = {
age: 0,
hunger: 0,
sleepiness: 0,
boredom: 0,
image1: "https://wikimon.net/images/2/27/Koromon_vpet_dv.gif",
image2: "https://wikimon.net/images/2/28/Agumon_vpet_dv.gif",
image3: "https://wikimon.net/images/2/27/Koromon_vpet_dv.gif",
image4: "https://wikimon.net/images/3/31/Metalgreymon_vpet_dv.gif" 
}

//Select the HTML that has the temagitchi image
const digimonImage = queryselector("tomagotchiImg")

// The numbers go up
function counter() {
//make the digimon stats go up by 1 every x number of seconds
setInterval(() => {
  digimon.age +=1
  digimon.hunger +=1
  digimon.sleepiness +=1
  digimon.boredom +=1
  //console.log things to see what's happening
  console.log(digimon)
    }), 5000
    if (digimon.age < 10) {
      digimonImage.src(digimon.image1)
    }
}

//An init to start your timer(s)
 function init() {
    counter()
}

//Add some buttons
const buttonH = queryselector('buttonH')
buttonH.addeventlistener('click', lowerHunger)

const buttonS = queryselector('buttonS')
buttonS.addeventlistener('click', lowerSleepiness)

const buttonB = queryselector('buttonB')
buttonB.addeventlistener('click', lowerBoredom)


//Lower stat functions, each -=1
function lowerHunger() {
    digimon.hunger -= 1
}
function lowerSleepiness() {
    digimon.sleepiness -= 1
}
function lowerBoredom() {
    digimon.boredom -= 1
}