class Rocket{
    constructor( 
        fuleType,
        weight,
        power,
        ){
            this.fuleType = fuleType;
            this.weight = weight;
            this.power = power;
        }

        launch(){
            console.log("Launch sequence started");
            alert("Warning! Launch Sequence Started");
            return true;
        }

        refule(){
            console.log(" refule sequence started");
            alert("increased air control and fall imapact reduced");
            return true;
        }
        detachThruster(thrusterID){
            console.log("thrusters detached");
            alert("Thruster " + this.thrusterID + " has been successfully detached");
            return true;
        }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts,
    ){
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft =spaceCraft;
        this.numOfAstronauts =numOfAstronauts;
    }

    displaymissionParameters(){
        alert("The space craft " + this.spaceCraft + " with " + this.numOfAstronauts + " astronauts will launch on the " + 
        this.launchDateDay + " of " + this.launchDateMonth + " " 
        + this.launchDateYear + " with an oxygen level of " + this.oxyLvl + "%");
    }

    launch(){
        alert("Launch sequence for " + this.spaceCraft + " has begun!");
    }
}

function displayFall(){
    console.log("displayFall started");
    fallLaunch.displaymissionParameters();
}

function displaySpring(){
    console.log("displaySpring started");
    springLaunch.displaymissionParameters();
}