document.addEventListener("DOMContentLoaded", function () {
    //get the Contact button and the Contact info div
    const contactBtn = document.getElementById("contact-btn");
    const contactInfo = document.getElementById("contact-info");

    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            //toggle visibility of the contact info
            if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
                contactInfo.innerHTML = "Contact us: example@gmail.com";
                contactInfo.style.display = "block";
            } else {
                contactInfo.style.display = "none";
            }
        });
    }
});
