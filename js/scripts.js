`use strict`

// Plain aka Vanilla JS

document.addEventListener(`DOMContentLoaded`, function () {
    console.log(`Vanilla JS DOM Content Loaded`);
    const button1 = document.querySelector(`#button1`);
    button1.addEventListener(`click`, function () {
        alert(`button1 has been clicked`)
    })

    fetch(`https://api.chucknorris.io/jokes/random?category=dev`)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(`fetch data is: `, data);
        })
        .catch(function (error) {
            console.error("ERROR: ", error);
            return error
        });
})

// jQuery Version

$(document).ready(function () {
    console.log(`jQuery DOM Content Loaded`);
    $(`#button2`).on(`click`, function () {
        alert(`Button2 has been clicked`);
    })

    $.ajax({
        url: `https://api.chucknorris.io/jokes/random?category=dev`,
        type: `GET`,
        success: function (data) {
            console.log(`jQuery Ajax method: `, data);
        },
        error: function (error) {
            console.log(`ERROR: `, error);
        }
    
    })
    
})


