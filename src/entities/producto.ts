import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria";
import { Proveedor } from "./proveedor";


@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn({name: 'id_producto'})
    idProducto: number;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'precio'})
    precio: number;

    @ManyToOne(()=>Proveedor, (proveedor)=>proveedor.productos)
    @JoinColumn({name: 'id_proveedor'})
    proveedor: Proveedor;

    @ManyToOne(()=>Categoria, (categoria)=>categoria.productos)
    @JoinColumn({name: 'id_categoria'})
    categoria: Categoria;

    @Column({name: 'imagen_url'})
    imagenUrl: string;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;
    
    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;
}