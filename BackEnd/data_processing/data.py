from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

data_df = pd.read_csv('/data/WHO-COVID-19-global-data.csv')

@app.route('/process-data', methods=['POST'])
def process_data():
 try:
  request_data = request.get_json()
  
  #perform data processing using pandas
  