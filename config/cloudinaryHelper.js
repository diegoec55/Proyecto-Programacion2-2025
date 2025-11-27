const cloudinary = require("./cloudinary");

// Extraer el public_id de una URL de cloudinary
//https://res.cloudinary.com/dbtntsgvj/image/upload/v1763427224/programacion2/productos/anhhdlkpgnbpgubmt9my.jpg
//retorna: /programacion2/productos/anhhdlkpgnbpgubmt9my.jpg

const getPublicIdFromUrl = (imageUrl) => {
    if(!imageUrl) return null;
    if(imageUrl.includes("cloudinary.com")) {
        try {
            // extraer el public_id de la URL
            const parts = imageUrl.split("/upload/")
            if(parts.length > 1) {
                // necesitamos obtener la parte despues de /upload/v1763427224/
                let publicId = parts[1].split("/").slice(1).join("/")
                publicId = publicId.replace(/\.[^/.]+$/, '')
                return publicId
            }
        } catch (error) {
            console.error("Error extrayendo public_Id: ", error)
            return null;
        }
    }
    // si es una ruta local antigua, retornar null
    return null;
}

const deleteImage = async (imageUrl) => {
    const publicId = getPublicIdFromUrl(imageUrl);
    if (!publicId) {
        console.log("No es una imagen de cloudinary o public_id invalido: ", imageUrl);
        return {
            success: false,
            message: "No es una imagen de cloudinary",
        }
    }
    try {
        const result = await cloudinary.uploader.destroy(publicId)
        console.log("imagen eliminada de cloudinary: ", result);
        return {success: true, result}
    } catch (error) {
        console.error("error eliminando la imagen de cloudinary: ", error)
        return {
            success: false,
            error: error.message,
        }
    }
}

const deleteMultipleImages = async (imageUrls) => {
    const results = [];
    for (const url of imageUrls) {
        const result = await deleteImage(url)
        results.push(result)
    }
    return results
}

module.exports = {
    getPublicIdFromUrl,
    deleteImage,
    deleteMultipleImages
}