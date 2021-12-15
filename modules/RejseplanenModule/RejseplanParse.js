const request = require('request');

let fromRy = "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9783200&originCoordY=56082440&originCoordName=Hjem&destCoordX=9550145&destCoordY=56166726&destCoordName=College360&useBus=0&format=json";
let toRy = "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9550145&originCoordY=56166726&originCoordName=College360&destCoordX=9783200&destCoordY=56082440&destCoordName=Hjem&useBus=0&format=json";

let fromSpice = "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9512079&originCoordY=56178240&originCoordName=Hjem&destCoordX=9550145&destCoordY=56166726&destCoordName=College360&useBus=1&format=json"
let toSpice =  "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9550145&originCoordY=56166726&originCoordName=College360&destCoordX=9512079&destCoordY=56178240&destCoordName=Hjem&useBus=0&format=json"

let options = {json: true};

function rejseplan(url, trainOnly){
    request(url, options, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
        if (!error && res.statusCode == 200 && trainOnly) {
            body["TripList"]["Trip"][0]["Leg"].forEach(trip => {
                if (trip.type == "REG"){
                    console.log(trip["Origin"]);
                    console.log(trip["Destination"]);
                }
            });
            body["TripList"]["Trip"][1]["Leg"].forEach(trip => {
                if (trip.type == "REG"){
                    console.log(trip["Origin"]);
                    console.log(trip["Destination"]);
                }
            });
        }
        if (!error && res.statusCode == 200 && !trainOnly){
            body["TripList"]["Trip"][0]["Leg"].forEach(trip => {
                if (trip.type == "BUS"){
                    console.log(trip["Origin"]);
                    console.log(trip["Destination"]);
                }
            });
            body["TripList"]["Trip"][1]["Leg"].forEach(trip => {
                if (trip.type == "BUS"){
                    console.log(trip["Origin"]);
                    console.log(trip["Destination"]);
                }
            });

        }
    });
}

rejseplan(toRy, true);