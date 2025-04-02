import conection from "../utils/db.js";

class Producto {
  constructor(nombre, descripcion, precio, categoria_id) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantegoria_id = categoria_id;
    
  }

  async getAllproductos() {
    try {
      const [rows] = await conection.query("SELECT * FROM productos");
      return rows;
      
    } catch (error) {
      throw new Error("Error al obtener los productos");
    }
  }

  async postproductos() {
    try {
      const [result] = await conection.query("INSERT INTO productos(nombre,descripcion,precio,categoria_id) values (?,?,?,?)", [this.nombre, this.descripcion, this.precio, this.cantegoria_id]);
      return {
        id: result.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
        categoria_id: this.categoria_id,
      };

    } catch (error) {
      throw new Error("Error al crear el producto");
    }
  }
}
export default Producto;