const fs = require('fs');

const uploadImage = require('./upload.service');

async function uploadSingleHandler(req, res){
  const { path, size } = req.file

  const maxSize = 1024 * 1024 * 2 // 5MB

  if (size > maxSize) {
    fs.unlinkSync(path)
    return res.status(400).json({ message: 'File is too large' })
  }

  try {
    const result = await uploadImage(path)

    res.json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  } finally {
    fs.unlinkSync(path)
  }
}

async function uploadMultipleHandler(req, res){
  const files = req.files

  const results = []
  for (const file of files) {
    const { path } = file
    try {
      const result = await uploadImage(path)
      results.push(result)
    } catch (error) {
      return res.status(500).json(error.message)
    } finally {
      fs.unlinkSync(path)
    }
  }

  return res.status(200).json(results)

}

module.exports = {
  uploadSingleHandler,
  uploadMultipleHandler,
}
