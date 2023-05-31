// 4) console.log("7" > 7)
// console.log("2">"21")
// console.log("KL">"S")

/**Coercion in JavaScript refers to the automatic conversion of values from one type to another when performing operations or comparisons. It allows JavaScript to handle different types of data interchangeably.
 * 
 */

// this is happening due to coercion, 
console.log("7" > 7); //false
console.log("2" > "21"); //false
console.log("KL" > "S"); //false
// this comparison involves the strings "KL" and "S". JavaScript compares the strings character by character. It starts with the first characters, "K" and "S". "K" has a lower Unicode value than "S". Therefore, the expression "KL" > "S" evaluates to false.
