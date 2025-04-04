import Categoria from "../Models/Categoria.js";
import conection from "../utils/db.js";

class CategoriaController{
    static getAllCategorias = async (req, res) =>{
        const OBJCategoria = new Categoria();
        const categorias = await OBJCategoria.getAllcategorias();
        res.json(categorias);
        // res.json("Listado de categorias");
       
    }
    static postcategoria = async (req, res) => {
        try {
            const { nombre, descripcion } = req.body;
            const OBJCategoria = new Categoria();
            const categoria = await OBJCategoria.postcategorias(nombre, descripcion);
            res.status(201).json(categoria);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
  static actulizarCategoria =async (req, res) => {
      const { id } = req.params
      const { nombre, descripcion } = req.body;
      try {
        const OBJCategoria = new Categoria();
        const categorias = await OBJCategoria.update(nombre, descripcion,id);
        res.json(categorias);

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
  static actualizarparcialCategoria = async (req, res) => {
    const { id } = req.params;
    const infor = req.body;
    
    
    {
      try {
        const OBJCategoria = new Categoria();
        const categorias = await OBJCategoria.updateParcial(id,infor);
        res.json(categorias);

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
    static eliminarcategoria = async (req, res) => {
    
    try {
        const { id } = req.params;
        const OBJCategoria = new Categoria();
        const categorias = await OBJCategoria.delete(id);
        res.json(categorias);

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
}
export default CategoriaController;