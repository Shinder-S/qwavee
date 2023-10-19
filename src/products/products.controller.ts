import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    //Get all products
    @Get()
    findAll(): Promise<Product[]>{
        return this.productsService.findAll();
    }

    //Get one product
    @Get(':id')
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
    async create(@Body() product: Product): Promise<Product>{
        return await this.productsService.create(product);
    }

    //Update a product
    @Put(':id')
    async update(@Param('id') id: number, @Body() product: Product): Promise<Product>{
        return this.productsService.update(id,product);
    }

    //Delete product
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        const product = await this.productsService.findOne(id);
        if(!product){
            throw new HttpException(`Book with ID ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return this.productsService.delete(id);
    }
}
