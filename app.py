from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    input_text = data.get("text", "").strip()

    if not input_text:
        return jsonify({"result": "النص فارغ"}), 400

    # تحليل مبدئي
    result = f"تحليل مبدئي للنص: {input_text}"

    return jsonify({"result": result})

# لا تستخدم app.run() مع Render
# بدلاً من ذلك، خلّي Gunicorn يدير الملف مباشرة: app:app
