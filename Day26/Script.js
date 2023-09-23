function countdown(initialValue, callback) {
    if (initialValue <= 0) {
        callback();
    } else {
        setTimeout(function () {
            document.getElementById('countdown').innerHTML = initialValue;
            countdown(initialValue - 1, callback);
        }, 2000);
    }
}

function displayHappy() {
    document.getElementById('result').innerHTML = 'Happy Independence Day!';
}

countdown(10, displayHappy);
