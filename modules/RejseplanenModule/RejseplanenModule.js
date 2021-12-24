let jsonData = "Hej";
const {data} = require("grunt/lib/grunt/config");
const request = require('sync-request');


Module.register("RejseplanenModule",{
	// Default module config.
	defaults: {
		text: jsonData,
		jsonURL: "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9550145&originCoordY=56166726&originCoordName=College360&destCoordX=9783200&destCoordY=56082440&destCoordName=Hjem&useBus=0&format=json",
		showTrains: true
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		// wrapper.innerHTML = "Tog fra: Ry St.\nMod: Silkeborg St.\nSpor: 1\nKl: 13:69";
		return wrapper;
	}
});
