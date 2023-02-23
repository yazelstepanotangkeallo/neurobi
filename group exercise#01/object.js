let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//1. To add the language "Go" to the end of the languages array:
programming.languages.push("Go");
//2. To change the difficulty to the value of 7 using bracket notation: 
programming["difficulty"] = 7;
//3. To remove the jokes key from the programming object using delete keyword:
delete programming.jokes;
//4. To add a new key called isFun with a value of true to the programming object using dot notation:
programming.isFun = true;
//5. To iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output:
programming.languages.map((language, index) => console.log(`${index} - ${language}`));


console.log(programming.languages.map((language, index) => `${index} - ${language}`));