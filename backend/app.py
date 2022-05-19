from flask import Flask
from flask import request
from flask_cors import CORS
import predict  
import os

app = Flask(__name__)
cors = CORS(app)

app.config['FILE_UPLOADS'] = "./files"

@app.route("/", methods=['GET'])
def home():
    return "Hello, world!"

@app.route('/api/upload', methods = ['POST'])
def upload_file():
    file = request.files['file']
    file.save(os.path.join(app.config['FILE_UPLOADS'], file.filename))
    print(file.filename.split('.'))
    res = predict.predict(os.path.join(app.config['FILE_UPLOADS'], file.filename), os.path.join(app.config['FILE_UPLOADS'], file.filename.split('.')[0] + '.json'))
    return res

if __name__ == '__main__':
    app.run()

