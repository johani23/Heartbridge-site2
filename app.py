from flask import Flask, request, jsonify
from flask_cors import CORS  # أضف هذا السطر

app = Flask(__name__)
CORS(app)  # وأضف هذا السطر

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    input_text = data.get("text", "").strip()

    if not input_text:
        return jsonify({"result": "النص فارغ"}), 400

    result = f"تحليل مبدئي للنص: {input_text}"
    return jsonify({"result": result})
