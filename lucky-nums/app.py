from flask import Flask, render_template, jsonify, request
import random
import requests

app = Flask(__name__)

DEFAULT_LUCKY_URL = 'http://numbersapi.com'


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route('/api/get-lucky-num', methods=['POST'])
def get_num_facts():
    """api route to gather lucky number facts based on form info

return json with year and num fact
"""
    # declare array to keep track of any errors
    errors = {}

    # gather data from json request body
    name = request.json.get('name')
    email = request.json.get('email')
    year = request.json.get('year')
    color = request.json.get('color')

    # handle errors based on required fields and specific color/year params
    if not name:
        errors['name'] = ['This is a required field']
    if not email:
        errors['email'] = ['This is a required field']
    if not color:
        errors['color'] = ['This is a required field']
    elif color not in ['red', 'green', 'orange', 'blue']:
        errors['color'] = ['Please choose either red, green, orange, or blue']

    if not year:
        errors['year'] = ['This is a required field']
    else:
        try:
            # convert json year input to an integer
            year = int(year)
            if year < 1900 or year > 2000:
                errors['year'] = ['Please enter a year between 1900 and 2000']
        except ValueError:
            errors['year'] = ['Please enter a numeric value']

    # retun errors dict if any errors exist
    if errors:
        return jsonify(errors=errors)

    # declare empty dict for json of facts to be returned
    lucky = {}
    # get lucky number
    num = random.randint(1, 100)

    # ping API to get facts about the birth year
    year_fact = requests.get(f'{DEFAULT_LUCKY_URL}/{year}/year')
    year_text = year_fact.text

    # ping API to get facts about lucky num
    num_fact = requests.get(f'{DEFAULT_LUCKY_URL}/{num}')
    num_text = num_fact.text

    # add year and num facts to dict
    lucky['year'] = {'fact': year_text, 'year': year}
    lucky['num'] = {'fact': num_text, 'num': num}

    # return the dict in json form with 201 status code

    return (jsonify(lucky), 201)
