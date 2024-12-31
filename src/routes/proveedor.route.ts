import { Router, } from "express";
import { actualizarProveedor, darBajaProveedor, insertarProveedor, listarProveedor, obtenerProveedor } from "../controllers/proveedor.controller";

const router: Router = Router();

router.post('/',insertarProveedor);
router.get('/',listarProveedor);
router.get('/:idProveedor',obtenerProveedor);
router.put('/:idProveedor',actualizarProveedor);
router.delete('/:idProveedor',darBajaProveedor);

export default router;