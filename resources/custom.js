document.addEventListener('DOMContentLoaded', function () {
    var scriptURL = "https://script.google.com/macros/s/AKfycbxnw1F3iVtZFP5J_HD4iAPF_A4o67GNSiEkyJaIgbEIZF8nCJiEUUjC1d8upVR7cjxzUA/exec";
    var form = document.forms['google-sheet'];

    if (form) {
        console.log('Form found');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Form submitted');
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    console.log('Response received');
                    alert("Thanks for Contacting us..! We will Contact You Soon...");
                })
                .catch(error => {
                    console.error('Error!', error.message);
                });
        });
    } else {
        console.error('Form not found!');
    }
});
$(document).ready(function() {
    $("#top-button").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
});
AOS.init();
