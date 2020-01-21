import requests
response = requests.get(
    "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=323a805c82f4e444c4d6eb02dd3cc09f")
data = response.json()
weather = data['weather'][0]
description = weather['description']

print(description)
