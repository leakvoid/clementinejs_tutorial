'use strict';

var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function(app, db) {
    var clickHandler = new ClickHandler(db);

    app.route('/')
	.get(function(req, res) {
	    res.sendFile(process.cwd() + '/public/index.html');
	});

    app.route('/api/clicks')
	.get(clickHandler.getClicks)
	.post(clickHandler.addClick)
	.delete(clickHandler.resetClicks);

        
    /*  
      app.route('/controllers/clickController.client.js')
	.get(function(req, res) {
	    res.sendFile(process.cwd() + '/app/controllers/clickHandler.client.js');
	}); 
    */
};
