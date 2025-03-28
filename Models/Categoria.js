import conection from "../utils/db.js";

class Categoria{
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    /**
     * 
     * @returns {Array} retorna un array con los registros de la base de datos
     * @throws {Error} lanza un error si no se puede obtener los registros
     * @description metodo para obtener los registros de la base de datos
     */ 
    async getAll(){
        try{
            const [rows] = await conection.query("SELECT * FROM categorias");
            return rows;

        }catch(error){
            throw new Error("Error al obtener las categorias");
        }

    }
    async postcategorias(){
        try{
            const [result] = await conection.query("INSERT INTO categorias (nombre,descripcion) values (?,?)", [this.nombre, this.descripcion]);
            return {
                id: result.id,
                nombre: this.nombre,
                descripcion: this.descripcion,
            };
        } catch(error){
            throw new Error("Error al crear la categoria");
        }
    }
}
export default Categoria;
