/*Write that prompts the user to input student marks. The input should be between 
		
0 and 100. Then output the correct grade: 
		
		
A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40.*/
		

		

		
// Prompt the user to input a student mark

let marks = -5

// Check if marks are valid
if (marks >= 0 && marks <= 100) {

  // Assign grade based on marks
  let grade;
  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Output grade
  console.log(`The grade for marks ${marks} is ${grade}.`);

} else {
  console.log("Invalid input. Please enter a number between 0 and 100.");
}


		

		
// Check the mark and output the corresponding grade