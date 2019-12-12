
const fs = require("fs");
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'expanded-torus-258100',
  keyFilename: './My First Project-9bf91f53bfbb.json'
})


storage.bucket("kevin-portfolio").upload("./bruce.jpg", {
    gzip: true,
    metadata: {
        cacheControl: 'public, max-age=31536000',
    },
}).then(()=>{
    console.log("file uploaded")
});