//1
let pinecone = "pine";
let pineconer = "pineconer";
let boolen1 = true;

for (let i = 0; i < pinecone.length; i++) {
  let letter = pinecone[i];
  let found = false;
  for (let j = 0; j < pineconer.length; j++) {
    if (pineconer[j] === letter) {
      found = true;
      break;
    }
  }
  if (!found) {
    boolen1 = false;
    break;
  }
}
if (boolen1) {
  console.log("pineconer");
} else {
  console.log("isn't include");
}

//2
//ooo my god

//3 
let yearBirth = 2008;
let old = 0;
for (let i = 2024; i >= yearBirth; i--) {
  old++;
}
if (0<yearBirth && yearBirth<=1) {
    console.log("Infant");
} else if (0 <= yearBirth && yearBirth<=1) {
    console.log("Toodler");
} else if (1 <= yearBirth && yearBirth<=3) {
    console.log("Toodler");
} else if (3 <= yearBirth && yearBirth<=5) {
    console.log("Preschool");
} else if (5 <= yearBirth && yearBirth <=12) {
    console.log("Gradschooler"); 
} else if (12 <= yearBirth && yearBirth <=18) {
    console.log("Teen");
} else if (18 <= yearBirth && yearBirth <=21) {
    console.log("Yound adult");
} else if (21 < yearBirth){
    console.log ("Adult");
}

//4 


//5
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
  
//6
for (let i = 1; i <= 15; i +=2) {
    console.log(i)
}     

//7


//8
let num = 563;
let num1 = 0;
for (let i = (num.toString().length - 1); i >= 0; i--) {
  let num3 = parseInt(num.toString()[i]);
  if (num3 !== 0) {
    num1 = num1 * 10 + num3;
  }
}
console.log(num1);
//9



//10
let str = "ilovecode";
let vowels = 5;

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels++;
  }
}

console.log("Vowel count: " + vowels);


//11 
for (let i = 50; i <= 130; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log("CornDog");
    } else if (i % 6 === 0) {
      console.log("Corn");
    } else if (i % 9 === 0) {
      console.log("Dog");
    } else {
      console.log(i);
    }
}
  
//12
let input1 = "repaper";
let input2 = "world";
let boolen2 = true;
for (let i = 0; i < input1.length / 2; i++) {
    if (input1[i] !== input1[input1.length - 1 - i]) {
        boolen2 = false;
        break;
    }
}
if (boolen2) {
    console.log("input: " + input1 + " is a palindrome.");
} else {
    console.log("input: " + input1 + " is not a palindrome word.");
}
let pa1 = true;
for (let i = 0; i < input2.length / 2; i++) {
    if (input2[i] !== input2[input2.length - 1 - i]) {
        pa1 = false;
    }
}
if (pa1) {
    console.log("input: " + input2 + " is a palindrome.");
} else {
    console.log("input: " + input2 + " is not a palindrome word.");
}
