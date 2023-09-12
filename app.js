var futureStudentNames = [];
var futureStudents = {
    names: []
  };
//   var stringsArray = ["Hello", "World", "JavaScript"];
//   var numbersArray = [1, 2, 3, 4, 5];
//   var booleanArray = [true, false, true, false];
//   var mixedArray = [1, 'apple', true, 3.14, { name: 'John' }];

const educationQualifications = [
    'SSC',
    'HSC',
    'BCS',
    'BS',
    'BCOM',
    'MS',
    'M. Phil.',
    'PhD'
  ];
  document.write(educationQualifications);
  
// // Initialize the array with color names
// const colorArray = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

// // Display the original array
// document.write('Original Array:', colorArray);

// // a. Add a color to the beginning of the array
// const colorToAddAtBeginning = prompt('Enter a color to add to the beginning:');
// colorArray.unshift(colorToAddAtBeginning);

// // Display the updated array
// document.write('Array after adding color to the beginning:', colorArray);

// // b. Add a color to the end of the array
// const colorToAddAtEnd = prompt('Enter a color to add to the end:');
// colorArray.push(colorToAddAtEnd);

// // Display the updated array
// document.write('Array after adding color to the end:', colorArray);

// // c. Add two more colors to the beginning of the array
// colorArray.unshift('Purple', 'Pink');

// // Display the updated array
// document.write('Array after adding two more colors to the beginning:', colorArray);

// // d. Delete the first color in the array
// colorArray.shift();

// // Display the updated array
// document.write('Array after deleting the first color:', colorArray);

// // e. Delete the last color in the array
// colorArray.pop();

// // Display the updated array
// document.write('Array after deleting the last color:', colorArray);

// // f. Add a color at a specific index
// const indexToAddColor = prompt('Enter the index to add a color:');
// const colorToAddAtIndex = prompt('Enter the color to add at the specified index:');
// colorArray.splice(indexToAddColor, 0, colorToAddAtIndex);

// // Display the updated array
// document.write('Array after adding a color at the specified index:', colorArray);

// // g. Delete color(s) from a specific index
// const indexToDelete = prompt('Enter the index from which to delete color(s):');
// const numberOfColorsToDelete = prompt('Enter the number of colors to delete:');
// colorArray.splice(indexToDelete, numberOfColorsToDelete);

// // Display the updated array
// document.write('Array after deleting color(s) from the specified index:', colorArray);

  
//   // Array to store student scores
// const studentScores = [320, 230, 480, 120];
// document.write("Score of student",studentScores);

// // Sort the array in ascending order
// studentScores.sort((a, b) => a - b );

// // Display the sorted array
// document.write("Order Score of Student", studentScores);

// Initialize an array with city names
// const cities = ['Karchi', 'Lahore', 'Pewshwar', 'Queeta', 'Islamabd'];
// document.write("City list:" +"<br>" ,cities);

// // Create an empty array to store selected cities
// const selectedCities = [];

// // Copy the first three elements from the cities array to the selectedCities array
// selectedCities.push(cities[0], cities[1], cities[2]);

// // Display the selectedCities array
// document.write('Selected Cities:'+"<br>", selectedCities +"<br>");

// var arr = ["This", "is", "my", "cat"];
// document.write("ARRAY" +"<br>");

// var singleString = ["This is my cat"];

// document.write(singleString);

// Create an empty array to act as a FIFO queue
const fifoQueue = [];

// Add values to the end of the queue (FIFO)
fifoQueue.push("Value 1" +"<br>");
fifoQueue.push("Value 2" +"<br>");
fifoQueue.push("Value 3" +"<br>");

// Access and remove values from the front of the queue (FIFO)
const firstValue = fifoQueue.shift(); // Removes and returns "Value 1"
const secondValue = fifoQueue.shift(); // Removes and returns "Value 2"

document.write("First Value:", firstValue);
document.write("Second Value:", secondValue);

// The queue now contains only "Value 3"
document.write("Remaining Values in the Queue:", fifoQueue);

