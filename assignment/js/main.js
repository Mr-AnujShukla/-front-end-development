// Get the elements
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var draggingItem = null;

// Add event listeners for drag and drop
container1.addEventListener('dragstart', dragStart);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);

// Function to handle the dragstart event
function dragStart(event) {
  // Set the data being dragged (in this case, the item's text content)
  event.dataTransfer.setData('text/plain', event.target.textContent);
  // Set the draggingItem variable to the current dragged item
  draggingItem = event.target;
  // Add a class to the dragged item for visual feedback
  draggingItem.classList.add('dragging');
}

// Function to handle the dragover event
function dragOver(event) {
  // Prevent the default behavior which would not allow dropping
  event.preventDefault();
}

// Function to handle the dragenter event
function dragEnter(event) {
  // Add a class to the drop target for visual feedback
  event.target.classList.add('drag-enter');
}

// Function to handle the dragleave event
function dragLeave(event) {
  // Remove the class from the drop target
  event.target.classList.remove('drag-enter');
}

// Function to handle the drop event
function drop(event) {
  // Remove the class from the drop target
  event.target.classList.remove('drag-enter');
  // Get the data being dropped (in this case, the item's text content)
  var data = event.dataTransfer.getData('text/plain');
  // Create a new item with the dropped data
  var newItem = document.createElement('div');
  newItem.className = 'item';
  newItem.textContent = data;
  // Append the new item to the second container
  event.target.appendChild(newItem);

  // Display success message or update UI in appropriate way
  alert('Item dropped successfully!');
  // You can modify this part to update the UI based on the dropped item
}

// Function to reset the containers to their original state
function resetContainers() {
  // Clear the second container
  container2.innerHTML = '';
   

// Remove the dragging class from the original items
var originalItems = container1.querySelectorAll('.item');
for (var i = 0; i < originalItems.length; i++) {
originalItems[i].classList.remove('dragging');
}
}