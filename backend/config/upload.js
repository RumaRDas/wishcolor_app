const multer = require('multer');
const path  = require('path');

module.exports ={
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..","..", "files")
    })
}