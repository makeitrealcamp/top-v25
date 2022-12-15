require('dotenv').config()

const cloudinary = require('cloudinary').v2

// cloudinary.config({
//   cloud_name: '',
//   api_key: '',
//   api_secret: ''
// });

async function uploadImage(image) {
  try {
    const result  = await cloudinary.uploader.upload(image, {
      folder: 'dataFiles',
      use_filename: true,
      unique_filename: false,
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

module.exports = uploadImage
