let fromRy = "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9783200&originCoordY=56082440&originCoordName=Hjem&destCoordX=9550145&destCoordY=56166726&destCoordName=College360&useBus=0&format=json";
let toRy = "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9550145&originCoordY=56166726&originCoordName=College360&destCoordX=9783200&destCoordY=56082440&destCoordName=Hjem&useBus=0&format=json";

let fromSpice = "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9512079&originCoordY=56178240&originCoordName=Hjem&destCoordX=9550145&destCoordY=56166726&destCoordName=College360&useBus=1&format=json"
let toSpice = "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9550145&originCoordY=56166726&originCoordName=College360&destCoordX=9512079&destCoordY=56178240&destCoordName=Hjem&useBus=0&format=json"

function rejseplan(url, trainOnly) {
    const request = require('request');
    let options = { json: true };
    var req = request(url, options, (error, res, body) => {
        if (error) {
            return console.log(error)
        };
        if (!error && res.statusCode == 200 && trainOnly) {
            console.log(body["TripList"]["Trip"][0]["Leg"])
            body["TripList"]["Trip"][0]["Leg"].forEach(trip => {
                if (trip.type == "REG") {
                    output = `Tog fra: ${trip["Origin"]["name"]}\n`
                    output += `Til: ${trip["Destination"]["name"]}\n`
                    output += `${trip["Notes"]["text"].split(";")[0]}\n`
                    output += `Spor: ${trip["Origin"]["rtTrack"]}\n`
                    if (trip.rtTime) {
                        output += `Kl: <strike>${trip["Origin"]["time"]}</strike>\n`
                        output += `Kl: ${trip["Origin"]["rtTime"]}`
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
        if (!error && res.statusCode == 200 && !trainOnly) {
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
        console.log(output);
        return output;
    });
}

var out = rejseplan(toRy, true);
console.log(out);