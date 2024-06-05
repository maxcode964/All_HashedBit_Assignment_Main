// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    const num1Str = n1.toString();
    const num2Str = n2.toString();
    let sum = 0;
  
    for (let i = 0; i < Math.max(num1Str.length, num2Str.length); i++) {
      const digit1 = i < num1Str.length ? parseInt(num1Str[i]) : 0;
      const digit2 = i < num2Str.length ? parseInt(num2Str[i]) : 0;
      sum += digit1 * digit2;
    }
    return sum;
  }
  
  const n1 = 6;
  const n2 = 34;
  console.log(sumOfProducts(n1, n2));  // Output: 24