document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let total = 0;
  const questions = ["q1", "q2", "q3"];

  for (let q of questions) {
    const answer = document.querySelector(`input[name="${q}"]:checked`);
    if (!answer) {
      alert("يرجى الإجابة على جميع الأسئلة.");
      return;
    }
    total += parseInt(answer.value);
  }

  let resultText = "";

  if (total <= 5) {
    resultText = "نمطك: المستقل – تفضل المسافة وتقلل من أهمية القرب العاطفي.";
  } else if (total <= 8) {
    resultText = "نمطك: المتوازن – لديك قدرة جيدة على التعبير والتفاعل.";
  } else if (total <= 10) {
    resultText = "نمطك: العاطفي – تتأثر كثيرًا وتحتاج اهتمام دائم.";
  } else {
    resultText = "نمطك: التعلّقي – حساس جدًا وقد تبالغ في الاحتياج العاطفي.";
  }

  document.getElementById("result").textContent = resultText;
});
