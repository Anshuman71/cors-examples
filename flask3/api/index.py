from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True, resources={r"/api/cors": {"origins": "https://rrv7.vercel.app"}})

@app.route('/')
def home():
    return 'No cors!'

@app.route('/api/cors')
def api_cors():
    return 'This has cors'

@app.route('/api/vercel-config-cors')
def api_vercel_config():
    return 'This has Vercel config cors'

@app.route('/api/mw-cors')
def api_middleware():
    return 'This has middleware cors'