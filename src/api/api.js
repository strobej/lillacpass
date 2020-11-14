function generatePassword(type) {
    if(type === "simple") {
        return animalsGenerator() + verbsGenerator() + numberGenerator(100, 999);
    } else { 
        return animalsGenerator() + codesGenerator() + verbsGenerator() + numberGenerator(100, 999);
    }
}

function animalsGenerator() {
    let animals = ["monkey", "bear", "dog", "cat", "wolf", "zebra", "bee", "bird", "camel", "chicken", "cow", "crocodile", "deer", "dolphin", "duck", "elephant", "fish", "fly", "fox", "frog", "goat", "hamster", "horse", "kitten", "lion", "panda", "pig", "rabbit", "rat", "scorpion", "shark", "sheep", "snake", "spider", "tiger", "turtle"]; 
    let randomAnimals = animals[Math.floor(Math.random() * animals.length)];
    
    return randomAnimals;
}

function codesGenerator() {
    let codes = ["[", "]", "{", "}", "(", ")", "!", "#", "%", "&", "<", ">", "*", "+", "?"];
    let randomCodes = codes[Math.floor(Math.random() * codes.length)];

    return randomCodes;
}

function verbsGenerator() {
    let verbs = ["sleep", "eat", "drink", "walk", "spring", "learn", "come", "create", "choose", "allow", "bring", "begin", "enjoy", "decide", "write", "prepare", "build", "believe", "follow", "prevent", "invest", "lose", "hear", "apply", "forget", "recommend", "accept", "compare", "imagine", "prove", "relax", "react", "earn", "install", "organize", "send"]; 
    let randomVerbs = verbs[Math.floor(Math.random() * verbs.length)];
    
    return randomVerbs;
}

function numberGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   
    return Math.floor(Math.random() * (max - min)) + min; 
}
 
export {generatePassword};
