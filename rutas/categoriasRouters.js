import express from 'express';
import CategoriaController from '../controller/CategoriaController.js';
import { validarCategoria } from '../middlewares/validarCategoria.js';


const router = express.Router();
router.get('/', (CategoriaController.getAllCategorias));
router.post('/', validarCategoria, CategoriaController.postcategoria);
router.put('/:id', CategoriaController.actulizarCategoria);
router.patch('/:id', CategoriaController.actualizarparcialCategoria);
    
  
  router.post('/', (req, res) => {
      console.log(req.body);
      
  })
  
  router.put('/:id', (req, res) => {
  console.log(req.body);
  })

  export default router;