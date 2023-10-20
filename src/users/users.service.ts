import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
    ) {}

    create(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepo.save(createUserDto);
    }

    findOneByEmail(email: string) {
        return this.userRepo.findOneBy({ email });
    }

    findByEmailWithPassword(email: string) {
        return this.userRepo.findOne({ 
            where: { email }, 
            select: ['id', 'name', 'email', 'password'] 
        });
    }

    findAll() {
        return this.userRepo.find();
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
        await this.userRepo.update(id, updateUserDto);
        return this.userRepo.findOneOrFail({ where: { id } });
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}