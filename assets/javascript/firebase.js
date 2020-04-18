//train application that incorporates Firebase to house the arrival and departure data
//retrieve and manipulate the information with moment.js
//provide up-to-date information about various trains
//arrival times
//how many minutes remain until they arrive at the station
$(document).ready(function() {

    // Initialize Firebase


    /* // Original Firebase configuration. Created a new one, above because it isn't reading*/
    var firebaseConfig = {
        apiKey: "AIzaSyDs9i5Bi3ODmurCdUNXl3wlICEVJZCoCC4",
        authDomain: "rocinante-a2020.firebaseapp.com",
        databaseURL: "https://rocinante-a2020.firebaseio.com",
        projectId: "rocinante-a2020",
        storageBucket: "rocinante-a2020.appspot.com",
        messagingSenderId: "1032204701383",
        appId: "1:1032204701383:web:df93c27f435717534bf8e2",
        measurementId: "G-32YJ0P2SL7"
    };
    /* // Initialize Firebase */
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // Variables
    //===============================================================
    //get a reference to the database service
    var database = firebase.database();


    // add user form submitted
    $("#formSubmit").on("click", function(event) {
        event.preventDefault();
        console.log("Why ME?")
            // get values from html
        var user = $("#user-name").val().trim();
        var email = $("#user-email").val().trim();
        var name = $("#uname").val().trim();
        var message = $("#message").val().trim();

        //clear user input after submission
        $("#user-name").val("");
        $("#user-email").val("");
        $("#uname").val("");
        $("#message").val("");


        console.log("How are you");

        // move variables into the firebase
        database.ref().push({
            userName: user,
            userEmail: email,
            uName: name,
            userMessage: message

        });
    });

});