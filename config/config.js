/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "::", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.1/120", "192.168.1.1/24"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "da",
	locale: "da-DK",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar",
			classes: 'always',
		},
		{
			module: "clock",
			position: "top_left",
			classes: 'always',
		},
		/*{
			module: "calendar",
			header: "Kalender",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/gustavsoendergaardnybro%40gmail.com/private-fa8197142c8b26e840b1569c78a34dc6/basic.ics"					}
				]
			}
		},*/
		{
			module: "calendar",
			colored: true,
			coloredSymbolOnly: true,
			header: "Kalender",
			position: "top_left",
			classes: 'gustav',
			config: {
				calendars: [
					{
						color: '#0088FF',
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/ql1a1vhqpgjld6gn9ffgg31lio%40group.calendar.google.com/private-65db6b4932e93d39416af137f0e99a6d/basic.ics",

					},
					{
						color: '#0088FF',
						symbol: "calendar",
						url: "https://calendar.google.com/calendar/ical/daniel.nettelfield%40gmail.com/private-2a29846d06bbd973b1c9ec42488c0b09/basic.ics",

					}
				]
			}
		},
				{
			module: "weather",
			position: "top_right",
			classes: 'always',
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Silkeborg",
				locationID: "2614030", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "4390714aebe45187c1c83b3c5b23617d"
			}
		},
		{
			module: "weather",
			position: "top_right",
			classes: 'always',
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Silkeborg",
				locationID: "2614030", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "4390714aebe45187c1c83b3c5b23617d"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_center",
			classes: 'gustav',
			config: {
				feeds: [
					{
						title: "Dr.dk",
						url: "https://www.dr.dk/nyheder/service/feeds/allenyheder"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
		  	module: "MMM-NowPlayingOnSpotify",
		  	position: "top_right",
			classes: 'gustav',
		  	config: {
				showCoverArt: false,
				clientID: "64c94fd8664d4ca684734ce35c867dd1",
				clientSecret: "a95d40dd692740f98bacd4c40ef37c59",
				accessToken: "BQAPX-C03vYmqh1T5fGewN8vWZU5bZ_hXm5Zp7P3B3uTndZaxueoFl5HcS-6y5bp7cbNfU2DMzOkEvVX_sM20p7GjpZDueIW0TMe8Vz241-nGKtZucsKn2HIEWzuA6k6o9YW7B14RO85hK1NJgo",
				refreshToken: "AQDFRC6Vz-PUGxOhGsXGIkDFzeyWohjuO1QtfM_oPUZGppCvSEhKiovNRck0Xl6sn0KGimccfLb_SEi7_9svUw2vHdGniS57A0J81x3i-LMBpIq5cpECaVx4hu688EIlPZ0"
		  	}
		},
		{
    		module: 'MMM-Remote-Control',
    		config: {
        		apiKey: 'string'
    		}
		},
		{
            module: 'RejseplanenModule',
			position: "bottom_left",
            config: {

            }
        },
		{
			module: 'MMM-Face-Reco-DNN',
			config: {
			  // Logout 15 seconds after user was not detected any more
			  // If they are detected within this period, the delay will start again
			  logoutDelay: 30000,
			  // How often the recognition starts in milliseconds
			  // With a Raspberry Pi 3+ it works well every 2 seconds
			  checkInterval: 2000,
			  // Module set used for when there is no face detected ie no one is in front of the camera
			  noFaceClass: 'noface',
			  // Module set used for when there is an unknown/unrecognised face detected
			  unknownClass: 'unknown',
			  // Module set used for when there is a known/recognised face detected
			  knownClass: 'known',
			  // Module set used for strangers and if no user is detected
			  defaultClass: 'default',
			  // Set of modules which should be shown for any user ie when there is any face detected
			  everyoneClass: 'everyone',
			  // Set of modules that are always shown - show if there is a face or no face detected
			  alwaysClass: 'always',
			  // XML to recognize with haarcascade
			  cascade: 'modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml',
			  // Pre-encoded pickle with the faces
			  encodings: 'modules/MMM-Face-Reco-DNN/tools/encodings.pickle',
			  // Use Raspberry Pi camera or another type
			  // 1 = RasPi camera, 0 = other camera
			  usePiCamera: 1,
			  // If using another type of camera, you can choose
			  // i.e. 0 = /dev/video0 or 'http://link.to/live'
			  source: 0,
			  // Rotate camera
			  rotateCamera: 0,
			  // Method of facial recognition
			  // dnn = deep neural network, haar = haarcascade
			  method: 'dnn',
			  // Which face detection model to use
			  // "hog" is less accurate but faster on CPUs
			  // "cnn" is a more accurate deep-learning model which is GPU/CUDA accelerated
			  detectionMethod: 'hog',
			  // How long in milliseconds modules take to hide and show
			  animationSpeed: 0,
			  // Path to Python to run the face recognition
			  // null or '' means default path
			  pythonPath: null,
			  // Should a welcome message be shown using the MagicMirror alerts module?
			  welcomeMessage: true,
			  // Dictionary for person name mapping in welcome message
			  // Allows for displaying name with complex character sets in welcome message e.g. jerome => Jérôme, hideyuki => 英之
			  usernameDisplayMapping: null,
			  // Capture new pictures of recognized people, if unknown we save it in folder "unknown"
			  // So you can extend your dataset and retrain it afterwards for better recognitions
			  extendDataset: false,
			  // If extendDataset is true, you need to set the full path of the dataset
			  dataset: 'modules/MMM-Face-Reco-DNN/dataset/',
			  // How much distance between faces to consider it a match. Lower is more strict.
			  tolerance: 0.6,
			  // allow multiple concurrent user logins, 0=no, any other number is the maximum number of concurrent logins
			  multiUser: 0,
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
