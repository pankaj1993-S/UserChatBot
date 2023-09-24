const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const popupButton = document.getElementById("popupButton"); 
const chatbotPopup = document.getElementById("chatbot-popup"); // Add this line

const chatbotToggler = document.getElementById("popupButton");
function showChatBox() {
    chatbotPopup.style.display = "block"; // Show the chatbot popup
}

// Function to hide the chat box
function hideChatBox() {
    chatbotPopup.style.display = "none"; // Hide the chatbot popup
}

// Attach a click event listener to the chatbot-toggler button
chatbotToggler.addEventListener("click", () => {
    const currentDisplayStyle = getComputedStyle(chatbotPopup).display;
    if (currentDisplayStyle === "none") {
        showChatBox(); // Show the chatbot popup if it's currently hidden
    } else {
        hideChatBox(); // Hide the chatbot popup if it's currently visible
    }
});

// Add an event listener to close the chatbot popup when the "close" button is clicked
document.getElementById("popupCloseButton").addEventListener("click", () => {
    hideChatBox(); // Hide the chatbot popup when "close" button is clicked
});


function createChat(from, message) {
    const chat = document.createElement("span");
    chat.innerHTML = message;

    if (from === "bot") {
        chat.classList.add("bot");
    } else if (from === "user") {
        chat.classList.add("user");
    }

    chatBox.appendChild(chat);
    chatBox.scrollTo(0, chatBox.scrollHeight);
}

var agentbydisposition = "Contact Pankaj";
var adcode = agentbydisposition.link(
    "https://wa.me/+918884188866"
);

function botReply(message) {
    const replies = {
        hi: "Welcome To Analytics Chat Bot",
        dossier: "Please Select Dossier From Below List",
        report: `
            Please Select an Report To Open:
            <button id="dossierButton">Dossier</button>
            <button id="reportButton">Report</button>
        `,
        interval: "Please Select Interval Report From Below List",
        owner: "Pankaj Shrivastava is the Owner of this Bot!!!!😁",
        close: "Thanks For Contacting Avaya Analytics Team 😁👍",
        contactpankaj: "Click Here To Contact Him  "+adcode,
    };

    // Split the message into lowercase words for processing
    let words = message.split(" ");
    words = words.map((word) => word.toLowerCase());

    let replied = false;

    words.forEach((word) => {
        if (Object.keys(replies).includes(word)) {
            createChat("bot", replies[word]);
            replied = true;

            if (word === "report") {
                // Attach event listeners to the buttons
                const dossierButton = document.getElementById("dossierButton");
                dossierButton.addEventListener("click", handleDossierButtonClick);

                const reportButton = document.getElementById("reportButton");
                reportButton.addEventListener("click", handleReportButtonClick);
            }

            return;
        }
    });

    if (!replied) createChat("bot", "Sorry, Report Not Found! Please Select a Valid Option ");
}

popupButton.addEventListener("click", () => {
    chatBox.style.display = "block"; // Show the chat box
});

// Event listener for the chat form submission (same as your existing code)
chatForm.addEventListener("submit", handleForm);

function handleDossierButtonClick() {
    // Navigate to the Dossier link when the "Dossier" button is clicked
    window.location.href = "https://analytics.dev-4.ixcc-sandbox.avayacloud.com/Analytics/servlet/AnalyticsWeb?evt=2001&src=AnalyticsWeb.2001&systemFolder=7&folderID=2129E335441907468B481AB0B162D054";
}

function handleReportButtonClick() {
    // Navigate to the Report link when the "Report" button is clicked
    window.location.href = "https://analytics.dev-4.ixcc-sandbox.avayacloud.com/Analytics/servlet/AnalyticsWeb?evt=2001&src=AnalyticsWeb.2001&systemFolder=7&folderID=E610510A4211823AD9FFBDAF3E391BE4";
}

function handleForm(e) {
    e.preventDefault();
    const message = chatInput.value;
    if (message === "") {
        return;
    } else {
        createChat("user", message);
    }
    chatInput.value = "";
    setTimeout(() => botReply(message), 500);
}


chatForm.addEventListener("submit", handleForm);
