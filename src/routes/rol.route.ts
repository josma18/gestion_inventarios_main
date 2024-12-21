import { Router } from "express";
import { actualizarRol, insertarRol, listarRol, obtenerRol,  darBajaRol } from "../controllers/rol.controller";

const router: Router = Router();

// Rutas para la entidad categorías
router.post('/', insertarRol); // Crear una categoría
router.get('/', listarRol); // Listar todas las categorías
router.get('/:idRol', obtenerRol); // Obtener una categoría por ID
router.put('/:idRol', actualizarRol); // Actualizar una categoría
router.delete('/:idRol', darBajaRol); // Dar de baja una categoría

export default router;