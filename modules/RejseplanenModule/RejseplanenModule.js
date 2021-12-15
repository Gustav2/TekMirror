let jsonData = "Hej";

/*
const fetch = require('node-fetch');

let url = "http://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9512079&originCoordY=56178240&originCoordName=Hjem&destCoordX=9550145&destCoordY=56166726&destCoordName=College360&format=json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        jsonData = json;
    });
*/

Module.register("RejseplanenModule",{
	// Default module config.
	defaults: {
		text: jsonData
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
