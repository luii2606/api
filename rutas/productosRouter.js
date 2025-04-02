import express from 'express';
import ProductosController from '../controller/ProductosController.js';

const router = express.Router();
router.get('/', (ProductosController.getAllproductos));
router.post('/', (ProductosController.postproductos));
    
  
  // router.post('/', (req, res) => {
  //     console.log(req.body);
      
  // })
  
export default router;