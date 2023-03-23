// Create the button and add an id
const button = document.createElement("button");

button.innerHTML = "Save Chat";
button.setAttribute("id", "chatgpt-keeper-save-chat-button");

// Create a div to hold the button
const buttonDiv = document.createElement("div");

buttonDiv.setAttribute("id", "chatgpt-keeper-button-container");
buttonDiv.appendChild(button);

// Add the button to the top right corner of the screen
document.body.appendChild(buttonDiv);

// Add event listener for button click
document.getElementById("chatgpt-keeper-save-chat-button").addEventListener("click", saveChat);

// Function to handle button click
function saveChat() {
    console.log("Chat saved!");

    // Add code here to save the chat
    const title = document.querySelector("title").innerText;
    const messageBoxes = document.querySelectorAll(".flex.flex-grow.flex-col.gap-3");
    const finalText = Array.from(messageBoxes)
        .map((box, index) => [box, index % 2 === 0 ? "You" : "chatGPT"])
        .reduce((text, [box, currentSpeaker]) => text + "### " + currentSpeaker + "\n" + box.textContent + "\n\n", "");
    const downloadUrl = URL.createObjectURL(new Blob([finalText], {type: "application/octet-binary"}));
    // Create an <a> tag
    const a = document.createElement("a");

    // Set the href of the <a> tag to the URL of the Blob object
    a.href = downloadUrl;

    // Set the download attribute of the <a> tag to the desired file name
    a.download = `${title}.md`;

    // Simulate a click on the <a> tag to initiate the download
    a.click();
}
