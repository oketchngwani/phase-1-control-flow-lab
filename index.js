function scuberGreetingForFeet(rideDstnt){
  let charges
 
 if(rideDstnt <= 400) {
  return "This is on me!";
  
 }
 else if(rideDstnt>400 && rideDstnt<= 2000){
  return "That will be twenty bucks.";
  charges = $20;
 }
 
 else if (rideDstnt > 2000 && rideDstnt <= 2500){
  return "I will gladly take your thirty bucks.";
  charges = $30;
 }

 else {
  return "No can do."
 }
}
console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city){
    return city === "NYC" ? "Ok, sounds good!" : "No go.";
  }
  
  // Example usage
  console.log(ternaryCheckCity("NYC"));       // Output: Ok, sounds good!
  console.log(ternaryCheckCity("Los Angeles"));// Output: No go.
  




function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Example usage
console.log(switchOnCharmFromTip('generous'));        
console.log(switchOnCharmFromTip('not as generous')); 
console.log(switchOnCharmFromTip('cheap'));           
