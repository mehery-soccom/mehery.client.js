import client from './../index.js';


async function location_request(){
	await client.send({
	  "channelId": "wacfb:917738347262",
	  "to": {
	    "phone": "918587874877"
	  },
	  "type": "text",
	  "text": {
	    "body": "Share your location"
	  },
	  "options": {
	    "buttons": [
	      {
	        "type": "LOCATION_REQUEST"
	      }
	    ]
	  }
	})
}

export default location_request;

