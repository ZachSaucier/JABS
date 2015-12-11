// Attractive random colors from https://github.com/davidmerfield/randomColor
!function(r,e){if("function"==typeof define&&define.amd)define([],e);else if("object"==typeof exports){var n=e();"object"==typeof module&&module&&module.exports&&(exports=module.exports=n),exports.randomColor=n}else r.randomColor=e()}(this,function(){function r(r){var e=o(r.hue),n=s(e);return 0>n&&(n=360+n),n}function e(r,e){if("random"===e.luminosity)return s([0,100]);if("monochrome"===e.hue)return 0;var n=u(r),t=n[0],a=n[1];switch(e.luminosity){case"bright":t=55;break;case"dark":t=a-10;break;case"light":a=55}return s([t,a])}function n(r,e,n){var t=a(r,e),o=100;switch(n.luminosity){case"dark":o=t+20;break;case"light":t=(o+t)/2;break;case"random":t=0,o=100}return s([t,o])}function t(r,e){switch(e.format){case"hsvArray":return r;case"hslArray":return v(r);case"hsl":var n=v(r);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var t=v(r);return"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+Math.random()+")";case"rgbArray":return h(r);case"rgb":var a=h(r);return"rgb("+a.join(", ")+")";case"rgba":var o=h(r);return"rgba("+o.join(", ")+", "+Math.random()+")";default:return c(r)}}function a(r,e){for(var n=i(r).lowerBounds,t=0;t<n.length-1;t++){var a=n[t][0],o=n[t][1],u=n[t+1][0],s=n[t+1][1];if(e>=a&&u>=e){var c=(s-o)/(u-a),f=o-c*a;return c*e+f}}return 0}function o(r){if("number"==typeof parseInt(r)){var e=parseInt(r);if(360>e&&e>0)return[e,e]}if("string"==typeof r&&g[r]){var n=g[r];if(n.hueRange)return n.hueRange}return[0,360]}function u(r){return i(r).saturationRange}function i(r){r>=334&&360>=r&&(r-=360);for(var e in g){var n=g[e];if(n.hueRange&&r>=n.hueRange[0]&&r<=n.hueRange[1])return g[e]}return"Color not found"}function s(r){if(null===d)return Math.floor(r[0]+Math.random()*(r[1]+1-r[0]));var e=r[1]||1,n=r[0]||0;d=(9301*d+49297)%233280;var t=d/233280;return Math.floor(n+t*(e-n))}function c(r){function e(r){var e=r.toString(16);return 1==e.length?"0"+e:e}var n=h(r),t="#"+e(n[0])+e(n[1])+e(n[2]);return t}function f(r,e,n){var t=n[0][0],a=n[n.length-1][0],o=n[n.length-1][1],u=n[0][1];g[r]={hueRange:e,lowerBounds:n,saturationRange:[t,a],brightnessRange:[o,u]}}function l(){f("monochrome",null,[[0,0],[100,0]]),f("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),f("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),f("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),f("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),f("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),f("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),f("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function h(r){var e=r[0];0===e&&(e=1),360===e&&(e=359),e/=360;var n=r[1]/100,t=r[2]/100,a=Math.floor(6*e),o=6*e-a,u=t*(1-n),i=t*(1-o*n),s=t*(1-(1-o)*n),c=256,f=256,l=256;switch(a){case 0:c=t,f=s,l=u;break;case 1:c=i,f=t,l=u;break;case 2:c=u,f=t,l=s;break;case 3:c=u,f=i,l=t;break;case 4:c=s,f=u,l=t;break;case 5:c=t,f=u,l=i}var h=[Math.floor(255*c),Math.floor(255*f),Math.floor(255*l)];return h}function v(r){var e=r[0],n=r[1]/100,t=r[2]/100,a=(2-n)*t;return[e,Math.round(n*t/(1>a?a:2-a)*1e4)/100,a/2*100]}var d=null,g={};l();var m=function(a){a=a||{},a.seed&&!d&&(d=a.seed);var o,u,i;if(null!==a.count&&void 0!==a.count){var s=a.count,c=[];for(a.count=null;s>c.length;)c.push(m(a));return a.count=s,d=a.seed&&s!==c.length?a.seed:null,c}return o=r(a),u=e(o,a),i=n(o,u,a),t([o,u,i],a)};return m});

// Create an agent object
    // Determined by type:
        // Type name
        // Type ID
        // Color
        // Movement speed
        // Vision radius
        // Movement function - includes if should avoid or go towards others
    
    // Not determined by type:
        // Location
        // ID (used for easy lookup in clusters)


// Place the agent within the grid, update the grid, and return the position
function assignLoc(agent, numTries) {
    // Generate a random location
    var x = Math.floor(Math.random() * grid.length),
        y = Math.floor(Math.random() * grid[0].length),
        loc = {"x": x, "y": y};
    
    // Count how many times this function has ran for this agent
    numTries = numTries || 0;
    
    if(grid[x][y] === EMPTY) { // The space isn't taken
        // Update the globals
        updateLoc(agent, loc);
        
        return loc;
    } else {
        if(numTries < gridCellNum)
            assignLoc(agent, ++numTries); // Try again
        else
            alert("Didn't find a place to place an agent before soon enough. Not adding this agent.");
    }
}

// Handler function to make removing agents semantic - not needed if updating location
function removeAgent(agent) {
    updateLoc(agent);
}

// Function to update which cluster an agent is in
function updateLoc(agent, toLoc) {
    // Catch improper arguments
    if(!agent) {
        console.log("An agent was not given to updateCluster.");
        return;
    }
    
    var fromLoc = agent.loc;
    
    var toClusterX,
        toClusterY,
        fromClusterX,
        fromClusterY;
    
    // If the locations exist, update the grid and get the cluster for them
    if(toLoc) {
        agent.loc = toLoc;
        grid[toLoc.x][toLoc.y] = agent.typeID;
        toClusterX = Math.floor(toLoc.x / clusterSize),
        toClusterY = Math.floor(toLoc.y / clusterSize);
    }
    if(fromLoc) {
        grid[fromLoc.x][fromLoc.y] = EMPTY;
        fromClusterX = Math.floor(fromLoc.x / clusterSize),
        fromClusterY = Math.floor(fromLoc.y / clusterSize);
    }
    
    // If the position is the same, don't do anything
    if(toClusterX && fromClusterX // Make sure both exist
    && toClusterX === fromClusterX // See if they're the same
    && toClusterY === fromClusterY)
        return;
    
    // Add the new position to the proper cluster
    if(toClusterX >= 0)
        clusters[toClusterX][toClusterY].push(agent);
    
    // Remove the old agent if it exists
    if(fromClusterX >= 0) {
        var oldCluster = clusters[fromClusterX][fromClusterY];
        if(oldCluster) { // Check to see if the cluster exists
            // See if the agent's ID is in the cluster
            var index = oldCluster.map(function(e) { return e.id; }).indexOf(agent.id);
            if(index != -1)
                oldCluster.splice(index, 1);
        }
    }
}

// Function to add random variability to the given position using the given movement speed
function addLocVar(moveLoc, speed, numTries) {
    numTries = numTries || 0;

    // Make sure it's in bounds to start with
    if(moveLoc.x >= gridXSize)
        moveLoc.x = gridXSize - 1;
    if(moveLoc.x < 0)
        moveLoc.x = 0;
    if(moveLoc.y >= gridYSize)
        moveLoc.y = gridYSize - 1;
    if(moveLoc.y < 0)
        moveLoc.y = 0;

    // Generate a new position around the given location using the speed and a normal distribution centered at 0
    moveLoc.x = moveLoc.x + Math.round(speed * genNormalizedVal());
    moveLoc.y = moveLoc.y + Math.round(speed * genNormalizedVal());

    // Make sure that's in bounds again
    if(moveLoc.x < gridXSize
     && moveLoc.x >= 0
     && moveLoc.y < gridYSize
     && moveLoc.y >= 0
     && grid[moveLoc.x][moveLoc.y] === EMPTY) { // The space is valid
        return moveLoc; // Return the location
    } else {
        if(numTries < gridCellNum) 
            moveLoc = addLocVar(moveLoc, speed, ++numTries); // Try again
        else 
            console.log("Didn't find a place to place an agent before soon enough. Not moving this agent.");
    }

    return moveLoc;
}

// Function to set the move location (saves space later)
function determineLoc(loc, distance, slope, sign) {
    var move = {"x": 0, "y": 0};

    move.x = loc.x + sign * distance / Math.sqrt(1 + Math.pow(slope, 2));
    move.y = loc.y + sign * distance * slope / Math.sqrt(1 + Math.pow(slope, 2));

    return move;
}


// Function to create a type profile including everything found in the agent object above
function createType(numTypes) {
    var type = function() {
        this.color = randomColor(); // randomColor({hue: 'blue'});

        // Generate its movement speed to determine how far it can travel each round
        this.moveSpeed = Math.round(5 * (genNormalizedVal() + 1) / 2) + 1; // Normalized val between 1 and 5
        
        // Generate it's vision range, used in the detecting other agents
        this.visRange = Math.round(10 * (genNormalizedVal() + 1) / 2) + 1; // Normalized val between 1 and 10
        
        // Generate an object of move behaviors on a per-type basis
        this.moveBehaviors = genMoveBehaviors(numTypes);

        // Move the agent based on the moveBehaviors object, agents around, and variability
        this.move = function() {
            // Detect the other agents around
            var thisAgent = this,
                otherAgents = checkRadius(this.loc, this.visRange),
                moves = []; // Keep track of all the requested move locations

            // Based on the behaviors already determined and the agents around, determine where to move
            [].forEach.call(otherAgents, function(agent, i) {

                var behavior = thisAgent.moveBehaviors[agent.typeID].type,
                    slopeToAgent = findSlope(thisAgent.loc, agent),
                    loc = thisAgent.loc, // The current position
                    goingPosX = agent.x - thisAgent.loc.x > 0 ? true : false,
                    distance = thisAgent.moveSpeed, // The number of spaces to go - maxes at thisAgent.moveSpeed
                    move = {}; // The location desired to go to based on agent being checked

                // Uses some trig to calc the next position from http://math.stackexchange.com/a/656525/174882
                if(behavior === LOVE) {
                    // Go with the slope in the dir of goingPosX
                    var sign = goingPosX ? 1 : -1;
                    
                    move = determineLoc(loc, distance, slopeToAgent, sign);
                } else if(behavior === HATE) {
                    // Go with the slope in the opp dir of goingPosX
                    var sign = goingPosX ? -1 : 1;
                    
                    move = determineLoc(loc, distance, slopeToAgent, sign);
                } else if(behavior === FAVOR) {
                    // Randomly generate a path more or less towards the agent
                    var angle = toDegrees(Math.atan(slopeToAgent)); // The angle to the agent
                    if(!goingPosX)
                        angle += 180; // Make it go the opposite way if the slope is negative
                    angle += 180 * Math.random() - 90; // Go a random degree within 90 of the original angle in either direction
                    var newSlope = toRadians(Math.sin(angle));
                    
                    //distance = thisAgent.moveSpeed; // Need to make more random

                    var sign = goingPosX ? 1 : -1;
                    
                    move = determineLoc(loc, distance, newSlope, sign);
                } else if(behavior === AVOID) {
                    // Randomly generate a path more or less away from the agent
                    var angle = toDegrees(Math.atan(slopeToAgent)); // The angle to the agent
                    if(!goingPosX)
                        angle += 180; // Make it go the opposite way if the slope is negative
                    angle += 180 * Math.random() - 90; // Go a random degree within 90 of the original angle in either direction
                    var newSlope = toRadians(Math.sin(angle));
                    
                    //distance = thisAgent.moveSpeed; // Need to make more random

                    var sign = goingPosX ? -1 : 1;
                    
                    move = determineLoc(loc, distance, newSlope, sign);
                } 
                // Ignore NEUTRAL

                if(move.x) {
                    move.x = Math.floor(move.x);
                    move.y = Math.floor(move.y);

                    if(move.x < 0)
                        move.x = 0;
                    if(move.y < 0)
                        move.y = 0;
                    if(move.x > grid.length)
                        move.x = grid.length - 1;
                    if(move.y > grid[0].length)
                        move.y = grid[0].length - 1;

                    move.weight = thisAgent.moveBehaviors[agent.typeID].weight;
                    
                    moves.push(move);
                }
            });

            // Average the move locations to get the actual move location
            var moveLoc = {"x": 0, "y": 0},
                totalWeight = 0; // Keeps track of the total weight of all moves to be applied

            if(moves.length >= 1) {
                [].forEach.call(moves, function(move, i) {
                    for(var i = 0; i < move.weight; i++) {
                        moveLoc.x += move.x;
                        moveLoc.y += move.y;
                    }
                    totalWeight += move.weight;
                });

                moveLoc.x = Math.floor(moveLoc.x / totalWeight);
                moveLoc.y = Math.floor(moveLoc.y / totalWeight);

            } else // Keep the same position if nothing around
                moveLoc = this.loc;


            // Add some variability to the location desired to go to
            this.loc = addLocVar(moveLoc, thisAgent.moveSpeed);
        }
    }
    return type;
}

// Find the slope of a line between two locations
function findSlope(loc1, loc2) {
    return (loc2.y - loc1.y) / (loc2.x - loc1.x);
}

// Convert radians to degrees
function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

// Convert degrees to radians
function toRadians(angle) {
  return angle * (Math.PI / 180);
}

// The general movement behaviors
var HATE = 0,    // Go directly away
    AVOID = 1,   // Go anywhere but directly toward
    NEUTRAL = 2, // Ignore it
    FAVOR = 3,   // Go anywhere but directly away
    LOVE = 4;    // Go directly toward

// Generate movement behaviors for the given type for all other types
// Returns an object with the the behavior and a weight given to it
function genMoveBehaviors(numTypes) {
    var behaviorArr = [];

    for(var i = 0; i < numTypes; i++) {
        var behavior = {};

        // Do something special if i === typeID?

        // Generate a number between 0 and 4 to match the movement behaviors
        behavior.type = Math.floor(5 * Math.random()); //Math.round(5 * (genNormalizedVal() + 1) / 2);

        // Generate a number between 1 and 5 to set priority to each 
        behavior.weight = Math.round(5 * (genNormalizedVal() + 1) / 2) + 1;

        behaviorArr.push(behavior);
    }

    return behaviorArr;
}


// Function to check radius around an area (inputs loc and radius)
function checkRadius(loc, r) {
    // The agents array to keep ones
    var agents = [],
        rsqrd = r * r;
    
    // Calculate the cluster the given location (agent) is in
    var clusterX = Math.floor(loc.x % clusterSize),
        clusterY = Math.floor(loc.y % clusterSize);
    
    // Compare the radius to the cluster size to see how many clusters need to be checked
    var clusterR = Math.ceil(r % clusterSize);
    
    // Check to see if locations of agents inside of the clusters are within the given radius
    for(var i = clusterX - clusterR; i < clusterX + clusterR; i++) {
        for(var j = clusterY - clusterR; j < clusterY + clusterR; j++) {
            if(clusters[i] && clusters[i][j]) { // Make sure the cluster exists
                // Save to a var for lookup saving
                var clusterToCheck = clusters[i][j];
                for(var k = 0; k < clusterToCheck.length; k++) { // Go through all agents in the cluster
                    var agent = clusterToCheck[k];
                    if((agent.loc.x != loc.x && agent.loc.y != loc.y) // If it's not the same agent
                    && Math.pow(loc.x - agent.loc.x, 2) + Math.pow(loc.y - agent.loc.y, 2) < rsqrd) // If it's within the radius, add it
                        agents.push({"x": agent.loc.x, "y": agent.loc.y, "typeID": agent.typeID});
                }
            }
        }
    }
    
    // Return the array of locations and type of any agents within the radius
    return agents;
}


// The global grid to keep track of agents - in the x/y format
var grid,
    gridXSize,
    gridYSize,
    gridCellNum,
    clusters, // Groups of cells used to improve efficiency in searching
    clusterSize, // Keeps track of how large each cluster is (square)
    EMPTY = 0;

// Initialize grid function
function createGrid(gridDimen) {
    gridXSize = gridDimen.x;
    gridYSize = gridDimen.y;
    gridCellNum = gridXSize * gridYSize;
    
    grid = new Array(gridXSize);
    clusters = new Array(Math.ceil(gridXSize / clusterSize));

    // Fill the xs
    for(var i = 0; i < gridXSize; i++) {
        var col = new Array(gridYSize);
        grid[i] = col;
        
        if(i % clusterSize === 0) {
            var clusterCol = new Array(Math.ceil(gridYSize / clusterSize));
            clusters[i / clusterSize] = clusterCol;
        }
        
        // Fill the ys
        for(var j = 0; j < gridYSize; j++) {
            grid[i][j] = EMPTY; // Make the cell empty
            
            if(i % clusterSize === 0 && j % clusterSize === 0)
                clusters[i / clusterSize][j / clusterSize] = []; // Start them all as empty
        }
    }
}

// Returns a number between -1 and 1 in a normalized (Gaussian) way using the central limit theorum
function genNormalizedVal() {
    return ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random() - 3)) / 3;
}

// Generate and return the number of agents
function genNumAgents() {
    // Get a number between 3 and 10 in a normalized way
    return Math.round(7 * (genNormalizedVal() + 1) / 2) + 3;
}

// Generate and return the number of types
function genNumTypes() {
    // Get a number between 1 and 5 in a normalized way
    return Math.round(5 * (genNormalizedVal() + 1) / 2) + 1;
}

// Generate the agent distribution per type
// Returns an array with the number of
function getAgentDistr(numAgents, numTypes) {
    // Store our distribution to be returned
    var distr = [];
    
    for(var i = 0; i < numTypes; i++) {
        var numType;
        
        // If it's the last one, give it the rest of the agents
        if(i + 1 == numTypes)
            numType = numAgents;
        else {
            // Make sure to leave some for the remaining types
            var numLeft = numAgents - (numTypes - i - 1);
            
            // Make sure there's at least 1, but randomly determine how many
            numType = Math.round(Math.random() * (numLeft - 1)) + 1;
        }
        
        // Add the number to our distribution and subtract it frmo the total
        distr.push(numType);
        numAgents -= numType;
    }
    return distr;
}

// Actually create the agents using the parameters given
function createAgents(agentTypeDistr) {
    // Create an instance of our type creator
    var TypeCreator = createType(agentTypeDistr.length);

    // Iterate through all types in the array
    [].forEach.call(agentTypeDistr, function(numType, i) {
        // Create the type behaviors
        var newType = new TypeCreator();

        newType.typeID = i;
        
        // Create the number of agents of this type specified
        for(var j = 0; j < numType; j++) {
            
            var agent = Object.create(newType);
            agent.id = parseInt((i + 1) + "" + j); // Create a unique ID
            assignLoc(agent); // Give it a starting position

            agentArray.push(agent);
        }
    });
}

var agentArray = [],
    W, // The width of the canvas
    H; // The height of the canvas

// Function to create the simulation using the given options set
function initSim(options) {
    // Optional options within options ;) gridDimen, clusterSize, numAgents, numTypes, agentTypeDistr
    var gridDimen = options.gridDimen || {"x": 30, "y": 30},
        numAgents,
        numTypes,
        agentTypeDistr;

    cellSize = Math.min(window.innerWidth / gridDimen.x, window.innerHeight / gridDimen.y);
    W = canvas.width = cellSize * gridDimen.x;
    H = canvas.height = cellSize * gridDimen.y;

    clusterSize = options.clusterSize || 10;
    createGrid(gridDimen);
    
    numTypes = options.numTypes || genNumTypes();
    // Make sure there are at least as many agents as types
    if(options.numTypes > options.numAgents)
        numAgents = options.numTypes;
    numAgents = options.numAgents || genNumAgents();
    
    if(gridDimen.x * gridDimen.y < numAgents) {
        alert("There are more agents than grid spaces. Limiting to the max possible.");
        numAgents = gridDimen.x * gridDimen.y;
    }
    
    agentTypeDistr = options.agentTypeDistr || getAgentDistr(numAgents, numTypes);

    var distrElem = document.createElement("div");
    distrElem.className = "distribution-container";
    distrElem.innerText = "Element per type distribution: " + agentTypeDistr.join(", ");
    descrContainer.appendChild(distrElem);
    
    createAgents(agentTypeDistr);
}


var descrContainer = document.querySelector(".type-descriptions");
// Show a description of each type created
function showTypes() {

    var typeKey = document.createElement("div");
    typeKey.className = "type-key"
    typeKey.innerText = "Type Key: \n0 = Hate, \n1 = Avoid, \n2 = Neutral, \n3 = Favor, \n4 = Love";
    descrContainer.appendChild(typeKey);

    var types = [];

    [].forEach.call(agentArray, function(agent, i) {
        if(!types[agent.typeID]) {
            types[agent.typeID] = true;

            var typeContainer = document.createElement("div");
            typeContainer.className = "type-container";


            // var name = document.createElement("div");
            // name.className = "type-name";
            // name.innerText = "Name: " + agent.name;

            var typeID = document.createElement("div");
            typeID.className = "type-typeID";
            typeID.innerText = "Type ID: " + agent.typeID;

            var color = document.createElement("div");
            color.className = "type-color";
            color.innerText = "Color: " + agent.color;
            var colorSquare = document.createElement("div");
            colorSquare.className = "color-square";
            colorSquare.style.backgroundColor = agent.color;
            color.appendChild(colorSquare);

            var moveSpeed = document.createElement("div");
            moveSpeed.className = "type-moveSpeed";
            moveSpeed.innerText = "Speed: " + agent.moveSpeed;

            var visRange = document.createElement("div");
            visRange.className = "type-visRange";
            visRange.innerText = "Vision range: " + agent.visRange;

            var moveBehaviors = document.createElement("div");
            moveBehaviors.className = "type-moveBehaviors";
            moveBehaviors.innerText = "Movement behaviors: " + JSON.stringify(agent.moveBehaviors);

            //typeContainer.appendChild(name);
            typeContainer.appendChild(typeID);
            typeContainer.appendChild(color);
            typeContainer.appendChild(moveSpeed);
            typeContainer.appendChild(moveBehaviors);

            descrContainer.appendChild(typeContainer);
        }
    });
}

// Turn function - random order of agents go first (weighted based on type?)
function makeTurn() {
    // Update the agents
    for(var i = 0; i < agentArray.length; i++)
        agentArray[i].move();

    // Draw the new state
    drawState();
}





// Handle the drawing (completely separate from the rest)

var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    cellSize, // The size of each square cell (set in initSim)
    lineWidth = 2;

// Draw the current state
function drawState() {
    // Clear the canvas
    ctx.clearRect(0, 0, W, H);

    // Draw the current state
    drawGrid();
    drawVisionCircles();
    drawAgents();
}

// Draw the grid cells
function drawGrid() {
    // Set the line styling
    ctx.fillStyle = "black";
    ctx.lineWidth = lineWidth;

    for(var i = 0; i < grid.length; i++)
        for(var j = 0; j < grid[0].length; j++)
            ctx.strokeRect(cellSize * i, cellSize * j, cellSize, cellSize);
}

// Draw the vision radius circles
function drawVisionCircles() {
    // Make them partially transparent
    ctx.globalAlpha = 0.5;
    [].forEach.call(agentArray, function(agent, i) {
        ctx.fillStyle = agent.color;

        // Draw the vision radiuses
        ctx.beginPath();
        ctx.arc(cellSize * agent.loc.x + cellSize / 2, cellSize * agent.loc.y + cellSize / 2, cellSize * agent.visRange, 0, 2 * Math.PI, false); 
        ctx.closePath();
        ctx.fill();
        
    });
    ctx.globalAlpha = 1;
}

// Draw the agents we have
function drawAgents() {
    [].forEach.call(agentArray, function(agent, i) {
        // Give it a background to make the color not blend as easily
        ctx.fillStyle = "black";
        ctx.fillRect(cellSize * agent.loc.x, cellSize * agent.loc.y, cellSize, cellSize);
        // Add the color
        ctx.fillStyle = agent.color;
        ctx.fillRect(cellSize * agent.loc.x + lineWidth, cellSize * agent.loc.y + lineWidth, cellSize - lineWidth * 2, cellSize - lineWidth * 2);
    });
}



var speedInput = document.querySelector(".speedInput")
    playSpeed = 100, // The variable to determine how often a turn is played
    lastTime = Date.now()
    paused = false,
    playPauseButton = document.querySelector(".playPauseButton");

function update() { // What actually runs the thing
    if(Date.now() - lastTime > playSpeed && !paused) {
        lastTime = Date.now();
        makeTurn();
    }

    requestAnimationFrame(update);
}

function togglePlayPause() {
    if(paused)
        playPauseButton.innerHTML = "&#10073;&#10073;"; // Need to use innerHTML instead of innerText to render it
    else
        playPauseButton.innerHTML = "&#9654;";
    
    paused = !paused;
}


speedInput.onchange = function(e) {
    playSpeed = this.value * 1000;
};

playPauseButton.onmouseup = togglePlayPause;

// Optional options within options ;) gridDimen, clusterSize, numAgents, numTypes, agentTypeDistr
initSim({"numAgents": 3, "numTypes": 3});
showTypes();
drawState();

update();