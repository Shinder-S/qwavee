import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private ProductsRepository: Repository<Product>,
    ) {}

    async findAll(): Promise<Product[]> {
        return await this.ProductsRepository.find();
    }

    async findOne (id: number): Promise<Product> {
        return  await this.ProductsRepository.findOne({where : { id } });
    }

    //Create a new Product
    async create(Product: Product): Promise<Product> {
        const newProduct = this.ProductsRepository.create(Product);
        return await this.ProductsRepository.save(newProduct);
    }

    //Update a Product
    async update(id: number, Product: Product): Promise<Product> {
        await this.ProductsRepository.update(id, Product);
        return await this.ProductsRepository.findOneOrFail({where : { id } });
    }

    //Delete a Product
    async delete(id: number): Promise<void> {
        await this.ProductsRepository.delete(id);
    }
}