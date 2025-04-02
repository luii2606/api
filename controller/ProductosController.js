import Producto from "../Models/Producto.js";

class ProductosController{
  static getAllproductos = async (req, res) => {
    const OBJProducto = new Producto();
    const productos = await OBJProducto.getAllproductos();
    res.json(productos);
  }
  static postproductos = async (req, res) => {
    try {
      const { nombre, descripcion, precio, categoria_id } = req.body;
      const OBJProducto = new Producto(nombre, descripcion, precio, categoria_id);
      const producto = await OBJProducto.postproductos();
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
   
  }
}
export default ProductosController;