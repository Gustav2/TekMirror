# TekMirror

To fix no modules being show just run:
```bash
cd vendor
npm install
cd ..
```

To install MMM-NowPlayingOnSpotify:

```bash
cd modules/MMM-NowPlayingOnSpotify
npm install
```

Rejseplanen module started


http://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originCoordX=9512079&originCoordY=56178240&originCoordName=Hjem&destCoordX=9550145&destCoordY=56166726&destCoordName=College360&format=json

Coords always in WSG84 format multiplied by 1.000.000

CoordName is required but not checked by the server

Format specified as JSON, as default is XML (kinda wack)

TODO:

Parse JSON data in JS

Build module and show trip

