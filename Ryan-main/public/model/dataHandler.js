const firebaseConfig = {
    apiKey: "AIzaSyAW8X7OVxhzDLvtOcUB6pi4efl7WX8RQNc",
    authDomain: "audibleiq-3e638.firebaseapp.com",
    databaseURL: "https://audibleiq-3e638-default-rtdb.firebaseio.com",
    projectId: "audibleiq-3e638",
    storageBucket: "audibleiq-3e638.firebasestorage.app",
    messagingSenderId: "50519807013",
    appId: "1:50519807013:web:abe516bada143a72e29bcc",
    measurementId: "G-EX1407TTKV"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

/*function for data button to redirect to the appropriate data. this is modular.*/
function gotoData(moduleName) {
    if(moduleName) {
        window.location.href = `/view/pages/${moduleName}.html`
    } else {
        console.error("Invalid page name.");
    }
}

/*function to update the database based on button clicks. this is modular.*/
function updateDatabase(moduleName, buttonClass) {
    //select each button
    const buttons = document.querySelectorAll(`.${buttonClass}`);
    const countSpans = document.querySelectorAll(`.${buttonClass} + span`);

    /*update website to display real time changes. this will be removed in future sprints for graphs/charts/high scores.*/
    database.ref(moduleName).on("value", (snapshot) => {
        const data = snapshot.val() || {};

        //get span numbers for each button
        buttons.forEach((button, index) => {
            const buttonId = button.getAttribute('data-value');
            const countSpan = countSpans[index];
            
            //update data text with current data from the database
            countSpan.textContent = data[`button${buttonId}PressCount`] || 0;
        });
    });

    /*adds an event listener for each button on click*/
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonId = this.getAttribute('data-value');

            //creates a reference to the location where we want to update the Realtime Database
            const pressCountRef = database.ref(`${moduleName}/button${buttonId}PressCount`);

            //increment press count in Realtime Database
            pressCountRef.transaction(currentValue => {
                //if not yet initialized, use 0. otherwise, use currentValue.
                return (currentValue || 0) + 1;
            }).then(() => {
                console.log(`Button ${buttonId} press count updated in Firebase.`);
            }).catch(error => {
                console.error(`Error updating count for button ${buttonId}:`, error);
            });
        });
    });
}