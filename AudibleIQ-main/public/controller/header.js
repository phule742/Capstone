// This script is copied into the html of the sitewide header, it allows 
// for shrinking the header on scroll and also ensures the required libraries
// are added to al html it is a part of

//This section adds the required libraries
if (!document.querySelector('link[href*="font-awesome"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
        document.head.appendChild(link);
        console.log("Font Awesome added to the document.");
    } else {
        console.log("Font Awesome is already loaded.");
    }
    if (!document.querySelector('link[href*="styles.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/styles.css";
        document.head.appendChild(link);
        console.log("Styles.css added to the document.");
    } else {
        console.log("Font Awesome is already loaded.");
    }

// This section adds the header scroll minimizing
setTimeout(() => {
    
    const header = document.getElementById("main-header");
    if (!header) {
        console.error("Header not found! Make sure #main-header exists.");
        return;
    }
    

    console.log("Header script running...");

    window.addEventListener("scroll", () => {
        console.log("Scrolled:", window.scrollY);

        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });
}, 100);
