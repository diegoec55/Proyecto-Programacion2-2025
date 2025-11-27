const path = require("path");
const multer = require("multer");
const {cloudinaryStorage, CloudinaryStorage} = require("multer-storage-cloudinary")
const cloudinary = require("../config/cloudinary")

//Determinar la carpeta segun la ruta
const getFolder = (req) => {
    if(req.baseUrl.includes("productos")) {
        return 'programacion2/productos'
    }else if (req.baseUrl.includes("usuarios")) {
        return 'programacion2/usuarios'
    }else {
        return 'programacion2/otros'
    }
}

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
        const extension = path.extname(file.originalname).substring(1)
        return {
            folder: getFolder(req),
            format: extension,
            allowed_formats: ["jpg", "png", "jpeg", "gif", "webp"],
            pulbic_id: `${file.fieldname}-${Date.now()}`,
            resource_type: "image"
        }
    }
})

const upload = multer({
    storage,
    limits: {fileSize: 5 * 1024 * 1024}
})

// const storage = multer.diskStorage({
//     destination: ( req, file , cb ) => {
//         if(file.fieldname == 'imagen_usuario'){
//             cb( null,  path.join(__dirname, "../public/images/usuarios"))
//         } else if(file.fieldname == 'imagenes_producto'){
//             cb( null,  path.join(__dirname, "../public/images/productos"))
//         } else {
//             cb( null,  path.join(__dirname, "../public/images"))
//         }
//     }, 
//     filename: (req, file, cb) => {
//         const timestamp = Date.now();
//         const extension = path.extname(file.originalname);
//         const newFileName = `img-${timestamp}-${extension}` 
//         cb(null, newFileName)
//     }
// });
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 5 * 1024 * 1024,
//         files: 5
//     },
//     fileFilter: ( req, file, cb ) => {
//         if(file.mimetype.startsWith('image/')){
//             cb(null, true)
//         } else {
//             cb(new Error('Solo se permiten imagenes'), false);
//         }
//     }
// })

module.exports = upload;