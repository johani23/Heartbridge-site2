document.getElementById('quizForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const text = document.getElementById('textarea').value;
  const responseDiv = document.getElementById('result');

  if (!text.trim()) {
    responseDiv.innerText = 'يرجى كتابة النص أولاً.';
    return;
  }

  responseDiv.innerText = '...جاري التحليل';

  try {
    const response = await fetch('http://127.0.0.1:5000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    responseDiv.innerText = `النمط المتوقع: ${data.cluster}`;
  } catch (err) {
    responseDiv.innerText = 'حدث خطأ في الاتصال بالخادم.';
    console.error(err);
  }
});
