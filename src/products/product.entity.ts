import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product' })
export class Product {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    @ApiProperty({ description: 'Enter a name of a new product' })
    name: string;

    @Column()
    @ApiProperty({ description: 'Add a price to new product' })
    price: number;
    
    @Column()
    @ApiProperty({ description: 'This describe what is the product' })
    description: string;

}