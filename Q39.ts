//Q39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

///"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value 
//that’s returned.

function citycountry(city:string,country:string):string{
    const formattedstring ="${city.toLowerCase()},${country.toLowerCase()}";
    return formattedstring;
}
const lahorePakistan= citycountry("lahore","pakistan");
const tokyoJapan =citycountry ("tokyo","japan");
const londonEngland = citycountry("london","England");
console.log(`lahore`,`pakistan`);
console.log(`tokyo`,`Japan`);
console.log(`london`,`England`);
