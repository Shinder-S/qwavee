import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ProductDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    price: number;

    @IsOptional()
    @IsString()
    category: string;

    @IsOptional()
    @IsInt()
    stock: number;
}