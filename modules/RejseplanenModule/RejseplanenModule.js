let jsonData = "Hej";

const request = require('sync-request');

function getJSON(url){
    res = request('GET', url);
    stringBody = res.getBody('utf-8');
    jsonBody = JSON.parse(stringBody);
    return jsonBody;
}

function parseJSON(body, trainOnly){
    if (trainOnly) {
        body["TripList"]["Trip"][0]["Leg"].forEach(trip => {
            if (trip.type == "REG") {
                output = `Tog fra: ${trip["Origin"]["name"]}\n`;
                output += `Til: ${trip["Destination"]["name"]}\n`;
                output += `${trip["Notes"]["text"].split(";")[0]}\n`;
                output += `Spor: ${trip["Origin"]["rtTrack"]}\n`;
                if (trip.rtTime) {
                    output += `Kl: <strike>${trip["Origin"]["time"]}</strike>\n`;
                    output += `Kl: ${trip["Origin"]["rtTime"]}`;
                }
                else {
                    output += `Kl: ${trip["Origin"]["time"]}\n`;
                }
                if (trip["Destination"]["rtTime"]) {
                    output += `Ankomst: <strike>${trip["Destination"]["time"]}</strike>\n`;
                    output += `Ankomst: ${trip["Destination"]["rtTime"]}\n`;
                }
                else {
                    output += `Ankomst: ${trip["Destination"]["time"]}\n`;
                }
            }
        });
    }

    if (!trainOnly) {
        body["TripList"]["Trip"][0]["Leg"].forEach(trip => {
            if (trip.type == "BUS") {
                output = `Bus fra: ${trip["Origin"]["name"]}\n`
                output += `Mod: ${trip["Destination"]["name"]}\n`
                output += `${trip["Notes"]["text"].split(";")[0]}\n`
                if (trip.rtTime) {
                    output += `Kl: <strike>${trip["Origin"]["time"]}</strike>\n`
                    output += `Kl: ${trip["Origin"]["rtTime"]}\n`
                }
                else {
                    output += `Kl: ${trip["Origin"]["time"]}\n`
                }
                if (trip["Destination"]["rtTime"]) {
                    output += `Ankomst: <strike>${trip["Destination"]["time"]}</strike>\n`
                    output += `Ankomst: ${trip["Destination"]["rtTime"]}\n`
                }
                else {
                    output += `Ankomst: ${trip["Destination"]["time"]}\n`
                }
            }
        });
    }
    return output;
}


Module.register("RejseplanenModule",{
	// Default module config.
	defaults: {
		text: jsonData,
        url: "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9783200&originCoordY=56082440&originCoordName=Hjem&destCoordX=9550145&destCoordY=56166726&destCoordName=College360&useBus=0&format=json"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
        wrapper.innerHTML = parseJSON(getJSON(this.config.url), true);
		return wrapper;
	}
});
