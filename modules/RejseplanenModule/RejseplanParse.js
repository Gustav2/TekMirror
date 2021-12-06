const request = require('request');

// let url = "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9783200&originCoordY=56082440&originCoordName=Hjem&destCoordX=9550145&destCoordY=56166726&destCoordName=College360&useBus=0&format=json";
let url = "https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9550145&originCoordY=56166726&originCoordName=College360&destCoordX=9783200&destCoordY=56082440&destCoordName=Hjem&useBus=0&format=json";


let options = {json: true};



request(url, options, (error, res, body) => {
    if (error) {
        return  console.log(error)
    };

    if (!error && res.statusCode == 200) {
        console.log(body["TripList"]["Trip"][0]["Leg"])
        body["TripList"]["Trip"][0]["Leg"].forEach(trip => {
            if (trip.type == "REG"){
                console.log(trip["Destination"]);
            }
        });
    };
});