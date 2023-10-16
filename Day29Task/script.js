// create a webpage that fetches and displays chuck norris jokes from the "Chuck Norris jokes api". users can click a button to get a new random chuck norris joke.
let fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            // console.log(data.value);
            jokeText.textContent = data.value;
        })
        .catch((error) => {
            console.log(error);
        })
}

let getJokeButton = document.getElementById('getJokeButton');
let jokeText = document.getElementById('jokeText');

getJokeButton.addEventListener('click', fetchJoke);

fetchJoke();


document.addEventListener('DOMContentLoaded', () => {
    // Fetch UK bank holiday data
    fetch('https://www.gov.uk/bank-holidays.json')
        .then(response => response.json())
        .then(data => {
            const ukHolidays = data['england-and-wales'].events;

            // Filter holidays for the year 2023
            const holidays2023 = ukHolidays.filter(event => event.date.includes('2023'));

            // Create an HTML list of bank holidays
            const holidayList = document.getElementById('holidayList');
            holidays2023.forEach(holiday => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${holiday.title}</strong>: ${holiday.date}`;
                holidayList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching bank holidays:', error);
        });
});

async function getdata() {
    var inputVal = document.getElementById("searchTxt").value;

    const res = await fetch(
        "https://weatherapi-com.p.rapidapi.com/current.json?q=q=" + inputVal, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "4f8234a62amsh42185b0b78f249cp12e57ajsnb401d01fcbbf",
            },
        }
    );
    getWeekDay();
    const data = await res.json();
    document.getElementById("location").innerText = data.location.name;
    document.getElementById("locationParts").innerHTML = "<i class='bi bi-geo-alt'></i> " +
        data.location.region + " , " + data.location.country;
    document.getElementById("dateTime").innerHTML = "<i class='bi bi-calendar'></i> " +
        data.location.localtime.substr(0, 10);
    document.getElementById("txtWord").innerText = data.current.condition.text;
    document.getElementById("humidity").innerText =
        "Humidity: " + data.current.humidity + "%";
    document.getElementById("precipitation").innerText =
        "Precipitation: " + data.current.precip_mm + "%";
    document.getElementById("wind").innerText =
        "Wind: " + data.current.wind_kph + "km/h";
    document.getElementById("temperatureC").innerText =
        data.current.temp_c + " °C";
    document.getElementById("temperatureF").innerText =
        data.current.temp_f + " °F";
    document.getElementById("weatherIcon").src =
        "https:" + data.current.condition.icon;
}

function getWeekDay() {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("weekDay").innerText = day;
}