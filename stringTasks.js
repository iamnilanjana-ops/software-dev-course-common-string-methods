let inputString = " Welcome to the Coding Bootcamp! Learn JavaScript today. ";

// ======= 1. Searching =======
let hasJavaScript = inputString.includes("JavaScript");
console.log("Has JavaScript:", hasJavaScript);

let codingPosition = inputString.indexOf("Coding");
console.log("Position of 'Coding':", codingPosition);

let startsWithWelcome = inputString.trim().startsWith("Welcome");
console.log("Starts with 'Welcome':", startsWithWelcome);

let endsWithToday = inputString.trim().endsWith("today.");
console.log("Ends with 'today.':", endsWithToday);

// ======= 2. Transforming =======
let lowercaseString = inputString.toLowerCase();
console.log("Lowercase:", lowercaseString);

let uppercaseString = inputString.toUpperCase();
console.log("Uppercase:", uppercaseString);

let trimmedString = inputString.trim();
console.log("Trimmed:", trimmedString);

let replacedString = inputString.replace("JavaScript", "coding");
console.log("Replaced 'JavaScript' with 'coding':", replacedString);

// ======= 3. Breaking Apart =======
let wordsArray = inputString.trim().split(" ");
console.log("Words Array:", wordsArray);

// ======= 4. Retrieving =======
let firstCharacter = trimmedString.charAt(0);
console.log("First Character:", firstCharacter);

let extractedBootcamp = inputString.slice(inputString.indexOf("Bootcamp"), inputString.indexOf("Bootcamp") + "Bootcamp".length);
console.log("Extracted 'Bootcamp':", extractedBootcamp);
