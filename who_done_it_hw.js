// // EPISODE 1

// // object
// // const scenario = {
// //     murderer: 'Miss Scarlet',
// //     room: 'Library',
// //     weapon: 'Rope'
// //   };

// // // function getting key value for murderer
// //   const declareMurderer = function() {
// //     return `The murderer is ${scenario.murderer}.`;
// //   }

// // // saving return value in new variable 
// //   const verdict = declareMurderer();
// //   console.log(verdict);

// // ANSWER 
// ////// Miss Scarlet 

// // EPISODE 2


// // const needs to be let so the variable can be reassigned 
// let murderer = 'Professor Plum';

// // // needs access to outside variable 
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// // // variable is on the outside so this function has access to it 
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();

// console.log(verdict);

// // ANSWER 
// /////// Mrs.Peacock


// // EPISODE 3


// let murderer = 'Professor Plum';

// // function has variable declared within it, has access to that
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// // because there was variable decalred within function, it uses that 
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// // the variable located outside of the function, it will use that for interpolation
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);


// // ANSWER 
// //////// firstVerdict = Mrs.Peacock
// //////// secondVerdict = Professor Plum



// // EPISODE 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
// // miss scarlet, professor plum, colonel mustard 

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// // ANSWER 
// //////// Mrs.Peacock


// // Episode 5 
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
// // chaning value of key weapon 
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

// // ANSWER 
// ////////// The weapon is the revolver

// // EPISODE 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // ANSWER
// //////// Mrs. White

// // EPISODE 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

// // function plotTwist has its own variable so the function located withint this function has access to it, so the variable would be chagned to mis scarlet, but murdered redefined in changeMurder doesn't have access to the variable in plotTwist 
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // ANSWER
// //////// Mr. Green






// // EPISODE 8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   // murder now colonel mustard 
//   // room now dining room 
//   // weapon candle stick 
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
//   // room = dining room 
//   // if dining room === dining room 
//   // then murderer = Colonel Mustard 
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
//   // colonel mustard gets passed in
//   // colonel mustard === colonel mustard
//   // then weapon is changed to candle stick
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);


//   // ANSWER
//   /////// 
//   // murder now colonel mustard 
//   // room now dining room 
//   // weapon candle stick 

//   // verdict = The weapon is candle stick 



//   // EPISODE 9

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock'; // murderer is not being redefined. this is a new variable being declared 
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// ANSWER
// /// The murderer is Professor Plum 


// // EPISODE 10 - EXTENSION

// let murderer = 'Miss Scarlet';
// let weapon = 'Rope'
// let room = 'Kitchen'


// const changeWeapon = function() {
//     weapon = 'Candle Stick';

//     const changeRoom = function(newRoom) {
//         room = newRoom;
//     }

//     changeRoom('Conservatory');
// };

// const declareMurderScenario = function() {
//     return `The murderer is ${murderer}, in the ${room}, with the ${weapon}.`;
// };

// changeWeapon();
// const verdict = declareMurderScenario();
// console.log(verdict);
