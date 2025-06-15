
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputText = textarea.value.trim();
  if (!inputText) return;

  try {
    const response = await fetch("https://heartbridge-api-backend-3.onrender.com/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: inputText })  // ✅ يتوافق مع app.py
    });

    const data = await response.json();
    resultDiv.textContent = "✅ تم التحليل بنجاح: " + data.result;  // ✅ نستخدم result مثل ما يرجع الباكند
  } catch (error) {
    resultDiv.textContent = "❌ حدث خطأ في الاتصال بالخادم أو أثناء التحليل.";
  }
});
