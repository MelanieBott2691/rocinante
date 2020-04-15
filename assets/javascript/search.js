$(function() {
        console.log("page loaded");

    })
    //call function and load page
    //array of cast of the office
var topics = ["Jim Halpert", "Michael Scott", "Dwight Schrute", "Pam Beesly", "Stanley Hudson",
    "Kevin Malone", "Creed Bratton", "Oscar Martinez", "Holly Flax", "Charles Miner", "Deangelo Vickers"
];
// console.log("officeCast");
//function to display data


function renderButtons() {
    console.log("checking");
    //to prevent repeat buttons
    $("#buttons-view").empty();
    var buttonArray = [];
    //for loop through the array
    for (var i = 0; i < topics.length; i++) {
        //cast button options
        buttonArray[i] = $("<button class='btn btn-info' onclick = 'renderButtons();'>");
        buttonArray[i].addClass("cast-btn");
        buttonArray[i].attr("data-name", topics[i]);
        buttonArray[i].text(topics[i]);
        $("#buttons-view").prepend(buttonArray[i]);
    }
};

function refreshMyPage() {
    var myDiv = document.getElementById("buttons-view");
    // myDiv.location.reload();
}
// console.log("queryURL");
//display rating but may delete later
function displayRatingInfo(obj) {

    var list = $(obj).attr("data-name");
    // var list = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=BK7Mc3I93bFbs2sQCX7xQVfK2JcEAQRQ&limit=10";


    console.log("queryURL");

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        var results = response.data;
        // console.log(results);

        $('#cast-view').empty();
        for (var i = 0; i < results.length; i++) {
            //create form to hold cast
            var castDiv = $("<div>");
            var castImage = $("<img>");
            var rating = $("<p>").text("Rating: " + results[i].rating);
            // console.log("rating");
            var title = $("<p>").text(results[i].title);


            $(castImage).attr("src", results[i].images.fixed_height_still.url);
            $(castImage).attr("data-still", results[i].images.fixed_height_still.url);
            $(castImage).attr("data-animate", results[i].images.fixed_height.url);
            $(castImage).attr("data-state", "still");
            $(castImage).addClass("gif");

            $(castDiv).append(castImage, title, rating);
            $(castDiv).prepend(castImage);

            $("#display-gif").prepend(castDiv);


        }
    });
};
//it updates on click but it brings back the same results
$("#add-cast").on("click", function(event) {
    event.preventDefault();
    var cast = $("#cast-input").val().trim();
    updateTopics(cast);
});

function updateTopics(cast) {
    var n = topics.indexOf(cast, 0);
    if (n > -1) {
        var temp = topics.slice(0, n);
        var temp2 = topics.slice(n + 1, topics.length);
        topics = temp.concat(temp2);
    }

    topics.push(cast);
    renderButtons();
    // console.log("renderButtons");
}
//animate controls
$(document).on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

$(document).on("click", ".cast-btn", function() {
    var cast = $(this).attr("data-name");
    updateTopics(cast);
    displayRatingInfo(this);
});
renderButtons();