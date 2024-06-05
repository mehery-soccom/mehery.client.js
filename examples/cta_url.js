import client from './../index.js';


async function location_request(){
	await client.send({
	  "channelId": "wacfb:917738347262",
	  "to": {
	    "phone": "918587874877"
	  },
	  "type": "text",
	  "text": {
	    "body": "Visit Our Website"
	  },
	  "options": {
	    "buttons": [
	      {
	      	"type" : "URL",
	      	"label" : "Visit",
	        "url": "https://www.mehery.com"
	      }
	    ]
	  }
	})
}

export default location_request;

