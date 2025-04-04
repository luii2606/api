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
      const OBJProducto = new Producto();
      const producto = await OBJProducto.createProducto(nombre, descripcion, precio, categoria_id);
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
   
  }
   static actulizarProducto =async (req, res) => {
      const { id } = req.params
      const { nombre, descripcion,precio, categoria_id } = req.body;
      try {
        const OBJProducto = new Producto();
        const productos = await OBJProducto.update(nombre, descripcion,precio,categoria_id,id);
        res.json(productos);

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
  static actualizarparcialProducto = async (req, res) => {
    const { id } = req.params;
    const infor = req.body;
    {
      try {
        const OBJProducto = new Producto();
        const productos = await OBJProducto.updateParcial(id,infor);
        res.json(productos);

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  static eliminarproducto = async (req, res) => {
    
    try {
        const { id } = req.params;
        const OBJProducto = new Producto();
        const productos = await OBJProducto.delete(id);
        res.json(productos);

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
}
export default ProductosController;