form.addEventListener("submit", e => {
  e.preventDefault();
  const inputText = textarea.value.trim();
  if (!inputText) return;

  let result = "✅ تم استلام النص: " + inputText;
  resultDiv.textContent = result;
});
