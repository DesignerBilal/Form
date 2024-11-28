const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Collect form data
    const userName = form.querySelector('input[type="text"]').value;
    const userEmail = form.querySelector('input[type="email"]').value;
    const userPassword = form.querySelector('input[type="password"]').value;
    const userMessage = form.querySelector('textarea').value;

    // Send email using EmailJS
    emailjs.send("service_6q3nv4b", "template_mdz2r5l", {
        name: userName,
        email: userEmail,
        password: userPassword,
        message: userMessage
    })
    .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        document.body.classList.add("sent");
    }, function (error) {
        console.log('FAILED...', error);
    });

    // Reset the form after submission
    form.reset();
});
