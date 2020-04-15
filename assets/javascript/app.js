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

var parseJSON = {
    instructions: function () {},
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

// Search Button

$('#search-btn').on('click', function () {
    $.ajax(settings).done(function (response) {
        var resultCount = response.count;
        from = randomIndex(resultCount - 1);
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
                // Response Data
                var res = response.results[0];
                var id = res.id;
                var name = res.name;
                var recipes = res.recipes;
                var num_servings = res.num_servings;
                var sections = res.sections;
                var instructions = res.instructions;
                var thumbnail_url = res.thumbnail_url;
                var original_video_url = res.original_video_url;
                var nutrition = res.nutrition;
                console.log('response:', res);
                console.log('id:', id);
                if (recipes) {
                    var recipeLength = recipes.length;
                    recipeIndex = randomIndex(recipeLength);
                    recipe = recipes[recipeIndex];
                    var name = recipe.name;
                    var num_servings = recipe.num_servings;
                    var sections = recipe.sections;
                    var instructions = recipe.instructions;
                    var thumbnail_url = recipe.thumbnail_url;
                    var original_video_url = recipe.original_video_url;
                    var nutrition = recipe.nutrition;
                    console.log('name:', name);
                    console.log('num_servings:', num_servings);
                    console.log('sections', sections);
                    console.log('thumbnail_url', thumbnail_url);
                    console.log('instructions', instructions);
                    console.log('original_video_url', original_video_url);
                    console.log('nutrition', nutrition);
                } else {
                    console.log('name:', name);
                    console.log('num_servings:', num_servings);
                    console.log('thumbnail_url', thumbnail_url);
                    console.log('sections', sections);
                    console.log('instructions', instructions);
                    console.log('original_video_url', original_video_url);
                    console.log('nutrition', nutrition);
                }

                // Display Data

                var resultsWindow = $('<div>');
            });
        }
    });
});

// console.log(resultsTotalLength);
// console.log(resultsBatchLength);
// console.log(data.results[0]);
