let addMe = (a,b) => a + b
console.log(addMe(3, 6))

let arrayOne = ['umbrella', 'dvd', 'mobile', 'cd', 'hdd', 'cat']
arrayOne.push('dog', 'cow', 'lion', 'tiger', 'elephant')
console.log(arrayOne)



// Working on Arrays!!

// const numbers = [1, 2, 3, 4, 5, 6]

// const double = (numbers) => {
//  let result = []
//    for (const number of numbers) {
//      result.push(number * 2)
//    }

//   return result
// }

// console.log(double([1, 2, 3, 4, 5, 7]))


// const howManyLetters = (phrase) => {
 

//   let result = 0;
  
//   for (const index in phrase) {
//     console.log(Number(index) + 1)
//     result = Number(index) + 1
//   }
//   return { result }
// }

// const phrase = prompt('write your phrase')

// console.log(howManyLetters(phrase))

// let numbers = [1,2,3,4]
// const sumArray = (numbers) => {
//   let result = 0;
//   for(const number of numbers) {
//     console.log(number)
//     result = result + number
//   }
//   return { result }
  
// }
// const nums = [1,2,3,4,5]
// console.log(sumArray(nums))



// const sumArray = (numbers) => {
// let result = 0;
// for(const number of numbers) {
//   console.log(number)
//   result = result + number
// }
//   return { result }
// }

// const nums = [1, 2, 3, 4]
// console.log(sumArray(nums))


// const sumArray = (numbers) => {
//   let result = 0;
//   for (const number of numbers) {
//     console.log(number)
//     result = result + number
//   }
//   return { result }
// }

// const nums = [1,2,3,4]
// console.log(sumArray(nums))



// const max = (numbers) => {
//   let result = numbers[0];
// for (const number of numbers) {
//   if (number > result){
//     result = number;
//   }
// }
//   return { result }
  
// }

// console.log(max([1,2,3,4,5])) 



// const max = (numbers) => {
//   let result = numbers[0];
//   for (const number of numbers) {
//     if (number > result){
//       result = number;
//     }
//   }
//   return {result}
// }

// console.log(max([1,2,3,4,5]))



const letterFrequency = (phrase) => {
    console.log(phrase)
  // make a 'frequency' object {}
  let frequency = {}
  for (const letter of phrase) {
    // check if letter exists in frequency
    if (letter in frequency){
      // increment the value by +1 
      frequency[letter] += 1  
      // otherwise, set the value to 1
    }
    else {
      frequency[letter] = 1
    }
  }
  return frequency
}
// console.log(letterFrequency('bruhhh, what da dog doin'))


const wordFrequency = (phrase) => {
  let frequency = {}
  words = phrase.split(' ')
  for (const word of words) {
    if (word in frequency) {
      frequency[word] += 1
    }
    else {
      frequency[word] = 1
    }
  }
  // console.log(words)
  return frequency
}
console.log(wordFrequency('lol what lol bruhh bruhh ronish sussy is a bg sussy'))