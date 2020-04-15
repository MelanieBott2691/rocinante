// Start of Javascript for project!
// var data = require('./results.json');
// hold 10 results from user search

var from;
var sizes;
var tags;
var q;

from = 0;
sizes = 1;
q = 'pancakes';

var randomFrom = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};

var settings = {
    url: 'https://tasty.p.rapidapi.com/recipes/list?from=' + from + '&size=' + sizes + '&tags&q=' + q,
    method: 'GET',
    timeout: 0,
    headers: {
        'x-rapidapi-host': 'tasty.p.rapidapi.com',
        'x-rapidapi-key': '9084c1818dmshef24c102683f8f1p1d3041jsna84bad01aefb',
    },
};
$('.btn').on('click', function () {
    $.ajax(settings).done(function (response) {
        var resultCount = response.count;
        from = randomFrom(resultCount + 1);
        console.log(from);
        if (resultCount > 0) {
            $.ajax(settings).done(function (response) {
                console.log(response.results[0].id);
            });
        }
    });
});

// console.log(resultsTotalLength);
// console.log(resultsBatchLength);
// console.log(data.results[0]);
