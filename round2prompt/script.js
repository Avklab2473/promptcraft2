const faqResponses = {
    "restaurant timings": "Most restaurants are open from 9:00 AM to 11:00 PM.",
    "track my food order": "You can track your order under the 'My Orders' section.",
    "apply coupon codes": "Apply coupon codes at the checkout page before confirming your order.",
    "report an issue": "Go to the 'Help' section in the app to report an issue with your order."
};

const generalResponses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm here to assist you with your queries!",
    "thank you": "You're welcome! Feel free to ask if you need any more help.",
    "thanks": "You're welcome! Let me know if you have more questions."
};

function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatWindow = document.getElementById("chat-window");

    if (userInput) {
        // Display user message
        let userMessage = `<div class="message user">${userInput}</div>`;
        chatWindow.innerHTML += userMessage;

        // Check for response
        let botResponse = getBotResponse(userInput);
        let botMessage = `<div class="message bot">${botResponse}</div>`;
        chatWindow.innerHTML += botMessage;

        // Clear input field
        document.getElementById("user-input").value = "";

        // Scroll chat to the bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

function getBotResponse(userInput) {
    // Check for general conversation responses
    for (let question in generalResponses) {
        if (userInput.includes(question)) {
            return generalResponses[question];
        }
    }
    
    // Check for FAQ responses
    for (let question in faqResponses) {
        if (userInput.includes(question)) {
            return faqResponses[question];
        }
    }

    return "Sorry, I don't understand the question. Please try again.";
}
