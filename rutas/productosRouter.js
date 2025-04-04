import express from 'express';
import ProductosController from '../controller/ProductosController.js';

const router = express.Router();
router.get('/', (ProductosController.getAllproductos));
router.post('/', (ProductosController.postproductos));
router.put('/:id', ProductosController.actulizarProducto);
router.patch('/:id', ProductosController.actualizarparcialProducto);
router.delete('/:id', ProductosController.eliminarproducto);
    
  
  // router.post('/', (req, res) => {
  //     console.log(req.body);
      
// })
    router.put('/:id', (req, res) => {
    console.log(req.body);
  })
  
export default router;