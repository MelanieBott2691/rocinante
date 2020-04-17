// Random Number Generator
var randomIndex = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};

// Object to parse out multiple responses from the api call
var parseJSON = {
    instructions: function () {
        // stuff to
    },
};

// Search button on click event
$('#btn-search').on('click', function () {
    var from = 0;
    var sizes = 1;
    var q = $('#input-search').val()
    var tags;
    var settings = {
        url: 'https://tasty.p.rapidapi.com/recipes/list?from=' + from + '&size=' + sizes + '&tags&q=' + q,
        method: 'GET',
        timeout: 0,
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key': '9084c1818dmshef24c102683f8f1p1d3041jsna84bad01aefb',
        },
    };
    $("#input-search").val("");

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

            }).done(function(response) {
                // Response Data
                var res = response.results[0];
                console.log('response:', res);

                // Nested Random Recipe
                if (res.recipes) {
                    var recipeLength = res.recipes.length;
                    recipeIndex = randomIndex(recipeLength);
                    resNest = res.recipes[recipeIndex];
                    var id = resNest.id;
                    var name = resNest.name;
                    var servings = resNest.num_servings;
                    var sections = resNest.sections;
                    var instructions = resNest.instructions;
                    var nutrition = resNest.nutrition;
                    var thumbnail = resNest.thumbnail_url;
                    var video = resNest.original_video_url;
                    console.log('id:', id);
                    console.log('name:', name);
                    console.log('servings:', servings);
                    console.log('sections', sections);
                    console.log('instructions', instructions);
                    console.log('nutrition', nutrition);
                    console.log('thumbnail', thumbnail);
                    console.log('video', video);
                } else {
                    var id = res.id;
                    var name = res.name;
                    var servings = res.num_servings;
                    var sections = res.sections;
                    var instructions = res.instructions;
                    var nutrition = res.nutrition;
                    var thumbnail = res.thumbnail_url;
                    var video = res.original_video_url;
                    console.log('id:', id);
                    console.log('name:', name);
                    console.log('servings:', servings);
                    console.log('sections', sections);
                    console.log('instructions', instructions);
                    console.log('nutrition', nutrition);
                    console.log('thumbnail', thumbnail);
                    console.log('video', video);
                }

                $('.name').text(name)
                $('#thumbnail').attr('src', thumbnail)
                $('.video').attr('src', video)
                $('#servings').text('Servings: ' +  servings)



                // Display Data


            });
        }
    });
});

var input = document.getElementById("input-search");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn-search").click();
  }
});

// console.log(resultsTotalLength);
// console.log(resultsBatchLength);
// console.log(data.results[0]);