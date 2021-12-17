let jsonData = "Hej";
const fs = require('fs');
const {data} = require("grunt/lib/grunt/config");
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


function rejseplan(url, trainOnly){
	const request = require('request');
	let options = {json: true};
    request(url, options, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
        var output;
        if (!error && res.statusCode == 200 && trainOnly) {
            body["TripList"]["Trip"][0]["Leg"].forEach(trip => {
                if (trip.type == "REG"){
                    output = `Tog fra: ${trip["Origin"]["name"]}\n`
                    output += `Mod: ${trip["Destination"]["name"]}\n`
                    output += `Spor: ${trip["Origin"]["rtTrack"]}\n`
                    if (trip.rtTime){
                        output += `Kl: <strike>${trip["Origin"]["time"]}</strike>\n`
                        output += `Kl: ${trip["Origin"]["rtTime"]}`
                    }
                    else{
                        output += `Kl: ${trip["Origin"]["time"]}\n`
                    }
                    console.log(output);
					return output;
                }
            });
        }
        if (!error && res.statusCode == 200 && !trainOnly){
            body["TripList"]["Trip"][0]["Leg"].forEach(trip => {
                if (trip.type == "BUS"){
                    output = `Bus fra: ${trip["Origin"]["name"]}\n`
                    output += `Mod: ${trip["Destination"]["name"]}\n`
                if (trip.rtTime){
                    output += `Kl: <strike>${trip["Origin"]["time"]}</strike>\n`
                    output += `Kl: ${trip["Origin"]["rtTime"]}`
                }
                else{
                    output += `Kl: ${trip["Origin"]["time"]}`
                }
                console.log(output);
				return output;
                }
            });
        }
    });
}

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
		// wrapper.innerHTML = this.config.text;
		// wrapper.innerHTML = "Tog fra: Ry St.\nMod: Silkeborg St.\nSpor: 1\nKl: 13:69";
		fs.readFile('test.txt', 'utf8', (err, data) => {
			if (err) throw err;
			console.log(data);
		});
		wrapper.innerHTML = data
		return wrapper;
	}
});
