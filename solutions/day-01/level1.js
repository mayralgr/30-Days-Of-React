const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//Declare an empty array;
const arr = [];
// Declare an array with more than 5 number of elements
const arrWithMoreThan5 = Array(9).fill(0);
// Find the length of your array
const lengthOfArr = arrWithMoreThan5.length;
// Get the first item, the middle item and the last item of the array
const firstItem = arrWithMoreThan5[0];
const middleItem = arrWithMoreThan5[lengthOfArr / 2 - 1];
const lastItem = arrWithMoreThan5[lengthOfArr - 1];
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["Hey", 3, 6.4, "A", { other: "something" }, [6, 7, 6]];
const mixedLength = mixedDataTypes.length;
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(
  itCompanies[0],
  itCompanies[itCompanies.length / 2 - 1],
  itCompanies[itCompanies.length - 1]
);
// Print out each company
itCompanies.forEach((c) => console.log(c));
// Change each company name to uppercase one by one and print them out
itCompanies.forEach((c) => console.log(c.toUpperCase())); // map and then foreach, to lazy, sorry
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(",") + " are big IT companies.");
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.indexOf("some") !== -1
  ? console.log("Oracle")
  : console.log("Company not found");
// Filter out companies which have more than one 'o' without the filter method
const companies = itCompanies.map((c) => c.indexOf("o") === c.lastIndexOf("o"));
// Sort the array using sort() method
itCompanies.sort();
// 16
itCompanies.reverse();
// 17
const res = itCompanies.slice(0, 3);
// 18
const lastOnes = itCompanies.slice(itCompanies.length - 4);
// 19
const middleIt = itCompanies.slice(
  itCompanies.length / 2 - 1,
  itCompanies.length / 2
);
// 20
const firstRemoved = itCompanies.shift();
// 21
const middleRemoved = itCompanies.splice(itCompanies.length / 2 - 1, 1);
// 22
const lastRemoved = itCompanies.pop();
// 23
itCompanies.splice();
console.log(itCompanies);
