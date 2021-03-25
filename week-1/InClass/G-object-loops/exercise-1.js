// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19
  };

// let values = Object.values(studentGrades);
// console.log(values);
// let result = values.filter( value => {
//   if ( value > 18) {
//     return value;
//   }
// })
// console.log(result)
let values =  Object.values(studentGrades)
let ans = values.filter( value => value > 18)
console.log(ans)
  
  
  // Prints
  // TOM - 20
  // ABDUL - 19