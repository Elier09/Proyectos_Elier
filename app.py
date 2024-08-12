from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# Define tu clave API
api_key = 'API_KEY38Q3RM1TP6FKD2SX1WZBMUZIDPZQBWCF'

def convertir_cripto(from_symbol, to_symbol, amount):
    url = f'https://api.finage.co.uk/convert/crypto/{from_symbol}/{to_symbol}/{amount}?apikey={api_key}'
    print(f'Request URL: {url}')  # Mensaje de depuración
    response = requests.get(url)
    print(f'Status Code: {response.status_code}')  # Mensaje de depuración
    if response.status_code == 200:
        print(f'Response JSON: {response.json()}')  # Mensaje de depuración
        return response.json()
    else:
        print(f'Error: {response.text}')  # Mensaje de depuración
        return None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convertir_cripto', methods=['POST'])
def handle_convertir_cripto():
    from_symbol = request.form['from_symbol']
    to_symbol = request.form['to_symbol']
    amount = request.form['amount']
    data = convertir_cripto(from_symbol, to_symbol, amount)
    if data is not None:
        return jsonify(data)
    else:
        return jsonify({'error': 'Error al convertir la criptomoneda'}), 500

if __name__ == '__main__':
    app.run(debug=True)
