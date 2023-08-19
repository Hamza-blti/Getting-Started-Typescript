// Assingment no 2      🙌👈(ﾟヮﾟ👈)

/* 
let a = "Hamza";
console.log("Hello",a,",would you like to learn some python today");
*/



// Assingment no 3      🙌👈(ﾟヮﾟ👈)

/*
let n="hamza ali", a = "HAmza ALi";
let uppercase= n.toUpperCase();
let lowercase = a.toLowerCase()
let words = n.split(" ");

let titleCaseWords = words.map(word => {
  let firstLetter = word.charAt(0).toUpperCase();
  let restOfWord = word.slice(1).toLowerCase();
  return firstLetter + restOfWord;
});

let titleCaseString = titleCaseWords.join(" ");
console.log(uppercase);
console.log(lowercase);
console.log(titleCaseString);
*/




// Assingment no 4     🙌👈(ﾟヮﾟ👈)

/*
let message = `Anonymous said, "Everything is easy untill you make it hard." `
console.log(message);
*/




// Assingment no 5        🙌👈(ﾟヮﾟ👈)


/*
let person ="Anonymous"
let amessage = `${person} said, "Everything is easy untill you make it hard." `
console.log(amessage);
*/




// Assingment no 6       🙌👈(ﾟヮﾟ👈)


/*
let peson = "\n \t Ali \t \n ";
console.log(`With WhiteSpace Characters :${peson}`);
let without=peson.trim();
console.log(`Without WhiteSpace Characters :`,without);

*/



// Assingment no 7-8 (mistake in numbering of question)     🙌👈(ﾟヮﾟ👈)

/*
console.log(`Addition = `,4+4);
console.log(`Multiplication = `,4*2);
console.log(`Division = `,16/2);
console.log(`Subtraction = `,12-4);
console.log(`Modolus = `,18%10);
*/



// Assingment no 9      🙌👈(ﾟヮﾟ👈)

// Name = Hamza   Dated = 18 July 2023 
/* let fav=7; */ // A variable is created by the name fav to store my favourite number 
/* let m =`Your Favourite Number is ${fav}`;*/  // Another variable is created by the name m to store the a
// message and the favourite number 
/* console.log(m); */  // now this lines prints the message and the number 





// Assingment no 11 and 12     🙌👈(ﾟヮﾟ👈)

/* Name = Hamza    Dated= 18 July 2023 */
/* A array is declared here in this program by the name f and it stores two strings and the last line 
prints the string by accessing the array by indexis . */


/* let f = ["Arham","Israr"];
console.log(f[0],"\n",f[1]);  // Assingment no 11      🙌👈(ﾟヮﾟ👈)

console.log(`${f[0]}: I am learning programming        
${f[1]}: I am learning programming`)                // Assingment no 12    🙌👈(ﾟヮﾟ👈)
*/




// Assingment no 13    🙌👈(ﾟヮﾟ👈)

/*
let car = ["Mustang","GTR","YBR","Kwasaki ninja"];
for (let i = 0; i < 4; i++) {
    console.log( `I would like to own a ${car[i]}`);
    console.log("\n");
    
}
*/




// Assingment no 14,15,16 and 17        🙌👈(ﾟヮﾟ👈)

/*

let invitees = ["Nikola Tesla","Heisinberg","Plank"];
for (let i = 0; i < 3; i++) {
    console.log( `Dear ${invitees[i]},

    Your are invited to Dinner.It would be an honour to have you. 
    
    Best Regards,
    Hamza `);
    console.log("\n");
    
}

// Assingment 15 Starts here        🙌👈(ﾟヮﾟ👈)
console.log("Apologies, Nikola Tesla can't make to the dinner\n");

invitees.shift();
invitees.unshift("MrBeast");
for (let i = 0; i < 3; i++) {
console.log( `Dear ${invitees[i]},

    Your are invited to Dinner.It would be an honour to have you. 
    
    Best Regards,
    Hamza `);
    console.log("\n");
    
}

// Assingment 16 starts here      🙌👈(ﾟヮﾟ👈)


console.log("So guys, I found out a new Bigger table \n");
invitees.unshift("Lofe");
invitees.splice(2,0,'Ali')

invitees.push("Jidion");
for (let i = 0; i < 6; i++) {
   console.log( `Dear ${invitees[i]},
   
       Your are invited to Dinner.It would be an honour to have you. 
     
       Best Regards,
    Hamza `);
    console.log("\n");
        
    }

    // Assingment 17 Starts here      🙌👈(ﾟヮﾟ👈)
console.log("I have Space for only 2 Guests now\n");

while (invitees.length > 2) {

    
    let r = invitees.pop();
    console.log(`${r}, I am Sorry and can't invite you to dinner.\n`);

    
}

console.log(`${invitees[0]}, You are still on the Guest list and invited

${invitees[1]}, You are still on the Guest list and invited `)

invitees.splice(0,2);
console.log("\nThe guest list is empty now ",invitees);

*/




