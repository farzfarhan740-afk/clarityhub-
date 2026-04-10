async function kirim() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-box");

  let userText = input.value;
  chatBox.innerHTML += "<p><b>Kamu:</b> " + userText + "</p>";

  input.value = "";

  const response = await fetch("https://ISI_LINK_VERCEL_KAMU/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: userText
    })
  });

  const data = await response.json();

  chatBox.innerHTML += "<p><b>AI:</b> " + data.reply + "</p>";
}
