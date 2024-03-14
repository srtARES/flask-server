fetch('http://localhost:5000/weather') 
    .then(response => response.json())
    .then(data => {
        if(data.length > 0) {
            const firstItem = data[0];
            const weatherCondition = firstItem.weather_condition; 
            const humidity = firstItem.humidity;

            const weatherInfo = `
                <div class="card">
                    <div class="card-body">
                        <p class="card-text" style="text-align : center; padding : 10px;"><strong>Humidity:</strong> ${humidity}%</p>
                    </div>
                </div>
            `;
            document.getElementById("weatherInfo").innerHTML = weatherInfo;
        } else {
            document.getElementById("weatherInfo").innerHTML = "<p>No weather data available.</p>";
        }
    })
    .catch(err => {
        console.error("Failed to fetch weather data from server:", err);
        document.getElementById("weatherInfo").innerHTML = "<p class='alert alert-danger'>Failed to load weather data from server.</p>";
    });
