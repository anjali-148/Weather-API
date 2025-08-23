# Weather-API

🌦 **Weather -API (#HTML, CSS, JavaScript)**

        A simple and responsive weather website built using only HTML, CSS, and JavaScript.
        It fetches real-time weather data from the OpenWeather(https://openweathermap.org/api) API
        and displays the current weather conditions for any city.

✨ **Features**

      🌍 Search weather by city name

      🌡 Shows temperature, humidity, wind speed, and conditions

      🎨 Clean and responsive UI (works on mobile & desktop)


🛠 **Tech Stack**

        HTML5 – structure

        CSS3 – styling (responsive design)

        JavaScript (Vanilla JS) – fetching data & DOM manipulation

        OpenWeather API – weather data provider

📦 **Project Structure**
          Weather-API/

          ├── Weather.html
          ├── index.css
          ├── app.js
          └── README.md

🔑 **Setup Instructions**

          Get your API Key

          Sign up at OpenWeather

          Go to your profile → API Keys

          Copy your key

          Add API Key in script.js
          Open app.js and replace "YOUR_API_KEY" with your actual key:

          const API_KEY = "YOUR_API_KEY"; 


          Run the Website

          Open index.html in your browser

          Search for a city 

          📡 API Endpoints Used
          Current Weather by City
          https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric


🖼 **Example Response**

        {
          "name": "London",
          "main": {
            "temp": 18.5,
            "humidity": 72
          },
          "weather": [
            { "description": "light rain"}
          ],
          "wind": { "speed": 3.6 }
        }

🚀 **Future Improvements**

        -Add 5-day forecast support<br>
        -Show weather icons dynamically
        -Save favorite cities in localStorage
        -Dark mode 🌙



