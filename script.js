// script.js
const container = document.getElementById('container');
const akritiBox = document.getElementById('akriti-box');

// Function to change the body's background color
function changeBodyBackgroundColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
}

// Function to create a new box
function createBox(text, nextAction) {
  const newBox = document.createElement('div');
  newBox.className = 'box';
  newBox.textContent = text;

  // Add event listener for the new box
  newBox.addEventListener('click', () => {
    changeBodyBackgroundColor();
    nextAction();
    
  });

  container.appendChild(newBox);
}

// Define actions for each step
akritiBox.addEventListener('click', () => {
  changeBodyBackgroundColor();

  // Remove the Akriti box to prevent repeated clicks
  akritiBox.remove();

  // Create the Manmit box
  createBox('Manmit', () => {
    // When Manmit is clicked, create the final box
    createBox('Both are friends', () => {
      alert('Congratulation now we are friends!');
      confirm('GoodBye')
    });
  });
});
