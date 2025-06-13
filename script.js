const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputText = textarea.value.trim();
  if (!inputText) return;

  try {
    const response = await fetch("https://heartbridge-api-backend.onrender.com/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    });

    const data = await response.json();
    resultDiv.textContent = data.result || "تحليل غير متاح";
  } catch (error) {
    resultDiv.textContent = "حدث خطأ، تأكد من الاتصال بالإنترنت أو بالخادم.";
  }
});
