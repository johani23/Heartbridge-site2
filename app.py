from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    input_text = data.get("text", "").strip()

    if not input_text:
        return jsonify({"result": "النص فارغ"}), 400

    # تحليل مبدئي - مؤقتًا نرجع النص نفسه
    result = f"تحليل مبدئي: {input_text}"

    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)
