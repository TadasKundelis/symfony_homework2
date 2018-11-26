const axios = require('axios');

let name = document.getElementById('name');
let team = document.getElementById('team');
let nameValidationResult = document.getElementById('name-validation');
let teamValidationResult = document.getElementById('team-validation');
const validate = function (event) {
    let inputField, result;
    if (event.target.id === 'name') {
      [inputField, result] = [name, nameValidationResult, ];
    } else {
      [inputField, result] = [team, teamValidationResult];
    }
    result.innerHTML = '...';
    axios.post(result.dataset.path, {input: inputField.value})
        .then(function(response) {
            if (response.data.valid) {
                result.innerHTML = ":)";
            } else {
                result.innerHTML = ":(";
            }
        })
        .catch(function (error) {
            result.innerText = 'Error: ' + error;
        });
};

[name, team].forEach(el => {
    el.onkeyup = validate;
    el.onchange = validate;
})