//Assingment no 18      🙌👈(ﾟヮﾟ👈)

/*

let visit = ["Japan", "South korea" , "KSA","Iran","USA"]

console.log("Original Order = ", visit)

let _new = visit.slice(0,5)
let sorted = _new.sort()

console.log("In Alphabetical Order = ",sorted)

console.log("Original Order = ", visit)
let R =[] ;
for (let index = 4; index >=0 ; index--) {
     R.push(sorted[index])
    
}
console.log("Reverse Alphabetical Order = ", R)
console.log("Still in Original Order = ", visit)
console.log("Reverse Order list =" ,visit.reverse())
console.log(" Back to its Original Order = ",visit.reverse())
console.log("Sorted List in Alphabetical Order = ",visit.sort())
let r =[] ;
for (let index = 4; index >=0 ; index--) {
     r.push(visit[index])
    
}
console.log("Sorted List in Reverse Alphabetical Order = ",r)
*/




//Assingment no 19      🙌👈(ﾟヮﾟ👈)

/*
let invitations = ["Nikola Tesla","Heisinberg","Plank"];
console.log(invitations.length, " People Coming to my Dinner ")
*/




//Assingment no 20     🙌👈(ﾟヮﾟ👈)

/*
let array = ["Paris","Makka","K-2","Pakistan","Urdu","River Nile", "Honda"]
*/




//Assingment no 21       🙌👈(ﾟヮﾟ👈)

/*
let items = {
    city : "Paris , Makka",
    mountains : "K-2",
    river : "River Nile",
    language : "Urdu",
    company : "Honda"

};

console.log(items.city )
*/



//Assingment no 22       🙌👈(ﾟヮﾟ👈)


/*
let array:any = ['h',3],i
// i = 10 -- error 
i = 1  // error fixed
console.log(array[i])
*/



//Assingment no 23      🙌👈(ﾟヮﾟ👈)



/*
let car = 'subaru', a=5,b=6,c=5;

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')
console.log(a == b)
console.log(a > b)
console.log(a < b)
console.log(!(a < b))
console.log(!(a > b))
console.log(a >= c)
console.log(a <= c)
console.log(!(a >= c))
console.log(!(a <= c))

*/





//Assingment no 24        🙌👈(ﾟヮﾟ👈)

/*
let s = "acha" , a = "haha"
console.log(s==a)
console.log(s=="acha")
console.log(s==s.toLowerCase())
console.log(s!==s.toLowerCase())
console.log(5 >= 6 || 5 <=5 )
console.log(5 >= 6 && 5 <=6 )

let array:number[] = [1,2,3,4]
for (let i = 0; i < array.length; i++) {
    if(array[i]==4){
    console.log("4 is in the Array",true)
    }
    else{
        console.log("4 is not in the array",false)
    }
    
}

*/





//Assingment no 25     🙌👈(ﾟヮﾟ👈)
/*

let alien_color = "Green"

if (alien_color == "Green") {
    console.log("The player just earned 5 points.")
}
if (alien_color == "red") {
    
}

*/




//Assingment no 26     🙌👈(ﾟヮﾟ👈)


/*
let alien_color = "green"

if(alien_color=="green"){
    console.log("The player just earned 5 points for Shooting the alien.")
}
else {
console.log("The player just earned 10 points.")
}

if(alien_color=="red"){
    console.log("The player just earned 5 points for Shooting the alien.")
}
else {
console.log("The player just earned 10 points.")
}
*/




//Assignment no 27    🙌👈(ﾟヮﾟ👈)



/*
let alien_color = "green"
for (let i = 0; i < 3; i++) {
    
    
if(alien_color=="green"){
    console.log("The player just earned 5 points.")
}
else if (alien_color=="yellow"){
console.log("The player earned 10 points.")
}

else if(alien_color=="red"){
    console.log("The player earned 15 points.")
}

if(i==1){
    alien_color = "red"
}
else {
alien_color = "yellow"
}
}

*/


