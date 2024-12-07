// // Functions:

// // 1. FuncDeclaration()
//  function thisIsAFuncDeclaration() {

//  }

// // // // 2. Arrow Function()
//  const thisIsAnArrowFunc = () => {

// //  };
function sayHello(a,b,name) {
    console.log("Hello " +name + ", This is the new number "+(a+b)+"!");
}
// sayHello("BIJU");

const establishNewNum = () => {
    return 19
}
const newNum = () => {
    return 30
}
sayHello(establishNewNum(),newNum(), "BIJU");


// // ..... these are, however, "CALLED" the same way
// thisIsAFuncDeclaration();

// thisIsAnArrowFunc();


// function add(a, b) {
//   // -----params-
//   console.log( a + b);
// }

// // const add = (a, b) => {
// //   console.log( a + b);
// // };
// // ----------------------------------
// const establishNewNum = () => {
//     console.log("19 is the num in question")
//     return 19
// }

// add(25,100)
// add(50,200)
// add(253423423,324234234100)
// add(25,1023423424232340)
// // // --args
// add(establishNewNum(), 2)
//     // 21

// Practice

// function computeArea(width, height)[



// ]

// const computeArea =() => {}

   // Take an array of numbers and return the sum.
   // Take an array of numbers and return the average.

//    const arr = [11,15,12,60,45,30];
//    let solution = 0;
//    let average = 0;

//    for (i = 0; i < arr.length; i++) {
//     solution += arr[i];

//    }
//    console.log(solution);
//    console.log(average = solution / arr.length);
  


//     // Take an array of strings and return the longest string.

//  let stringsLongerThan =['say', 'hello', 'in', 'the', 'morning'];

// function longestString () {
//     return stringsLongerThan.sort(function (a,b) {
//         return b.length - a.length;
//     })[0];

// }
// console.log(longestString());

    // Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

    // For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

    // let stringsLongerThan =['say', 'hello', 'in', 'the', 'morning']


    // function arraylongerNum(array, num) {
    //     container = []
    //     for(const item of array) {
    //         if (item.length > num) {
    //             container.push(item)
    //         }
    //    }
    //    console.log(container)
    //     }
    // arraylongerNum(stringsLongerThan,2)



    // Take a number, n, and print every number between 1 and n without using loops. Use recursion.

    // function printRecursiveNum(num,currentValue) { 
    //     if (currentValue > num) { 
    //         return; 
    //     } 
    //     console.log(currentValue); 
    //     printRecursiveNum(num, currentValue + 1); 
    // } 
      
    // const num = 8; 
    // printRecursiveNum(num,1);

//     For the tasks below, use the following data to test your work:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Use callback functions alongside Array methods to accomplish the following:


// Sort the array by age.

    // let arr = [
    //     { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    //     { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    //     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    //     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    //     { id: "7", name: "Bilbo", occupation: "None", age: "111" }
    // ]
//     arr.sort ((a,b) => a.age - b.age);
//    arr.forEach((obj) => {
//     console.log(`${obj.age} ${obj.id} ${obj.name} ${obj.occupation}`);
    
//    });

// Filter the array to remove entries with an age greater than 50.

// const ageabove50 = arr.filter((obj) => obj.age < 50);


//  console.log(ageabove50);
 

// Map the array to change the “occupation” key to “job” and increment every age by 1.

// const updatedPeople = arr.map(obj => {
//   //  return { job: obj.occupation };
//     let newObj = {
//         ...obj,
//         age: Number(obj.age),
//         job: obj.occupation
//     }
//     newObj.age += 1
//     delete newObj.occupation;
//     return newObj;
// });
  
//   console.log(updatedPeople);

// Use the reduce method to calculate the sum of the ages.


// Then, use the result to calculate the average age.



//   const computeArea = (width, height) => {
//     console.log("The square feet is "+  width * height);
//   }
//   computeArea(25,50)
