function startListening() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "hi-IN";

  recognition.onresult = function(event) {
    const userText = event.results[0][0].transcript;
    document.getElementById("user").innerText = "Tum: " + userText;

    const replies = [
      "To? 🙂 itna drama kyun kar raha hai 😂😂💅",
      "Hehehe 💅 seriously? b*c dimag laga 😏😂",
      "Acha? 🙂 mujhe kya 🙄😂💅",
      "To kya? 😒 roz ka hai tera 😂😂💅"
    ];

    const reply = replies[Math.floor(Math.random() * replies.length)];
    document.getElementById("ai").innerText = "Astha: " + reply;

    const speech = new SpeechSynthesisUtterance(reply);
    speech.lang = "hi-IN";
    speech.rate = 1.05;
    speechSynthesis.speak(speech);
  };

  recognition.start();
}
