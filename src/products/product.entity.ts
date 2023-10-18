import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product' })
export class Product {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;
    
    @Column()
    description: string;

}