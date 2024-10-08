function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

  
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
        return;
    }

  
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `<div class="alert alert-success" role="alert">
        Thank you, ${name}! Your message has been sent successfully.
    </div>`;

   
    document.getElementById('contactForm').reset();
});
