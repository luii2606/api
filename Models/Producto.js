import conection from "../utils/db.js";

class Producto {
  // constructor(nombre, descripcion, precio, categoria_id) {
  //   this.nombre = nombre;
  //   this.descripcion = descripcion;
  //   this.precio = precio;
  //   this.cantegoria_id = categoria_id;
    
  // }

  async getAllproductos() {
    try {
      const [rows] = await conection.query("SELECT * FROM productos");
      return rows;
      
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  }

  async createProducto(nombre, descripcion,precio, categoria_id) {
    try {
      const [result] = await conection.query("INSERT INTO productos(nombre,descripcion,precio,categoria_id) values (?,?,?,?)", [nombre, descripcion, precio, categoria_id]);
      return { 
        id: result.insertId, nombre, descripcion, precio, categoria_id
      };

    } catch (error) {
      throw new Error("Error al crear el producto");
    }
  }

  async update(nombre, descripcion, precio, categoria_id,id) {
        try {
      const [result] = await conection.query("UPDATE productos set nombre = ? ,descripcion = ? , precio = ?, categoria_id = ? where id = ?", [nombre,descripcion,precio,categoria_id,id]);
      
      if (result.affectedRows === 0) {
        throw new Error("Producto no encontrada");  
      }
      return { id, nombre, descripcion, precio, categoria_id}
      
    } catch (error) {
      console.log(error.message);
      throw new Error("Error al actualizar el producto");
    }
  }

    async updateParcial(id, infor) {
    try {
      for (const key in infor) {
      
      const [rows] = await conection.query(`UPDATE productos set ${key} = ?  where id = ? `,[infor[key],id])
      
      }
      const [respuesta] = await conection.query(`SELECT * FROM productos where id = ?`, [id])

      return respuesta;
    } catch (error) {
      
    }
  
  }
}
export default Producto;