//Assignment no 28    🙌👈(ﾟヮﾟ👈)


/*
let promptSync = require("prompt-sync")();
let age:number = promptSync("Enter your age ");

if (age < 2) {
    console.log("The Person is Baby.")
}
else if (age >= 2 && age <4) {
    console.log("The Person is Toddler.")
}
else if (age >= 4 && age <13) {
    console.log("The Person is Kid.")
}
else if (age >= 13 && age <20) {
    console.log("The Person is Teenager.")
}
else if (age >= 20 && age <65) {
    console.log("The Person is Adult.")
}
else if (age >= 65) {
    console.log("The Person is Elder.")
}

*/



//Assignmenont  29    🙌👈(ﾟヮﾟ👈)



/*
let promptSync = require("prompt-sync")();
let fav:string = promptSync("Find Your Favourite Fruit ");
let fruit = ["mango","banana" ,"watermelon"]
for (let i = 0; i < fruit.length; i++) {
    if (fav==fruit[i]) {
        console.log("Your Really Like",fruit[i])
        break
    }
   else if (fav!==fruit[i]){
    if (i = fruit.length){
        
        console.log("You don't like ",fav)
    }
   }
    
}

*/



//Assignmenont  30    🙌👈(ﾟヮﾟ👈)


/*

let promptSync = require("prompt-sync")();
let name:string = promptSync("Enter your Username : ");

let username:string[] = ["admin","hamza","ali","haider","israr"]
for (let i = 0; i < username.length; i++) {
    if (name == username[i] && username[i] == "admin") {
    console.log(" Hello admin, would you like to see a status report?")    
    break
}
else if (name == username[i]){
    console.log(`Hello ${username[i]}, thank you for logging in again.`)    
    break
}
    
}

*/



//Assignmenont  31    🙌👈(ﾟヮﾟ👈)

/*
let promptSync = require("prompt-sync")();
let name:string = promptSync("Enter your Username : ");

let username:string[] = ["admin","hamza","ali","haider","israr"]
username.splice(0,5)
for (let i = 0; i <= username.length; i++) {
    if (username.length == 0) {
        console.log("We need to find some users!")
        console.log("The username list is empty",username)
        
        break
    }
    if (name == username[i] && username[i] == "admin") {
    console.log(" Hello admin, would you like to see a status report?")    
    break
}
else if (name == username[i]){
    console.log(`Hello ${username[i]}, thank you for logging in again.`)    
    break
}
    
}
*/




//Assignmenont  32    🙌👈(ﾟヮﾟ👈)


/*
let current_user : string[] = ["arham","hamza","ali","haider","israr"]
let new_user : string[] = ["hamiz","HAMZA","Ali","mustafa","khan"]
for (let i = 0; i < new_user.length; i++) {
    
    let ans = false

    for (let j = 0; j < current_user.length; j++) {

        if(new_user[i].toLowerCase() === current_user[j].toLowerCase()){
            console.log(`The ${new_user[i]} username is taken`)
            ans = true
            break
        }
       
        
    }

    if (!ans){
        console.log(`The ${new_user[i]} username is available.`)
    }
    
}


*/




//Assignmenont  33    🙌👈(ﾟヮﾟ👈)


let number : number[] = [1,2,3,4,5,6,7,8,9]


/*
for (let i = 0; i < number.length; i++) {
    if(number[i] == 1 ){
        console.log(`${number[i]}st`)
    }
    else if(number[i] == 2 ){
        console.log(`${number[i]}nd`)
    }
    else if(number[i] == 3 ){
        console.log(`${number[i]}rd`)
    }

    if(i > 2){
        console.log(`${number[i]}th`)
    }
    
    
}

*/



//Assignmenont  34    🙌👈(ﾟヮﾟ👈)


/*
let piza = ["Mushroom Pizza", "Pepperoni Pizza","Pineapple Pizza"]
for (let i = 0; i < piza.length; i++) {
    console.log(`I Really like ${piza[i]}`)
    
}
console.log(`Whether it's thin crust or deep-dish, ${piza[0]} pizza never disappoints!`);
console.log(`The ${piza[1]} pizza's aroma and taste are simply irresistible.`);
console.log(`I enjoy ${piza[2]} pizza with its delicious combination of flavors.`);
*/




//Assignmenont  35    🙌👈(ﾟヮﾟ👈)



