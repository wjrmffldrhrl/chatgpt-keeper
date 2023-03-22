
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

function unwrapElements(element, tagName) {
  const elements = element.querySelectorAll(tagName);
  elements.forEach(el => {
    while (el.firstChild) {
      el.parentNode.insertBefore(el.firstChild, el);
    }
    el.parentNode.removeChild(el);
  });
}

function htmlToMarkdownCodeBlock(element) {
  const elements = element.querySelectorAll('pre');
  elements.forEach(el => {
    const codeElement = el.querySelector('code');
    const language = codeElement.closest('pre').querySelector('span').textContent.trim();
    const code = codeElement.textContent.trim();

    el.innerHTML = `<code class="${language} language-${language}">${code}</code>\n`;
  });
}


// Function to handle button click
function saveChat() {
    console.log("Chat saved!");
    // Add code here to save the chat
    const title = document.querySelector('title').innerText;

    var messageBoxes = document.querySelectorAll('.flex.flex-grow.flex-col.gap-3');

    let finalText = "";
    let currentSpeaker = "You";


    messageBoxes.forEach(function (box) {
        if (currentSpeaker === "You") {
            finalText += "### " + currentSpeaker + "\n" + box.textContent + "\n\n";

            currentSpeaker = "chatGPT";
        } else {
            let box_clone = box.cloneNode(true);
            htmlToMarkdownCodeBlock(box_clone);
            unwrapElements(box_clone, "div");
            let boxHtml = box_clone.innerHTML;
            const converter = new showdown.Converter();
            let markdown = converter.makeMarkdown(boxHtml);
            finalText += "### " + currentSpeaker + "\n" + markdown + "\n\n";

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
