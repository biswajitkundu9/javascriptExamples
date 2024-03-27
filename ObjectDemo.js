let person = {
    fname:"Biswajit",
    lname:"kundu",
    age:32
}

/**
 * To print the properties
 */
console.log(person.fname);

/**
 * To print the key
 */
for(let key in person){
    console.log(key,person[key]);
}
console.log("---------------------")