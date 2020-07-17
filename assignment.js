
//function for feetToMile problem

function feetToMile(feet){
    //checking if input is valid
    if (feet <= 0 && isNaN(feet) === true){
        //if not valid than achkwoledging the user
        console.log("invalid input");
    }
    // if input is valid than executing the main program
    else{
        // variable to return
        // geting the mile value
        var mile = feet / 5280;
        //formatting the output to make it easy to look at
        mile = mile.toFixed(2);
        //then returning the mile variable
        return mile;
    }
    
}

//function for the woodCalculator problem

function woodCalculator(chair, table, bed){
    //checking if input is valid
    if (chair <= 0 || table <= 0 || bed <= 0){
        //if not valid than achkwoledging 
        console.log("invalid input");
    }
    // if input is valid than executing the main program
    else{
        //multypling the cubic centemetre wood needed with the the chair argument 
        var chairWoodNeed = 1 * chair;
        //multypling the cubic centemetre wood needed with the the table argument
        var tableWoodNeed = 3 * table;
        //multypling the cubic centemetre wood needed with the the bed argument
        var bedWoodNeed = 5 * bed;
        //adding all the woods needed
        var allFurniture = chairWoodNeed + tableWoodNeed + bedWoodNeed; 
        //then returning the value
        return allFurniture;
    }
    

}

// function for brickCalculator problem

function brickCalculator(buidingStories){
    //checking if input is valid
    if (buidingStories > 0 && typeof(buidingStories) === 'number'){
        //variable for brick per feet
        var brickPerFeet = 1000;
        //variable for every story in 1 to 10 
        //it is used for measuring the bricks in every story 
        var storyBrickNeeded = 15 * brickPerFeet;
        //variable to return
        var bricksNeeded = 0;
        //this variable is used in the second and third condition
        var oneToTenStoryBricks = 10 * storyBrickNeeded;
        // condition for 1 to 10 stories
        if (buidingStories <= 10){
            
            bricksNeeded = buidingStories * storyBrickNeeded;
            //returning bricksneeded
            return bricksNeeded;
        }
        // condition for 11 to 20 stories
        else if (buidingStories > 10 && buidingStories <= 20){
            
            var minusStories = buidingStories - 10;
            
            bricksNeeded = oneToTenStoryBricks + (minusStories * 12 * brickPerFeet); 
            
            //returning bricksneeded
            return bricksNeeded;
        }

        // condition for 20 to infinite stories
        else if (buidingStories > 20){
            
            minusStories = buidingStories - 20;
            bricksNeeded = oneToTenStoryBricks + (20 * 12 * brickPerFeet) + (minusStories * 20 * brickPerFeet);
            //returning bricksneeded
            return bricksNeeded;
        }
    }
    //if not valid than achkwoledging the user
    else{
        console.log("invalid input");
    }
    
}



//function for tinyFriend problem
function tinyFriend(friendsNames){
    //variable to return
    var tinyname = friendsNames[0];
    //checking if input is valid
    if (friendsNames.length > 0){
        //loop for checking the array
        for ( var iterater = 1; iterater < friendsNames.length; iterater++){
            //names that are going to be iterated
            var iterableName = friendsNames[iterater];
            //if iterable name's length is smaller than 
            //the current tiny name than switching the tiny name
            if ( iterableName.length < tinyname.length ){
                tinyname = iterableName;
            }
            
        }
        return tinyname;
    }
    //if not valid than achkwoledging the user
    else{
        console.log("give some input");
    }
}


