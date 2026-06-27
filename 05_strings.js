const name = "sundaram";
const repoCount = 20;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sundaram');

console.log(gameName.length);        
console.log(gameName.toUpperCase()); 

console.log(gameName.charAt(2));     
console.log(gameName.indexOf('u'));  

const newString = gameName.substring(0, 4);
console.log(newString);  

const anottherString = gameName.slice(-8, 4);
console.log(anottherString);

const newStringOne = "  sundaram  ";
console.log(newStringOne);           
console.log(newStringOne.trim());    

const url = "http://sundaram.com";

console.log(url.replace('%20', '_'));
console.log(url.includes('sundar'));