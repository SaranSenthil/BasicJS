document.getElementById("title").innerHTML =
"FORMS in DOM Manipulation";
document.getElementById("description").textContent =
"Created Form and Table and populated the table with Form data and on after submit cleared the form value.";
const submitButton = document.getElementById("submitButton");
document.addEventListener("DOMContentLoaded", function () {
    const formContent = document.getElementById("formContent");
    const dataTable = document.getElementById("dataTable");
    const submitButton = document.getElementById("submitButton");

    // Create the form fields
    //Firstname Field
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "First Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    formContent.appendChild(nameLabel);
    formContent.appendChild(nameInput);

     //Lastname Field
     const lnameLabel = document.createElement("label");
     lnameLabel.textContent = "Last Name:";
     const lnameInput = document.createElement("input");
     lnameInput.setAttribute("type", "text");
     lnameInput.setAttribute("lname", "lname");
     formContent.appendChild(lnameLabel);
     formContent.appendChild(lnameInput);

     //Address Field
     const addressLabel = document.createElement("label");
     addressLabel.textContent = "Address:";
     const addressInput = document.createElement("input");
     addressInput.setAttribute("type", "text");
     addressInput.setAttribute("address", "address");
     formContent.appendChild(addressLabel);
     formContent.appendChild(addressInput);

      //Pincode Field
      const pincodeLabel = document.createElement("label");
      pincodeLabel.textContent = "Pincode:";
      const pincodeInput = document.createElement("input");
      pincodeInput.setAttribute("type", "number");
      pincodeInput.setAttribute("pincode", "pincode");
      formContent.appendChild(pincodeLabel);
      formContent.appendChild(pincodeInput);

    //for Gender
      const genderLabel = document.createElement("label");
      genderLabel.textContent = "Gender:";
      const genderOptions = ["Male", "Female"];
      genderOptions.forEach(option => {
        const label = document.createElement("label");
        label.textContent = option;
          const radio = document.createElement("input");
          radio.setAttribute("type", "radio");
          radio.setAttribute("name", "gender");
          radio.setAttribute("value", option);     
        
          formContent.appendChild(label);
          formContent.appendChild(radio);
          
      });
      formContent.appendChild(genderLabel);

      //for choice of food
    const foodLabel = document.createElement("label");
    foodLabel.textContent = "Foods (choose atleast 2 foods):";
    const foodOptions = ["Idli", "Dosai", "Briyani", "Salad", "Sushi"];
    foodOptions.forEach(option => {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "food");
        checkbox.setAttribute("value", option);
        const label = document.createElement("label");
        label.textContent = option;
        formContent.appendChild(label);
        formContent.appendChild(checkbox);
        
    });
    formContent.appendChild(foodLabel);

  //State Field
  const stateLabel = document.createElement("label");
  stateLabel.textContent = "State:";
  const stateInput = document.createElement("input");
  stateInput.setAttribute("type", "text");
  stateInput.setAttribute("name", "name");
  formContent.appendChild(stateLabel);
  formContent.appendChild(stateInput);

  //Country Field
  const countryLabel = document.createElement("label");
  countryLabel.textContent = "Country:";
  const countryInput = document.createElement("input");
  countryInput.setAttribute("type", "text");
  countryInput.setAttribute("name", "name");
  formContent.appendChild(countryLabel);
  formContent.appendChild(countryInput);

    // Create a row for the table headers
    const headerRow = document.createElement("tr");
    ["First Name","Last Name", "Address","Pincode","Gender","Food", "State","Country"].forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    dataTable.appendChild(headerRow);

    // Function to handle form submission
    submitButton.addEventListener("click", function () {
        // Get form values
        const name = nameInput.value;
        const lname = lnameInput.value;
        const address = addressInput.value;
        const pincode = pincodeInput.value;
        const selectedFoods = Array.from(formContent.querySelectorAll('input[name="food"]:checked')).map(checkbox => checkbox.value);
        const gender = formContent.querySelector('input[name="gender"]:checked').value;
        const state = stateInput.value;
        const country = countryInput.value;

        // Validate that at least 2 foods are selected
        if (selectedFoods.length < 2) {
            alert("Please choose at least 2 foods.");
            return;
        }

        // Create a new row for the table
        const newRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        const foodCell = document.createElement("td");
        const genderCell = document.createElement("td");
        const lnameCell = document.createElement("td");
        const addressCell = document.createElement("td");
        const pincodeCell = document.createElement("td");
        const stateCell = document.createElement("td");
        const countryCell = document.createElement("td");
        

        nameCell.textContent = name;
        foodCell.textContent = selectedFoods.join(", ");
        lnameCell.textContent = lname;
        addressCell.textContent = address;
        pincodeCell.textContent = pincode;
        stateCell.textContent = state;
        countryCell.textContent = country;
        genderCell.textContent=gender;


        newRow.appendChild(nameCell);
        newRow.appendChild(foodCell);
        newRow.appendChild(genderCell);
        
        newRow.appendChild(lnameCell);
        newRow.appendChild(addressCell);
        newRow.appendChild(pincodeCell);
        
        newRow.appendChild(stateCell);
        newRow.appendChild(countryCell);
        

        // Append the new row to the table
        dataTable.appendChild(newRow);

        // Reset the form
        nameInput.value = "";
        formContent.querySelectorAll('input[name="food"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        formContent.querySelector('input[name="gender"]').checked = false;
           // Clear the form inputs
        form.reset();
    });
});