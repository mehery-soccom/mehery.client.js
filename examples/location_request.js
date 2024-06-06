import client from './../index.js';


async function location_request(){
	await client.send({
	  "channelId": "<mry.channelId>",
	  "to": {
	    "phone": "<mry.to.phone>"
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

