import fetch from 'node-fetch';
import config from '@bootloader/config';
import prompt from 'prompt';

const examples = [
  'location_request'
];

for(var i in examples){
  console.log(i,examples[i]);
}

async function init(message){
  let props = await config.manifest({
    group : "mehery",
    props : ['mry.domain','mry.api.key']
    //props : []
  });
  prompt.start()

  prompt.get("SCRIPT", function (err, result){
    let index = result.SCRIPT;
    if(index < 0 || index> examples.length){
      throw "Invalid Option"
    }
    import("./examples/"+examples[index]+".js").then((example)=>{
        example.default();
        //main();
      });
  })

}
await init()