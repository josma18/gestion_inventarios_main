import { Router } from 'express';
import { actualizarProducto, darBajaProducto, insertarProducto, listarProductos, obtenerProducto } from '../controllers/producto.controller';

const router: Router = Router();

router.post('/',insertarProducto);
router.get('/',listarProductos);
router.get('/:idProducto',obtenerProducto);
router.put('/:idProducto',actualizarProducto);
router.delete('/:idProducto',darBajaProducto);

export default router;