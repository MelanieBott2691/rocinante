// Start of Javascript for project!
// var data = require('./results.json');
// hold 10 results from user search

var from = 0;
var sizes = 1;
var tags;
var q = 'pancakes';

var randomIndex = function (max) {
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
        from = randomIndex(resultCount - 1);
        console.log(from);
        if (resultCount > 0) {
            $.ajax({
                url: 'https://tasty.p.rapidapi.com/recipes/list?from=' + from + '&size=' + sizes + '&tags&q=' + q,
                method: 'GET',
                timeout: 0,
                headers: {
                    'x-rapidapi-host': 'tasty.p.rapidapi.com',
                    'x-rapidapi-key': '9084c1818dmshef24c102683f8f1p1d3041jsna84bad01aefb',
                },
            }).done(function (response) {
                var res = response.results[0];
                var id = res.id;
                var name = res.name;
                var recipes = res.recipes;
                var recipeLength = recipes.length;
                var yields = res.yields;
                var sections = res.sections;
                console.log(res);
                console.log(id);
                console.log(name);
                if (recipes) {
                    recipeIndex = randomIndex(recipeLength);
                    recipe = recipes[recipeIndex];
                    console.log(recipe.name);
                    console.log(recipe.sections);
                    console.log(recipe.yields);
                } else {
                    console.log(name);
                    console.log(sections);
                    console.log(yields);
                }

                var resultsWindow = $('<div>');
            });
        }
    });
});

// console.log(resultsTotalLength);
// console.log(resultsBatchLength);
// console.log(data.results[0]);
