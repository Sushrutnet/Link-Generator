
import File from "../models/file.js"

export const uploadImage = async (request, responce) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    }

    try {
        const file = await File.create(fileObj)
        responce.status(200).json({ path: `http://locaalhost:8000/file/${file._id}` })
    } catch (error) {
        console.error(error.massage);
        responce.status((500).json({ error: error.massage }))
    }
}


export const downloadImage = async (request, responce) => {
    try {
        const file = await File.findById(request.params.fileId)

        file.downloadImage++;

        await file.save();

        responce.download(file.path, file.name);


    } catch (error) {
        console.log(error.massage);
        return responce.status(500).json({error: error.massage});

    }
}