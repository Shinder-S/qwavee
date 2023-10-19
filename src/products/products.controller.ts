import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    //Get all products
    @Get()
    @ApiResponse({ status: 201, description: 'This are our products in stock' })
    findAll(): Promise<Product[]>{
        return this.productsService.findAll();
    }

    //Get one product
    @Get(':id')
    @ApiResponse({ status: 201, description: 'Here is the requested product'})
    async findOne(@Param('id') id: number): Promise<Product>{
        const product = await this.productsService.findOne(id);
        if(!product) {
            throw new Error(`Product with ID ${id} not found`);
        } else{
            return product;
        }
    }

    //Create a new product
    @Post()
    @ApiResponse({ status: 201, description: 'create a new product' })
    async create(@Body() product: Product): Promise<Product>{
        return await this.productsService.create(product);
    }

    //Update a product
    @Put(':id')
    @ApiResponse({ status: 201, description: 'update an existing product' })
    async update(@Param('id') id: number, @Body() product: Product): Promise<Product>{
        return this.productsService.update(id,product);
    }

    //Delete product
    @Delete(':id')
    @ApiResponse({ status: 201, description: 'delete a product' })
    async delete(@Param('id') id: number): Promise<void> {
        const product = await this.productsService.findOne(id);
        if(!product){
            throw new HttpException(`Book with ID ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return this.productsService.delete(id);
    }
}
