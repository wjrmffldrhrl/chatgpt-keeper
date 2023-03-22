
// Create the button and add an id
var button = document.createElement("button");
button.innerHTML = "Save Chat";
button.setAttribute("id", "keeper-save-button");

// Create a div to hold the button
var buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "keeper-button-container");
buttonDiv.appendChild(button);

// Add the button to the top right corner of the screen
document.body.appendChild(buttonDiv);

// Add event listener for button click
document.getElementById("keeper-save-button").addEventListener("click", saveChat);


// Function to handle button click
function saveChat() {
    console.log("Chat saved!");
    // Add code here to save the chat
    const title = document.querySelector('title').innerText;

    var messageBoxes = document.querySelectorAll('.flex.flex-grow.flex-col.gap-3');

    let finalText = "";
    let currentSpeaker = "You";


    messageBoxes.forEach(function (box) {
        finalText += "### " + currentSpeaker + "\n" + box.textContent + "\n\n";
        if (currentSpeaker === "You") {
            currentSpeaker = "chatGPT";
        } else {
            currentSpeaker = "You";
        }
    });


    let downloadUrl = URL.createObjectURL(new Blob([finalText], { type: 'application/octet-binary' }));
    
    // Create an <a> tag
    var a = document.createElement("a");

    // Set the href of the <a> tag to the URL of the Blob object
    a.href = downloadUrl;

    // Set the download attribute of the <a> tag to the desired file name
    a.download = `${title}.md`;

    // Simulate a click on the <a> tag to initiate the download
    a.click();
}
