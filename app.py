from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    input_text = data.get("text", "").strip()

    if not input_text:
        return jsonify({"result": "النص فارغ"}), 400

    # تحليل مبدئي
    result = f"تحليل مبدئي للنص: {input_text}"
    return jsonify({"result": result})
