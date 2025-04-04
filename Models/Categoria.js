import conection from "../utils/db.js";

class Categoria{
    // constructor(nombre, descripcion) {
    //     this.nombre = nombre;
    //     this.descripcion = descripcion;
    // }
    /**
     * 
     * @returns {Array} retorna un array con los registros de la base de datos
     * @throws {Error} lanza un error si no se puede obtener los registros
     * @description metodo para obtener los registros de la base de datos
     */ 
    async getAllcategorias(){
        try{
            const [rows] = await conection.query("SELECT * FROM categorias");
            return rows;

        }catch(error){
            throw new Error("Error al obtener las categorias");
        }

    }
    async postcategorias(nombre, descripcion, id){
        try{
            const [result] = await conection.query("INSERT INTO categorias (nombre,descripcion) values (?,?)", [nombre, descripcion,id]);
            return {
                id: result.id,nombre,descripcion
            };
        } catch(error){
            throw new Error("Error al crear la categoria");
        }
  }

  async update(nombre,descripcion,id) {
    try {
      const [result] = await conection.query("UPDATE categorias set nombre = ? ,descripcion = ? where id = ?", [nombre,descripcion,id]);
      
      if (result.affectedRows === 0) {
        throw new Error("Categoria no encontrada");  
      }
      return { id, nombre, descripcion}
      
    } catch (error) {
      console.log(error.message);
      throw new Error("Error al actualizar la categoria");
    }
  }

  async updateParcial(id, infor) {
    try {
      for (const key in infor) {
      
      const [rows] = await conection.query(`UPDATE categorias set ${key} = ?  where id = ? `,[infor[key],id])
      
      }
      const [respuesta] = await conection.query(`SELECT * FROM categorias where id = ?`, [id])

      return respuesta;
    } catch (error) {
      
    }
  
  }

  async delete(id) {
    try {
      const [validar] = await conection.query("SELECT COUNT(*) AS totalProductos from productos where categoria_id = ?", [id]);
      if (validar[0].totalProductos > 0) {
        return {message: "Laa categoria tiene productos asociados, no se puede eliminar"}
      } else {
        const [result] = await conection.query("DELETE FROM categorias where id = ?", [id]);
        return result;
        
      }
    } catch (error) {
      throw new Error("")
      
    }
  }
}
export default Categoria;
