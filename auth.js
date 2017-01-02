/* Created by bill on 1/1/17. */
var request = require('request');
var Q = require('q');
var config = require('./config');

// auth module object.
var auth = {};

// function to get getAccessToken
// desc: makes request for token using client credentials
auth.getAccessToken = function () {
    var deferred = Q.defer();

    // necessary parameters for the oauth 2.0 client cred grant flow
    // note service to service calls using client credentials (https://msdn.microsoft.com/library/azure/dn645543.aspx)
    var requestParams = {
        grant_type: 'client_credentials',
        client_id: config.clientId,
        client_secret: config.clientSecret,
        resource: 'https://graph.microsoft.com'
    };

    // makes request to token issuing endpoint.
    request.post({ url: config.tokenEndpoint, form: requestParams }, function (err, response, body) {
        var parsedBody = JSON.parse(body);

        if (err) {
            deferred.reject(err);
        } else if (parsedBody.error) {
            deferred.reject(parsedBody.error_description);
        } else {
            // if successful, return the access token.
            deferred.resolve(parsedBody.access_token);
        }
    });

    return deferred.promise;
};

module.exports = auth;
