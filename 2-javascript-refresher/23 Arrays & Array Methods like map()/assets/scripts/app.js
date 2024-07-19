const hobbies = ["Sports", "Cooking", "Reading"];

console.log(hobbies);
console.log(hobbies[0]);

hobbies.push("Programming");
console.log(hobbies);

const cookingIndex = hobbies.findIndex((hobby) => hobby === "Cooking");
console.log(cookingIndex);

const editedHobbies = hobbies.map((hobby) => "I love " + hobby + "!");
console.log(editedHobbies);
