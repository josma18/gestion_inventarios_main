import { Request, Response } from "express"
import { BaseResponse } from "../shared/base-response";
import * as productoService from "../services/producto.service";
import { Producto } from "../entities/producto";
import { Message } from "../enums/message";

export const insertarProducto = async (req: Request, res: Response) => {
    try {
        console.log('insertarProducto');
        const producto: Partial<Producto> = req.body;
        const newProducto: Producto = await productoService.insertarProducto(producto);
        res.json(BaseResponse.success(newProducto, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarProductos = async (req: Request, res: Response) => {
    try {
        console.log('listarProductos');
        const productos: Producto[] = await productoService.listarProductos();
        res.json(BaseResponse.success(productos));        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerProducto = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarProducto = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaProducto = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