/*
let animals = ["Cats","Dogs","Hamsters"]

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
    
}
for (let i = 0; i < animals.length; i++) {
    console.log(` A ${animals[i]} would make a great pet.`)
   if(i=animals.length) {
console.log(`Dogs, cats, and hamsters are all commonly kept as pets, providing companionship and joy to their human owners.
Any of these animals would make a great pet!`)

   }
}

*/



//Assignmenont  36    🙌👈(ﾟヮﾟ👈)

/*

function make_shirt(size:string,print : string) {
    
    console.log(`The size of shirt is ${size} and print on shirt will be "${print}"`)
}

make_shirt('S',"acha")

*/


//Assignmenont  37    🙌👈(ﾟヮﾟ👈)


/*
function make_shirt(size:string = 'L' , print: string = " I love TypeScript." ) {
    
    console.log(`The size of shirt is ${size} and print on shirt will be "${print}"`)
}


make_shirt()
make_shirt('M')
make_shirt('XL',"Crypto")

*/


//Assignmenont  38    🙌👈(ﾟヮﾟ👈)

/*
function describe_city(city:string , country:string = "Pakistan") {
   
    console.log(`${city} is in ${country}`)

}

describe_city("karachi")
describe_city("Lahore")
describe_city("Delhi")
*/


//Assignmenont  39    🙌👈(ﾟヮﾟ👈)

/*
function city_country(city:string , country:string) {
    
    let msg = console.log(`"${city} , ${country}"`)
        return msg
}


city_country("Karachi","Pakistan")
city_country("Delhi","India")
city_country("Tokyo","Japan")

*/


//Assignmenont  40    🙌👈(ﾟヮﾟ👈)


/*
function make_album(n:string,t:string , o : number) {
    let music_album = {
artist_name :n ,
album_title :t,
no_oftracks : o 
    };
return console.log(`${music_album.artist_name} ${music_album.album_title} No.of tracks = ${music_album.no_oftracks}`)
}

make_album("Album 1 ","Artist 1",3)
make_album("Album 2 ","Artist 2",4)
make_album("Album 3 ","Artist 3",5)
*/


//Assignmenont  41    🙌👈(ﾟヮﾟ👈)



/*
let magicianss = ["Bob","John","Wood"]

function show_magician(magician : string[]) {
    for (let i = 0; i < magician.length; i++) {
       console.log(magician[i])
        
    }
}

show_magician(magicianss)

*/


//Assignmenont  42    🙌👈(ﾟヮﾟ👈)

/*
let magicianss = ["Bob" , "John","Wood"],great_magician : string[] = []

function make_great() {
    for (let i = 0; i < magicianss.length; i++) {
    
       great_magician.push("The Great "+magicianss[i] )
        
    }
}
function show_magician() {
    for (let i = 0; i < great_magician.length; i++) {
       console.log(great_magician[i])
        
    }
}
make_great()
show_magician()

*/



//Assignmenont  43    🙌👈(ﾟヮﾟ👈)


/*
let magicianss = ["Bob" , "John","Wood"],great_magician : string[] = []

function make_great() {
    for (let i = 0; i < magicianss.length; i++) {
    
       great_magician.push("The Great "+magicianss[i] )
        
    }
}
function show_magician() {
    for (let i = 0; i < great_magician.length; i++) {
       console.log(great_magician[i] )
        
    }
}
make_great()
show_magician()
console.log(`Orginal Magicians List = ${magicianss}`)

*/


//Assignmenont  44    🙌👈(ﾟヮﾟ👈)



/*
function sandwich(items:string[] = []) {
    
    console.log(`Your Sandwich Includes = ${items}`)
}

sandwich(["Cheese","Chicken","Tomato"])
sandwich(["Butter","Onion","fries"])
sandwich(["Beef Patty","Roasted Garlic","Ketchup"])

*/



//Assignmenont  45    🙌👈(ﾟヮﾟ👈)


function car(manufacturer : string ,model : string ,color : string , hp : number) {
    let object = {
          Manufacturer_Name : manufacturer,
          Model_Name : model,
          Color : color ,
          Horse_Power : hp
    };
  return  console.log(`Car Manufacturer = ${object.Manufacturer_Name}
Car Model = ${object.Model_Name}   
Car Color = ${object.Color}
Car HorsePower = ${object.Horse_Power}  `)
}

car("Honda","XB2009","Black",2000)

