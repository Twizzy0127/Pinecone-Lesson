// easy
// 1.Console numbers from 1 to 10 .
// 1 -> 10 хүртэлх тоог хэвлэнэ үү .
// for example :  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
for (let i = 1; i<= 10; i++) {
    console.log(i)
}

// 2.Sum of first 10 natural numbers .
// Эхний 10 натурал тооны нийлбэрийг ол .
// for example : 55
let sum = 0;
for (let i = 1; i<=10; i++) {
    sum += i
}
console.log(sum)

// 3.Console even numbers 1 to 20 .
// 1 -> 20 хоорондох тэгш тоонуудыг хэвлэнэ үү .
// for example : 2, 4, 6, ... , 20 
for (let i=1; i<= 20; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

// medium
// 4. Change every second letter of a given string to an ‘Z’. Assume there are no space.
// Өгөгдсөн string-н 2 дахь үсэг болгоныг 'Z' үсгээр солин бичнэ үү . Өгөгдсөн string дундаа зайгүй гэж үзнэ .
// input : helloworld
// for example : hZlZoZoZlZ

// 5.Console a square of stars (*) .
// (*) Од ашиглан дөрвөлжинг хэвлэнэ үү .
// for example :
// *****
// *****
// *****
// *****

let size = 5 
for (let i=0; i < size; i ++){
    let row = '';
    for (let j= 0; j< size; j++){
        row += '* '
    }
    console.log(row)
} 

// 6.Sum of digits of given number .
// Өгөгдсөн тооны цифрүүдийн нийлбэрийг олно уу.
// input : 7894560
// for example : 39
let input = 12345

let sum6= 0;
let numberString = input.toString();

for (let i=0; i < numberString.length; i++){
    sum6 += input % 10;
    input = Math.floor(input / 10)
}
console.log(sum6)

// 7.Calculate given number to power .
// Өгөгдсөн тоог тухайн зэрэгт дэвшүүлнэ үү .
// input : number = 6  degree=10
// for example : 60466176
let number = 6; // Base number
let degree = 10; // Exponent

let result = 1;

for (let i = 0; i < degree; i++) {
    result *= number;
}

console.log(`Result: ${result}`);


// 8.Calculate factorial of given number.
// Өгөгдсөн тооны факторалыг ол . (1 - ээс тухайн тоо хүртэлх тооны үржвэр)
// input : 8
// for example : 40320 yes 
let too = 8; 

let factorial = 1;

for (let i = 1; i <= too; i++) {
    factorial *= i;
}

console.log(`The factorial of ${too} is ${factorial}`);


// 9.Calculate average of numbers from 12 to 36 .
// 12 -> 36 хүртэлх тоонуудын дунджийг ол .
// for example : 24 yes 
let niilber = 0;
let count = 0;

for (let i = 12; i <= 36; i++) {
    niilber += i;
    count++;
}
let average = niilber / count;
console.log("The sum of numbers from 12 to 36 is:", niilber);
console.log("The count of numbers from 12 to 36 is:", count);
console.log("The average of numbers from 12 to 36 is:", average);


// 10.Sum of odd and even numbers from 11 to 50 .
// 11 -> 50 хүртэлх тоонуудын тэгш болон сондгой тоонуудын нийлбэрийг ол .
// for example : sumOdd = 600, sumEven = 620 yes 
let sumOdd = 0;
let sumEven = 0;

for (let i = 11; i <= 50; i++) {
    if (i % 2 === 0) {
        sumEven += i; 
    } else {
        sumOdd += i; 
    }
}

console.log("Sum of odd numbers from 11 to 50:", sumOdd);
console.log("Sum of even numbers from 11 to 50:", sumEven);


// 11.Iterate through all numbers from 1 to 45. Print the following: For multiples of 3 print “Fizz” , For multiples of 5 print “Buzz” , For multiples of 3 and 5 print “FizzBuzz”
// 1 - 45 хүртэлх тоонуудын давталт гүйлгэж 3д хуваагдаж байвал “Fizz” , 5д хуваагдаж байвал “Buzz” , 3 болон 5д хуваагдаж байвал “FizzBuzz” гэж хэвлэнэ үү .
// for example : number = 6 // Fizz , number = 8 // empty , number = 15 // FizzBuzz yes
for (let i = 1; i <= 45; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 12.Find the largest overlap of digits in the numbers from 123 to 200 .
// 123 - 200 хүртэлх тоонуудын цифр хамгийн их давхацсаныг олно уу .
// for example : 0 = 9 times , 2 = 15 times , 3 = 18 times

// 13.Iterate through all numbers from 1 to 5 and from 20 to 16 . Add the corresponding value .
// 1-5 , 20-16 гэсэн тоонуудаар давталт гүйлгэж харгалзах утгатай нь нэмнэ үү . yes 
// 1 , 2 , 3 , 4 , 5
// 20 , 19 , 18 , 17 , 16
// for example : 21 , 21 , 21 , 21 , 21

// Iterate from 1 to 5 
let total = 0;
for (let i = 1; i <= 5; i++) {
    total += i;
}

// Iterate from 20 to 16
for (let i = 20; i >= 16; i--) {
    total += i;
}
console.log("Sum of numbers from 1 to 5 and from 20 to 16:", total);


// 14.Check the fifth power of given number is greater than 10000 . 
// Тооны таван зэрэг нь 10000-аас дээш эсэхийг шалгана уу .
// for example : 
//      5 * 5 * 5 * 5 * 5 = 3125 // it is less than 10000
//      8 * 8 * 8 * 8 * 8 = 32768 // it is greater than 10000 


// hard
// 15.N тоо өгөхөд NxN хэмжээтэй шатрын хөлөг буцаах .
// Гаралт:
// _#_
// #_#
// _#_

// 16.Console a Pyramid of Stars (*) .
// (*) Од ашиглан пирамидыг хэвлэнэ үү .
// for example :
//    *
//   ***
//  *****
// *******

// 17.Фибоначчийн тоон дараалал  a1 = a2 = 1 ба a(n+2)=a(n+1)+ an  гэж тодорхойлогддог.  Тус дарааллын 20 дох гишүүнийг 5-д ол.
