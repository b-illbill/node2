/* Created by bill on 1/1/17. */
var auth = require('./auth');
var graph = require('./graph');

// get access token
auth.getAccessToken().then(function (token) {
    // grab all users in tenant
    graph.getUsers(token)
        .then(function (users) {
            // this will create test events on each user's calendar.
            graph.createEvent(token, users);
        }, function (error) {
            console.error('>>> Error getting users: ' + error);
        });
}, function (error) {
    console.error('>>> Error getting access token: ' + error);
});
