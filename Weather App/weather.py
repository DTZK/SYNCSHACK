import requests
from flask import Flask, render_template

def get_weather_results():
    api_url = "https://api.openweathermap.org/data/2.5/weather?q=Sydney,AU&units=metric&appid=cc12378b53967e7eaf902e1566c6e11b"
    r = requests.get(api_url)
    return r.json()

app = Flask(__name__)
@app.route('/')
def weather_dashboard():
    data = get_weather_results()
    temp = "{0:.2f}".format(data["main"]["temp"])
    feels_like = "{0:.2f}".format(data["main"]["feels_like"])
    weather = data["weather"][0]["main"]
    location = data["name"]

    return render_template('home.html', location=location, temp=temp, feels_like=feels_like, weather=weather)

if __name__ =='__main__':
    app.run()

