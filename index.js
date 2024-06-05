import fetch from 'node-fetch';
import config from '@bootloader/config';

export default {
  async send(message){
    let domain = config.get("mry.domain");
    let apikey = config.get("mry.api.key");
    console.log("domain",domain);
    //console.log("apikey",apikey);
    console.log(message)
        return fetch('https://'+domain+"/xms/api/v1/message/send", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            headers: {
             "Content-Type" : "application/json",
              "x-api-key" : apikey
            },
            body: JSON.stringify(message), // body data type must match "Content-Type" header
          },{}).catch((e) => {  
            return { text(){return JSON.stringify(e)}};
          }).then(res => res.text())
          .then(function(text){
            try {
              return JSON.parse(text);
            } catch(e) {
                return {
                  message : e.message,
                  text : text
                }
            }
          }).catch((e) => {  
            return e;
          }).then(function(json){
            console.log("WebaWebHook Is",json);
            return json; 
          });
    


  }
};