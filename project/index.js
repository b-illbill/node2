var GraphService = require('graph-service');

var clientId = '';
var secKey = '';
var tenantId = '';
 
var api = new GraphService(tenantId, clientId, secKey);


api.get('/v1.0/users', (err, users) => {
    console.log(users);
});

api.get('/v1.0/d810f340-9e6c-4cb3-8688-546a1aea7131/drive', (err, drive) => {
	console.log(drive);
});

api.get('/v1.0/d810f340-9e6c-4cb3-8688-546a1aea7131/drives', (err, drives) => {
	console.log(drives);
});

api.get('/v1.0/d810f340-9e6c-4cb3-8688-546a1aea7131/messages', (err, messages) => {
	console.log(messages);
});
