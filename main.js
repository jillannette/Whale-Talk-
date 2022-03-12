let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
//  console.log(vowels);
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    const phrase = input[i];
//  console.log(i)

console.log(resultArray);

if (input[i] === 'e') {
    resultArray.push(input[i]);
}
//  console.log(resultArray);

if (input[i] === 'u') {
    resultArray.push(input[i]);
}
console.log(resultArray);

     for (let j = 0; j < vowels.length; j++) {
        const text = vowels[j];
 //      console.log(phrase, text);
        if (phrase === text) {
            resultArray.push(phrase);
 //            console.log('match');
            
        }

 
     }
    }
    console.log(resultArray); {
  
    }
   
   console.log(resultArray.join('')); 
   let upperCase = resultArray.join('').toUpperCase();
   console.log(upperCase);
   
   

  
