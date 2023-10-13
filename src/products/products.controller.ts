import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './Products.service';
import { Product } from './Product.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('Products')
export class ProductsController {
    constructor(private readonly ProductsService:ProductsService) {}

    //Get all Products
    @UseGuards(AuthGuard)
    @Get()
    findAll(): Promise<Product[]>{
        return this.ProductsService.findAll();
    }

    //Get one Product
    @UseGuards(AuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Product>{
        const Product =  await this.ProductsService.findOne(id);
        if(!Product) {
            throw new Error('The Product with ID "${id}" not found');
        } else{
            return Product;
        }
    }

    //Create Product
    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() Product: Product): Promise<Product> {
        return await this.ProductsService.create(Product);
    }

    //Update a Product
    @UseGuards(AuthGuard) 
    @Put(':id')
    async update(@Param('id') id: number, @Body() Product:Product): Promise<Product>{
        return this.ProductsService.update(id, Product);
    }

    //Delete Product
    @UseGuards(AuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        const Product = await  this.ProductsService.findOne(id);
        if(!Product){
            throw new Error('Product not found');
        }
        return this.ProductsService.delete(id);
    }
}
