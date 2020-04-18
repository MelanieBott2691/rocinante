var settings = {
    url: 'http://api.yelp.com/v3/businesses/search?term=restaurant&location=84101',
    method: 'GET',
    timeout: 0,
    headers: {
        Authorization: 'Bearer Kkm2cU1Q9A33_YRm-DF34f2COXqO9oLZPUbGPbf6niprmm-uYtIqnAer-MDlOvlt7jhuO0BLbUVfghaU8WJtHJ27ToFYEDjs7LPO1YhhfqvKySzGMaAz1RKhikGaXnYx',
        // Cookie: '__cfduid=da251eedb1e27d7f30e7df747308d1b751587194827',
    },
};

console.log(count);

if (count % 5 === 0)
    $.ajax(settings).done(function (response) {
        console.log(response.businesses);
    });
