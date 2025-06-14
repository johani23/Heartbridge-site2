
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputText = textarea.value.trim();
  if (!inputText) return;

  let result = "";
  const lowered = inputText.toLowerCase();

  if (/أحبك|احبك|احب|أحب/i.test(lowered)) {
    result = "❤️ مؤشر واضح على توافق وجداني أو تعلق.";
  } else if (/أكرهك|اكرهك|كره|كاره/i.test(lowered)) {
    result = "💔 مؤشر على نفور عاطفي أو صدمة سابقة.";
  } else if (/مشتاق|أشتاق|اشتاق|أحن/i.test(lowered)) {
    result = "🟣 مؤشر على تعلق عاطفي عالي.";
  } else if (/أناني|استغلال|ما يهتم|يتجاهل/i.test(lowered)) {
    result = "⚠️ في دلالة على سلوك غير متزن أو اختلال في العلاقة.";
  } else {
    result = "🔅 لا يوجد مؤشر واضح، النص محايد أو غير كافٍ للتحليل.";
  }

  resultDiv.textContent = result;
});
