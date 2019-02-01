require('dotenv').config()
const s3 = require('s3') 
const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION
  },
})
const uploader = client.uploadFile({
  localFile: "./test/logo.png",
  s3Params: {
    Bucket: process.env.AWS_DEFAULT_BUCKET,
    Key: "logo.png",
  },
})
uploader.on('progress', () => {
  console.log("progress", uploader.progressMd5Amount, uploader.progressAmount, uploader.progressTotal)
})
uploader.on('error', (err) => console.error("unable to upload:", err.stack))
uploader.on('end', () => console.log("done uploading"))