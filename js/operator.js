let a=10;
let b=20;
console.log("Arithmetic Operators");
console.log(a+b); // Addition
console.log(a-b); // Subtraction
console.log(a*b); // Multiplication 
console.log(a/b); // Division
console.log(a%b); // Modulus
console.log(a**b); // Exponentiation (a raised to the power of b)
console.log("-------------------------------------------------------------------------------------");
console.log("Relational Operators");
console.log(a>b); // Greater than
console.log(a<b); // Less than
console.log(a>=b); // Greater than or equal to
console.log(a<=b); // Less than or equal to
console.log(a==b); // Equal to (value comparison)
console.log(a===b); // Strict equal to (value and type comparison)
console.log(a!=b); // Not equal to (value comparison)
console.log("-------------------------------------------------------------------------------------");
console.log("Logical Operators");
console.log(a>b && a<b); // Logical AND
console.log(a>b || a<b); // Logical OR
console.log(!(a>b)); // Logical NOT
console.log("-------------------------------------------------------------------------------------");
console.log("Bitwise Operators");
console.log(a & b); // Bitwise AND  
console.log(a | b); // Bitwise OR
console.log(a ^ b); // Bitwise XOR
console.log(~a); // Bitwise NOT
console.log(a << 1); // Bitwise left shift
console.log(a >> 1); // Bitwise right shift
console.log("-------------------------------------------------------------------------------------");
console.log("Assignment Operators");
console.log(a=5); // Assign value
console.log(a += 2 ); // Add and assign
console.log(a -= 2 ); // Subtract and assign
console.log(a *= 2 ); // Multiply and assign    
console.log(a /= 2 ); // Divide and assign
console.log(a %= 2 ); // Modulus and assign
console.log(a **= 2); // Exponentiation and assign
console.log("-------------------------------------------------------------------------------------");
r=2;
q='3';
console.log(r==q); // Loose equality (value comparison)
console.log(r===q); // Strict equality (value and type comparison)
console.log(r!=q); // Loose inequality (value comparison)
console.log(r!==q); // Strict inequality (value and type comparison)
console.log(r<q); // Less than
console.log(r>q); // Greater than
console.log(r<=q); // Less than or equal to
console.log(r>=q); // Greater than or equal to
console.log("-------------------------------------------------------------------------------------");
console.log("Ternary Operator");
//The ternary operator is a shorthand for an if-else statement
let age=18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

