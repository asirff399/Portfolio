const contactUs = (event) => {
    event.preventDefault(); 

    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    console.log(formData)
    
    // Directly use formData with fetch
    fetch("https://contact-seven-coral.vercel.app/contact/", {
        method: "POST",
        body: formData, // Send the FormData directly
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
        // You can redirect or display a success message here
        window.location.href = "./success.html";
    })
    .catch((error) => {
        console.error("Error:", error); 
        showError("There was a problem sending your message.");
    });
};
