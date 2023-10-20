import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class ProductDto{
    @IsNotEmpty()
    @ApiProperty({ description: 'Product name' })
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @ApiProperty({ description: 'Product price' })
    @IsPositive()
    price: number;

    @IsNotEmpty()
    @ApiProperty({ description: 'Product description' })
    @IsString()
    description: string;

}