// Create the button and add an id
var button = document.createElement("button");
button.innerHTML = "Save Chat";
button.setAttribute("id", "chatGPT-save-button");

// Create a div to hold the button
var buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "chatGPT-button");
buttonDiv.appendChild(button);

// Add the button to the top right corner of the screen
document.body.appendChild(buttonDiv);

// Add event listener for button click
document.getElementById("chatGPT-save-button").addEventListener("click", saveChat);

// Function to handle button click
function saveChat() {
    console.log("Chat saved!");
    // Add code here to save the chat
}
