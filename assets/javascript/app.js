// Start of Javascript for project!

// hold 10 results from user search
var topTen = [];

// yummply object to search user inputs
var yummly = {
    url: 'yummly2.p.rapidapi.com',
    token: '9084c1818dmshef24c102683f8f1p1d3041jsna84bad01aefb',
};

var settings = {
    async: true,
    crossDomain: true,
    url: 'https://yummly2.p.rapidapi.com/feeds/search?FAT_KCALMax=1000&maxTotalTimeInSeconds=7200&allowedAttribute=diet-lacto-vegetarian%252Cdiet-low-fodmap&q=chicken%20soup&start=0&maxResult=18',
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'yummly2.p.rapidapi.com',
        'x-rapidapi-key': '9084c1818dmshef24c102683f8f1p1d3041jsna84bad01aefb',
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

// On sumbit take all form data and execute search and retun of results
