const fs = require('fs');
const { json } = require('stream/consumers');

class Contenedor {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }

   

    saveObjet = async (object) => {

        let newId;

        let archivoExtraido = this.getAll();

        if (archivoExtraido == []){
            newId = 1
        }else{
            newId = archivoExtraido[archivoExtraido.length-1].id + 1
        }

        object.id = newId;

        archivoExtraido.push(object)
        JSON.stringify(archivoExtraido, null, '\t')
        await fs.promises.writeFile(`./${this.nombreArchivo}.json`,archivoExtraido)

        return newId;
    }

    getById = async (objetId) => {}

    getAll = async () => {
        let archivoExtraido = []

        if(fs.existsSync(`./${this.nombreArchivo}.json`)){
            archivoExtraido = await fs.promises.readFile(`./${this.nombreArchivo}.json`,'utf-8')
            archivoExtraido = JSON.parse(archivoExtraido)
        }

        return archivoExtraido;
    }

    deleteById = () => {}

    deteleAll = () => {}
}

