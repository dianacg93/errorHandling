// Fix syntax errors first. Run the following code as-is and squint yer eyes at the error message. Fix the mistake, and then re-run the code to check it.

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000 {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

// The next block of code hides two syntax errors. Run the code as-is to find the mistakes. Tip: Don't be too hasty, Matey! Only ONE error will be flagged at a time. Fix that ONE problem, and then re-run the code to check yer work. Avoid trying to fix multiple issues at once.

let launchReady = false;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus &&& computerStatus === 'green') {
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!');
} else {
   console.log("Launch scrubbed.");
}

// Fix runtime errors next. Remember to examine the error message for clues about what is going wrong. Pay close attention to any line numbers mentioned in the message - these will help ye locate and repair the mistake in the code.

let launchReady = false;
let fuelLevel = 17000;

if (fuellevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

// Arrr! Now find and fix the runtime error in a longer code sample.

let launchReady = false;
let fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   consoul.log("3, 2, 1...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

// Solve logic errors last. Logic errors do not generate warning messages or prevent the code from running, but the program still does not work as intended. (Refer to debugging logic errors if ye need to review).
// First, run this sample code as-is and examine the output.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}

// Should the shuttle have launched? Did it?

// Let's break the code down into smaller chunks. Consider the first if/else block below. Add console.log(launchReady) after this block, then run the program.

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

// Given the fuelLevel value, should launchReady be true or false after the check? Is the program behaving as expected?

// Now consider the second if/else block. Add another console.log(launchReady) after this block and run the program.

let launchReady = false;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

// Given crewStatus and computerStatus, should launchReady be true or false after this check? Is the program behaving as expected?

// Now consider both if/else blocks together (keeping the added console.log lines). Run the code and examine the output.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
console.log(launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}
console.log(launchReady);

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false? Is the program behaving as expected?

// Ahoy, Houston! We spied a problem! The value of launchReady assigned in the first if/else block got changed in the second if/else block. Dangerous waters, Matey. Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. Update yer code to do this. Verify that yer change works by updating the console.log statements.


// Almost done, so wipe the sweat off yer brow! Add a final if/else block to print a countdown and "Liftoff!" if all the checks pass, or print "Launch scrubbed" if any check fails.


// Blimey! That's some good work. Now go feed yer parrot.