'use strict';

(function() {
    var addButton = document.querySelector('.btn-add');
    var deleteButton = document.querySelector('.btn-delete');
    var clickNbr = document.querySelector('#click-nbr');
    var apiUrl = 'http://localhost:8080/api/clicks';

    function updateClickCount(data) {
	var clicksObject = JSON.parse(data);
	clickNbr.innerHTML = clicksObject.clicks;
    }

    ready(ajaxRequest('GET', apiUrl, updateClickCount));

    addButton.addEventListener('click', function() {
	ajaxRequest('POST', apiUrl, function() {
	    ajaxRequest('GET', apiUrl, updateClickCount);
	});
    }, false);

    deleteButton.addEventListener('click', function() {
	ajaxRequest('DELETE', apiUrl, function() {
	    ajaxRequest('GET', apiUrl, updateClickCount);
	});
    }, false);
})();
