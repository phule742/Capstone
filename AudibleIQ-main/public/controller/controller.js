document.addEventListener("DOMContentLoaded", function () {
    //Existing Contact button logic
    const contactBtn = document.getElementById("contact-btn");
    const contactInfo = document.getElementById("contact-info");

    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
                contactInfo.innerHTML = "Contact us: example@gmail.com";
                contactInfo.style.display = "block";
            } else {
                contactInfo.style.display = "none";
            }
        });
    }

    //Add instructional prompts dynamically to questions
    const questionContainer = document.getElementById("question-container");

    if (questionContainer) {
        const questionType = questionContainer.getAttribute("data-type");
        let promptText = "Please read the question carefully and select the best answer.";

        if (questionType === "multiple-choice") {
            promptText = "Select the correct option from the available choices.";
        } else if (questionType === "short-answer") {
            promptText = "Type your answer clearly in the provided text box.";
        } else if (questionType === "true-false") {
            promptText = "Choose either True or False based on your understanding.";
        }

        const prompt = document.createElement("div");
        prompt.innerText = promptText;
        prompt.classList.add("question-prompt");
        questionContainer.prepend(prompt);
    }
});
