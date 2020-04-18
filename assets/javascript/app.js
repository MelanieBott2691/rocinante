var count = 0;

// Random number generator
var randomIndex = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};

// Object to parse out multiple responses from the api call
var parseJSON = {
    instructions: function () {
        // return list of usabe values from instructions response
    },
    nutrition: function (res) {
        return res;
    },
    ingredients: function () {
        // stuff to
    },
};

// Search button on click event
$('#btn-search').on('click', function () {
    count++
    var from = 0;
    var sizes = 1;
    var q = $('#input-search').val();
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
    $('#input-search').val('');

    // Initial call to get search count
    $.ajax(settings).done(function (response) {
        var resultCount = response.count;
        from = randomIndex(resultCount - 1);
        if (resultCount > 0) {
            // second call to make the recipe returned truly random
            // by using the randomIndex function with the result
            // count and calling to a specic but random index
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
                // console.log('response:', res);

                // Nested random Recipe
                if (res.recipes) {
                    var recipeLength = res.recipes.length;
                    recipeIndex = randomIndex(recipeLength);
                    resNest = res.recipes[recipeIndex];
                    var id = resNest.id;
                    var name = resNest.name;
                    var servings = resNest.num_servings;
                    var ingredients = resNest.sections;
                    var instructions = resNest.instructions;
                    var nutrition = resNest.nutrition;
                    var thumbnail = resNest.thumbnail_url;
                    var video = resNest.original_video_url;
                    // console.log('id:', id);
                    // console.log('name:', name);
                    // console.log('servings:', servings);
                    // console.log('ingredients', ingredients.length, ingredients);
                    // console.log('instructions', instructions.length, instructions);
                    // console.log('nutrition', nutrition.length, nutrition);
                    // console.log('thumbnail', thumbnail);
                    // console.log('video', video);
                } else {
                    // Non nested radmon recipe
                    var id = res.id;
                    var name = res.name;
                    var servings = res.num_servings;
                    var ingredients = res.sections;
                    var instructions = res.instructions;
                    var nutrition = res.nutrition;
                    var thumbnail = res.thumbnail_url;
                    var video = res.original_video_url;
                    // console.log('id:', id);
                    // console.log('name:', name);
                    // console.log('servings:', servings);
                    // console.log('ingredients', ingredients.length, ingredients);
                    // console.log('instructions', instructions.length, instructions);
                    // console.log('nutrition', nutrition.length, nutrition);
                    // console.log('thumbnail', thumbnail);
                    // console.log('video', video);
                }

                // Display Data
                $('.name').text(name);
                $('#thumbnail').attr('src', thumbnail);
                $('#video').attr('src', video);
                $('#servings').text('Servings: ' + servings);

                // Nutrition list
                $('#nutrition').empty();
                const entries = Object.entries(nutrition);
                for (const [fact, count] of entries) {
                    if (fact != 'updated_at') {
                        var nutritionLine = $('<li>').html(`${fact}: ${count}`);
                        $('#nutrition').append(nutritionLine);
                    }
                }

                // Instructions
                $('#instructions').empty();
                for (var i = 0; i < instructions.length; i++) {
                    var instructionLine = $('<li>').text(instructions[i].position + ')   ' + instructions[i].display_text);
                        $('#instructions').append(instructionLine);
                }

                 // Ingredients
                 $('#ingredients').empty();
                 for (var i = 0; i < ingredients.length; i++) {
                    //  console.log(ingredients[i].name)
                     var ingredientCat = $('<ul>').text(ingredients[i].name)
                     for(var j = 0; j < ingredients[i].components.length; j++) {
                        var ingredient = ingredients[i].components[j].raw_text
                        if(ingredient === 'n/a') {
                            ingredient = ''
                        }
                        var ingredient = $('<li>').text(ingredient)
                        ingredientCat.append(ingredient)
                    }
                    $('#ingredients').append(ingredientCat)
                 }
            });
        }
    });
});
var input = document.getElementById('input-search');
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('btn-search').click();
    }
});
