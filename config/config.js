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
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
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
		/*{
			module: "compliments",
			position: "lower_third"
		},*/
		{
			module: "weather",
			position: "top_right",
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
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
