
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const table = document.getElementById("dataTable");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const foodOptions = document.getElementById("food").selectedOptions;

        // Check if at least 2 food options are selected
        if (foodOptions.length < 2) {
            alert("Please select at least 2 food options.");
            return;
        }

        // Create a comma-separated string of selected food options
        const foodChoices = Array.from(foodOptions).map(option => option.value).join(", ");

        // Create a new row in the table
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        // Populate the new row with form values
        cell1.innerHTML = name;
        cell2.innerHTML = age;
        cell3.innerHTML = foodChoices;

        // Clear the form inputs
        form.reset();
    });
});
