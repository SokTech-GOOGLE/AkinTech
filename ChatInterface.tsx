const response = await fetch("/api/assistant", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userInput }),
});

const data = await response.json();
setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
