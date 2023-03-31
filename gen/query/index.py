from flask import Flask, request, jsonify
from dotenv import load_dotenv
import requests
import openai
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

api_key = os.getenv('API_KEY')
openai.api_key = api_key

def generate_response(prompt):
    # Set up the OpenAI API parameters
    model_engine = "davinci" # or another model from OpenAI's API
    # prompt_text = "Generate a SQL Query based on this " + prompt + " only return sql query, no explanations and conclusions, if " + prompt + " does not contain enough information to make up a SQL query, return with the following text Please provide enough information to makeup a query "
    prompt_text = prompt
    max_tokens = 50
    temperature = 0.5
    n = 1

    # Generate the response using the OpenAI API
    response = openai.Completion.create(
        engine=model_engine,
        prompt=prompt_text,
        max_tokens=max_tokens,
        temperature=temperature,
        n=n
    )

    # Extract the generated text from the OpenAI API response
    generated_text = response.choices[0].text.strip()

    return generated_text

@app.route('/', methods=['GET'])
def index():
    return "Welcome to SQL Generator"

@app.route('/generate_response', methods=['POST'])
def get_response():
    message = request.form.get('message')

    if message is None:
        return 'Error: no message provided'

    prompt = "Please generate a MySQL query from the following text without explanation: " + message
    # Generate the response using the OpenAI API
    response = generate_response(prompt)

    return response
