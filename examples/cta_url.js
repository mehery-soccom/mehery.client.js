import client from './../index.js';


async function location_request(){
	await client.send({
	  "channelId": "<mry.channelId>",
	  "to": {
	    "phone": "<mry.to.phone>"
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

