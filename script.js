form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputText = textarea.value.trim();
  if (!inputText) return;

  let result = "";
  const lowered = inputText.toLowerCase();

  if (/(أحبك|غرام|ولهان|مشتاق|افتقدك)/.test(lowered)) {
    result = "💜 هناك عاطفة حب أو تعلق واضحة.";
  } else if (/(أكره|متضايق|طفشت|ضايقني)/.test(lowered)) {
    result = "🔥 هناك مشاعر استياء أو نفور.";
  } else if (/(مدري|متردد|يمكن|محتار)/.test(lowered)) {
    result = "⚪️ النص يعكس تردد أو غموض.";
  } else if (/(حضن|شوق|دفى|لمسة|إثارة)/.test(lowered)) {
    result = "💋 هناك تلميحات جسدية ظاهرة.";
  } else if (/(تعافيت|استحق|أقدر|تعلمت|أقوى)/.test(lowered)) {
    result = "💪 النص يعكس نضج أو تعافي.";
  } else {
    result = "🌕 لا يوجد مؤشر واضح، النص محايد أو غير كافٍ للتحليل.";
  }

  resultDiv.textContent = result;
});
