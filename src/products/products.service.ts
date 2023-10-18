import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepo: Repository<Product>,
    ) {}

    async findAll(): Promise<Product[]> {
        return this.productsRepo.find();
    }

    async findOne(id: number): Promise<Product> {
        return await this.productsRepo.findOne({ where: { id } });
    }

    //Create a new product
    async create(product: Product): Promise<Product> {
        const newProduct = this.productsRepo.create(product);
        return await this.productsRepo.save(newProduct);
    }

    //Update a product
    async update(id: number, product: Product): Promise<Product> {
        await this.productsRepo.update(id,product);
        return await this.productsRepo.findOneOrFail({ where : { id } });
    }

    //Delete a product
    async delete(id:number){
        await this.productsRepo.delete(id);
    }
}
