const chatbox = document.getElementById('chatbox');


function sendMessage() {
  
  const userInput = document.getElementById('userInput');
 
   const message = userInput.value;
  
  
    if (message.trim() === "") return;


    // Display user's message
   
 displayMessage(message, 'user');

  
  // Simulate bot response
   
 setTimeout(() => {
    
    const botResponse = getBotResponse(message);
 
       displayMessage(botResponse, 'bot');

    }, 1000);
    
 
   userInput.value = '';

}


function displayMessage(message, sender) {
 
   const messageDiv = document.createElement('div');

    messageDiv.classList.add(sender);
 
   messageDiv.textContent = message;
  
  chatbox.appendChild(messageDiv);
 
   chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}


function getBotResponse(message)
 {
  
  // Basic responses for demo purposes
   
 if (message.toLowerCase().includes("find")) {
   
     return "Please share your location to find charging stations.";
 
   }
 else if
 (message.toLowerCase().includes("location")) {
 
       return "I found several charging stations near you. Would you like the details?";
  
  } else {

        return "I'm here to help you with EV charging stations! Ask me anything.";
  
  }

}