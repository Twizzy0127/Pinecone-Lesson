// easy
// 1.Check if given number is positive, negative, or zero .
// Өгөгдсөн тоо эерэг бол "positive" , сөрөг бол "negative" , 0 бол "zero" гэж хэвлэнэ үү . console.log("the number is positive")
let number = -10;  
if (number > 0) {
  console.log("positive.");
} else if (number < 0) {
  console.log("negative.");
} else {
  console.log("zero.");
}

// 2.Check age for driving.
// Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү . 
let age2 = 20;  
if (age2 >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log("You are not old enough to drive");
}

// 3.Check if the given number is odd or even .
// Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .
let number3= 10;
if(number3 % 2===0) {
    console.log("even")
} else {
    console.log("odd")
}

// 4.Check if a given number is divisible by 5 .
// Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.
let number4= 21;
if(number4 % 5===0) {
    console.log(true)
} else {
    console.log(false)
}

// 5.Check if a given number is within the range of 1 to 100 .
// Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .
let number5 = 50;  
if (number5 >= 1 && number5 <= 100) {
  console.log(true);
} else {
  console.log(false);
}

// 6.Check if a password is strong (strong password is at least 8 characters long) .
// Нууц үгийг хүчтэй үгүйг шалгаад хүчтэй бол "strong", сул бол "weak" гэж хэвлэнэ үү. Багадаа 8 тэмдэгт агуулвал хүчтэй гэж тооцно .
let password6 = '123456789';
if (password6.length > 8) {
    console.log('strong')
}else {
    console.log('weak')
}

// medium
// 7.Categorize age group (children, youth, adults, seniors) .
// Өгөгдсөн нас нь 14-өөс доош бол "Children", 14-24 бол "Youth", 24-64 бол "Adults", 64-өөс дээш бол "Seniors" гэж хэвлэнэ үү .
let age7 = 17;
if (age7 < 14) {
    console.log('Children');
} else if (age7 >= 14 && age7 < 24) {
    console.log('Youth');
} else if (age7 >= 24 && age7 < 64) {
    console.log('Adults');
} else if (age7 >= 64) {
    console.log('Seniors');
}

// 8.Check triangle validity . 
// Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .
// Жишээ нь: 
//      a=5 b=6 c=7 / is valid 
//      a=4 b=8 c=19 / is invalid 

let a = 5 
let b= 6 
let c = 7
if (a + b > c && a + c > b && b + c > a) {
    console.log('Valid');
} else {
    console.log('Invalid');
}

// 9.Find the largest of two number .
// 2 тооноос ихийг нь олж хэвлэнэ үү .
let x = 30;
let y = 40;

let larger;

if (x > y) {
    larger = x;
} else if (x < y){
    larger = y;
} else if  (x == y ){
    console.log("Two numbers are equal")
} 
console.log("The larger number is:", larger);

// 10.Check if a given character is a vowel or a consonant .
// Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .
let character = 'k'; 

if (character === 'a') {
    console.log('vowel');
} else if (character === 'e') {
    console.log('vowel');
} else if (character === 'i') {
    console.log('vowel');
} else if (character === 'o') {
    console.log('vowel');
} else if (character === 'u') {
    console.log('vowel');
} else if (character >= 'a' && character <= 'z') {
    console.log('consonant');
} else {
    console.log(character + ' is not a valid alphabet character.');
}

// 11.Check if year is an Olympic year. 
// Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .
let year = 2024; 

const firstOlympicYear = 1896;

if ((year - firstOlympicYear) % 4 === 0 && year >= firstOlympicYear) {
    console.log(year + ' is an Olympic year.');
} else {
    console.log(year + ' is not an Olympic year.');
}

// 12.Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай. 
// Өгөгдсөн өдөр ажлын өдөр бол "work day" , амралтын өдөр бол "weekend" гэж хэвлэнэ үү .
// for example : 
//      day = Thursday / work day  
//      day = Saturday / weekend 
let dayNumber = 4;
let dayName 

let days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

if (dayNumber >= 1 && dayNumber <= 5) {
    dayName = days[dayNumber];
    console.log(`${dayName} is a workday.`);
} else if (dayNumber === 6 || dayNumber === 7) {
    dayName = days[dayNumber];
    console.log(`${dayName} is a weekend.`);
} else {
    console.log('Invalid day.'); 
}

// 13.Check if the given number is a prime number or not .
// Өгөгдсөн тоог анхны тоо мөн бишийг шалгана уу . (1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ)
// example : 
// number = 2 // true
// number = 15 // false
let too = 17; 
let isPrime = true;
if (too <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < too; i++) {
        if (too % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(too + ' is a prime number.');
} else {
    console.log(too + ' is not a prime number.');
}


// 14.Өгөгдсөн сурагчийн дүнг A , B , C , D , F бүлэгт ангилж хэвлэнэ үү .
//    80-100, A
//    70-89, B
//    60-69, C
//    50-59, D
//    0-49, F 
let score = 85; 

if (score >= 80 && score <= 100) {
    console.log('A');
} else if (score >= 70 && score <= 89) {
    console.log('B');
} else if (score >= 60 && score <= 69) {
    console.log('C');
} else if (score >= 50 && score <= 59) {
    console.log('D');
} else if (score >= 0 && score <= 49) {
    console.log('F');
} else {
    console.log('Invalid score');
}


//hard
// 15.Check if the season is Autumn, Winter, Spring or Summer.
// Өгөгдсөн сарыг шалгаад тохирох улирлыг хэвлэнэ үү .
// for example : month = November / Autumn 
let month = 5; 

let season;

if (month >= 3 && month <= 5) {
    season = 'Spring';
} else if (month >= 6 && month <= 8) {
    season = 'Summer';
} else if (month >= 9 && month <= 11) {
    season = 'Autumn';
} else {
    season = 'Winter';
} 

console.log('The season for month', month, 'is', season);

// 16.Яг одоогийн цагийг шалган өглөө бол "Good morning", өдөр бол "Good afternoon", орой бол "Good evening" гэж хэвлэнэ үү .

// 17.Цаг агаар температур , "sunny" эсвэл "rainy" гэж өгөгдөх ба бороотой бол "Don't forget your umbrella!" , нартай бол температур нь 30-аас их бол "It's a hot day!" , 20-30 градус бол "It's a warm day" , 20-оос бага бол "It's a bit cool today" гэж хэвлэнэ үү .
// for example : weather = "sunny" temperature = 25 / It's a warm day.
